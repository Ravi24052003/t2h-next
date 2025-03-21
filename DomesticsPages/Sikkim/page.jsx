"use client";
import React, { useState } from "react";
import Footer from "@/app/Component/Footer";
import Navbar from "@/app/Component/Navbar";
import Image from "next/image";
import { ChevronDown, ChevronUp, Filter } from "lucide-react";
import FilterSikkim from "./FilterSikkim";
import ExploreSikkim from "./ExploreSikkim";
import DomesticCarousel from "@/app/Component/DomesticCarousel";

const tripHighlights = [
  { id: 1, category: "Adventure", text: "Embark on a thrilling trek to Goechala Pass for breathtaking mountain views.", img: "/Domestic/Sikkim-1.png" },
  { id: 2, category: "Nature", text: "Experience the serene beauty of Tsomgo Lake surrounded by snow-capped peaks.", img: "/Domestic/Sikkim-2.png" },
  { id: 3, category: "Culture", text: "Visit Rumtek Monastery and immerse yourself in Sikkim's rich Buddhist heritage.", img: "/Domestic/Sikkim-3.png" },
  { id: 4, category: "Adventure", text: "Explore the vibrant Yumthang Valley, also known as the Valley of Flowers.", img: "/Domestic/Sikkim-4.png" },
  { id: 5, category: "Luxury", text: "Stay in luxury resorts offering panoramic views of the Himalayas.", img: "/Domestic/Sikkim-5.png" },
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
    <div className="bg-blue-100">
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
      <ExploreSikkim />

      {/* Trip Highlights */}
      <div className="mt-10">
        <div className="flex gap-3 mb-3 justify-center rounded-2xl mx-[10%]">
          {/* Left Section */}
          <div className="w-[60%]">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Trip Highlights</h2>
            <ul className="list-disc pl-6 space-y-4 text-gray-700">
              <li>Witness the grandeur of the Kanchenjunga range from various viewpoints.</li>
              <li>Relax by the picturesque Gurudongmar Lake, one of the highest lakes in the world.</li>
              <li>Explore the vibrant flora and fauna of the Yumthang Valley.</li>
              <li>Discover Sikkimese culture through traditional dance and local cuisine.</li>
              <li>Stay in luxurious accommodations amidst the tranquil Himalayan landscapes.</li>
            </ul>

            {/* Filter Component */}
            <FilterSikkim />
          </div>

          {/* Right Section */}
          <div className="w-[40%]">
            <img src="/Domestic/Sikkim-landscape.png" alt="Sikkim Landscape" className="w-full rounded-md " />
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
