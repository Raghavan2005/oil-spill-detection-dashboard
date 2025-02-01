from flask import Flask, request, jsonify
from model import get_image_url

app = Flask(__name__)

@app.route('/khacks/api/model', methods=['POST'])
def api_get_image_url():
    try:
  
        file = request.files.get('imagefile')
        if not file:
            return jsonify({"error": "No file uploaded"}), 400
        
        file_path = "uploaded_image.jpg"
        file.save(file_path)
        image_url = get_image_url(file_path)

        return jsonify({"image_url": image_url}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
