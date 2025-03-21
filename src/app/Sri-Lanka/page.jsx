"use client";
import React, { useState } from "react";
import Footer from "@/app/Component/Footer";
import Navbar from "@/app/Component/Navbar";
import Image from "next/image";
import { ChevronDown, ChevronUp, Filter } from "lucide-react";
import FilterSriLanka from "./FilterSriLanka";
import ExploreSriLanka from "./ExploreSriLanka";
import InternationalCarousel from "../Component/Internationalcarousel";

const tripHighlights = [
  { id: 1, category: "Adventure", text: "Experience an adrenaline rush with white-water rafting in Kitulgala.", img: "/International/SriLanka-1.png" },
  { id: 2, category: "Nature", text: "Discover the stunning tea plantations and scenic beauty of Nuwara Eliya.", img: "/International/SriLanka-2.png" },
  { id: 3, category: "History", text: "Visit the ancient Sigiriya Rock Fortress, a UNESCO World Heritage Site.", img: "/International/SriLanka-3.png" },
  { id: 4, category: "Wildlife", text: "Witness exotic wildlife with a safari at Yala National Park.", img: "/International/SriLanka-4.png" },
  { id: 5, category: "Luxury", text: "Relax at a luxury beachfront resort with breathtaking ocean views.", img: "/International/SriLanka-5.png" },
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
      <ExploreSriLanka destination="Sri-Lanka" />

      {/* Trip Highlights */}
      <div className="mt-10">
        <div className="flex gap-3 mb-3 justify-center rounded-2xl mx-[10%]">
          {/* Left Section */}
          <div className="w-[60%]">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Trip Highlights</h2>
            <ul className="list-disc pl-6 space-y-4 text-gray-700">
              <li>Enjoy white-water rafting and adventure sports in Kitulgala.</li>
              <li>Relax amidst the lush greenery of Ella and Nuwara Eliya.</li>
              <li>Explore the historical Sigiriya Rock Fortress.</li>
              <li>Experience an unforgettable wildlife safari in Yala National Park.</li>
              <li>Stay in world-class beachfront resorts with scenic views.</li>
            </ul>

            {/* Filter Component */}
            <FilterSriLanka />
          </div>

          {/* Right Section */}
          <div className="w-[40%]">
            <img src="/International/SriLanka-beach.png" alt="Sri Lanka Beach" className="w-full rounded-md " />
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <InternationalCarousel />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Page;
