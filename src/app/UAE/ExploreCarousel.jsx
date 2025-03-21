"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ExploreCarousel = ({ destination }) => {
  const [images, setImages] = useState([]);

  // Fetch destination images from the API
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          "https://admiredashboard.theholistay.in/public-itineraries-international"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log("API Response:", data); // Log the API response for debugging

        // Filter images based on the selected destination
        const filteredData = (Array.isArray(data) ? data : data.data || []).filter(
          (item) => item.selected_destination === destination
        );

        // Extract destination images and construct full URLs
        const allImages = filteredData.flatMap((item) =>
          (item.destination_images || []).map((image) =>
            image.startsWith("http")
              ? image
              : `https://admiredashboard.theholistay.in/${image}`
          )
        );

        console.log(`Images for ${destination}:`, allImages); // Log filtered images
        setImages(allImages);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, [destination]);

  const PrevButton = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75"
    >
      <ChevronLeft className="w-6 h-6" />
    </button>
  );

  const NextButton = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75"
    >
      <ChevronRight className="w-6 h-6" />
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="px-4 py-10 bg-pink-100 w-[90%] mx-auto">
      <h2 className="text-3xl font-bold text-left mb-6">
        Explore {destination}
      </h2>
      {images.length === 0 ? (
        <p className="text-center text-gray-500">No images available</p>
      ) : (
        <Slider {...settings} className="gap-5">
          {images.map((image, index) => (
            <div key={index} className="p-2 px-9">
              <div className="relative group w-[1/4] h-[250px] rounded-lg overflow-hidden shadow-lg">
                <img
                  src={image}
                  alt={`Destination ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="text-center p-4">
                    <h3 className="text-xl font-bold mb-2">{destination}</h3>
                    <p className="text-sm">Beautiful destination</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default ExploreCarousel;