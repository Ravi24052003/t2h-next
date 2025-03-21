import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FilterThai() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeDay, setActiveDay] = useState(null);

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const itineraryDetails = [
    { day: 1, title: "Arrival in Thailand | Relax at the Hotel", text: "Arrive in Thailand and check in to your luxurious hotel. Spend the day relaxing and exploring the local surroundings." },
{ day: 2, title: "Bangkok City Tour | Grand Palace & Temples", text: "Discover Bangkok's iconic landmarks such as the Grand Palace, Wat Phra Kaew, and Wat Arun, while exploring the vibrant city life." },
{ day: 3, title: "Island Hopping | Phi Phi Islands", text: "Embark on an island-hopping adventure to the stunning Phi Phi Islands, with opportunities to snorkel, swim, and relax on white sandy beaches." },
{ day: 4, title: "Chiang Mai | Elephant Sanctuary Visit", text: "Travel to Chiang Mai and visit an ethical elephant sanctuary, where you can interact with elephants in a safe and respectful environment." },
{ day: 5, title: "Departure", text: "Bid farewell to Thailand and cherish the unforgettable memories of its culture, nature, and warm hospitality as you prepare for departure." },

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
          src="/International/Thailand-3.png"
          alt="Adventure in Thailand"
          className="rounded-lg w-full h-[300px] mb-4"
        />
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Visit colorful floating markets and lively night markets.</li>
<li>Take a boat trip to beautiful islands and swim in clear blue waters.</li>
<li>Enjoy exciting zip-lining in green forests.</li>

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
        <li>Khao Sok National Park</li>
<li>Elephant Hills Luxury Tented Camp</li>
<li>Doi Inthanon National Park</li>
<li>Chiang Mai Jungle Safari</li>

        </ul>
      </div>
    ),
    Luxury: (
      <div>
        <h2 className="text-xl font-bold mb-4">Luxury Hotels for Booking</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              name: "The Siam Hotel",
              description: "Stay in a luxurious riverside retreat in the heart of Bangkok.",
              image: "/International/The-Siam-Hotel.jpeg",
          },
          {
              name: "Rayavadee Krabi",
              description: "Experience beachfront luxury surrounded by lush limestone cliffs.",
              image: "/International/Rayavadee-Krabi.jpg",
          },
          {
              name: "Anantara Golden Triangle",
              description: "Relax in a serene resort overlooking the hills of Chiang Rai.",
              image: "/International/Anantara-Golden-Triangle.jpg",
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
