import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FilterCom() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeDay, setActiveDay] = useState(null);

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const itineraryDetails = [
    { day: 1, title: "Arrival in Dubai | Evening Dhow Cruise", text: "Explore Dubai's cutting-edge architectural wonders and marvel at the city's iconic skyline of skyscrapers and futuristic design." },
    { day: 2, title: "Dubai City Tour | Visit the Burj Khalifa", text: "Sail along Dubai Marina aboard a traditional dhow cruise, enjoying views of the city's iconic marvels, while savoring a delicious dinner and cultural entertainment." },
    { day: 3, title: "Dubai Desert Safari with BBQ Dinner", text: "Learn about Dubai's rich history at the Dubai Museum, exploring exhibits that showcase the city's cultural heritage and transformation over time." },
    { day: 4, title: "Check-In at Atlantis The Palm Hotel | Explore Aquaventure Waterpark", text: "Indulge in a desert safari adventure, with activities like dune bashing in a 4x4, camel riding, sandboarding, and a traditional Bedouin-style camp experience." },
    { day: 5, title: "Departure", text: "Stay at the iconic Atlantis The Palm resort, offering luxurious accommodations and access to the thrilling Aquaventure Waterpark." },
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
              <span className="text-start">
                <span className="bg-red-600 rounded-lg p-1">DAY {item.day}</span> - {item.title}
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
          src="/International/Dubai-3.png"
          alt="Adventure in Dubai"
          className="rounded-lg w-full h-[300px] mb-4"
        />
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Experience thrilling desert safaris with dune bashing.</li>
          <li>Try sandboarding on Dubai's golden dunes.</li>
          <li>Enjoy breathtaking hot air balloon rides over the desert.</li>
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
    Safari: (
      <div>
        <h2 className="text-xl font-bold mb-4">Safari Locations</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Dubai Desert Conservation Reserve</li>
          <li>Al Marmoom Desert Conservation Reserve</li>
          <li>Arabian Adventures Camp</li>
          <li>Private Desert Camp Experiences</li>
        </ul>
      </div>
    ),
    Luxury: (
      <div>
        <h2 className="text-xl font-bold mb-4">Luxury Hotels for Booking</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              name: "Atlantis The Palm",
              description: "Stay at the iconic Atlantis resort with breathtaking ocean views.",
              image: "/International/Atlantis-The-Palm.jpeg",
            },
            {
              name: "Burj Al Arab",
              description: "Experience unparalleled luxury in the world's most luxurious hotel.",
              image: "/International/Burj-Al-Arab.jpg",
            },
            {
              name: "Jumeirah Beach Hotel",
              description: "Relax in the lavish beachfront rooms of this 5-star resort.",
              image: "/International/Jumeirah-Beach-Hotel.jpg",
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
