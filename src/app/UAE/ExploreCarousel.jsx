"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ExploreCarousel = () => {
  const [images, setImages] = useState([]);
  const [duration, setDuration] = useState([]);


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
        // Flatten destination_images from all destinations into a single array
        const allImages = data.flatMap((destination) => destination.destination_images);
        setImages(allImages);
        const allDuration = data.flatMap((Duration) => Duration.destination_images);
        setDuration(allDuration);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

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
      <h2 className="text-3xl font-bold text-left mb-6">Explore Dubai</h2>
      <Slider {...settings} className="gap-5">
        {images.map((image, index) => (
          <div key={{index}} className="p-2 px-9 ">
            <div className="relative group w-[1/4] h-[250px] rounded-lg overflow-hidden shadow-lg">
            <img
                src={`https://admiredashboard.theholistay.in/${image}`}
                alt={`Destination ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="text-center p-4">
                  <h3 className="text-xl font-bold mb-2">Dubai</h3>
                  <p className="text-sm">{image.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>

  );
};

export default ExploreCarousel;
