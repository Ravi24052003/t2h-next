"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Services() {
  const services = [
    {
      id: 1,
      image: "/images/services1.jpg",
      title: "Hotels",
    },
    {
      id: 2,
      image: "/images/services2.jpg",
      title: "Photoshoot",
    },
    {
      id: 3,
      image: "/images/services3.jpg",
      title: "Wedding",
    },
    {
      id: 4,
      image: "/images/services1.jpg",
      title: "Event",
    },
  ];

  const settings = {
   
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-pink-100 py-10 w-[70%] mx-auto">
      <h2 className="text-center text-2xl font-bold mb-6">Our Services</h2>

      <div className="mx-4">
        <Slider {...settings}>
          {services.map((service) => (
            <div key={service.id} className="px-7">
              <div className="w-[1/4] h-[200px] rounded-2xl overflow-hidden shadow-lg">
                <div className="relative w-full h-[200px]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2">
                    <h4 className="text-lg font-bold">{service.title}</h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Services;
