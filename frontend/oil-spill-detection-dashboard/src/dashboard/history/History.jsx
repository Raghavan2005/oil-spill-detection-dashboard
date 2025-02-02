import React from "react";

export default function History() {


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
    <div className="w-[20%]">
    <iframe
        src="http://localhost:5173/real"
        width="100%"
        height="100%"
        style={{ border: "none" }}
        title="Embedded Page"
      />
        </div>
    </div>
  );
}
