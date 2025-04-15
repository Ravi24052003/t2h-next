"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ExploreGoa = () => {
  const [destinationName, setDestinationName] = useState("Destination");
  const [destinationImages, setDestinationImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const pathname = usePathname();
  const slug = pathname.split("/").pop();

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
    dots: true,
    infinite: true,
    autoplay: true,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
    autoplaySpeed: 2000,
    speed: 500,
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

  const fetchItineraryData = async (slug) => {
    try {
      const res = await fetch(
        `https://t2hdashboard.theholistay.in/public-itinerary/${slug}`,
        { cache: "no-store" }
      );
      if (!res.ok) {
        throw new Error("Failed to fetch itinerary data");
      }
      const data = await res.json();
      if (data?.selected_destination) {
        setDestinationName(data.selected_destination);
      } else {
        setDestinationName("No destination details available.");
      }

      if (data?.destination_images && Array.isArray(data.destination_images)) {
        const fullImageUrls = data.destination_images.map(
          (image) => `https://t2hdashboard.theholistay.in/${image}`
        );
        setDestinationImages(fullImageUrls);
      } else {
        setDestinationImages([]);
      }

    } catch (err) {
      console.error("Error fetching itinerary data:", err);
      setError(`Failed to load itinerary data: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (slug) {
      fetchItineraryData(slug);
    }
  }, [slug]);

  return (
    <div className="px-4 py-10 bg-pink-100 w-[100%] md:w-[90%] mx-auto">
      <h2 className="text-3xl font-bold text-left mb-6">
        Explore {destinationName}
      </h2>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && destinationImages.length > 0 ? (
        <Slider {...settings} className="gap-5">
          {destinationImages.map((image, index) => (
            <div key={index} className="p-2 px-3">
              <div className="relative group w-full h-[250px] rounded-lg overflow-hidden shadow-lg">
                <img
                  src={image} // Use each image URL here
                  alt={`Image ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        !loading && <p>No images available for this destination.</p>
      )}
    </div>
  );
};

export default ExploreGoa;
