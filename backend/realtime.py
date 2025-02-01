import requests
from bs4 import BeautifulSoup
import json

def extract_oil_spill_data():
    # Send a GET request to fetch the page content
    response = requests.get("https://oceanwatch.live/live.html")
    if response.status_code != 200:
        return json.dumps({"error": "Failed to retrieve the page"}, indent=4)
    
    # Parse the HTML using BeautifulSoup
    soup = BeautifulSoup(response.text, 'html.parser')
    cards = soup.find_all('div', class_='card')
    data = []

    for card in cards:
        card_data = {}
        
        # Extract image source
        img_tag = card.find('img', class_='card-img-top')
        card_data['image_src'] = "https://oceanwatch.live"+img_tag['src'] if img_tag else None

        # Extract card title
        title_tag = card.find('h5', class_='card-title2')
        card_data['title'] = title_tag.get_text(strip=True) if title_tag else None

        # Extract paragraphs
        paragraphs = card.find_all('p', class_='card-text2')
        for p in paragraphs:
            text = p.get_text(strip=True)
            if 'Sat Img Date' in text:
                card_data['sat_img_date'] = text.split(':', 1)[1].strip()
            elif 'Img Recd Date' in text:
                card_data['img_recd_date'] = text.split(':', 1)[1].strip()
            elif 'Prediction Date' in text:
                card_data['prediction_date'] = text.split(':', 1)[1].strip()
            elif 'Lat / Lon' in text:
                lat_lon = text.split(':', 1)[1].strip().replace("[link to map]", "").split('/')
                card_data['latitude'] = lat_lon[0].strip()
                card_data['longitude'] = lat_lon[1].strip()
            elif 'Area (2D)' in text:
                card_data['area_2d'] = text.split(':', 1)[1].strip()

        data.append(card_data)

    return json.dumps(data, indent=4)



