
"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import International from "../Component/International";
import InternationalCarousel from "../Component/Internationalcarousel";

const page = () => {
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
    <>
    <Navbar/>
    <InternationalCarousel/>
    <International/>
  <Footer/> 
    </>
  );
};

export default page;
