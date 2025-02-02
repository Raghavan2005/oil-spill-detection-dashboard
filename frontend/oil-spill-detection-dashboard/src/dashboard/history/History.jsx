import React from "react";
import { useNavigate } from 'react-router-dom';
export default function History() {

  const navigate = useNavigate();
  return (
    <div className="flex">
   <div className="p-5 rounded-lg"  style={{ width: "80%", height: "100vh" }}>
      <iframe
        src="http://localhost:8080/"
        width="100%"
        height="100%"
        style={{ border: "none" }}
        title="Embedded Page"
      />
    </div>
    <div className="w-[20%] p-5">
        <h1 className="text-lg p-2">Archive</h1> 
    <button onClick={()=>navigate('/2017')} className="bg-blue-600 w-full text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
      2017
      </button>
      <hr className="pt-3"></hr>
      <button onClick={()=>navigate('/2019')} className="bg-blue-600 w-full  text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
      2019
      </button>
      <hr className="pt-3"></hr>
        </div>
    </div>
  );
}
