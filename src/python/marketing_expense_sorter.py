import os
import shutil
import fitz  # PyMuPDF
import pandas as pd
import json
from pathlib import Path
from datetime import datetime
import google.generativeai as genai
from tqdm import tqdm
from dotenv import load_dotenv
import re

# Load configuration and API key from .env file
load_dotenv()
API_KEY = os.environ.get("GOOGLE_API_KEY")

ROOT_DIR = Path('.')
FOLDERS = {
    "tosort": ROOT_DIR / "tosort",
    "marketing": ROOT_DIR / "marketing_expenses",
    "non_marketing": ROOT_DIR / "non_marketing_expenses",
    "unsure": ROOT_DIR / "unsure",
    "failed": ROOT_DIR / "could_not_process"
}
MASTER_LOG = ROOT_DIR / "expenses_log.xlsx"

genai.configure(api_key=API_KEY)
model = genai.GenerativeModel('gemini-1.5-flash')

# Ensure all working directories exist
for folder in FOLDERS.values():
    folder.mkdir(exist_ok=True)

# Load master log to enable deduplication (skip already processed files)
if MASTER_LOG.exists() and MASTER_LOG.stat().st_size > 100:
    try:
        master_df = pd.read_excel(MASTER_LOG)
        processed_files = set(master_df['document_name'].astype(str))
    except Exception as e:
        print(f"[WARN] Could not read master log. Resetting. Reason: {e}")
        master_df = pd.DataFrame()
        processed_files = set()
else:
    master_df = pd.DataFrame()
    processed_files = set()

def extract_text_from_pdf(file_path):
    """Extracts raw text from all pages of a PDF using PyMuPDF (fitz)."""
    try:
        with fitz.open(file_path) as doc:
            return "\n".join(page.get_text() for page in doc) or None
    except Exception as e:
        print(f"Error reading {file_path.name}: {e}")
        return None

def clean_response_text(text):
    """Cleans markdown code blocks (like ```json) from the LLM's response."""
    text = text.strip()
    if text.startswith("```json"):
        text = re.sub(r"^```json\s*", "", text)
    if text.endswith("```"):
        text = re.sub(r"\s*```$", "", text)
    return text.strip()

def extract_amount_and_currency(amount_str):
    """Parses currency symbols/codes and normalizes the numeric amount."""
    if not amount_str or not isinstance(amount_str, str):
        return "", ""
    s = amount_str.strip()
    currency_patterns = {
        "€": "EUR", "EUR": "EUR", "$": "USD", "USD": "USD",
        "£": "GBP", "GBP": "GBP", "CHF": "CHF", "¥": "JPY",
        "JPY": "JPY", "CAD": "CAD", "AUD": "AUD",
        "SEK": "SEK", "NOK": "NOK", "DKK": "DKK"
    }
    currency = "UNK"
    for symbol, code in currency_patterns.items():
        if symbol in s:
            currency = code
            s = s.replace(symbol, "")
    s = s.replace(" ", "").replace(",", ".").replace("'", "")
    try:
        value = float(s)
        return f"{value:.2f}", currency
    except ValueError:
        return amount_str.strip(), currency

def call_gemini_api(text, filename):
    """Sends invoice text to Gemini with a strict JSON extraction and categorization prompt."""
    prompt = f"""You are a strict invoice data extractor. Always respond with valid JSON only. The invoice may be in Dutch or English.

TASKS:
1. Categorize the invoice as "marketing" or "non-marketing".
2. Return a confidence score from 0 to 100 for your categorization. Use high confidence (85–100) only when the invoice clearly fits the category based on explicit terms. Use lower scores if the content is vague, ambiguous, or mixed. Never guess with high confidence.
3. Extract the following fields:
    - Our document name: {filename}
    - Their invoice number
    - Invoice date
    - Total amount including VAT (include currency symbol or code)
    - VAT % (if specified on invoice)
    - Vendor
    - A one-line description of the invoice

Respond strictly in JSON format like this:
{{
  "category": "marketing",
  "confidence": 85,
  "invoice_number": "...",
  "invoice_date": "...",
  "total_amount_incl_vat": "...",
  "vatpercentage": "...",
  "vendor": "...",
  "description": "..."
}}

Here is the invoice text:
{text}
"""
    try:
        response = model.generate_content(prompt)
        raw = getattr(response, "text", "")
        if not raw:
            print(f"[ERROR] Gemini response for {filename} was empty or malformed.")
            return None
        return json.loads(clean_response_text(raw))
    except json.JSONDecodeError as e:
        print(f"[ERROR] Invalid JSON in response for {filename}: {e}")
        print("[DEBUG] Raw response:", raw)
        return None
    except Exception as e:
        print(f"[ERROR] Gemini call failed for {filename}: {e}")
        return None

def save_to_excel(file_path, row_data, columns):
    """Appends processed row data to an Excel log file safely."""
    new_row = pd.DataFrame([row_data], columns=columns)
    if not file_path.exists() or file_path.stat().st_size < 100:
        df = new_row
    else:
        try:
            df = pd.read_excel(file_path)
            df = pd.concat([df, new_row], ignore_index=True)
        except Exception as e:
            print(f"Warning: Couldn't read {file_path.name}, recreating it. Reason: {e}")
            df = new_row
    df.to_excel(file_path, index=False)

# Define columns structure for the Excel logs
columns = [
    "timestamp", "document_name", "invoice_number", "invoice_date",
    "total_amount_incl_vat", "currency", "vatpercentage", "vendor",
    "description", "category", "confidence"
]

# Main processing loop over all PDFs in the 'tosort' folder
for file in tqdm(FOLDERS["tosort"].glob("*.pdf"), desc="Processing invoices"):
    filename = file.name
    
    # Skip files that have already been processed and logged
    if filename in processed_files:
        continue

    text = extract_text_from_pdf(file)
    timestamp = datetime.now().isoformat()

    # Handle cases where text couldn't be extracted
    if not text:
        category = "could_not_process"
        dest_folder = FOLDERS["failed"]
        row_data = [timestamp, filename, "", "", "", "", "", "", "", category, ""]
    else:
        result = call_gemini_api(text, filename)
        if not result:
            category = "could_not_process"
            dest_folder = FOLDERS["failed"]
            row_data = [timestamp, filename, "", "", "", "", "", "", "", category, ""]
        else:
            category = result["category"]
            confidence = result.get("confidence", 0)
            amount_raw = result.get("total_amount_incl_vat", "")
            amount_cleaned, currency = extract_amount_and_currency(amount_raw)

            row_data = [
                timestamp, filename,
                result.get("invoice_number", ""),
                result.get("invoice_date", ""),
                amount_cleaned, currency,
                result.get("vatpercentage", ""),
                result.get("vendor", ""),
                result.get("description", ""),
                category, confidence
            ]

            # Route files based on confidence thresholds and categories
            if confidence < 85:
                category = "unsure"
                dest_folder = FOLDERS["unsure"]
            elif category == "marketing":
                dest_folder = FOLDERS["marketing"]
            else:
                dest_folder = FOLDERS["non_marketing"]

    # Copy file to its designated folder and log the data
    shutil.copy(file, dest_folder / filename)
    save_to_excel(dest_folder / f"expenses_{category}.xlsx", row_data, columns)
    save_to_excel(MASTER_LOG, row_data, columns)