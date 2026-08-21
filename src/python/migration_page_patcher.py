# Variabelen

    # Pad van je CSV met benodigde URLs in kolom A (D7) en B (D9)
csvPath = '/Users/Huub/Desktop/Paddle scripts/All-in-one v2/input.csv'
outputPath = '/Users/Huub/Desktop/Paddle scripts/All-in-one v2/output.csv'

    # Belangrijk: Vul hier de titel in voor de 'Geen toegang'-pagina
geenToegangD7 = "Pagina niet gevonden - Agentschap Integratie en Inburgering"
geenToegangD9 = "Geen toegang | Paddle"

# Eerst importeren we wat benodigde libraries

from bs4 import BeautifulSoup
import requests
import csv
import mechanicalsoup
browser = mechanicalsoup.StatefulBrowser()

headersD7 = {
    'authority': 'integratie-inburgering.login.paddlecms.net',
    'cache-control': 'max-age=0',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'sec-gpc': '1',
    'sec-fetch-site': 'none',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-user': '?1',
    'sec-fetch-dest': 'document',
    'accept-language': 'en-US,en;q=0.9,nl;q=0.8',
    'cookie': 'has_js=1; _BEAMER_USER_ID_jnSwhiVG27643=51492089-52a9-413e-a949-457c8c0a0f9a; _BEAMER_FIRST_VISIT_jnSwhiVG27643=2021-09-30T08:21:51.263Z; _BEAMER_FILTER_BY_URL_jnSwhiVG27643=false; SSESS78c91444765b679c1e0609fc36f7f19f=vRXKybKcOs9cMobW40Mp-vCJfAe-VwmmUPW3rnGsii8',
}

headersD9 = {
    'authority': 'integratie-inburgering.paddlecms.net',
    'cache-control': 'max-age=0',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'sec-gpc': '1',
    'sec-fetch-site': 'none',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-user': '?1',
    'sec-fetch-dest': 'document',
    'accept-language': 'en-US,en;q=0.9,nl;q=0.8',
    'cookie': 'cookie-agreed-version=1.0.0; cookie-agreed-categories=%5B%22required%22%2C%22statistics%22%5D; cookie-agreed=2; _BEAMER_USER_ID_jnSwhiVG27643=51492089-52a9-413e-a949-457c8c0a0f9a; _BEAMER_FIRST_VISIT_jnSwhiVG27643=2021-09-30T08:21:51.263Z; _BEAMER_FILTER_BY_URL_jnSwhiVG27643=false; SSESS3da11856f532423cd291513740d41d4f=I%2CUqCk5kHDJB8pV1uCG7Mmebnf0FGxfrCS-ylvwVtsH3q7JA',
}

contents = []
editLinks = []
unlockLinks = []

with open(csvPath,'r') as csvf:
    urls = csv.reader(csvf)
    for url in urls:        
        contents.append(url)

fileVariable = open(outputPath, 'r+')
fileVariable.truncate(0)
fileVariable.close() 

