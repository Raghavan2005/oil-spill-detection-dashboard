import React from 'react';
import { BrowserRouter as Router, Routes, Route ,Navigate  } from 'react-router-dom';
import Home from './Home.jsx';
import Real from './dashboard/realtime/Real.jsx';
import Ship from './dashboard/ship/ship.jsx';
import FInder from './dashboard/Finder.jsx';
import History from './dashboard/history/History.jsx';
import Page_2019 from './dashboard/Page_2019.jsx';
import Page_2017 from './dashboard/Page_2017.jsx';
import D3D from './dashboard/D3D.jsx';
const App = () => {
  return (
    <Router>
      <div>
      
        {/* Route Configuration */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/real" element={<Real />} />
          <Route path="/control" element={<Ship />} />
          <Route path="/finder" element={<FInder   />} />
          <Route path="/history" element={<History   />} />
          <Route path="/2019" element={<Page_2019   />} />
          <Route path="/2017" element={<Page_2017   />} />
          <Route path="/D3D" element={<D3D/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
