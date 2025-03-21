"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function DomesticDes() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch(
          "https://admiredashboard.theholistay.in/public-itineraries-domestic"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch destinations");
        }
        const data = await response.json();

        // Process the API response
        const processedData = (Array.isArray(data) ? data : data.data || []).map((item) => ({
          destination: item.selected_destination || "Unknown",
          images: [
            item.destination_thumbnail
              ? `https://admiredashboard.theholistay.in/${item.destination_thumbnail}`
              : "/placeholder.png",
          ],
          content: item.description || "No description available.",
        }));

        setDestinations(processedData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  // Split data into two groups for the two carousels
  const d1 = destinations.slice(0, Math.ceil(destinations.length / 2));
  const d2 = destinations.slice(Math.ceil(destinations.length / 2));

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 15000,
    arrows: false,
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="bg-pink-100 p-6">
      {/* Header */}
      <div className="flex justify-between my-4 mx-auto max-w-6xl">
        <h2 className="text-xl text-start font-semibold text-gray-700">
          Domestic Destination
        </h2>
        <h2 className="text-red-600 text-xl text-end">See More</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Left Section */}
        <div className="md:col-span-2 bg-[#FFAD9E] rounded-lg">
          {/* Destination 1 Carousel */}
          <Slider {...sliderSettings}>
            {d1.map((item, index) => (
              <div key={index}>
                <div className="flex flex-row gap-4 items-center bg-[#FFAD9E] px-4 pt-4 rounded-t-lg">
                  <div className="w-[50%]">
                    <img
                      src={item.images[0]}
                      alt={`Image of ${item.destination}`}
                      className="h-56 object-cover rounded-lg w-full"
                    />
                  </div>
                  <div className="w-[50%]">
                    <h3 className="text-lg font-semibold">{item.destination}</h3>
                    <p className="text-sm text-gray-600">{item.content}</p>
                    <p className="text-red-500 font-semibold text-lg mt-2">
                      Request for Quotation
                    </p>
                    <Link href={`/DomesticsPages/${item.destination}`}>
                      <button className="mt-2 bg-red-500 text-white px-4 py-2 rounded-lg">
                        Explore Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Destination 2 Carousel */}
          <Slider {...{ ...sliderSettings, rtl: true, autoplaySpeed: 15000 }}>
            {d2.map((item, index) => (
              <div key={index}>
                <div className="flex flex-row gap-4 items-center bg-[#FFAD9E] px-4 pb-4 rounded-b-lg">
                  <div className="w-[50%]">
                    <h3 className="text-lg font-semibold">{item.destination}</h3>
                    <p className="text-sm text-gray-600">{item.content}</p>
                    <p className="text-red-500 font-semibold text-lg mt-2">
                      Request for Quotation
                    </p>
                    <Link href={`/DomesticsPages/${item.destination}`}>
                      <button className="mt-2 bg-red-500 text-white px-4 py-2 rounded-lg">
                        Explore Now
                      </button>
                    </Link>
                  </div>
                  <div className="w-[50%]">
                    <img
                      src={item.images[0]}
                      alt={`Image of ${item.destination}`}
                      className="h-56 object-cover rounded-lg w-full"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Right Section */}
        <div className="bg-red-900 text-white p-6 rounded-lg flex flex-col items-center space-y-4">
          <h3 className="text-lg font-semibold">
            Shubh Muhurat Wedding Bells & Events, Delhi
          </h3>
          <h2 className="text-2xl font-bold">Luxury Wedding Planners</h2>
          <img
            src="/wedding/wedding3.png"
            alt="Wedding Couple"
            className="w-full h-56 object-cover rounded-lg"
          />
          <Link href="https://www.smlwindia.com/" target="blank">
            <button className="bg-red-500 px-6 py-2 rounded-lg text-white">
              Explore Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DomesticDes;
