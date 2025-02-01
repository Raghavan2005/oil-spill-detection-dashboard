import React, { useState } from "react";
import axios from "axios"; // Make sure to install axios (npm install axios)

export default function Model() {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null); // For the API response
  const [loading, setLoading] = useState(false); // For loading state
  const [error, setError] = useState(null); // For error state
  const [text, setText] = useState("");

  const handleImageUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      const imgUrl = URL.createObjectURL(event.target.files[0]);
      setImage(imgUrl);
      setError(null); // Reset the error on new image upload
    }
  };

  const handleSubmit = async () => {
    if (!image) {
      setError("Please upload an image before submitting.");
      return;
    }
  
    // Get the image file object
    const file = document.querySelector('input[type="file"]').files[0];
  
    const formData = new FormData();
    formData.append("imagefile", file);
  
    try {
      setLoading(true);
      const response = await axios.post("http://127.0.0.1:5000/khacks/api/model", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      setLoading(false);
      console.log(response.data);
  
      if (response.data.image_url && response.data.image_url.length > 0) {
        setImageUrl(response.data.image_url[1]);
        setImage(response.data.image_url[1]);
        setText(response.data.image_url[0]);
      } else {
        setError("No Oil Spill!");
        setText("no");
      }
    } catch (error) {
      setLoading(false);
      setError("An error occurred while processing the image. Please try again.");
    }
  };
  
  return (
    <div className="bg-gray-700 rounded-lg w-full p-5 h-[600px] flex flex-col items-center justify-center space-y-4">

      {/* Image Preview */}
      {image ? (
        <div className="w-full flex flex-col items-center space-y-3">
          <img src={image} alt="Uploaded" className="w-64 h-64 object-cover rounded-md shadow-md" />
          <p className="text-white">Uploaded Image Preview</p>
        </div>
      ) : (
        <div className="w-full flex flex-col items-center space-y-3">
          <img src="https://cdn.dribbble.com/users/510907/screenshots/2373320/media/9c3f561dd9b93e972d1659323f915d30.gif" alt="Upload Placeholder" className="w-64 h-64 object-cover rounded-md shadow-md" />
          <p className="text-white">Please Upload SAR Image</p>
        </div>
      )}

      {/* Upload Section */}
      <label className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600 transition">
        Upload Image
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageUpload}
        />
      </label>

      {/* Result Display */}
      <div className="w-full bg-white text-gray-800 p-3 rounded-md shadow-md text-center">
        {loading
          ? "Processing Image..."
          : imageUrl
          ? (
              text === "no"
              ? <p className="text-green-600">No Oil Spill!</p>
              : <p className="text-red-600">{text}</p>
            )
          : error
          ? <p className="text-red-500">{error}</p>
          : "No image uploaded yet."
        }
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-6 py-3 rounded-md mt-5 hover:bg-blue-600 transition"
      >
        Submit Image for Processing
      </button>
    </div>
  );
}
