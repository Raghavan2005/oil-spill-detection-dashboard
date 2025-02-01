import React from 'react'
import Map from '../Map.jsx'
import { FaArrowAltCircleUp,FaArrowAltCircleDown ,FaArrowAltCircleRight ,FaArrowAltCircleLeft  } from "react-icons/fa";
export default function Ship() {
  return (
    <div>

    
    <div className='flex p-3 gap-4'>
      <div className='w-3/4 h-full'>
        <Map />
      </div>
      <div className='bg-gray-800 h-full p-4 rounded-lg w-1/4'>
        <div className='h-full text-white'>
          <div className='flex flex-col gap-2'>
            <div className='flex text-lg mb-2 text-green-500'>ASV Details:</div>
            <hr className='border-green-500 mb-2'/>
            <div className='text-sm mb-1'>ASV Number: <span className='ml-3 text-gray-300'>8148867</span></div>
            <hr className='border-gray-600'/>
            <div className='text-sm mb-1'>ASV Status: <span className='ml-3 text-gray-300'>On</span></div>
            <hr className='border-gray-600'/>
            <div className='text-sm mb-1'>Battery Level: <span className='ml-3 text-gray-300'>13%</span></div>
            <hr className='border-gray-600'/>
            <div className='text-sm mb-1'>Disposal Time: <span className='ml-3 text-gray-300'>30 mins</span></div>
            <hr className='border-gray-600'/>
            <div className='text-sm mb-1'>Latitude: <span className='ml-3 text-gray-300'>12.9716 N</span></div>
            <hr className='border-gray-600'/>
            <div className='text-sm mb-1'>Longitude: <span className='ml-3 text-gray-300'>77.5946</span></div>
            <hr className='border-gray-600'/>
            <div className='text-sm mb-1'>Stability: <span className='ml-3 text-gray-300'>Stable</span></div>
            <hr className='border-gray-600'/>
            <div className='text-sm mb-1'>Signal Strength: <span className='ml-3 text-gray-300'>Strong</span></div>
            <hr className='border-gray-600'/>
            <div className='text-sm mb-1'>Progress: <span className='ml-3 text-gray-300'>39%</span></div>
            <hr className='border-gray-600'/>
            <div className='text-sm mb-1'>Coupling Dock: <span className='ml-3 text-gray-300'>Dock 4</span></div>
            <hr className='border-gray-600'/>
          </div>
        
        </div>
        <div className=' bg-gray-600 rounded-lg p-1'>

       
        <div className='mt-3 text-lg'>Controls</div>
        <div className="mt-3 w-full flex flex-col items-center">
          <FaArrowAltCircleUp className="text-3xl text-green-400 cursor-pointer hover:text-green-500 transition" />
          
          <div className="flex items-center gap-6 mt-2">
            <FaArrowAltCircleLeft className="text-3xl text-green-400 cursor-pointer hover:text-green-500 transition" />
            <span className="text-lg font-semibold"></span>
            <FaArrowAltCircleRight className="text-3xl text-green-400 cursor-pointer hover:text-green-500 transition" />
          </div>

          <FaArrowAltCircleDown className="text-3xl text-green-400 cursor-pointer hover:text-green-500 transition mt-2" />
        </div>
        </div>
      </div>
      <div>
        
      </div>
      
      </div>
      <div className='flex pl-4 gap-2'>
      <button className="bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700 transition">
        Start Process
      </button>
      <button className="bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700 transition">
        Go to Nearest Available Cargos
      </button>
      </div>
    </div>
  )
}
