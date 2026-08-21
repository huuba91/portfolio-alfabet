# Variabelen

    # Pad van je CSV met benodigde URLs in kolom A (D7) en B (D9)
csvPath = 'input.csv'
outputPath = 'output.csv'

    # Belangrijk: Vul hier de titel in voor de 'Geen toegang'-pagina voor D7 en D9 - voor de bezoekbaarheid check
geenToegangD7 = "Geen toegang / Inloggen - [CLIENT]"
geenToegangD9 = "Inloggen | Paddle"

# Eerst importeren we wat benodigde libraries - beautifulsoup kan html parsen en mechanicalsoup kan formulieren invullen/submitten

from bs4 import BeautifulSoup
import requests
import csv
import mechanicalsoup
browser = mechanicalsoup.StatefulBrowser()

# headers/cookies zodat het script ingelogd is wanneer hij de pagina's bezoekt - soms gebruik ik een functie ook zonder headers om de niet-ingelogde pagina te checken

headersD7 = {
    'authority': 'login.example-cms.net',
    'cache-control': 'max-age=0',
    'sec-ch-ua': '" Not;A Brand";v="99", "Microsoft Edge";v="97", "Chromium";v="97"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36 Edg/97.0.1072.62',
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'sec-fetch-site': 'cross-site',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-user': '?1',
    'sec-fetch-dest': 'document',
    'referer': 'https://www.google.com/',
    'accept-language': 'nl,en-US;q=0.9,en;q=0.8,fr;q=0.7',
    'cookie': 'has_js=1; SSESS<SESSION-COOKIE>',
}

headersD9 = {
    'authority': 'client-site.example-cms.net',
    'cache-control': 'max-age=0',
    'sec-ch-ua': '" Not;A Brand";v="99", "Microsoft Edge";v="97", "Chromium";v="97"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36 Edg/97.0.1072.62',
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'sec-fetch-site': 'cross-site',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-user': '?1',
    'sec-fetch-dest': 'document',
    'accept-language': 'nl,en-US;q=0.9,en;q=0.8,fr;q=0.7',
    'cookie': 'SSESS<SESSION-COOKIE>',
}


# lege lijst die gevuld wordt met inhoud van de input csv
contents = []

# csv input openen

with open(csvPath,'r') as csvf:
    urls = csv.reader(csvf)
    for url in urls:        
        contents.append(url)

# output csv leeg maken

fileVariable = open(outputPath, 'r+')
fileVariable.truncate(0)
fileVariable.close() 

# csv output openen en de titel kolommen invullen

