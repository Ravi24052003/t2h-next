import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FilterMal() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [activeDay, setActiveDay] = useState(null);

    const toggleDay = (day) => {
        setActiveDay(activeDay === day ? null : day);
    };

    const itineraryDetails = [
        { day: 1, title: "Arrival in the Maldives | Relax at the Resort", text: "Arrive in the Maldives and check in to your luxurious overwater villa or beachside resort. Spend the day unwinding and soaking in the serene island vibes." },
        { day: 2, title: "Explore the Island | Snorkeling Adventure", text: "Discover the stunning marine life of the Maldives with a snorkeling adventure in the vibrant coral reefs. Relax on the pristine beaches or explore the local island." },
        { day: 3, title: "Dolphin Cruise | Sunset Dhoni Ride", text: "Embark on a dolphin-watching cruise and witness these playful creatures in their natural habitat. In the evening, enjoy a magical sunset dhoni ride with breathtaking ocean views." },
        { day: 4, title: "Water Sports | Relaxation & Spa", text: "Indulge in thrilling water sports like paddleboarding or kayaking, followed by a rejuvenating spa session with oceanfront views to enhance your relaxation." },
        { day: 5, title: "Departure", text: "Bid farewell to the Maldives and cherish the memories of your tropical escape as you prepare for departure." },
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
                    src="/International/Maldives-3.png"
                    alt="Adventure in Dubai"
                    className="rounded-lg w-full h-[300px] mb-4"
                />
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Explore vibrant coral reefs while snorkeling or scuba diving.</li>
                    <li>Enjoy exciting water sports like jet skiing and paddleboarding.</li>
                    <li>Relax with a sunset cruise or indulge in a rejuvenating spa session.</li>

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
                    <li>Baa Atoll Biosphere Reserve</li>
                    <li>Hanifaru Bay (famous for manta rays)</li>
                    <li>Private Sandbank Dining Experiences</li>
                    <li>Local Island Cultural Tours</li>

                </ul>
            </div>
        ),
        Luxury: (
            <div>
                <h2 className="text-xl font-bold mb-4">Luxury Hotels for Booking</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
    {
        name: "Baros Maldives",
        description: "Stay in an elegant overwater villa with stunning views of the turquoise lagoon.",
        image: "/International/Baros-Maldives.jpg",
    },
    {
        name: "Soneva Fushi",
        description: "Experience barefoot luxury and sustainability in this eco-friendly resort.",
        image: "/International/Soneva-Fushi.jpg",
    },
    {
        name: "Coco Bodu Hithi",
        description: "Relax in a luxurious beachfront villa with access to pristine white sandy beaches.",
        image: "/International/Coco-Bodu-Hithi.jpg",
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
