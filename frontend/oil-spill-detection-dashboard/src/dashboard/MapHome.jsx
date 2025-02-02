import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import L from "leaflet"; // Import Leaflet for custom marker icons
import "leaflet/dist/leaflet.css";

// Import Leaflet marker icons correctly in ES6
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix for default marker icons in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export default function MapHome() {
  const [ports, setPorts] = useState([]); // State to store port data
  const [weatherData, setWeatherData] = useState([]); // State to store weather data
  const [envData, setEnvData] = useState([]); // State to store environmental data

  const weatherApiKey = "53fcecdecf2d714aca6603235a693d6e"; // Add your API key for weather

  // Fetch port data from the API
  useEffect(() => {
    fetch("http://127.0.0.1:5000/khacks/api/ports")
      .then((response) => response.json())
      .then((data) => {
        if (data.ports && Array.isArray(data.ports)) {
          setPorts(data.ports); // Update state with port data
        } else {
          console.error("Invalid API response format:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching port data:", error);
      });
  }, []); // Empty dependency array ensures this runs only once on mount

  // Fetch weather data
  const fetchWeatherData = (latitude, longitude) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weatherApiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeatherData((prevData) => [
          ...prevData,
          { lat: latitude, lon: longitude, data: data },
        ]);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  };

  // Fetch environmental impact data (air quality)
  const fetchEnvData = (latitude, longitude) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${weatherApiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        setEnvData((prevData) => [
          ...prevData,
          { lat: latitude, lon: longitude, data: data },
        ]);
      })
      .catch((error) => {
        console.error("Error fetching environmental data:", error);
      });
  };

  // Trigger the weather and environmental data fetch when ports data is available
  useEffect(() => {
    ports.forEach((port) => {
      fetchWeatherData(port.latitude, port.longitude);
      fetchEnvData(port.latitude, port.longitude);
    });
  }, [ports]);

  // Function to find weather info for a specific port
  const getWeatherInfo = (lat, lon) => {
    const weather = weatherData.find(
      (data) => data.lat === lat && data.lon === lon
    );
    return weather
      ? `${weather.data.weather[0].description}, Temp: ${weather.data.main.temp}°C`
      : "N/A";
  };

  // Function to find environmental info (AQI) for a specific port
  const getEnvImpactInfo = (lat, lon) => {
    const env = envData.find((data) => data.lat === lat && data.lon === lon);
    return env ? env.data.list[0].main.aqi : "N/A";
  };

  // Function to determine the color based on AQI value
  const getColorByAQI = (aqi) => {
    if (aqi <= 50) return "green";
    if (aqi <= 100) return "yellow";
    if (aqi <= 150) return "orange";
    if (aqi <= 200) return "red";
    if (aqi <= 300) return "purple";
    return "maroon"; // Hazardous
  };

  return (
    <div className="h-[300px] w-full rounded-lg">
      <MapContainer
        center={[20.5937, 78.9629]} // Center map on India
        zoom={5}
        scrollWheelZoom={false}
        className="h-[600px] w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Render CircleMarkers for each port with AQI-based color */}
        {ports.map((port, index) => {
          const aqi = getEnvImpactInfo(port.latitude, port.longitude);
          return (
            <CircleMarker
              key={index}
              center={[port.latitude, port.longitude]}
              radius={50} // Adjust the size of the circle marker
              color={getColorByAQI(aqi)} // Color the circle based on AQI
              fillColor={getColorByAQI(aqi)}
              fillOpacity={0.1}
            >
              <Popup>
                <strong>{port.name}</strong>
                <br />
                {port.state}
                <br />
                <strong>Weather:</strong> {getWeatherInfo(port.latitude, port.longitude)}
                <br />
                <strong>Environmental Impact (AQI):</strong> {aqi}
              </Popup>
            </CircleMarker>
          );
        })}
      </MapContainer>
    </div>
  );
}
