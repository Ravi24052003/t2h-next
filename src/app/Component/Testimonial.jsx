"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(
          "https://t2hdashboard.theholistay.in/public-image-text-testimonials"
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data); // Debugging: log the fetched data
        const baseURL = "https://t2hdashboard.theholistay.in/";
        const updatedData = data.map((item) => ({
          ...item,
          image: item.image.startsWith("http") ? item.image : `${baseURL}${item.image}`,
        }));
        setTestimonials(updatedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchTestimonials();
  }, []);
  
  

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

  if (loading) {
    return (
      <div className="bg-pink-100 py-10 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Loading testimonials...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-pink-100 py-10 text-center">
        <h2 className="text-3xl font-bold text-red-500">Error: {error}</h2>
      </div>
    );
  }

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
                  "{testimonial.text}"
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
