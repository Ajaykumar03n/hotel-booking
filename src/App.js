import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hotel from "./components/Hotel";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Rooms from "./components/Rooms";
import Single from './components/Single';
import Double from './components/Double';
import Luxury from './components/Luxury';
import Restaurant from './components/Restaurant'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/single" element={<Single />} />
          <Route path="/double" element={<Double />} />
          <Route path="/luxury" element={<Luxury />} />
          <Route path="/restaurant" element={<Restaurant/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
