import React from 'react';
import { BrowserRouter as Router, Routes, Route ,Navigate  } from 'react-router-dom';
import Home from './Home.jsx';
import Real from './dashboard/realtime/Real.jsx';
import Ship from './dashboard/ship/ship.jsx';
import FInder from './dashboard/Finder.jsx';
const App = () => {
  return (
    <Router>
      <div>
      
        {/* Route Configuration */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/real" element={<Real />} />
          <Route path="/control" element={<Ship />} />
          <Route path="/finder" element={<FInder />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
