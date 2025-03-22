"use client";
import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ExploreAndaman = () => {
  const PrevButton = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75"
    >
      <ChevronLeft className="w-6 h-6" />
    </button>
  );

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
      title: "Radhanagar Beach",
      description: "Relax on the pristine white sands of Radhanagar Beach.",
      image: "/International/radhanagar-beach.jpg",
    },
    {
      id: 2,
      title: "Scuba Diving Adventure",
      description: "Dive into the vibrant marine life at Havelock Island.",
      image: "/International/scuba-diving.jpg",
    },
    {
      id: 3,
      title: "Cellular Jail Visit",
      description: "Explore the history at the iconic Cellular Jail in Port Blair.",
      image: "/International/cellular-jail.jpg",
    },
    {
      id: 4,
      title: "Ross Island",
      description: "Discover the ruins and charm of historic Ross Island.",
      image: "/International/ross-island.jpg",
    },
  ];

  return (
    <div className="px-4 py-10 bg-pink-100 w-[100%] md:w-[90%] mx-auto">
      <h2 className="text-3xl font-bold text-left mb-6">Explore Andaman</h2>
      <Slider {...settings} className="gap-5">
        {cards.map((card) => (
          <div key={card.id} className="p-2 px-3">
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

export default ExploreAndaman;
