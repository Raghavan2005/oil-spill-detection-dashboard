import { useState } from 'react'
import './App.css'
import Nav from './dashboard/Nav.jsx'
import Map from './dashboard/Map.jsx'
function App() {
  

  return (
    <>
     <div >
    <Nav/>
    <div className='flex p-5'>
    <div className='w-[60%]'>
    <Map/>
    </div>
      
    </div>
      </div>
    </>
  )
}

export default App
