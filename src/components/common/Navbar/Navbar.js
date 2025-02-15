import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <div>
    <header>
      <h1>HOTEL ATRIUM</h1>
    </header>
    <nav className="navbar">
      <Link to="/hotel">Home</Link>
      <Link to="/rooms">Rooms</Link>
      <Link to="/restaurant">Restaurant</Link>
      <Link to="/feedback">F & Q</Link>
    </nav>
  </div>
);

export default Navbar;
