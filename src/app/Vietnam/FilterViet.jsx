import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FilterViet() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [activeDay, setActiveDay] = useState(null);

    const toggleDay = (day) => {
        setActiveDay(activeDay === day ? null : day);
    };

    const itineraryDetails = [
        { day: 1, title: "Arrival in Vietnam | Explore Hanoi", text: "Arrive in Hanoi, Vietnam's capital city, and check in to your hotel. Spend the day exploring the bustling Old Quarter and savoring traditional Vietnamese cuisine." },
        { day: 2, title: "Cruise through Halong Bay", text: "Embark on an unforgettable cruise through the emerald waters of Halong Bay, surrounded by stunning limestone cliffs and islands." },
        { day: 3, title: "Visit Hoi An | Lantern-Lit Streets", text: "Fly to Da Nang and head to Hoi An. Explore the ancient town with its charming lantern-lit streets, riverside cafes, and cultural landmarks." },
        { day: 4, title: "Trek through Sapa | Rice Terraces", text: "Travel to Sapa for a guided trek through picturesque rice terraces and remote villages, meeting local hill tribes along the way." },
        { day: 5, title: "Departure", text: "Conclude your journey with a relaxing morning in Hanoi or Ho Chi Minh City before your departure, cherishing memories of Vietnam’s beauty and culture." },

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
                    src="/International/Vietnam-3.png"
                    alt="Adventure in Vietnam"
                    className="rounded-lg w-full h-[300px] mb-4"
                />
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>
                        Trek through the stunning rice terraces of Sapa and visit local hill tribe villages.
                    </li>
                    <li>
                        Kayak through the breathtaking limestone formations of Halong Bay.
                    </li>
                    <li>
                        Explore the vast caves of Phong Nha-Ke Bang National Park, like Paradise Cave.
                    </li>


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
                    <li>Cuc Phuong National Park</li>
                    <li>Cat Tien National Park</li>
                    <li>Tram Chim National Park</li>
                    <li>Can Gio Biosphere Reserve</li>


                </ul>
            </div>
        ),
        Luxury: (
            <div>
                <h2 className="text-xl font-bold mb-4">Luxury Hotels for Booking</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                        {
                            name: "InterContinental Danang Sun Peninsula Resort",
                            description: "Enjoy breathtaking views of the private bay and world-class luxury at this hillside resort.",
                            image: "/International/InterContinental-Danang.jpeg"
                        },
                        {
                            name: "Six Senses Ninh Van Bay",
                            description: "Experience serene luxury with private villas nestled between mountains and the sea.",
                            image: "/International/Six-Senses-Ninh-Van-Bay.jpeg"
                        },
                        {
                            name: "The Reverie Saigon",
                            description: "Stay in the heart of Ho Chi Minh City with opulent rooms and stunning skyline views.",
                            image: "/International/The-Reverie-Saigon.jpg"
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
                        className={`px-4 py-2 rounded-lg font-medium ${selectedCategory === category
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
