"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TrendingWeddingDestinations() {
  const card2 = [
    { name: "name1", wedding: "Wedding Planner1", img: "/International/wedding1.jpg" },
    { name: "name2", wedding: "Wedding Planner2", img: "/International/wedding.jpg" },
    { name: "name3", wedding: "Wedding Planner3", img: "/images/card1.png" },
    { name: "name4", wedding: "Wedding Planner4", img: "/images/card1.png" },
    { name: "name5", wedding: "Wedding Planner5", img: "/images/card1.png" },
    { name: "name6", wedding: "Wedding Planner6", img: "/images/card1.png" },
  ];

  // Slick carousel settings
  const settings = {
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="px-[5%] py-5 bg-pink-100">
      <h1 className="text-center font-bold text-2xl mb-5">
        Trending Wedding Destinations
      </h1>
      {/* Add padding within each slide for spacing */}
      <Slider {...settings}>
        {card2.map((card, index) => (
          <div
            key={index}
            className="px-2" // Add horizontal padding for spacing
          >
            <div className="bg-[url('/images/weddingslide1.jpg')] bg-cover bg-center rounded-lg shadow-lg p-4 text-white h-[195px]">
              <div className="flex justify-between">
                <div className="w-2/3 p-4">
                  <h5 className="text-sm mt-2">{card.name}</h5>
                  <p className="text-lg">{card.wedding}</p>
                  <button className="bg-[#FFD7A9] text-red-900 py-2 px-6 rounded-2xl hover:bg-yellow-600 transition mt-9">
                    Explore Now
                  </button>
                </div>
                <div className="w-[40%]">
                  <img
                    src={card.img}
                    alt={card.name}
                    className="object-fill w-full h-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TrendingWeddingDestinations;
