import { useState } from 'react'
import './App.css'
import Nav from './dashboard/Nav.jsx'
import Map from './dashboard/Map.jsx'
import Model from './dashboard/Model.jsx'
function App() {
  

  return (
    <>
    <div>
      {/* Navigation Bar */}
      <Nav />
  
      {/* Main Content Section */}
      <div className="flex p-5 gap-4">
        {/* Map Section (60% width) */}
        <div className="w-[60%]">
          <Map />
        </div>
  
        {/* Model Section (40% width) */}
        <div className="w-[40%]">
          <Model />
        </div>
      </div>
    </div>
  </>
  
  )
}

export default App
