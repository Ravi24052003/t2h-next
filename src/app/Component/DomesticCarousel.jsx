"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Config from "../Config"; // Import your config file

function DomesticCarousel() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch(
          `${Config.laravelBaseUrl}/public-itineraries-domestic`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch destinations");
        }
        const data = await response.json();
        console.log("API Response:", data); // Debugging log

        // Process the data to add "http" or base URL before images
        const processedData = (Array.isArray(data) ? data : data.data || []).map(
          (item) => ({
            ...item,
            destination_images: (item.destination_images || []).map((image) =>
              image.startsWith("http") ? image : `${Config.laravelBaseUrl}/${image}`
            ),
          })
        );

        setDestinations(processedData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

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

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  if (!Array.isArray(destinations) || destinations.length === 0) {
    return <div className="text-center">No destinations available</div>;
  }

  return (
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
                  autoplaySpeed={3000}
                  infinite={true}
                >
                  {item.destination_images.map((image, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={image}
                      alt={item.name || "Destination"}
                      className="w-full h-60 object-cover"
                    />
                  ))}
                </Slider>
                {/* Details Section */}
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800">
                    {item.selected_destination}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{item.duration}</p>
                  <p className="text-sm text-gray-600 mt-1">{item.organizer}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-sm font-semibold text-red-500">
                      {item.pricing}
                    </span>
                    <Link href={`/destination/${item.slug || "#"}`}>
                      <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 text-sm font-semibold transition duration-300">
                        Explore Now
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
}

export default DomesticCarousel;
