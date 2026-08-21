import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { CodeBlock } from "@/components/portfolio/CodeBlock";
import { ProjectCarousel } from "@/components/portfolio/ProjectCarousel";
import automationImg from "@/assets/chatbot/chatbot-1.png";
import agentsImg from "@/assets/chatbot/chatbot-2.png";
// Real scripts from the repo's /src/python folder — displayed verbatim in the code blocks.
import marketingSorterCode from "../python/marketing_expense_sorter.py?raw";
import migrationCheckerCode from "../python/migration_page_checker.py?raw";
import migrationPatcherCode from "../python/migration_page_patcher.py?raw";
// Real n8n workflow export from the repo's /src/n8n folder.
import odooChatbotWorkflowCode from "../n8n/odoo_chatbot_workflow.json?raw";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Huub Ahsmann — AI Automation & IT Engineering" },
      {
        name: "description",
        content:
          "Portfolio of Huub Ahsmann: AI automation engineer building retrieval systems, agent workflows and document pipelines that quietly remove manual work.",
      },
      { property: "og:title", content: "Huub Ahsmann — AI Automation & IT Engineering" },
      {
        property: "og:description",
        content:
          "Selected work in AI automation: retrieval systems, agent workflows and document pipelines.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Rule({
  label,
  align = "left",
  className = "",
}: {
  label: string;
  align?: "left" | "right";
  className?: string;
}) {
  return (
    <div
      className={
        align === "right"
          ? `mt-24 border-t border-border pt-4 text-right ${className}`
          : `mt-24 border-t border-border pt-4 ${className}`
      }
    >
      <span className="label-eyebrow">{label}</span>
    </div>
  );
}

