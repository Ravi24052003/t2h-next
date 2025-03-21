"use client";
import React, { useState } from "react";
import Footer from "@/app/Component/Footer";
import Navbar from "@/app/Component/Navbar";
import Image from "next/image";
import { ChevronDown, ChevronUp, Filter } from "lucide-react";
import FilterGoa from "./FilterGoa";
import ExploreGoa from "./ExploreGoa";
import DomesticCarousel from "@/app/Component/DomesticCarousel";

const tripHighlights = [
  { id: 1, category: "Beaches", text: "Relax on the pristine sands of Baga, Anjuna, and Palolem beaches.", img: "/International/Goa-1.png" },
  { id: 2, category: "Adventure", text: "Experience thrilling water sports like parasailing, jet skiing, and scuba diving.", img: "/International/Goa-2.png" },
  { id: 3, category: "Culture", text: "Explore Old Goa's historic churches like Basilica of Bom Jesus and Se Cathedral.", img: "/International/Goa-3.png" },
  { id: 4, category: "Nightlife", text: "Dance the night away at Goa's famous beach shacks and clubs.", img: "/International/Goa-4.png" },
  { id: 5, category: "Nature", text: "Discover the serene beauty of Dudhsagar Falls and spice plantations.", img: "/International/Goa-5.png" },
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
      <ExploreGoa />

      {/* Trip Highlights */}
      <div className="mt-10">
        <div className="flex gap-3 mb-3 justify-center rounded-2xl mx-[10%]">
          {/* Left Section */}
          <div className="w-[60%]">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Trip Highlights</h2>
            <ul className="list-disc pl-6 space-y-4 text-gray-700">
              <li>Soak up the sun at Goa's iconic beaches like Baga, Calangute, and Vagator.</li>
              <li>Enjoy thrilling water sports such as parasailing, banana boat rides, and scuba diving.</li>
              <li>Explore Goa's Portuguese heritage through its historic churches and forts.</li>
              <li>Experience the vibrant nightlife with beachside parties and live music.</li>
              <li>Visit Dudhsagar Falls for a refreshing nature experience and spice plantations for a cultural touch.</li>
            </ul>

            {/* Filter Component */}
            <FilterGoa />
          </div>

          {/* Right Section */}
          <div className="w-[40%]">
            <img src="/International/Goa-beach.png" alt="" className="w-full rounded-md" />
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
