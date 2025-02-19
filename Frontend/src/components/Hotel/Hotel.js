import React from 'react';
import './Hotel.css';
import {  Link } from "react-router-dom";

const Hotel = () => {
  return (
    <div className="homepage">
      <header className="hotel-header">
        <h1>சுருளி விலாஸ்</h1>
        <p>நகரின் மையத்தில் உங்கள் ஆடம்பர பயணம்</p>
      </header>
      <main className="content">
        <section className="intro">
          <h2>சுருளி விலாஸ் உங்களை வரவேற்கிறது</h2>
          <p>
          நவீன வசதிகள் சூடான, தனிப்பயனாக்கப்பட்ட சேவையை சந்திக்கும் சுருளி விலாஸில் ஆடம்பர மற்றும் வசதியின் சுருக்கத்தை அனுபவிக்கவும். நீங்கள் வணிகத்திற்காகவோ அல்லது ஓய்வுக்காகவோ இங்கு வந்தாலும், மறக்கமுடியாத மற்றும் வசதியான தங்குமிடத்தை நாங்கள் உறுதி செய்கிறோம்.
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
        <p>Email: contact@surulivilas.com</p>
        <p>Phone: +91 0123456789</p>
        <p>Address: 7/13 surulivilas, Madurai - 625001</p>
      </footer>
    </div>
  );
};

export default Hotel;