function Project({
  title,
  client,
  year,
  stack,
  children,
  first = false,
  hoursSaved,
}: {
  title: string;
  client: string;
  year: string;
  stack: string[];
  children: ReactNode;
  first?: boolean;
  hoursSaved?: string;
}) {
  return (
    <article
      className={
        first
          ? "grid grid-cols-1 gap-8 py-14 md:grid-cols-12 md:gap-10"
          : "grid grid-cols-1 gap-8 border-t border-border py-14 md:grid-cols-12 md:gap-10"
      }
    >
      <header className="md:col-span-4">
        <h3 className="font-display text-2xl leading-snug tracking-tight text-foreground">
          {title}
        </h3>
        <p className="mt-4 text-sm uppercase tracking-[0.16em] text-foreground/70">{client}</p>
        <p className="mt-1 text-sm text-muted-foreground">{year}</p>
        <ul className="mt-6 space-y-1">
          {stack.map((item) => (
            <li key={item} className="text-sm text-muted-foreground">
              {item}
            </li>
          ))}
        </ul>
        {hoursSaved ? (
          <div className="mt-8 border-t border-border pt-4">
            <p className="label-eyebrow">Hours saved</p>
            <p className="mt-2 font-display text-lg leading-snug text-foreground/80">
              {hoursSaved}
            </p>
          </div>
        ) : null}
      </header>
      <div className="md:col-span-8">{children}</div>
    </article>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[0.95rem] leading-relaxed text-foreground/85">
          <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const moreWorkColumns = [
  {
    title: "Operational Workflows & Reporting",
    tagline: "Focused on internal tools, ERP integration, and admin automation.",
    items: [
      {
        name: "Odoo CRM & Helpdesk History Summarizer",
        built: "Luceda",
        detail:
          "n8n workflow that aggregates and summarizes two years of account history from Odoo CRM, Sales, and Helpdesk for account managers.",
      },
      {
        name: "Automated Team-Lead Time Tracking",
        built: "Luceda",
        detail:
          "Scheduled n8n integration that pulls raw time-tracking data and formats automated summary reports for team leads.",
      },
      {
        name: "Odoo Event & Registration Automator",
        built: "Luceda",
        detail:
          "Automated webinar participant registrations within Odoo, saving ~4 hours per event, paired with automated attendee data extraction.",
      },
    ],
  },
  {
    title: "AI Prototypes & Data Pipelines",
    tagline: "Focused on data enrichment, AI experimentation, and custom tooling.",
    items: [
      {
        name: "AI-Powered Lead Enrichment Pipeline",
        built: "Luceda",
        detail:
          "Automated pipeline that scrapes event data, enriches prospect info via external APIs, evaluates against BANT criteria, and outputs qualified lead lists.",
      },
      {
        name: "Custom “Second Brain” AI System",
        built: "Personal",
        detail:
          "Voice-to-text input in plain language — the app files it into calendar, to-dos, notes and collections on its own.",
      },
      {
        name: "Automated Document & Text Extractors",
        built: "Paddle / Luceda",
        detail:
          "Custom Python scripts utilizing BeautifulSoup and Playwright to parse unstructured web data, formats, and text outputs.",
      },
    ],
  },
  {
    title: "System Dashboards & QA Utilities",
    tagline: "Focused on visual metrics, infrastructure monitoring, and automated testing.",
    items: [
      {
        name: "Global License Visualization Dashboard",
        built: "Luceda",
        detail:
          "Interactive world map dashboard visualizing active software license deployments globally for office wall displays and client presentations.",
      },
      {
        name: "Dynamic Organigram Mapper",
        built: "Personal",
        detail:
          "Rapidly prototyped visual organizational mapping tool to render company hierarchies and reporting structures dynamically.",
      },
    ],
  },
];

function Index() {
  return (
    <main className="mx-auto max-w-6xl px-6 pt-8 pb-20 md:px-12 md:pt-12 md:pb-28">
      <header className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <h1 className="font-display text-5xl leading-[1.05] tracking-tight text-foreground md:text-6xl">
          Huub
          <br />
          Ahsmann
        </h1>
        <p className="font-display text-2xl text-foreground/70 md:pb-1.5">
          Portfolio for Alfabet
        </p>
      </header>

      <Rule label="Selected work" className="mt-16 md:mt-20" />
      <section className="pt-10">
        <Project
          first
          title="Marketing expense sorter"
          client="Operations Luceda"
          year="2026"
          stack={["Python", "Gemini API"]}
          hoursSaved="A week of manual work → half a day"
        >
          <Bullets
            items={[
              "Sifted through around 1,600 invoices to isolate the ones belonging to Marketing.",
              "Categorized each invoice into the right marketing expense bucket.",
              "Gave the marketing department a clean basis for reporting on their spend.",
            ]}
          />
          <CodeBlock code={marketingSorterCode} />
        </Project>

        <Project
          title="Internal Assistant Chatbot"
          client="Operations Luceda"
          year="2026"
          stack={["n8n", "Gemini API", "Odoo"]}
          hoursSaved="Hours back to every colleague, every week"
        >
          <Bullets
            items={[
              "A chatbot (not yet launched) that talks to an Odoo instance over HTTP requests.",
              "Using guardrails, queries stay targeted across sales orders, customers, helpdesk tickets and CRM items — or combinations of them.",
              "Gemini summarizes the results so colleagues get useful answers in seconds, not reports.",
            ]}
          />
          <CodeBlock code={odooChatbotWorkflowCode} />
          <ProjectCarousel
            slides={[
              {
                src: automationImg,
                alt: "Workspace with an automation dashboard on screen",
                caption: "n8n workflow — webhook in, Odoo lookups, Gemini summary out.",
              },
              {
                src: agentsImg,
                alt: "Layered glass panels with a warm accent",
                caption: "Skill layer: intent → targeted Odoo search → answer, with optional tool calls like a calculator or pdf/excel generator.",
              },
            ]}
          />
        </Project>

        <Project
          title="Drupal QA checks & patches"
          client="Operations Paddle"
          year="2022"
          stack={["Python", "BeautifulSoup", "Playwright"]}
          hoursSaved="Thousands of hours saved per year, for the whole Paddle team"
        >
          <Bullets
            items={[
              "Wrote scripts to check thousands of pages after our Drupal 8 → 9 migrations: status codes, content, SEO & metadata, internal links and assets.",
              "Used different scripts to patch the flagged issues directly on the migrated pages.",
              "Saved the team thousands of hours of manual QA and patching across the migrations.",
            ]}
          />
          <CodeBlock code={migrationCheckerCode} />
          <CodeBlock code={migrationPatcherCode} />
        </Project>

        <Project
          title="Personal Hermes Agent setup"
          client="Personal Assistant"
          year="2026"
          stack={["VPS", "Hermes Agent", "LLMs", "Discord Gateway"]}
        >
          <Bullets
            items={[
              "Manages my personal workflows and monitors web data — stocks, weather — around the clock.",
              "Connected to Obsidian, so notes and ideas land in my vault straight from chat.",
              "A 24/7 always-on autonomous assistant with scheduled cron jobs and conversational memory.",
            ]}
          />
        </Project>
      </section>

      <Rule label="More work" />
      <section className="grid grid-cols-1 gap-x-12 gap-y-10 pt-10 md:grid-cols-3">
        {moreWorkColumns.flatMap((column) => column.items).map((item) => (
          <div key={item.name}>
            <h4 className="font-display text-lg leading-snug">{item.name}</h4>
            {item.built ? (
              <p className="label-eyebrow mt-2">{item.built}</p>
            ) : null}
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {item.detail}
            </p>
          </div>
        ))}
      </section>

      <footer className="mt-24 border-t border-border pt-4">
        <div className="flex items-center justify-between gap-6">
          <span className="label-eyebrow">Contact</span>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()}</p>
        </div>
        <div className="pt-8 text-sm">
          <a
            className="text-foreground underline-offset-4 hover:underline"
            href="mailto:huub.ahsmann@gmail.com"
          >
            huub.ahsmann@gmail.com
          </a>
          <p className="mt-2 text-muted-foreground">+32 (0)4 56 38 55 04</p>
        </div>
      </footer>
    </main>
  );
}
