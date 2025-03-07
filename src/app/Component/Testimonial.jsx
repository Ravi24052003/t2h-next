"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
  const testimonials = [
    {
      name: "Asif Khan",
      review:
        "Our honeymoon was absolutely magical! The team took care of every detail, and we couldn’t have asked for a better experience.",
      location: "Maldives",
      image: "/images/card1.png",
    },
    {
      name: "isha",
      review:
        "Dubai was an amazing experience! The desert safari, Burj Khalifa, and shopping were unforgettable. Highly recommend this trip!",
      location: "Dubai",
      image: "/Domestic/kashmir-4.png",
    },
    {
      name: "Sophia",
      review:
        "Thanks to this amazing team, we enjoyed a luxurious and stress-free honeymoon. Highly recommended!",
      location: "Santorini, Greece",
      image: "/images/card2.png",
    },
    {
      name: "Siya",
      review:
        "The packages were perfectly planned and within our budget. We felt so special throughout our trip. Thank you!",
      location: "Bali, Indonesia",
      image: "/images/card3.png",
    },
    {
      name: "Ravi",
      review:
        "Paris was magical! The Eiffel Tower, Seine River, and charming streets made it a dream trip. Loved it!",
      location: "Paris",
      image: "/Domestic/kashmir-3.png",
    },
    {
      name: "Rahul singh",
      review:
        "New York was incredible! Times Square, Central Park, and the Statue of Liberty made it unforgettable. Must visit!",
      location: "New York",
      image: "/Domestic/kashmir-5.png",
    },
  ];

  const settings = {
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="bg-pink-100 py-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        What Our Couples Say
      </h2>
      <div className="max-w-screen-xl mx-auto">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-10">
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-center text-gray-800">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-center text-gray-500 italic mt-2">
                  "{testimonial.review}"
                </p>
                <p className="text-center text-gray-600 mt-4">
                  <strong>{testimonial.location}</strong>
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonials;
