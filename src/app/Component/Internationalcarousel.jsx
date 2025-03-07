
"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import International from "./International";

const InternationalCarousel = () => {
  const destinations = [
    {
      name: "New York",
      duration: "2d/1n",
      price: "23,000.00",
      organizer: "Amir Khan",
      images: ["/International/NewYork-1.png", "/International/NewYork-2.png", "/International/NewYork-3.png"],
    },
    {
      name: "Paris",
      duration: "3d/2n",
      price: "13,000.00",
      organizer: "Amir Khan",
      images: ["/International/Paris-1.png", "/International/Paris-2.png", "/International/Paris-3.png"],
    },
    {
      name: "Dubai",
      duration: "6d/5n",
      price: "50,000.00",
      organizer: "Amir Khan",
      images: ["/International/Dubai-1.png", "/International/Dubai-2.png", "/International/Dubai-3.png"],
    },
    {
      name: "Vietnam",
      duration: "4d/3n",
      price: "13,000.00",
      organizer: "Amir Khan",
      images:["/International/vietnam-1.png", "/International/vietnam-2.png", "/International/vietnam-3.png"],
    },
    {
      name: "Maldives",
      duration: "5d/4n",
      price: "40,000.00",
      organizer: "Amir Khan",
      images: ["/International/Maldives-2.png", "/International/Maldives-3.png", "/International/Maldives-1.png"],
    },
  ];

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
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    
    <div className="w-full bg-pink-100 py-10">
      <h2 className="text-center text-3xl font-semibold mb-6">International Destinations</h2>

      <div className="max-w-screen-xl mx-auto">
        <Slider {...settings}>
          {destinations.map((item, index) => (
            <div key={index} className="px-4">
              <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
                {/* Image Section */}
                <Slider
                  arrows={false}
                  autoplay={true}
                  autoplaySpeed={3000} // Each card's images change every 1 second
                  infinite={true}
                >
                  {item.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={item.placeName}
                      className="w-full h-60 object-cover"
                    />
                  ))}
                </Slider>
                {/* Details Section */}
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{item.duration}</p>
                  <p className="text-sm text-gray-600 mt-1">{item.organizer}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-lg font-semibold text-red-500">
                      Rs. {item.price} /-
                    </span>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    
  );
};

export default InternationalCarousel;
