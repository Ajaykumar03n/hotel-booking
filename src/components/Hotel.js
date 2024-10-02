// src/components/Hotel.js

import React from 'react';
import Navbar from './Navbar';
import './Hotel.css';

const Hotel = () => {
  return (
    <div className="homepage">
      <header className="header">
        <h1>Hotel Atrium</h1>
        <Navbar />
      </header>
      <main className="content">
        <section className="intro">
          <h2>Welcome to Hotel Atrium</h2>
          <p>
            Experience the epitome of luxury and comfort at Hotel Atrium, where modern amenities meet warm, personalized service. Whether you're here for business or leisure, we ensure a memorable and comfortable stay.
          </p>
          <img src="/styles/hotel2.png" alt="Hotel Atrium" className="hotel-image" />
        </section>
        <section className="amenities">
          <h2>Our Amenities</h2>
          <div className="amenity">
            <img src="/styles/pool.png" alt="Swimming Pool" className="amenity-image" />
            <div className="amenity-details">
              <h3>Swimming Pool</h3>
              <p>Dive into relaxation at our sparkling swimming pool, perfect for unwinding or starting your day.</p>
            </div>
          </div>
          <div className="amenity">
            <img src="/styles/complimentary.png" alt="Complimentary Breakfast" className="amenity-image" />
            <div className="amenity-details">
              <h3>Complimentary Breakfast</h3>
              <p>Enjoy a delicious breakfast buffet to fuel your day, featuring hot and cold dishes, coffee, and pastries.</p>
            </div>
          </div>
          <div className="amenity">
            <img src="/styles/gym.png" alt="Fitness Center" className="amenity-image" />
            <div className="amenity-details">
              <h3>Fitness Center</h3>
              <p>Maintain your fitness routine with our 24/7 fitness center equipped for cardio, weight training, and yoga.</p>
            </div>
          </div>
          <div className="amenity">
            <img src="/styles/spa.png" alt="Spa and Wellness Center" className="amenity-image" />
            <div className="amenity-details">
              <h3>Spa and Wellness Center</h3>
              <p>Indulge in relaxation with rejuvenating massages, facials, and body treatments at our onsite spa.</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <h3>Contact Us</h3>
        <p>Email: contact@hotelatrium.com</p>
      </footer>
    </div>
  );
};

export default Hotel;
