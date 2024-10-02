import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './Restaurant.css';
<br></br>
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
      <header className="header">
          <h1>Hotel Atrium</h1>
        <Navbar />

      </header>
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
            <p >
              Welcome to Atrium Restaurant at Hotel Atrium, one of the premier dining destinations in Erode. Nestled in the heart of the city, our restaurant promises a delightful experience for all who visit. Whether you're seeking a cozy dinner for two, a family outing, or celebrating a special occasion, Atrium offers a welcoming ambiance and impeccable service that makes every visit memorable.
            </p>
            <p >
              <strong>Fine Dining Experience:</strong> Step into Atrium and indulge in a culinary journey that combines exquisite flavors with warm hospitality. Our menu features a delectable array of dishes crafted by our talented chefs, blending local favorites with international influences. From traditional South Indian delicacies to continental delights, there's something to please every palate.
            </p>
            <div className="image-container">
              <img src="styles/rest_4.avif" alt="Fine Dining Experience" className="img1" />
            </div>
            <p >
              <strong>Family-Friendly Atmosphere:</strong> Atrium Restaurant is designed to cater to families, making it an ideal choice for gatherings of all sizes. We offer a kid-friendly menu and a spacious, comfortable dining area where children can feel at ease, ensuring that everyone in <br></br>the family enjoys their dining experience.
            </p>
            <p>
              <strong>Private Dining and Events:</strong> Celebrate life's special moments at Atrium with our private dining <br></br>and event services. Whether it's a birthday, anniversary, corporate event, or any other occasion, our team will work with you to create a personalized experience that <br></br>exceeds your expectations.
            </p>
            <p>
              <strong>Atrium Lounge:</strong> After a satisfying meal, unwind at our Atrium Lounge, where you can enjoy a selection of beverages and cocktails in a relaxed setting. It's the perfect spot to conclude your dining experience or to meet friends and colleagues for a casual drink.
            </p>

            <p >
              <strong>Visit Us:</strong> Discover the charm of Atrium Restaurant at Hotel Atrium and indulge in a culinary journey like no other in Erode. We look forward to welcoming you for a memorable dining experience that combines great food, warm hospitality, and a welcoming atmosphere.
            </p>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
