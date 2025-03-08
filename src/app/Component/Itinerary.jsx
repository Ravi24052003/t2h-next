"use client"
import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

const Itinerary = () => {
  const [activeDay, setActiveDay] = useState(null);

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Tabs Navigation */}
      <div className="flex justify-between items-center mb-4">
        <button className="px-4 py-2 bg-orange-500 text-white rounded-md">Itinerary</button>
        <button className="px-4 py-2 text-gray-500">Summarised View</button>
        <button className="px-4 py-2 text-gray-500">Activities</button>
        <button className="px-4 py-2 text-gray-500">Stay</button>
        <button className="px-4 py-2 text-gray-500">Transfers</button>
      </div>

      {/* Image Slider */}
      <div className="relative mb-6">
        <img
          src="/International/Dubai-2.png"
          alt="Dubai Skyline"
          
          className="rounded-md object-fill w-full h-[300px]"
        />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full">+11</div>
        <div className="absolute bottom-2 left-2 bg-orange-500 text-white px-4 py-1 rounded-md">
          5 Days in Dubai
        </div>
      </div>

      {/* Day-Wise Itinerary */}
      <div className="space-y-2">
        {[
          { day: 1, title: "Arrival in Dubai | Evening Dhow Cruise" },
          { day: 2, title: "Dubai City Tour | Visit the Burj Khalifa" },
          { day: 3, title: "Dubai Desert Safari with BBQ Dinner" },
          { day: 4, title: "Check-In at Atlantis The Palm Hotel | Explore Aquaventure Waterpark" },
          { day: 5, title: "Departure" },
        ].map((item) => (
          <div key={item.day} className="border rounded-md">
            <button
              className="w-full flex justify-between items-center px-4 py-2 bg-orange-100 text-orange-600 font-semibold"
              onClick={() => toggleDay(item.day)}
            >
              <span>DAY {item.day} - {item.title}</span>
              {activeDay === item.day ? <ChevronUp /> : <ChevronDown />}
            </button>
            {activeDay === item.day && (
              <div className="px-4 py-2 bg-white">
                <p className="text-gray-600">Details about {item.title}...</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Itinerary;
