// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/hotel">Home</Link>
    <Link to="/rooms">Rooms</Link>
    <Link to="/restaurant">Restaurant</Link>
  </nav>
);

export default Navbar;
