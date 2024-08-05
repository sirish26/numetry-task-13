import React, { useState, useEffect } from 'react';

const slides = [
  { title: 'CHAT GPT4', description: 'A new Age Ai with the mose imortant updates and style with new ara style', image: 'https://miro.medium.com/v2/resize:fit:1400/1*jtdlNnWjaexRDS8nvLCtaw.png' },
  { title: 'GOOGLE GEMINI', description: 'google gemini is a new ai upgraded', image: 'https://cxotoday.com/wp-content/uploads/2023/12/Gemini.png' },
  { title: 'Full Stack Devlopement', description: 'its a new age full stack development course', image: 'https://trainings.internshala.com/cached_uploads/full-stack-web-development-specialization-v2/banner_hero.png' }
];

const Popup = ({ closePopup }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="trending-popup-overlay">
      <div className="trending-popup-content">
        <div className="trending-slideshow">
          {slides.map((slide, index) => (
            <div key={index} className={`trending-slide ${index === currentSlide ? 'active' : ''}`}>
              <img src={slide.image} alt={slide.title} />
              <div className="trending-slide-text">
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="trending-close-button" onClick={closePopup}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
