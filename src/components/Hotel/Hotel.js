import React from 'react';
import './Hotel.css';
import {  Link } from "react-router-dom";

const Hotel = () => {
  return (
    <div className="homepage">
      <header className="hotel-header">
        <h1>Hotel Atrium</h1>
        <p>Your Luxury Getaway in the Heart of the City</p>
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
          <div className="amenities-grid">
            <div className="amenity">
              <img src="/styles/pool.png" alt="Swimming Pool" className="amenity-image" />
              <h3>Swimming Pool</h3>
              <p>Dive into relaxation at our sparkling swimming pool, perfect for unwinding or starting your day.</p>
            </div>
            <div className="amenity">
              <img src="/styles/spa.png" alt="Spa and Wellness" className="amenity-image" />
              <h3>Spa and Wellness</h3>
              <p>Indulge in rejuvenating treatments at our luxury spa and wellness center.</p>
            </div>
            <div className="amenity">
              <img src="https://cdn.sandals.com/sandals/v12/images/general/all-inclusive/dining/dining-restaurant/le-gourmand.jpg" alt="Gourmet Dining" className="amenity-image" />
              <h3>Gourmet Dining</h3>
              <p>Enjoy exquisite cuisines crafted by our expert chefs in a sophisticated ambiance.</p>
            </div>
            <div className="amenity">
              <img src="/styles/gym.png" alt="Fitness Center" className="amenity-image" />
              <h3>Fitness Center</h3>
              <p>Stay active at our state-of-the-art fitness center, open 24/7 for your convenience.</p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2>Book Your Stay Today!</h2>
          <p>Experience unparalleled luxury and comfort. Book your room now and make memories that last a lifetime.</p>
          <Link to="/Rooms"><button className="cta-button">Book Now</button></Link>
        </section>
      </main>
      <footer className="footer">
        <h3>Contact Us</h3>
        <p>Email: contact@hotelatrium.com</p>
        <p>Phone: +1 234 567 890</p>
        <p>Address: 123 Luxury Street, City Center</p>
      </footer>
    </div>
  );
};

export default Hotel;
