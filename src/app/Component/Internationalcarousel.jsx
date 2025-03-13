"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import axios from "axios";
import conf from "../Config";

const InternationalCarousel = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await axios.get(
          `${conf.laravelBaseUrl}/public-itineraries-international`
        );

        console.log("API Response:", response.data); // Debug API response

        // Process data to include full URLs for images
        const processedData = response.data.map((item) => ({
          ...item,
          destination_thumbnail: `${conf.laravelBaseUrl}/${item.destination_thumbnail}`,
          destination_images: (item.destination_images || []).map((image) =>
            image.startsWith("http")
              ? image
              : `${conf.laravelBaseUrl}/${image}`
          ),
        }));

        setDestinations(processedData);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load destinations");
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  const sliderSettings = {
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

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 py-10">{error}</div>;
  }

  return (
    <div className="w-full bg-pink-100 py-10">
      <h2 className="text-center text-3xl font-semibold mb-6">
        International Destinations
      </h2>

      <div className="max-w-screen-xl mx-auto">
        <Slider {...sliderSettings}>
          {destinations.map((item, index) => (
            <div key={index} className="px-4">
              <div className="bg-white shadow-lg rounded-2xl overflow-hidden h-[404px]">
                {/* Image Section */}
                <Slider
                  arrows={false}
                  autoplay={true}
                  autoplaySpeed={3000} // Each card's images change every 3 seconds
                  infinite={true}
                >
                  {(item.destination_images || []).map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={item.title || "Destination"}
                      className="w-full h-[50%] object-cover"
                    />
                  ))}
                </Slider>
                {/* Details Section */}
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{item.duration}</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Destination: {item.selected_destination}
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-lg font-semibold text-red-500">
                      {item.pricing}
                    </span>
                    <Link href={`${item.selected_destination}`}>
                      <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                        Explore
                      </button>
                    </Link>
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
