"use client";
import React, { useState } from "react";
import Navbar from "../../Component/Navbar";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import FilterHaryana from "./FilterHaryana";
import ExploreHaryana from "./ExploreHaryana";
import DomesticCarousel from "../../Component/DomesticCarousel";
import Footer from "../../Component/Footer";

const tripHighlights = [
  { id: 1, category: "Culture", text: "Experience the vibrant heritage of Haryana with traditional folk dances and music.", img: "/Domestic/Haryana-culture.png" },
  { id: 2, category: "Nature", text: "Explore the scenic beauty of Sultanpur National Park, a bird lover's paradise.", img: "/Domestic/Sultanpur-park.png" },
  { id: 3, category: "History", text: "Visit the iconic Kurukshetra, the land of the Mahabharata epic.", img: "/Domestic/Kurukshetra.png" },
  { id: 4, category: "Adventure", text: "Enjoy thrilling activities like paragliding and rock climbing at Morni Hills.", img: "/Domestic/Morni-hills.png" },
  { id: 5, category: "Luxury", text: "Stay in heritage properties like Neemrana Fort-Palace for an opulent experience.", img: "/Domestic/Neemrana.png" },
];

function Page() {
  const [activeDay, setActiveDay] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const filteredHighlights =
    selectedCategory === "All"
      ? tripHighlights
      : tripHighlights.filter((highlight) => highlight.category === selectedCategory);

  return (
    <div className="bg-pink-100">
      <Navbar />

      {/* Hero Video */}
      <div className="rounded-b-lg bg-gray-100">
        <video
          src="/images/hero.mp4"
          playsInline
          width="100%"
          className="rounded-b-lg w-full h-[350px] lg:h-[450px] object-fill"
          autoPlay
          muted
          loop
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Explore Carousel */}
      <ExploreHaryana />

      {/* Trip Highlights */}
      <div className="mt-10">
        <div className="flex gap-3 mb-3 justify-center rounded-2xl mx-[5%]">
          {/* Left Section */}
          <div className="w-full md:w-[60%]">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Trip Highlights</h2>
            <ul className="list-disc pl-6 space-y-4 text-gray-700">
              <li>Witness the ancient temples and historical sites of Kurukshetra.</li>
              <li>Relax in the serene atmosphere of Morni Hills, Haryana's only hill station.</li>
              <li>Spot migratory birds at Sultanpur National Park.</li>
              <li>Experience the thrill of adventure activities at Tikkar Taal.</li>
              <li>Stay in luxurious heritage hotels for a royal experience.</li>
            </ul>

            {/* Filter Component */}
            <FilterHaryana />
          </div>

          {/* Right Section */}
          <div className="w-[40%]  hidden sm:inline-block">
            <img src="/Domestic/Haryana-scenic.png" alt="Haryana Scenic Beauty" className="w-full rounded-md " />
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <DomesticCarousel />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Page;