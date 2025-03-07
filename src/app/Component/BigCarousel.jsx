"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

function BigCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const destinations = [
    {
      name: "Dubai",
      image: "/images/card1.png",
      amount: "4000",
      details1: "Dubai, a city of innovation, blends tradition and modernity. From bustling souks to record-breaking skyscrapers, it offers endless wonders.",
      details2: "Explore the Palm Jumeirah, Burj Khalifa, and desert safaris. Dubai is a hub of luxury, culture, and unforgettable experiences for all.",
    },
    {
      name: "Vietnam",
      image: "/images/card2.png",
      amount: "5000",
      details1: "Vietnam, a Southeast Asian gem, is known for its stunning landscapes, vibrant cities, and rich culture. Hanoi and Ho Chi Minh shine brightly.",
      details2: "From Ha Long Bay's beauty to Mekong Delta's charm, Vietnam offers history, street food, and warm hospitality to all travelers.",
    },
    {
      name: "Paris",
      image: "/images/card3.png",
      amount: "6000",
      details1: "Paris, the City of Light, enchants with its iconic Eiffel Tower, charming streets, and world-class art. The Louvre and Notre-Dame awe visitors.",
      details2: "From café culture to Seine river strolls, Paris offers romance, history, and timeless beauty, making it a dream destination for all.",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % destinations.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + destinations.length) % destinations.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getVisibleDestinations = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(destinations[(currentIndex + i) % destinations.length]);
    }
    return visible;
  };

  return (
    <div className="bg-pink-100 p-8 rounded-lg relative w-full mx-auto">
      <div className="bg-pink-100 p-8 rounded-lg relative max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Popular Destination</h2>

        {/* Top Section */}
        <div className="sm:flex flex-wrap lg:flex-nowrap gap-8">
          {/* Left Image */}
          <div className="relative flex-1 h-[500px] ">
            <img
              src={destinations[currentIndex].image}
              alt={destinations[currentIndex].name}
              className="absolute inset-0 rounded-lg object-cover w-full h-full"
            />
            <button
              onClick={handleNext}
              className="absolute top-1/2 -right-4 bg-red-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 transition transform -translate-y-1/2"
            >
              ▶
            </button>
          </div>
{/* buttom */}
<div className="flex flex-row md:absolute md:bottom-9 md:right-28 md:flex-row gap-4 z-1 mt-3 ">
          {getVisibleDestinations().map((destination, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-lg bg-white w-full sm:w-1/2 md:w-48 h-40 md:h-32"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="absolute inset-0 object-cover w-full h-full"
              />
              <div className="absolute bottom-0 w-full bg-opacity-50 text-center py-2">
                <h4 className="text-white font-bold">{destination.name}</h4>
              </div>
            </div>
          ))}
        </div>

          {/* Right Content */}
          <div className="flex-1 flex flex-col justify-between ">
            <div>
              <h3 className="text-2xl font-bold mb-4">{destinations[currentIndex].name}</h3>
              <p className="text-gray-700 mb-4">{destinations[currentIndex].details1}</p>
              <p className="text-gray-700 mb-4">{destinations[currentIndex].details2}</p>
              <p className="text-red-500 text-xl font-bold mb-4">{destinations[currentIndex].amount} Per Head</p>
              <div className="flex gap-4">
                <button className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition">Book Now</button>
                <button className="bg-gray-300 text-gray-700 py-2 px-6 rounded-lg hover:bg-gray-400 transition">Know More</button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        
      </div>
    </div>
  );
}

export default BigCarousel;
