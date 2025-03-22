"use client";
import React, { useState } from "react";
import Footer from "@/app/Component/Footer";
import Navbar from "@/app/Component/Navbar";
import Image from "next/image";
import { ChevronDown, ChevronUp, Filter } from "lucide-react";
import FilterAndaman from "./FilterAndaman";
import ExploreAndaman from "./ExploreAndaman";
import DomesticCarousel from "@/app/Component/DomesticCarousel";

const tripHighlights = [
  { id: 1, category: "Adventure", text: "Explore the vibrant coral reefs with snorkeling and scuba diving at Havelock Island.", img: "/International/Andaman-1.png" },
  { id: 2, category: "Nature", text: "Discover the serene beauty of Radhanagar Beach, one of Asia's best beaches.", img: "/International/Andaman-2.png" },
  { id: 3, category: "History", text: "Visit the Cellular Jail in Port Blair and witness the light and sound show.", img: "/International/Andaman-3.png" },
  { id: 4, category: "Cruise", text: "Enjoy a luxurious cruise ride between the islands, surrounded by the pristine blue ocean.", img: "/International/Andaman-4.png" },
  { id: 5, category: "Luxury", text: "Stay in an eco-friendly beachfront resort offering panoramic ocean views and world-class amenities.", img: "/International/Andaman-5.png" },
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
      <ExploreAndaman />

      {/* Trip Highlights */}
      <div className="mt-10">
        <div className="flex gap-3 mb-3 justify-center rounded-2xl mx-[5%]">
          {/* Left Section */}
          <div className="w-full md:w-[60%]">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Trip Highlights</h2>
            <ul className="list-disc pl-6 space-y-4 text-gray-700">
              <li>Snorkel or dive in the vibrant coral reefs of Havelock and Neil Islands.</li>
              <li>Relax on pristine beaches like Radhanagar and Elephant Beach.</li>
              <li>Learn about India's history with a visit to the Cellular Jail in Port Blair.</li>
              <li>Embark on a thrilling mangrove kayaking experience at Baratang Island.</li>
              <li>Enjoy a luxurious stay in eco-resorts with breathtaking ocean views.</li>
            </ul>

            {/* Filter Component */}
            <FilterAndaman />
          </div>

          {/* Right Section */}
          <div className="w-[40%]  hidden sm:inline-block">
            <img src="/International/Andaman-beach.png" alt="" className="w-full rounded-md " />
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
