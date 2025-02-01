import requests
from bs4 import BeautifulSoup

def get_image_url(file_path):
    url = "https://oceanwatch.live/predict/"
    
    # Headers and CSRF token
    headers = {
        "Origin": "https://oceanwatch.live",
        "Referer": "https://oceanwatch.live/demo.html",
        "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Mobile Safari/537.36"
    }
    csrf_token = "UJh0PEQw6MRlTzbb0n2XL8d0nWvXeyM51Xi8s4HbQfYn4NWGymFxlI6x84NTxmhB"
    cookies = {
        "csrftoken": "hobiNA1PUDhcloVFI9NKKK3HVis6tYFG"
    }

    files = {
        "csrfmiddlewaretoken": (None, csrf_token),
        "imagefile": ("test.jpg", open(file_path, "rb"), "image/jpeg")
    }

    try:
        value =[]
        response = requests.post(url, headers=headers, cookies=cookies, files=files)
        html_content = response.text
        #print("test 1")
 
        soup = BeautifulSoup(html_content, "html.parser")
        #print(html_content)
    
        oil_spill_text = soup.find("p", id="area").text
       
        img_tag = soup.find_all("img", alt="")[1]  
       # print("test 2"+oil_spill_text)
        value.append(oil_spill_text)
        if img_tag:
            image_url = img_tag["src"]
          #  print("Image URL:", "https://oceanwatch.live" + image_url)
            value.append("https://oceanwatch.live" + image_url)
            return value
        else:
            print("Image not found.")
        
    except Exception as e:
        return []
       


get_image_url("test.jpg")
