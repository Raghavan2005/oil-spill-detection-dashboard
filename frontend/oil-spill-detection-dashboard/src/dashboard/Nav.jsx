import React from "react";

export default function Nav() {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between">
      {/* Dashboard Title */}
      <h1 className="text-xl font-bold text-black">Oil Spill Detection Dashboard</h1>
      {/* Control Button */}
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
        Control
      </button>
    </div>
  );
}
