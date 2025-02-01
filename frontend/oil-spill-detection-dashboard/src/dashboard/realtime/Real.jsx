import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Real = () => {
  // State to hold the fetched oil spill data
  const [oilSpillData, setOilSpillData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the data when the component mounts
  useEffect(() => {
    axios.get('http://127.0.0.1:5000/khacks/api/realtime')
      .then((response) => {
        setOilSpillData(response.data); // Set the data to state
        setLoading(false); // Set loading to false when data is loaded
      })
      .catch((err) => {
        setError('Error fetching data'); // Set error state in case of error
        setLoading(false);
      });
  }, []); // Empty dependency array means it runs once when the component mounts

  // If still loading
  if (loading) {
    return <div>Loading...</div>;
  }

  // If there's an error
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
    <h2 className="text-2xl font-bold mb-4">Potential Oil Spill Data</h2>
    {oilSpillData.length === 0 ? (
      <p className="text-gray-500">No data available.</p>
    ) : (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {oilSpillData.map((item, index) => (
          <div key={index} className="card bg-white shadow-md rounded-lg overflow-hidden">
            <img
              className="w-full h-48 object-cover"
              src={item.image_src}
              alt="Card image cap"
            />
            <div className="p-4 bg-black">
              <h5 className="text-lg font-semibold">{item.title}</h5>
              <p><strong>Sat Img Date:</strong> {item.sat_img_date}</p>
              <p><strong>Img Recd Date:</strong> {item.img_recd_date}</p>
              <p><strong>Prediction Date:</strong> {item.prediction_date}</p>
              <p><strong>Lat / Lon:</strong> {item.latitude} / {item.longitude}</p>
              <p><strong>Area (2D):</strong> {item.area_2d}</p>
              <a
                href={`https://www.google.com/maps?q=${item.latitude},${item.longitude}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                [Link to map]
              </a>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
  
  );
};

export default Real;
