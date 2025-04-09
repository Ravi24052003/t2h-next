"use client";
import React, { useState } from "react";
import Footer from "../../Component/Footer";
import Navbar from "../../Component/Navbar";
import Image from "next/image";
import { ChevronDown, ChevronUp, Filter } from "lucide-react";
import FilterKerala from "./FilterKerala";
import ExploreKerala from "./ExploreKerala";
import DomesticCarousel from "../../Component/DomesticCarousel";

const tripHighlights = [
  { id: 1, category: "Nature", text: "Cruise through the serene backwaters of Alleppey on a traditional houseboat.", img: "/International/Kerala-1.png" },
  { id: 2, category: "Adventure", text: "Explore the lush green tea gardens of Munnar and enjoy trekking.", img: "/International/Kerala-2.png" },
  { id: 3, category: "Culture", text: "Visit historic temples and enjoy traditional Kathakali dance performances.", img: "/International/Kerala-3.png" },
  { id: 4, category: "Cuisine", text: "Savor authentic Kerala dishes like Appam and Kerala Fish Curry.", img: "/International/Kerala-4.png" },
  { id: 5, category: "Relaxation", text: "Rejuvenate with Ayurvedic massages and spa treatments in Kovalam.", img: "/International/Kerala-5.png" },
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
      <ExploreKerala />

      {/* Trip Highlights */}
      <div className="mt-10">
        <div className="flex gap-3 mb-3 justify-center rounded-2xl mx-[5%]">
          {/* Left Section */}
          <div className="w-full md:w-[60%]">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Trip Highlights</h2>
            <ul className="list-disc pl-6 space-y-4 text-gray-700">
              <li>Experience the tranquility of Kerala's backwaters with a stay on a houseboat in Alleppey.</li>
              <li>Take a refreshing stroll through Munnar's tea plantations and scenic landscapes.</li>
              <li>Immerse yourself in Kerala's culture by watching Kathakali performances and visiting ancient temples.</li>
              <li>Indulge in Kerala's flavorful cuisine, featuring seafood and aromatic spices.</li>
              <li>Relax with rejuvenating Ayurvedic therapies in the serene beaches of Kovalam.</li>
            </ul>

            {/* Filter Component */}
            <FilterKerala />
          </div>

          {/* Right Section */}
          <div className="w-[40%] hidden sm:inline-block">
            <img src="/International/Kerala-backwaters.png" alt="Kerala Backwaters" className="w-full rounded-md" />
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <DomesticCarousel/>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Page;
