"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

function Card1() {
  const cards = [
    {
      id: 1,
      placeName: "Dubai",
      images: ["/International/Dubai-1.png", "/International/Dubai-2.png", "/International/Dubai-3.png"],
      amount: "2000",
      link: "/Dubai",
      details:
        "Dubai, a city of innovation, blends tradition and modernity. From bustling souks to record-breaking skyscrapers, it offers endless wonders.",

    },
    {
      id: 2,
      placeName: "Vietnam",
      images: ["/International/vietnam-1.png", "/International/vietnam-2.png", "/International/vietnam-3.png"],
      amount: "3000",
      link: "/Vietnam",
      details:
        "Vietnam, a land of stunning landscapes, rich history, and vibrant culture, boasts iconic sites like Ha Long Bay and ancient Hoi An.",
    },
    {
      id: 3,
      placeName: "Paris",
      images: ["/International/Paris-1.png", "/International/Paris-2.png", "/International/Paris-3.png"],
      amount: "4000",
      link: "/Paris",
      details:
        "Paris, the City of Light, enchants with its iconic Eiffel Tower, charming streets, world-class art, and a timeless romantic atmosphere.",
    },
    {
      id: 4,
      placeName: "New York",
      images: ["/International/NewYork-1.png", "/International/NewYork-2.png", "/International/NewYork-3.png"],
      amount: "5000",
      link: "/NewYork",
      details:
        "New York, the city that never sleeps, dazzles with Times Square, Central Park, skyscrapers, diverse culture, and endless opportunities",
    },
    {
      id: 5,
      placeName: "Thailand",
      images: ["/images/card2.png", "/images/card3.png", "/images/card1.png"],
      amount: "6000",
      link: "/Thailand",
      details:
        "Tokyo, a vibrant blend of tradition and futurism, offers ancient temples, neon-lit streets, cutting-edge tech, and world-renowned cuisine.",
    },
    {
      id: 6,
      placeName: "Maldive",
      images: ["/International/Maldives-1.png", "/International/Maldives-2.png", "/International/Maldives-3.png"],
      amount: "6000",
      link: "/Maldives",
      details:
        "Tokyo, a vibrant blend of tradition and futurism, offers ancient temples, neon-lit streets, cutting-edge tech, and world-renowned cuisine.",
    },
  ];

  const settings = {
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000, // Transition every 3 seconds
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
        Trending Destinations
      </h1>
      <Slider {...settings}>
        {cards.map((card) => (
          <div key={card.id} className="px-2">
            <div className="bg-white border rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow duration-300">
              <div className="relative h-60 overflow-hidden rounded-lg">
                <Slider
                  arrows={false}
                  autoplay={true}
                  autoplaySpeed={3000} // Each card's images change every 1 second
                  infinite={true}
                >
                  {card.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={card.placeName}
                      className="w-full h-60 object-cover"
                    />
                  ))}
                </Slider>
              </div>
              <div className="mt-2 text-center">
                <h3 className="text-xl font-semibold">{card.placeName}</h3>
                <p className="text-xs">{card.details}</p>
                <div className="mt-4 flex  gap-3  w-[100%]">
                  {/* <Link href="/Contactus "><div className=" ml-5 w-[1/4] rounded-md bg-red-600 p-2">
                    <Phone className="text-white w-6 h-6 " />
                  </div></Link>
                  <Link href={card.link} > <button className="bg-red-500 w-[100%] text-white text-sm px-4 py-2 rounded-lg shadow">
                    Book now
                  </button></Link> */}
                  <Link href="/Contactus " className="w-[13%] "><div className="bg-red-600 p-2  rounded-lg"><Phone className="text-white h-5 " /></div></Link>
                  <Link href={card.link} className="w-[87%] "><div className="bg-red-600 rounded-lg shadow p-2 flex "><button className=" text-white text-sm  w-full ">Book Now</button></div></Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Card1;
