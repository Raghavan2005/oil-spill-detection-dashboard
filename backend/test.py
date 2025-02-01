import requests
from bs4 import BeautifulSoup
url = "https://oceanwatch.live/predict/"

# Headers
headers = {
    "Origin": "https://oceanwatch.live",
    "Referer": "https://oceanwatch.live/demo.html",
    "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Mobile Safari/537.36"
}

# CSRF Token (You might need to extract this dynamically)
csrf_token = "UJh0PEQw6MRlTzbb0n2XL8d0nWvXeyM51Xi8s4HbQfYn4NWGymFxlI6x84NTxmhB"

# Cookie
cookies = {
    "csrftoken": "hobiNA1PUDhcloVFI9NKKK3HVis6tYFG"
}

# Image file payload
files = {
    "csrfmiddlewaretoken": (None, csrf_token),
    "imagefile": ("test.jpg", open("test.jpg", "rb"), "image/jpeg")
}

# Send the request
response = requests.post(url, headers=headers, cookies=cookies, files=files)

# Print response
#print(response.status_code, response.text)
html_content = response.text  # Replace this with the HTML you provided

# Parse with BeautifulSoup
soup = BeautifulSoup(html_content, "html.parser")

# Extract the oil spill percentage text
oil_spill_text = soup.find("p", id="area").text

# Extract the image source URL
img_tag = soup.find("img", alt="")

# Extract the src attribute
if img_tag:
    image_url = img_tag["src"]
    print("Image URL:", image_url)

# Print the extracted data
print("Oil Spill Data:", oil_spill_text)
print("Overlay Image URL:", "https://oceanwatch.live"+image_url)