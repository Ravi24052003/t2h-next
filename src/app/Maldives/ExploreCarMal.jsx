"use client";
import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ExploreCarMal = () => {

    const PrevButton = ({ onClick }) => (
        <button
          onClick={onClick}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      );
    
      // Custom Next Button
      const NextButton = ({ onClick }) => (
        <button
          onClick={onClick}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      );
    

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
    autoplaySpeed: 2000,
    speed: 500,
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


  

  const cards = [
    {
      id: 1,
      title: "Explore Dubai",
      description: "Discover the beauty of Dubai's skyline.",
      image: "/International/Maldives-1.png",
    },
    {
      id: 2,
      title: "Romantic Dubai",
      description: "Experience love in the city of lights.",
      image: "/International/Maldives-2.png",
    },
    {
      id: 3,
      title: "Adventures in Dubai",
      description: "Immerse yourself in tropical paradise.",
      image: "/International/Maldives-3.png",
    },
    {
      id: 4,
      title: "Dubai tour",
      description: "Relax on pristine beaches.",
      image: "/International/Maldives-4.png",
    },
  ];

  return (
    <div className="px-4 py-10 bg-pink-100 w-[100%] md:w-[90%] mx-auto">
      <h2 className="text-3xl  font-bold text-left mb-6">Explore Maldives</h2>
      <Slider {...settings} className="gap-5">
        {cards.map((card) => (
          <div key={card.id} className="p-2 px-3 ">
            <div className="relative group w-[1/4] h-[250px] rounded-lg overflow-hidden shadow-lg">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="text-center p-4">
                  <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                  <p className="text-sm">{card.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ExploreCarMal;
