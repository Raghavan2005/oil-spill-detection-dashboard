import { useRef } from 'react';
import './App.css';
import Nav from './dashboard/Nav.jsx';
import MapHome from './dashboard/MapHome.jsx';
import Model from './dashboard/Model.jsx';

function Home() {
  const mapRef = useRef(); // Define the ref for MapHome

  return (
    <>
      <div>
        {/* Navigation Bar */}
        <Nav />
  
        {/* Main Content Section */}
        <div className="flex p-5 gap-4">
          {/* Map Section (60% width) */}
          <div className="w-[60%]">
            <MapHome /> {/* Pass ref to MapHome */}
          </div>
  
          {/* Model Section (40% width) */}
          <div className="w-[40%]">
            <Model />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