with open(outputPath, mode='a', newline='', encoding="utf-8") as resultaten:
    resultaat_schrijven = csv.writer(resultaten, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
    resultaat_schrijven.writerow(["D7", "D9", "Both accessible by visitor", "URL-structure OK", "Breadcrumb OK", "Summary OK", "SEO title OK", "SEO description OK", "Depublication date OK"])

# loop door de input csv

for url in contents:
    page = requests.get(url[0], headers=headersD7)
    page2 = requests.get(url[1], headers=headersD9)

    # niet-ingelogde pagina's laden

    pageNL = requests.get(url[0])
    page2NL = requests.get(url[1])

    # ingelogde en niet-ingelogde pagina's parsen

    soup = BeautifulSoup(page.text, "html.parser")
    soup2 = BeautifulSoup(page2.text, "html.parser")

    soupNL = BeautifulSoup(pageNL.text, "html.parser")
    soup2NL = BeautifulSoup(page2NL.text, "html.parser")    

    # bewerk-knop zoeken op d7 en d9

    try:
        bewerkKnopD7 = soup.find('a', class_="edit")['href']
    except:
        bewerkKnopD7 = ""

    print(bewerkKnopD7)
    
    try:    
        bewerkKnopD9 = soup2.select_one('a[data-drupal-link-system-path^="node/"][data-drupal-link-system-path$="/edit"]')['href']
    except:
        bewerkKnopD9 = ""

    # als ze niet bestaan wordt het een lege string - dat zal een error geven in de csv, meestal betekent het dat er een pagina niet bestaat oid
    # hij bouwt de bewerkings-URL op uit het nodenummer dat hij van de livepagina scrapet. Op d7 zal er dan ook geen token gebruikt worden dus pagina hoeft niet unlocked te worden. D9 unock ik door naar de unlock-pagina te surfen en daar te submitten - kan eigenlijk beter de bewerkingspagina gewoon submitten besef ik me

    if bewerkKnopD7 != "" and bewerkKnopD9 != "":
        bewerkKnopD7 = (bewerkKnopD7.split("/"))[5]
        preURL = (url[0].split("/"))[2:]

        bewerkLinkD7 = "https://" + preURL[0] + "/nl/node/" + bewerkKnopD7 + "/edit"

        preURL2 = (url[1].split("/"))[2:]
        nodeD9 = bewerkKnopD9.split("/")[2]

        bewerkLinkD9 = "https://" + preURL2[0] + bewerkKnopD9

        unlockLinkD9 = "https://" + preURL2[0] + "/admin/lock/break/node/" + nodeD9 + "/und/%2A"

        # Status checker. hij checkt of de titel van de gescrapete pagina's gelijk staat aan die bovenaan dit script, om zo te zien of de pagina beschikbaar is zonder ingelogd te zijn.

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
        for b in breadcrumbD9:
            result = b.get_text().strip()
            breadcrumbs.append(result)
            # Array maken met alle D7 breadcrumbs
        breadcrumbs2 = []
        for b in breadcrumbD7:
            result = b.get_text().strip()
            breadcrumbs2.append(result)

        # home verwijderen

        try:
            breadcrumbs.remove("Accueil")
        except:
            test=""

        try:
            breadcrumbs2.remove("Accueil")
        except:
            test=""

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
            test=""

        try:
            breadcrumbs2.pop()
        except:
            test=""
        
        # pop functie verwijdert laatste element uit lijst - paginatitel in dit geval


        if breadcrumbs == breadcrumbs2:
            breadcrumbsGelijk = "Yes"
        else:
            breadcrumbsGelijk = "No"

        print(breadcrumbs)
        print(breadcrumbs2)

        # url structuur, moet aangepast worden naargelang aantal / tot de structuur (bij /nl/ zal het er bv één meer zijn)

        splitURLD7 = (url[0].split("/"))[3:]
        splitURLD9 = (url[1].split("/"))[3:]

        if splitURLD7 == splitURLD9:
            URLstructuurGelijk = "Yes"
        else:
            URLstructuurGelijk ="No"

        
        # Bewerk-links openen
        page3 = requests.get(bewerkLinkD7, headers=headersD7)
        page4 = requests.get(bewerkLinkD9, headers=headersD9)

        # Parsen
        soup3 = BeautifulSoup(page3.text, "html.parser")
        soup4 = BeautifulSoup(page4.text, "html.parser")


        #Seo titel veld parsen
        try:
            seotitelD7 = soup3.find("input", {"name" : "field_paddle_seo_title[und][0][value]"})['value']
        except:
            seotitelD7 = ""
        try:
            seotitelD9 = soup4.find("input", {"id" : "edit-metatags-0-basic-title"})['value']
        except:
            seotitelD9 = ""
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
        try:
            depublicatiedatumd9 = soup4.find("input", {"name" : "unpublish_on[0][value][date]"}).get('value')
        except:
            depublicatiedatumd9 = ""

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

        # mechanicalsoup opent unockpagina en submit

        browser.open(unlockLinkD9, headers=headersD9)
        browser.select_form()
        browser.submit_selected(headers=headersD9)

        # csv kolommen worden geschreven

        with open(outputPath, mode='a', newline='', encoding="utf-8") as resultaten:
            resultaat_schrijven = csv.writer(resultaten, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
            resultaat_schrijven.writerow([url[0], url[1], beschikbaarheidgelijk, URLstructuurGelijk, breadcrumbsGelijk, samenvattinggelijk, seotitelgelijk, seobeschrijvinggelijk, depublicatiedatumgelijk])
    # wanneer de pagina niet geopend kan worden
    else:
        with open(outputPath, mode='a', newline='', encoding="utf-8") as resultaten:
            resultaat_schrijven = csv.writer(resultaten, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
            resultaat_schrijven.writerow([url[0], url[1], "error"])