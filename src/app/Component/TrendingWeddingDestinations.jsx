"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

function TrendingWeddingDestinations() {
  const card2 = [
    { name: "Sycorian Matrimonial Services", wedding: "We have our in-house experts with a profound knowledge in Indian cultures", img: "/International/wedding1.jpg",link:"https://sycorian.com/" },
    { name: "Wedgate Matrimony & Services", wedding: "We, at Wedgate Matrimony, with our team of in house dedicated Marriage Counsellors", img: "/International/wedding.jpg",link:"https://www.wedgatematrimony.com/" },
    { name: "Vikas gupta ji marriage bureau", wedding: "Vikas Gupta Ji Marriage Bureau is one of the most trusted and reliable matrimonial services", img: "/images/vikash.jpg",link:"https://vikasguptashadi.com/" },
    { name: "Make My Lagan", wedding: "One of the best Matrimonial Company in India", img: "/images/make-my-lagan.jpg",link:"https://www.makemylagan.com/" },
    { name: "Golden Matrimonial Services", wedding: "We help you find your perfect partner through our personalised matchmaking services.", img: "/images/Golden-Matrimonial-Services.jpg",link:"https://www.goldenmatrimonial.com/" },
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
            <div className="bg-[url('/images/weddingslide1.jpg')] bg-cover bg-center rounded-lg shadow-lg p-4 text-white h-[1195px]"></div>
              <div className="flex justify-between">
                <div className="w-2/3 p-1 flex flex-col justify-between">
                  <h5 className="text-sm font-bold mb-2">{card.name}</h5>
                  <p className="text-[13px] mb-auto line-clamp-3">{card.wedding}</p>
                  <Link href={card.link}><button className="bg-[#FFD7A9] text-red-900 py-2 px-4 rounded-2xl hover:bg-yellow-600 transition ">
                    Explore Now
                  </button></Link>
                </div>
                <div className="w-[40%]  ">
                  <img
                    src={card.img}
                    alt={card.name}
                    className=" object-fill w-full h-[170px] rounded-lg "
                  />
                </div>
              </div>
            </div>
          // </div>
        ))}
      </Slider>
    </div>
  );
}

export default TrendingWeddingDestinations;
