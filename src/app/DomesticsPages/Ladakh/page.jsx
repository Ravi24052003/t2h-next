"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp, Filter } from "lucide-react";
import FilterLadakh from "./FilterLadakh";
import ExploreLadakh from "./ExploreLadakh";
import Footer from "@/app/Component/Footer";
import Navbar from "@/app/Component/Navbar";
import DomesticCarousel from "@/app/Component/DomesticCarousel";

const tripHighlights = [
  { id: 1, category: "Adventure", text: "Experience thrilling bike rides on the iconic Leh-Manali Highway.", img: "/International/Ladakh-1.png" },
  { id: 2, category: "Nature", text: "Marvel at the breathtaking beauty of Pangong Lake's turquoise waters.", img: "/International/Ladakh-2.png" },
  { id: 3, category: "Culture", text: "Visit ancient monasteries like Hemis and Thiksey to explore Ladakhi traditions.", img: "/International/Ladakh-3.png" },
  { id: 4, category: "Wildlife", text: "Spot unique Himalayan wildlife at Changthang Wildlife Sanctuary.", img: "/International/Ladakh-4.png" },
  { id: 5, category: "Scenic Beauty", text: "Drive through the world's highest motorable road, Khardung La Pass.", img: "/International/Ladakh-5.png" },
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
      <Navbar/>

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
      <ExploreLadakh/>

      {/* Trip Highlights */}
      <div className="mt-10">
        <div className="flex gap-3 mb-3 justify-center rounded-2xl mx-[5%]">
          {/* Left Section */}
          <div className="w-full md:w-[60%]">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Trip Highlights</h2>
            <ul className="list-disc pl-6 space-y-4 text-gray-700">
              <li>Experience an adventurous bike ride through the Leh-Manali Highway.</li>
              <li>Admire the pristine beauty of Pangong Lake, famous for its changing hues.</li>
              <li>Explore ancient Buddhist monasteries like Hemis, Alchi, and Thiksey.</li>
              <li>Discover the unique flora and fauna at Changthang Wildlife Sanctuary.</li>
              <li>Drive through Khardung La Pass, the highest motorable road in the world.</li>
            </ul>

            {/* Filter Component */}
            <FilterLadakh/>
          </div>

          {/* Right Section */}
          <div className="w-[40%] hidden sm:inline-block">
            <img src="/International/Ladakh-mountains.png" alt="Ladakh Mountains" className="w-full rounded-md" />
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <DomesticCarousel/>

      {/* Footer */}
     <Footer/>
    </div>
  );
}

export default Page;
