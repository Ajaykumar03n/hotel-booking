import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar/Navbar';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Hotel from './components/Hotel/Hotel';
import Rooms from './components/Rooms/Rooms';
import Single from './components/Rooms/Single';
import Double from './components/Rooms/Double';
import Luxury from './components/Rooms/Luxury';
import Restaurant from './components/Restaurant/Restaurant';
import Payment from './components/Payments/Payment';
import './styles/global.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/single" element={<Single />} />
        <Route path="/double" element={<Double />} />
        <Route path="/luxury" element={<Luxury />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;
