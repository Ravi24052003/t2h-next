"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

function PopularDestination() {
  const [destinations, setDestinations] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch(
          "https://t2hdashboard.theholistay.in/public-itineraries-exclusive"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch destinations");
        }
        const data = await response.json();

        // Map API data to match the format used in the component
        const processedData = (Array.isArray(data) ? data : data.data || []).map(
          (item) => ({
            name: item.selected_destination || "Unknown",
            image: item.destination_thumbnail
              ? `https://t2hdashboard.theholistay.in/${item.destination_thumbnail}`
              : "/placeholder.png",
            amount: item.pricing || "Request for Quotation",
            title: item.title || "Title not available",
            duration: item.duration || "Title not available",
            link: `/destination/${item.slug || "#"}`,
            
            // link: item.domestic_or_international === "domestic"
            //     ? `DomesticsPages/${item.selected_destination}` || "#"
            //     : item.selected_destination || "#",
            
            details1: item.details || "No details available.",
            details2: item.description || "No description available.",
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

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % destinations.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + destinations.length) % destinations.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [destinations]);

  const getVisibleDestinations = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(destinations[(currentIndex + i) % destinations.length]);
    }
    return visible;
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="bg-pink-100 p-8 rounded-lg relative w-full mx-auto" id="PopularDestination">
      <div className="bg-pink-100 p-8 rounded-lg relative max-w-7xl mx-auto">
        <div className="mb-8"><h2 className="text-3xl font-bold text-center ">Popular Destination</h2>
        <div className="flex justify-center ">
        <img src="/images/underline-img.png"  className="h-5 w-[300px] text-center" alt="" /></div>
        </div>

        {/* Top Section */}
        <div className="sm:flex flex-wrap lg:flex-nowrap gap-8">
          {/* Left Image */}
          <div className="relative flex-1 h-[500px] ">
            <img
              src={destinations[currentIndex].image}
              alt={destinations[currentIndex].name}
              className="absolute inset-0 rounded-lg object-cover w-full h-full"
            />
            <button
              onClick={handleNext}
              className="absolute top-1/2 -right-4 bg-red-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 transition transform -translate-y-1/2"
            >
              ▶
            </button>
          </div>

          {/* Bottom */}
          <div className="flex flex-row md:absolute md:bottom-14 md:right-28 md:flex-row gap-4 z-1 mt-3 ">
            {getVisibleDestinations().map((destination, index) => (
              <div
                key={index}
                className="relative rounded-lg overflow-hidden shadow-lg bg-white w-full sm:w-1/2 md:w-48 h-40 md:h-32"
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="absolute inset-0 object-cover w-full h-full"
                />
                <div className="absolute bottom-0 w-full bg-opacity-50 text-center py-2">
                  <h4 className="text-white font-bold">{destination.name}</h4>
                </div>
              </div>
            ))}
          </div>

          {/* Right Content */}
          <div className="flex-1 flex flex-col justify-between ">
            <div>
              <h3 className="text-3xl font-bold mb-4">{destinations[currentIndex].name}</h3>
              <p className="text-gray-700 font-bold mb-4">{destinations[currentIndex].title}</p>
              <p className="text-gray-700 mb-4">{destinations[currentIndex].details2}</p>
              <p className="text-gray-700 mb-4">{destinations[currentIndex].duration}</p>
              <p className="text-red-500 text-xl font-bold mb-4">{destinations[currentIndex].amount}</p>
              <div className="flex gap-4">
                <Link href={destinations[currentIndex].link}>
                  <button className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition">
                    Know More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularDestination;
