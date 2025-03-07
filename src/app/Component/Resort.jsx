"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { FaHeart, FaStar, FaPhone, FaTag } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Resort() {
  const resorts = [
    {
      id: 1,
      images: ["/Resort/The_Yama_Resort-2.png", "/Resort/The_Yama_Resort-3.png", "/Resort/The_Yama_Resort-4.png"],
      name: "The Yhami Resort",
      location: "Nepal",
      phone: "9878746753",
      category: "Honeymoon",
      price: "Rs 29,899.00",
      rating: 4.2,
    },
    {
      id: 2,
      images: ["/Resort/The_Everest_Stay-3.png", "/Resort/The_Everest_Stay-4.png", "/Resort/The_Everest_Stay-5.png"],
      name: "The Everest Stay",
      location: "Nepal",
      phone: "9878746753",
      category: "Luxury",
      price: "Rs 35,499.00",
      rating: 4.8,
    },
    {
      id: 3,
      images: ["/Resort/Serene_Escape_Resort-1.png", "/Resort/Serene_Escape_Resort-4.png", "/Resort/Serene_Escape_Resort-5.png"],
      name: "Serene Escape Resort",
      location: "Nepal",
      phone: "9878746753",
      category: "Adventure",
      price: "Rs 27,999.00",
      rating: 4.5,
    },
    {
      id: 4,
      images: ["/Resort/Mountain_Bliss_Resort-1.png", "/Resort/Mountain_Bliss_Resort-2.png", "/Resort/Mountain_Bliss_Resort-3.png"],
      name: "Mountain Bliss Resort",
      location: "Nepal",
      phone: "9878746753",
      category: "Honeymoon",
      price: "Rs 31,799.00",
      rating: 4.7,
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
    <div className="bg-pink-100 py-10 px-[5%]">
      <h2 className="text-center text-2xl font-bold mb-6">Our Resorts</h2>
      <Slider {...settings}>
        {resorts.map((resort) => (
          <div key={resort.id} className="px-2">
            <div className="w-auto bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="relative h-48 w-full">
                {/* Slider for each resort's images */}
                <Slider
                  arrows={false}
                  autoplay={true}
                  autoplaySpeed={3000}
                  infinite={true}
                >
                  {resort.images.map((image, index) => (
                    <div key={index} className="relative h-48 w-full">
                      <Image
                        src={image}
                        alt={resort.name}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
              {/* Rating and Heart Button */}
              <div className="absolute top-2 left-2 bg-green-500 text-white text-sm px-2 py-1 rounded-lg flex items-center">
                <FaStar className="mr-1" />
                {resort.rating}
              </div>
              <button className="absolute top-2 right-2 bg-white text-gray-600 p-2 rounded-full shadow-md">
                <FaHeart />
              </button>
              {/* Resort Details */}
              <div className="p-4">
                <h3 className="text-lg font-bold">{resort.name}</h3>
                <div className="flex items-center text-sm text-gray-500 my-2">
                  <span className="flex items-center mr-4">
                    <FaTag className="mr-1" />
                    {resort.location}
                  </span>
                  <span className="flex items-center">
                    <FaPhone className="mr-1" />
                    {resort.phone}
                  </span>
                </div>
                <p className="text-sm text-gray-500">{resort.category}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold">{resort.price}</span>
                  <button className="bg-red-500 text-white text-sm px-4 py-2 rounded-lg shadow">
                    Book now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Resort;
