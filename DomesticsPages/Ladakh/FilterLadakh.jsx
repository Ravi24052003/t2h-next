import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FilterLadakh() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeDay, setActiveDay] = useState(null);

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const itineraryDetails = [
    { day: 1, title: "Arrival in Leh | Acclimatization Day", text: "Arrive in Leh and spend the day acclimatizing to the high altitude. Explore the Leh market and Shanti Stupa in the evening." },
    { day: 2, title: "Leh | Monastery Tour", text: "Visit the famous Hemis, Thiksey, and Shey Monasteries. Experience the serenity of Ladakh’s spiritual side." },
    { day: 3, title: "Leh to Nubra Valley | Khardung La Pass", text: "Drive through the world’s highest motorable road, Khardung La, to reach the beautiful Nubra Valley. Visit Diskit Monastery and enjoy a camel ride on the sand dunes of Hunder." },
    { day: 4, title: "Nubra Valley to Pangong Lake", text: "Journey to the mesmerizing Pangong Lake, famous for its changing colors. Spend the night in tents by the lake." },
    { day: 5, title: "Departure from Leh", text: "Return to Leh, capturing the last glimpses of Ladakh's beauty. Depart with unforgettable memories." },
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
              <span>
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
          src="/International/adventure-Ladakh.jpg"
          alt="Adventure in Ladakh"
          className="rounded-lg w-full h-[300px] mb-4"
        />
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Drive through Khardung La and Chang La Passes.</li>
          <li>Go rafting in the Zanskar River.</li>
          <li>Experience trekking routes like the Markha Valley and Chadar Trek.</li>
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
    Adventure: (
      <div>
        <h2 className="text-xl font-bold mb-4">Adventure Activities</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Chadar Trek - The Frozen River Trek.</li>
          <li>Mountain Biking across rugged Ladakh trails.</li>
          <li>Camping under the stars at Pangong and Tso Moriri.</li>
        </ul>
      </div>
    ),
    Luxury: (
      <div>
        <h2 className="text-xl font-bold mb-4">Luxury Stays</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              name: "The Grand Dragon Ladakh",
              description: "Stay at Leh’s most luxurious hotel with panoramic mountain views.",
              image: "/International/grand-dragon.jpg",
            },
            {
              name: "Chamba Camp Diskit",
              description: "Luxury tented accommodation in Nubra Valley.",
              image: "/International/chamba-camp.jpg",
            },
            {
              name: "Pangong Retreat Camp",
              description: "Premium lakeside tents with stunning views of Pangong Lake.",
              image: "/International/pangong-camp.jpg",
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
    <div className="bg-pink-100 px-6 py-10 max-w-4xl mx-auto">
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
