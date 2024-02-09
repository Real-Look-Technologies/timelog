import React, { useState } from 'react';
import './Slider.css'; // Make sure to create a Slider.css file in the same directory
import img from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpeg'


const Slider = () => {
  // Define the array of image URLs directly within the component
  const images = [
     img,
     img2,
     img3,
    // Add as many images as you like
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider">
      <div className="slider-images">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      </div>
      <div className="slider-arrows">
        <button onClick={goToPrevious}>&lt;</button>
        <button onClick={goToNext}>&gt;</button>
      </div>
      <div className="slider-pagination">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;