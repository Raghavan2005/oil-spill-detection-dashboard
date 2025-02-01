import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Real from './dashboard/realtime/Real.jsx';
import Ship from './dashboard/ship/ship.jsx';
const App = () => {
  return (
    <Router>
      <div>
      
        {/* Route Configuration */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/real" element={<Real />} />
          <Route path="/control" element={<Ship />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
