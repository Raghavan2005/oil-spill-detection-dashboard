from flask import Flask, request, jsonify
from model import get_image_url
from realtime import extract_oil_spill_data
from flask_cors import CORS  # Import CORS
app = Flask(__name__)
CORS(app)
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
    

@app.route('/khacks/api/realtime', methods=['GET'])
def realtime():
    return extract_oil_spill_data()

if __name__ == '__main__':
    app.run(debug=True)
