"use client"
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FilterAndaman() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeDay, setActiveDay] = useState(null);

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const itineraryDetails = [
    { day: 1, title: "Arrival in Port Blair | Cellular Jail Light & Sound Show", text: "Start your journey with a visit to the historic Cellular Jail, experiencing its poignant light and sound show." },
    { day: 2, title: "Havelock Island | Radhanagar Beach Visit", text: "Enjoy the pristine beauty of Radhanagar Beach, ranked as one of Asia's best beaches." },
    { day: 3, title: "Elephant Beach | Snorkeling Adventure", text: "Dive into crystal-clear waters for an unforgettable snorkeling experience at Elephant Beach." },
    { day: 4, title: "Neil Island | Natural Bridge Formation", text: "Explore Neil Island and marvel at its famous Natural Bridge formation and serene beaches." },
    { day: 5, title: "Departure", text: "Conclude your Andaman adventure and return with unforgettable memories." },
  ];

  const categoryLogic = {
    Itinerary: (
      <div className="space-y-2 bg-transparent rounded-xl">
        {itineraryDetails.map((item) => (
          <div key={item.day} className="border-none rounded-md">
            <button
              className="w-full border-none flex justify-between items-center px-4 py-2 bg-white text-black font-semibold rounded-xl"
              onClick={() => toggleDay(item.day)}
            >
              <span  className="text-start">
                <span className="bg-red-500 rounded-lg p-1">DAY {item.day}</span> - {item.title}
              </span>
              {activeDay === item.day ? <ChevronUp /> : <ChevronDown />}
            </button>
            {activeDay === item.day && (
              <div className="px-4 py-2 bg-white rounded-lg">
                <p className="text-gray-600 rounded-xl">{item.text}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    ),
    Adventure: (
      <div>
        <img
          src="/International/elephant-beach.jpg"
          alt="Adventure in Andaman"
          className="rounded-lg w-full h-[300px] mb-4"
        />
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Snorkeling at Elephant Beach and North Bay Island.</li>
          <li>Scuba diving to explore vibrant coral reefs.</li>
          <li>Sea walking for an immersive marine adventure.</li>
        </ul>
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
          <button type="submit" className="px-4 py-2 bg-red-500 text-white rounded-lg">Book Now</button>
        </form>
      </div>
    ),
    Beaches: (
      <div>
        <h2 className="text-xl font-bold mb-4">Famous Beaches</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Radhanagar Beach</li>
          <li>Elephant Beach</li>
          <li>Kalapathar Beach</li>
          <li>Vijaynagar Beach</li>
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
              description: "Luxurious villas with oceanfront views on Havelock Island.",
              image: "/International/taj-exotica.jpg",
            },
            {
              name: "SeaShell Havelock",
              description: "Beachfront resort offering serene and comfortable stays.",
              image: "/International/seashell-havelock.jpg",
            },
            {
              name: "Munjoy Beach Resort",
              description: "Relax in premium cottages with direct beach access.",
              image: "/International/munjoy-resort.jpg",
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
    <div className="bg-pink-100  py-10 max-w-4xl mx-auto">
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
