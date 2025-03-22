import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FilterPar() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeDay, setActiveDay] = useState(null);

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const itineraryDetails = [
    { day: 1, title: "Arrival in Paris | Seine River Cruise", text: "Arrive in Paris and settle into your cozy accommodation. In the evening, enjoy a relaxing Seine River cruise, passing by iconic landmarks like Notre-Dame Cathedral and the Eiffel Tower." },
{ day: 2, title: "Explore Paris | Eiffel Tower Visit", text: "Spend the day exploring the city's famous landmarks. Visit the Eiffel Tower, climb to the top for stunning views, and enjoy the sparkling lights in the evening." },
{ day: 3, title: "Louvre Museum | Montmartre Tour", text: "Discover masterpieces at the Louvre Museum, including the Mona Lisa and Venus de Milo. In the afternoon, stroll through Montmartre's charming streets and visit the Sacré-Cœur Basilica." },
{ day: 4, title: "Day Trip to Versailles | Gardens of Versailles", text: "Take a day trip to the Palace of Versailles, marvel at its grandeur, and wander through the beautiful gardens and fountains." },
{ day: 5, title: "Departure", text: "Enjoy a leisurely breakfast and some last-minute shopping or sightseeing before departing Paris with cherished memories." },

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
          src="/International/Paris-1.png"
          alt="Adventure in Paris"
          className="rounded-lg w-full h-[300px] mb-4"
        />
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Take a scenic bike ride through the beautiful streets of Paris.</li>
<li>Climb the Eiffel Tower for a thrilling view of the city skyline.</li>
<li>Enjoy an unforgettable hot air balloon ride over the French countryside.</li>

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
        <li>Bois de Boulogne</li>
<li>Parc de Vincennes</li>
<li>Safari Zoo Thoiry</li>
<li>Jardin des Plantes Menagerie</li>

        </ul>
      </div>
    ),
    Luxury: (
      <div>
        <h2 className="text-xl font-bold mb-4">Luxury Hotels for Booking</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              name: "Hôtel Ritz Paris",
              description: "Stay at the iconic Ritz hotel with breathtaking city views.",
              image: "/International/Hotel-Ritz-Paris.jpg"
            },
            {
              name: "Le Meurice",
              description: "Experience unparalleled luxury in Paris’s most elegant hotel.",
              image: "/International/Le-Meurice.jpg"
            },
            {
              name: "Hotel Lutetia",
              description: "Relax in the lavish Art Deco rooms of this 5-star retreat.",
              image: "/International/Hotel-Lutetia.jpg"
            }
            
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
    <div className="bg-pink-100 py-10 max-w-4xl mx-auto">
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
