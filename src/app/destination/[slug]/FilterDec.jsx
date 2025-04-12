"use client";

import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { usePathname } from "next/navigation";

export default function FilterDec() {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();

  const [itineraryDetails, setItineraryDetails] = useState([]);
  const [destinationDetail, setDestinationDetail] = useState("");
  const [destinationImages, setDestinationImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeDay, setActiveDay] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const toggleDay = (day) => {
    setActiveDay((prev) => (prev === day ? null : day));
  };

  const fetchItineraryData = async (slug) => {
    try {
      const res = await fetch(`https://t2hdashboard.theholistay.in/public-itinerary/${slug}`, {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch itinerary data");
      }
      const data = await res.json();
      if (data?.days_information) {
        setItineraryDetails(data.days_information);
      } else {
        throw new Error("Invalid data structure: 'days_information' is missing");
      }

      if (data?.destination_detail) {
        setDestinationDetail(data.destination_detail);
      } else {
        setDestinationDetail("No destination details available.");
      }

      if (data?.destination_images) {
        const validImages = data.destination_images.map((img) =>
          img.startsWith("http") ? img : `http://${img}`
        );
        setDestinationImages(validImages);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        destinationImages.length > 0 ? (prevIndex + 1) % destinationImages.length : 0
      );
    }, 3000);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [destinationImages]);

  const categoryLogic = {
    Itinerary: loading ? (
      <div>Loading itinerary...</div>
    ) : error ? (
      <div>{error}</div>
    ) : (
      <div className="space-y-2 bg-transparent rounded-xl">
        {itineraryDetails.map((item) => (
          <div key={item.day} className="border-none rounded-md">
            <button
              className="w-full border-none flex justify-between items-center px-4 py-2 bg-white text-black font-semibold rounded-xl"
              onClick={() => toggleDay(item.day)}
            >
              <span className="text-start text-xl">
                <span className="bg-red-600 rounded-lg p-1 text-xl">DAY {item.day}</span> - {item.title}
              </span>
              {activeDay === item.day ? <ChevronUp /> : <ChevronDown />}
            </button>
            {activeDay === item.day && (
              <div className="px-4 py-2 bg-white rounded-lg">
                <p className="text-gray-600 rounded-xl text-lg" dangerouslySetInnerHTML={{ __html: item.detail }} />
              </div>
            )}
          </div>
        ))}
      </div>
    ),
    "Destination Details": (
  <div>
    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-5 text-xl">
      <li dangerouslySetInnerHTML={{ __html: destinationDetail }}></li>
    </ul>
    {destinationImages.length > 0 && (
          <img
            src={destinationImages[currentImageIndex]}
            alt="loading..."
            className="rounded-lg bg-gray-400 w-full h-[300px] mb-4 object-cover"
          />
        )}
    
  </div>
),

    "Enquiry Now": (
      <div>
        <h2 className="text-xl font-bold mb-4">Enquiry Form</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-lg" placeholder="Enter your name" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-lg" placeholder="Enter your email" />
          </div>
          <div>
            <label htmlFor="People" className="block text-sm font-medium text-gray-700">Number of People</label>
            <input type="number" id="tickets" name="tickets" className="w-full px-4 py-2 border rounded-lg" placeholder="Enter number of People" />
          </div>
          <button type="submit" className="px-4 py-2 bg-red-600 text-white rounded-lg">Book Now</button>
        </form>
      </div>
    ),
    Beaches: (
      <div>
        <h2 className="text-xl font-bold mb-4">Popular Beaches</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Calangute Beach</li>
          <li>Baga Beach</li>
          <li>Anjuna Beach</li>
          <li>Colva Beach</li>
          <li>Palolem Beach</li>
        </ul>
      </div>
    ),
    Luxury: (
      <div>
        <h2 className="text-xl font-bold mb-4">Luxury Hotels for Booking</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              name: "Taj Exotica Resort & Spa",
              description: "Experience ultimate luxury at this beachfront resort in South Goa.",
              image: "/International/taj-exotica.jpg",
            },
            {
              name: "Leela Goa",
              description: "Stay in lavish suites surrounded by pristine lagoons and gardens.",
              image: "/International/leela-goa.jpg",
            },
            {
              name: "W Goa",
              description: "Modern luxury and vibrant nightlife at Vagator Beach.",
              image: "/International/w-goa.jpg",
            },
          ].map((hotel, index) => (
            <div key={index} className="border rounded-lg p-4 bg-white shadow-lg">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="rounded-lg mb-4 object-cover h-32 w-full"
              />
              <h3 className="font-bold text-lg">{hotel.name}</h3>
              <p className="text-gray-600">{hotel.description}</p>
              <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    ),
  };

  const renderAllCategories = () =>
    Object.keys(categoryLogic).map((key) => (
      <div key={key} className="mb-6">
        <h2 className="text-2xl font-bold mb-4">{key}</h2>
        {categoryLogic[key]}
      </div>
    ));

  return (
    <div className="bg-pink-100   py-10 max-w-4xl mx-auto">
      {/* Filter Buttons */}
      <div className="flex flex-wrap p-2 rounded-xl gap-4 mb-6 bg-[#F4F6F9]">
        {["All", ...Object.keys(categoryLogic)].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg font-medium ${
              selectedCategory === category
                ? "bg-red-500 text-white"
                : "bg-white text-gray-800 hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Conditional Rendering */}
      {selectedCategory === "All" ? renderAllCategories() : categoryLogic[selectedCategory]}
    </div>
  );
}



