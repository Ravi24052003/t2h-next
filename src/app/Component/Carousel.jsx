"use client";
import { useState, useEffect } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/images/weddingslide1.jpg",
    "/images/weddingslide2.jpg",
    "/images/weddingslide1.jpg",
    "/images/weddingslide2.jpg",
    "/images/weddingslide1.jpg",
    "/images/weddingslide2.jpg",
    "/images/weddingslide1.jpg",
  ];

  // Automatically loop to the next slide
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000);
    return () => clearInterval(interval); // Cleanup
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const getSlidePosition = (index) => {
    const relativeIndex = (index - currentIndex + images.length) % images.length;

    if (relativeIndex === 2) return "scale-150 z-10"; // Center slide
    if (relativeIndex === 1 || relativeIndex === 3) return "scale-110 z-5"; // Left or right of center
    return "scale-100 opacity-50"; // All others
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
      <div className="flex justify-between items-center">
        <button
          onClick={goToPrev}
          className="absolute left-0 z-20 bg-gray-700 text-white p-3 rounded-full top-1/2 transform -translate-y-1/2"
        >
          Prev
        </button>
        <div className="flex items-center justify-center w-full space-x-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`transition-transform duration-500 ease-in-out transform ${getSlidePosition(
                index
              )}`}
              style={{
                flex: "0 0 auto",
                width: "150px", // Adjust the size of slides
                height: "200px",
              }}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
        <button
          onClick={goToNext}
          className="absolute right-0 z-20 bg-gray-700 text-white p-3 rounded-full top-1/2 transform -translate-y-1/2"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
