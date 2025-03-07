
"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import DomesticDes from "../Component/DomesticDes";

const page = () => {
  const destinations = [
    {
      name: "Kashmir",
      duration: "2d/1n",
      price: "23,000.00",
      organizer: "Amir Khan",
      images: ["/Domestic/Kashmir-1.png", "/Domestic/Kashmir-2.png", "/Domestic/Kashmir-3.png"],
    },
    {
      name: "Andaman",
      duration: "3d/2n",
      price: "13,000.00",
      organizer: "Amir Khan",
      images: ["/Domestic/Andaman-1.png", "/Domestic/Andaman-2.png", "/Domestic/Andaman-3.png"],
    },
    {
      name: "Goa",
      duration: "6d/5n",
      price: "50,000.00",
      organizer: "Amir Khan",
      images: ["/Domestic/Goa-1.png", "/Domestic/Goa-2.png", "/Domestic/Goa-3.png"],
    },
    {
      name: "Kerala",
      duration: "4d/3n",
      price: "13,000.00",
      organizer: "Amir Khan",
      images:["/Domestic/Kerala-1.png", "/Domestic/Kerala-2.png", "/Domestic/Kerala-3.png"],
    },
    {
      name: "Leh",
      duration: "5d/4n",
      price: "40,000.00",
      organizer: "Amir Khan",
      images: ["/Domestic/LehLadakh-1.png", "/Domestic/LehLadakh-2.png", "/Domestic/LehLadakh-3.png"],
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
    <>
    <Navbar/>
    <div className="w-full bg-pink-100 py-10">
      <h2 className="text-center text-3xl font-semibold mb-6">Domestic Destinations</h2>

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
    <DomesticDes/>
  <Footer/> 
    </>
  );
};

export default page;
