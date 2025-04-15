  "use client";
  import React, { useEffect, useState } from "react";
  import Image from "next/image";
  import { ChevronDown, ChevronUp, Filter } from "lucide-react";
  import FilterDec from "./FilterDec";
  import ExploreDec from "./ExploreDec";
  import DomesticCarousel from "../../Component/DomesticCarousel";
  import Footer from "../../Component/Footer";
  import Navbar from "../../Component/Navbar";
  import { usePathname } from "next/navigation";

  const tripHighlights = [
    { id: 1, category: "Beaches", text: "Relax on the pristine sands of Baga, Anjuna, and Palolem beaches.", img: "/International/Goa-1.png" },
    { id: 2, category: "Adventure", text: "Experience thrilling water sports like parasailing, jet skiing, and scuba diving.", img: "/International/Goa-2.png" },
    { id: 3, category: "Culture", text: "Explore Old Goa's historic churches like Basilica of Bom Jesus and Se Cathedral.", img: "/International/Goa-3.png" },
    { id: 4, category: "Nightlife", text: "Dance the night away at Goa's famous beach shacks and clubs.", img: "/International/Goa-4.png" },
    { id: 5, category: "Nature", text: "Discover the serene beauty of Dudhsagar Falls and spice plantations.", img: "/International/Goa-5.png" },
  ];

  function Page() {
    const [activeDay, setActiveDay] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [destinationName, setDestinationName] = useState("Destination");
    const [destinationImages, setDestinationImages] = useState([]);
    const pathname = usePathname();
    const slug = pathname.split("/").pop();
    const [loading, setLoading] = useState(true);
    
    

    const toggleDay = (day) => {
      setActiveDay(activeDay === day ? null : day);
    };

    const filteredHighlights =
      selectedCategory === "All"
        ? tripHighlights
        : tripHighlights.filter((highlight) => highlight.category === selectedCategory);







const fetchItineraryData = async (slug) => {
    try {
      const res = await fetch(
        `https://t2hdashboard.theholistay.in/public-itinerary/${slug}`,
        { cache: "no-store" }
      );
      if (!res.ok) {
        throw new Error("Failed to fetch itinerary data");
      }
      const data = await res.json();
      if (data?.selected_destination) {
        setDestinationName(data.selected_destination);
      } else {
        setDestinationName("No destination details available.");
      }

      if (data?.destination_thumbnail && Array.isArray(data.destination_thumbnail)) {
        const fullImageUrls = data.destination_thumbnail.map(
          (image) => `https://t2hdashboard.theholistay.in/${image}`
        );
        setDestinationImages(fullImageUrls);
      } else {
        setDestinationImages([]);
      }

    } catch (err) {
      console.error("Error fetching itinerary data:", err);
      setError(`Failed to load itinerary data: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (slug) {
      fetchItineraryData(slug);
    }
  }, [slug]);



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
        <ExploreDec />

        {/* Trip Highlights */}
        <div className="mt-10">
          <div className="flex gap-3 mb-3 justify-center rounded-2xl mx-[5%]">
            {/* Left Section */}
            <div className="w-full md:w-[60%]">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Trip Highlights</h2>
              <ul className="list-disc text-xl pl-6 space-y-4 text-gray-700">
                <li>Romantic beachside resorts for ultimate relaxation and luxury.</li>
                <li>Private sunset cruises offering breathtaking views and romance.</li>
                <li>Adventure activities like scuba diving, safaris, and more.</li>
                <li>Indulge in personalized candlelight dinners and spa retreats.</li>
                <li>Curated cultural tours to explore local traditions and history.</li>
              </ul>

              {/* Filter Component */}
              <FilterDec />
            </div>

            {/* Right Section */}
            {/* Right Section */}
<div className="w-[30%] hidden sm:inline-block">
  <img src={destinationImages} alt="" className="w-full rounded-md" />
  
  {/* Form Section */}
  <div className="mt-8 p-6 bg-white shadow-md rounded-md">
    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Get In Touch</h3>
    <form>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full p-3 border border-gray-300 rounded-md mt-2"
          placeholder="Your Name"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full p-3 border border-gray-300 rounded-md mt-2"
          placeholder="Your Email"
          required
        />
      </div>


      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full p-3 border border-gray-300 rounded-md mt-2"
          placeholder="Your Phone Number"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700">Message</label>
        <textarea
          id="message"
          name="message"
          className="w-full p-3 border border-gray-300 rounded-md mt-2"
          placeholder="Your Message"
          rows="4"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-700"
      >
        Submit
      </button>
    </form>
  </div>
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