with open(outputPath, mode='a', newline='') as resultaten:
    resultaat_schrijven = csv.writer(resultaten, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
    resultaat_schrijven.writerow(["D7", "D9", "Both accessible by visitor", "URL-structure OK", "Breadcrumb OK", "Summary OK", "SEO title OK", "SEO description OK", "Depublication date OK"])

for url in contents:
    page = requests.get(url[0], headers=headersD7)
    page2 = requests.get(url[1], headers=headersD9)

    # no login pagina's

    pageNL = requests.get(url[0])
    page2NL = requests.get(url[1])

    # Parsen
    soup = BeautifulSoup(page.text, "html.parser")
    soup2 = BeautifulSoup(page2.text, "html.parser")

    soupNL = BeautifulSoup(pageNL.text, "html.parser")
    soup2NL = BeautifulSoup(page2NL.text, "html.parser")
    try:
        bewerkKnopD7 = soup.find('a', attrs={'title': 'Preview sluiten'})['href']
    except:
        bewerkKnopD7 = ""
    
    try:    
        bewerkKnopD9 = soup2.find('a', href=True, text='Bewerken')['href']
    except:
        bewerkKnopD9 = ""

    if bewerkKnopD7 != "" and bewerkKnopD9 != "":
        bewerkKnopD7 = (bewerkKnopD7.split("/"))[5]
        preURL = (url[0].split("/"))[2:]

        bewerkLinkD7 = "https://" + preURL[0] + "/nl/node/" + bewerkKnopD7 + "/edit"

        preURL2 = (url[1].split("/"))[2:]
        nodeD9 = bewerkKnopD9.split("/")[2]

        bewerkLinkD9 = "https://" + preURL2[0] + bewerkKnopD9

        unlockLinkD9 = "https://" + preURL2[0] + "/admin/lock/break/node/" + nodeD9 + "/und/%2A"
        print(unlockLinkD9)

        # Status

        titelD7 = soupNL.find('title').get_text()
        titelD9 = soup2NL.find('title').get_text()

        if titelD7 == geenToegangD7:
            D7onbeschikbaar = "Yes"
        else:
            D7onbeschikbaar = "No"

        if titelD9 == geenToegangD9:
            D9onbeschikbaar = "Yes"
        else:
            D9onbeschikbaar = "No"

        if D7onbeschikbaar == D9onbeschikbaar:
            beschikbaarheidgelijk = "Yes"
        else:
            beschikbaarheidgelijk = "No"


        # BREADCRUMB

        # Hij zoekt hier in kolom A naar het div element met klasse breadcrumb en neemt er de li elementen uit.
        try:    
            breadcrumbD7 = soup.find('div', attrs={'id': 'breadcrumb'}).find_all('li')
        except (AttributeError, TypeError):
            breadcrumbD7 = ""

            # Hij zoekt hier in kolom B naar het ol element met klasse breadcrumb en neemt er de li elementen uit.
        try:
            breadcrumbD9 = soup2.find('ol', attrs={'class': 'breadcrumb'}).find_all('li')
        except (AttributeError, TypeError):
            breadcrumbD9 = ""    

            # Array maken met alle D9 breadcrumbs
        breadcrumbs = []
        for b in breadcrumbD9[0:]:
            result = b.text.strip()
            breadcrumbs.append(result)

        breadcrumbs2 = []
        for b in breadcrumbD7[0:]:
            result = b.text.strip()
            breadcrumbs2.append(result)

        try:
            breadcrumbs.remove("Home")
        except:
            test=""

        try:
            breadcrumbs2.remove("Home")
        except:
            test=""
        
        try:
            breadcrumbs.pop()
        except:
            test = ""

        try:
            breadcrumbs2.pop()
        except:
            test = ""

        if breadcrumbs == breadcrumbs2:
            breadcrumbsGelijk = "Yes"
        else:
            breadcrumbsGelijk = "No"

        # url structuur, moet aangepast worden naargelang aantal / tot de structuur

        splitURLD7 = (url[0].split("/"))[4:]
        splitURLD9 = (url[1].split("/"))[3:]

        if splitURLD7 == splitURLD9:
            URLstructuurGelijk = "Yes"
        else:
            URLstructuurGelijk ="No"

        
        # Kolom A en B uit de csv halen
        page3 = requests.get(bewerkLinkD7, headers=headersD7)
        page4 = requests.get(bewerkLinkD9, headers=headersD9)

        # Parsen
        soup3 = BeautifulSoup(page3.text, "html.parser")
        soup4 = BeautifulSoup(page4.text, "html.parser")

        #seo titel

        seotitelD7 = soup3.find("input", {"name" : "field_paddle_seo_title[und][0][value]"}).get('value')

        seotitelD9 = soup4.find("input", {"id" : "edit-metatags-0-basic-title"}).get('value')
        if seotitelD9 == "[node:title] | [site:name]":
            seotitelD9 = ""
        
        if seotitelD7.strip() == seotitelD9.strip():
            seotitelgelijk = "Yes"
        else:
            seotitelgelijk = "No"

        # seo beschrijving
        try:
            seobeschrijvingD7 = soup3.find("textarea", {"name" : "field_paddle_seo_description[und][0][value]"}).contents[0]
        except:
            seobeschrijvingD7 = ""

        try:
            seobeschrijvingD9 = soup4.find("textarea", {"name" : "metatags[0][basic][description]"}).contents[0]
        except:
            seobeschrijvingD9 = ""

        if seobeschrijvingD9 == "[node:summary]":
            seobeschrijvingD9 = ""

        if seobeschrijvingD7.strip() == seobeschrijvingD9.strip():
            seobeschrijvinggelijk = "Yes"
        else:
            seobeschrijvinggelijk = "No"

        # depublicatiedatum

        depublicatiedatumd7container = soup3.find("li", {"class" : "node-metadata-item-unpublish"})
        depublicatiedatumd7 = depublicatiedatumd7container.find("span", {"class" : "value"}).get_text()
        if depublicatiedatumd7 == "-":
            depublicatiedatumd7 = ""
        else:
            depublicatiedatumd7 = depublicatiedatumd7.split("-")
            depublicatiedatumd7 = depublicatiedatumd7[0].split()
            depublicatiedatumd7 = depublicatiedatumd7[0].split("/")
            depublicatiedatumd7 = depublicatiedatumd7[0] + depublicatiedatumd7[1] + depublicatiedatumd7[2]

        depublicatiedatumd9 = soup4.find("input", {"name" : "unpublish_on[0][value][date]"}).get('value')
        if depublicatiedatumd9 != "":
                depublicatiedatumd9 = depublicatiedatumd9.split("-")
                depublicatiedatumd9 = depublicatiedatumd9[2] + depublicatiedatumd9[1] + depublicatiedatumd9[0]

        if depublicatiedatumd7 == depublicatiedatumd9:
            depublicatiedatumgelijk = "Yes"
        else:
            depublicatiedatumgelijk = "No"

        # samenvatting
        try:
            samenvattingD7 = soup3.find("textarea", {"name" : "body[und][0][summary]"}).contents[0]
        except:
            samenvattingD7 = ""
        try:
            samenvattingD9 = soup4.find("textarea", {"name" : "body[0][summary]"}).contents[0]
        except:
            samenvattingD9 = ""    

        if samenvattingD7.strip() == samenvattingD9.strip():
            samenvattinggelijk = "Yes"
        else:
            samenvattinggelijk = "No"

        browser.open(unlockLinkD9, headers=headersD9)
        browser.select_form()
        browser.submit_selected(headers=headersD9)

        with open(outputPath, mode='a', newline='') as resultaten:
            resultaat_schrijven = csv.writer(resultaten, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
            resultaat_schrijven.writerow([url[0], url[1], beschikbaarheidgelijk, URLstructuurGelijk, breadcrumbsGelijk, samenvattinggelijk, seotitelgelijk, seobeschrijvinggelijk, depublicatiedatumgelijk])

    else:
        print("error")
        
        with open(outputPath, mode='a', newline='') as resultaten:
            resultaat_schrijven = csv.writer(resultaten, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
            resultaat_schrijven.writerow([url[0], url[1], "error"])