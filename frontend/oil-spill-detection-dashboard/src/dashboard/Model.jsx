import React, { useState } from "react";

export default function Model() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      const imgUrl = URL.createObjectURL(event.target.files[0]);
      setImage(imgUrl);
    }
  };

  return (
    <div className="bg-gray-700 rounded-lg w-full p-5 h-[600px] flex flex-col items-center justify-center space-y-4">
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

      {/* Image Preview */}
      {image && (
        <div className="w-full flex flex-col items-center space-y-3">
          <img src={image} alt="Uploaded" className="w-64 h-64 object-cover rounded-md shadow-md" />
          <p className="text-white">Uploaded Image Preview</p>
        </div>
      )}

      {/* Result Display */}
      <div className="w-full bg-white text-gray-800 p-3 rounded-md shadow-md text-center">
        {image ? "Processing Result: ✅ Image uploaded successfully!" : "No image uploaded yet."}
      </div>
    </div>
  );
}
