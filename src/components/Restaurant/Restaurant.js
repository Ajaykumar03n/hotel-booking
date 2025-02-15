import React, { useState, useEffect } from 'react';
import './Restaurant.css';

const Restaurant = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = [
    'styles/rest_1.jpeg',
    'styles/rest_2.jpeg',
    'styles/rest_3.jpeg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="restaurant-page">
      <div className="container">
        <div className="slideshow-container">
          {slides.map((slide, index) => (
            <div key={index} className={`mySlides ${index === slideIndex ? 'active' : ''}`}>
              <img src={`/${slide}`} alt={`Restaurant Slide ${index + 1}`} />
              <div className="numbertext">{index + 1} / {slides.length}</div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col">
            <h3>Hotel Atrium Restaurant</h3>
            <p>
              Welcome to Atrium Restaurant at Hotel Atrium, one of the premier dining destinations. Our restaurant promises a delightful experience with a welcoming ambiance and impeccable service.
            </p>
            <p>
              <strong>Fine Dining Experience:</strong> Indulge in a culinary journey that combines exquisite flavors with warm hospitality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
