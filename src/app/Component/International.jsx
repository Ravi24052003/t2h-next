"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Config from "../Config";

function International() {
  const [destinations, setDestinations] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch(
          "https://admiredashboard.theholistay.in/public-itineraries-international"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch destinations");
        }
        const data = await response.json();
  
        // Process the data to ensure proper format
        const processedData = (Array.isArray(data) ? data : data.data || []).map(
          (item) => ({
            name: item.selected_destination || "Unknown",
            description: item.description || "No description available.",
            image: item.destination_thumbnail
              ? `https://admiredashboard.theholistay.in/${item.destination_thumbnail}`
              : "/placeholder.png", // Construct full URL or use a placeholder
            // link: `/destinations/${item.selected_destination || "#"}`, // Use slug for dynamic link
            link: item.selected_destination
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


  useEffect(() => {
    if (destinations.length > 0) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) =>
          prevIndex === destinations.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // Change slide every 3 seconds

      return () => clearInterval(interval); // Cleanup on component unmount
    }
  }, [destinations]);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  if (!Array.isArray(destinations) || destinations.length === 0) {
    return <div className="text-center">No destinations available</div>;
  }

  const visibleDestinations = [
    destinations[(activeIndex - 1 + destinations.length) % destinations.length], // Previous
    destinations[activeIndex], // Current
    destinations[(activeIndex + 1) % destinations.length], // Next
  ];

  return (
    <div className="bg-pink-100 p-8">
      <div className="flex justify-between my-4 mx-auto max-w-6xl">
        <h2 className="text-xl text-start font-semibold text-gray-700">
          International Destination
        </h2>
        <h2 className="text-red-600 text-xl text-end">See More</h2>
      </div>
      <div className="flex flex-col lg:flex-row lg:space-x-6 max-w-6xl mx-auto relative">
        {/* Main Image Section */}
        <div
          className="flex-1 relative bg-cover bg-center rounded-xl p-8 text-white"
          style={{
            backgroundImage: `url(${destinations[activeIndex].image})`,
          }}
        >
          <div className="text-white bg-black bg-opacity-40 p-5 rounded-lg sm:inline-block">
            <h1 className="text-xl md:text-5xl text-white font-bold mt-8">
              {destinations[activeIndex].name}
            </h1>
            <p className="mt-4 text-md md:text-lg sm:w-60 ">
              {destinations[activeIndex].description}
            </p>
            <Link href={destinations[activeIndex].link}>
              <button className="mt-6 bg-red-500 px-2 sm:px-6 py-3 rounded-lg text-white font-semibold">
                Explore Now
              </button>
            </Link>
          </div>

          {/* Destination Cards Carousel */}
          <div className="hidden sm:flex absolute p-5 bottom-4 right-4 w-[40%] h-[40%] space-x-4 overflow-hidden">
            {visibleDestinations.map((destination, index) => (
              <div
                key={index}
                className={`relative w-[31.5%] h-[80%] rounded-lg flex-shrink-0 cursor-pointer transition-transform duration-300 ${
                  index === 1 ? "scale-105 border-4 border-red-500" : ""
                }`}
                onClick={() =>
                  setActiveIndex(
                    (activeIndex + index - 1 + destinations.length) %
                      destinations.length
                  )
                }
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-center rounded-b-lg py-2">
                  <h4 className="text-sm font-bold">{destination.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/3 bg-red-900 text-white p-6 rounded-lg flex flex-col items-center space-y-4 mt-6 lg:mt-0">
          <h3 className="text-lg font-semibold">Pulse Events and Wedding</h3>
          <h2 className="text-2xl font-bold">
            Pulse Events and Wedding By Sunny Sabharwal
          </h2>
          <img
            src="/wedding/wedding2.png"
            alt="Wedding Couple"
            className="w-full h-56 object-cover rounded-lg"
          />
          <Link href="https://www.pulseeventsindia.com/" target="blank">
            <button className="bg-red-500 px-6 py-2 rounded-lg text-white">
              Explore Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default International;
