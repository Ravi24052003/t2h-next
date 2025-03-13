"use client";
import React, { useState } from "react";
import Footer from "@/app/Component/Footer";
import Navbar from "@/app/Component/Navbar";
import DomesticCarousel from "@/app/Component/DomesticCarousel";
import Image from "next/image";
import { ChevronDown, ChevronUp, Filter } from "lucide-react";
import FilterKashmir from "./FilterKashmir";
import ExploreKashmir from "./ExploreKashmir";

const tripHighlights = [
  { id: 1, category: "Nature", text: "Witness the breathtaking beauty of Dal Lake and its iconic Shikara rides.", img: "/International/Kashmir-1.png" },
  { id: 2, category: "Adventure", text: "Experience thrilling activities like skiing and snowboarding in Gulmarg.", img: "/International/Kashmir-2.png" },
  { id: 3, category: "Culture", text: "Explore Srinagar's Mughal Gardens and indulge in Kashmiri handicrafts.", img: "/International/Kashmir-3.png" },
  { id: 4, category: "Cuisine", text: "Savor authentic Kashmiri dishes like Rogan Josh and Wazwan.", img: "/International/Kashmir-4.png" },
  { id: 5, category: "Serenity", text: "Relax in the tranquil valleys of Pahalgam and Sonmarg.", img: "/International/Kashmir-5.png" },
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
      <ExploreKashmir />

      {/* Trip Highlights */}
      <div className="mt-10">
        <div className="flex gap-3 mb-3 justify-center rounded-2xl mx-[10%]">
          {/* Left Section */}
          <div className="w-[60%]">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Trip Highlights</h2>
            <ul className="list-disc pl-6 space-y-4 text-gray-700">
              <li>Glide through the serene waters of Dal Lake on a traditional Shikara.</li>
              <li>Explore the stunning meadows of Gulmarg and enjoy skiing or snowboarding.</li>
              <li>Discover the Mughal Gardens and shop for authentic Kashmiri Pashmina shawls.</li>
              <li>Treat your taste buds to local delicacies like Yakhni and Gushtaba.</li>
              <li>Take a leisurely walk in the picturesque valleys of Sonmarg and Pahalgam.</li>
            </ul>

            {/* Filter Component */}
            <FilterKashmir />
          </div>

          {/* Right Section */}
          <div className="w-[40%]">
            <img src="/International/Kashmir-valley.png" alt="Kashmir Valley" className="w-full rounded-md" />
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
