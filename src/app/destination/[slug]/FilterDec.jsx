"use client";

import { useState, useEffect } from "react";
import { ChevronDown, ChevronRight, ChevronUp, ChevronLeft } from "lucide-react";
import { usePathname } from "next/navigation";

export default function FilterDec() {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();

  const [itineraryDetails, setItineraryDetails] = useState([]);
  const [destinationName, setDestinationName] = useState("");
  const [destinationDetail, setDestinationDetail] = useState("");
  const [destinationImages, setDestinationImages] = useState([]);
  const [destinationExclusion, setDestinationExclusion] = useState("");
  const [destinationInclusion, setDestinationInclusion] = useState("");
  const [destinationAdditional_inclusion, setDestinationAdditional_inclusion] = useState("");
  const [destinationHotel_details, setDestinationHotel_details] = useState([])
  const [destinationPayment_mode, setDestinationPayment_mode] = useState("");
  const [destinationCancellation_policy, setDestinationCancellation_policy] = useState("");
  const [destinationTermsandConditions, setDestinationTermsandConditions] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeDay, setActiveDay] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === destinationImages.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? destinationImages.length - 1 : prevIndex - 1
    );
  };
  



  const toggleDay = (day) => {
    setActiveDay((prev) => (prev === day ? null : day));
  };

  const fetchItineraryData = async (slug) => {
    try {
      const res = await fetch(`https://t2hdashboard.theholistay.in/public-itinerary/${slug}`, {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch itinerary data");
      }
      const data = await res.json();
      if (data?.days_information) {
        setItineraryDetails(data.days_information);
      } else {
        throw new Error("Invalid data structure: 'days_information' is missing");
      }

      if (data?.destination_detail) {
        setDestinationDetail(data.destination_detail);
      } else {
        setDestinationDetail("No destination details available.");
      }

      if (data?.selected_destination) {
        setDestinationName(data.selected_destination);
      } else {
        setDestinationName("No destination details available.");
      }
      if (data?.exclusion) {
        setDestinationExclusion(data.exclusion);
      } else {
        setDestinationExclusion("No destination details available.");
      }
      if (data?.inclusion) {
        setDestinationInclusion(data.inclusion);
      } else {
        setDestinationInclusion("No destination details available.");
      }

      if (data?.additional_inclusion) {
        setDestinationAdditional_inclusion(data.additional_inclusion);
      } else {
        setDestinationAdditional_inclusion("No destination details available.");
      }

      {/* resort hotel */}
      if (data?.hotel_details) {
        setDestinationHotel_details(data.hotel_details);
      } else {
        setDestinationHotel_details("No destination details available.");
      }

      {/* Payment mode */}
      if (data?.payment_mode) {
        setDestinationPayment_mode(data.payment_mode);
      } else {
        setDestinationPayment_mode("No destination details available.");
      }


      {/* cancellation policy */}
      if (data?.cancellation_policy) {
        setDestinationCancellation_policy(data.cancellation_policy);
      } else {
        setDestinationCancellation_policy("No destination details available.");
      }


      {/* Terms & Conditions policy */}
      if (data?.terms_and_conditions) {
        setDestinationTermsandConditions(data.terms_and_conditions);
      } else {
        setDestinationTermsandConditions("No destination details available.");
      }

      if (data?.destination_images && Array.isArray(data.destination_images)) {
        const fullImageUrls = data.destination_images.map(
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

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImageIndex((prevIndex) =>
  //       destinationImages.length > 0 ? (prevIndex + 1) % destinationImages.length : 0
  //     );
  //   }, 5000);
  //   return () => clearInterval(interval); // Cleanup interval on component unmount
  // }, [destinationImages]);


  useEffect(() => {
    if (destinationImages.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % destinationImages.length);
      }, 3000); // Change image every second (1000 ms)
  
      return () => clearInterval(interval);
    }
  }, [destinationImages]); // Re-run the effect when `destinationImages` changes
  

  const categoryLogic = {
    Itinerary: loading ? (
      <div>Loading itinerary...</div>
    ) : error ? (
      <div>{error}</div>
    ) : (
      <div className="space-y-2 bg-transparent rounded-xl">
        {itineraryDetails.map((item) => (
          <div key={item.day} className="border-none rounded-md">
            <button
              className="w-full border-none flex justify-between items-center px-4 py-2 bg-white text-black font-semibold rounded-xl"
              onClick={() => toggleDay(item.day)}
            >
              <span className="text-start text-xl">
                <span className="bg-red-600 rounded-lg p-1 text-xl">DAY {item.day}</span> - {item.title}
              </span>
              {activeDay === item.day ? <ChevronUp /> : <ChevronDown />}
            </button>
            {activeDay === item.day && (
              <div className="px-4 py-2 bg-white rounded-lg">
                <p className="text-gray-600 rounded-xl text-lg" dangerouslySetInnerHTML={{ __html: item.detail }} />
              </div>
            )}
          </div>
        ))}
      </div>
    ),



    
    "Destination Details": (
  <div>
    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-5 text-xl">
      <li dangerouslySetInnerHTML={{ __html: destinationDetail }}></li>
    </ul>
    {destinationImages.length > 0 ? (
      <div className="relative">
        <img
          src={destinationImages[currentImageIndex]} // Dynamically change the image
          alt={`Image of ${destinationName || "destination"}`}
          className="rounded-lg bg-gray-400 w-full h-[300px] mb-4 object-cover"
          onError={(e) => (e.target.src = "https://via.placeholder.com/300")} // Fallback image on error
        />
        <button
          onClick={handlePrevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75"
        >
          <ChevronLeft className="w-10 h-10`" />
        </button>
        <button
          onClick={handleNextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75"
        >
          <ChevronRight className="w-10 h-10" />
        </button>
      </div>
    ) : (
      <p className="text-gray-500">No images available for this destination.</p>
    )}
  </div>
),



    "Inclusion/Exclusion": (

  <div>
  <div className="bg-gray-100 py-10 px-4 rounded-lg shadow sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-8">Inclusion & Exclusion</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Inclusion Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300">
  <h2 className=" inline text-center p-1 text-2xl font-semibold  mb-2 text-green-700 rounded">Inclusion</h2>
  <ul
    className="list-disc pl-6 space-y-2 text-gray-700 border-t-2 "
    dangerouslySetInnerHTML={{ __html: destinationInclusion }}
  ></ul>
</div>

          {/* Exclusion Section */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300">
  <h2 className="inline  rounded p-1 text-2xl font-semibold text-red-500 mb-4">Exclusion</h2>
  <ul
    className="list-disc pl-6 space-y-2 text-gray-700 border-t-2"
    dangerouslySetInnerHTML={{ __html: destinationExclusion }}
  ></ul>
</div>
        </div>

        {/* Additional Inclusion Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mt-6 hover:scale-105 transition-transform duration-300">
  <h2 className="text-2xl font-semibold text-blue-600 mb-4">Additional Inclusion</h2>
  <ul
    className="list-disc pl-6 space-y-2 text-gray-700"
    dangerouslySetInnerHTML={{ __html: destinationAdditional_inclusion }}
  ></ul>
</div>
    </div>
  

    <div className="mt-4">
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
        <button type="submit" className="px-4 py-2 bg-red-600 text-white rounded-lg">Book Now</button>
      </form>
    </div>
  </div>

    ),
    
    "Accommodation Info": (
      <div className="bg-gray-100 py-10 px-4 rounded-lg shadow sm:px-6 lg:px-8">
        <h2 className="text-3xl text-center border-b-2 font-bold mb-4 pb-2  ">Luxury Hotels Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {destinationHotel_details.length === 0 && (
            <div className="col-span-3 text-center text-gray-500">No hotels available</div>
          )}
          {destinationHotel_details.map((hotel, index) => (
            <div key={index} className="border rounded-lg p-4 bg-white shadow-lg hover:scale-105 transition-transform duration-300">
              <img
                src={hotel.image || "https://via.placeholder.com/150"}
                alt={hotel.name || "Hotel Image"}
                className="rounded-lg mb-4 object-cover h-32 w-full bg-gray-300"
              />
              <h3 className="font-bold text-lg border-b-2">{hotel.name || "Hotel Name"}</h3>
              
              <p
          className="text-gray-600"
    dangerouslySetInnerHTML={{ __html: destinationHotel_details || "According to your Choice" }}
  ></p>
              <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition duration-300">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    ),

    "Payment Information": (
  <div className="bg-gray-100 py-10 px-4 rounded-lg shadow sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center mb-8 border-b-2 pb-2">Payment Information</h2>
    <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300">
      {destinationPayment_mode ? (
        <p
          className="text-gray-700 text-lg"
          dangerouslySetInnerHTML={{ __html: destinationPayment_mode }}
        ></p>
      ) : (
        <p className="text-gray-500">No payment information available.</p>
      )}
    </div>
  </div>
),
    "Cancellation policy": (
  <div className="bg-gray-100 py-10 px-4 rounded-lg shadow sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-red-600 text-center mb-8 border-b-2 pb-2">Cancellation Policy Information</h2>
    <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300">
      {destinationPayment_mode ? (
        <p
          className="text-gray-700 text-lg"
          dangerouslySetInnerHTML={{ __html: destinationCancellation_policy }}
        ></p>
      ) : (
        <p className="text-gray-500">No payment information available.</p>
      )}
    </div>
  </div>
),



"Terms & Conditions": (
  <div className="bg-gray-100 py-10 px-4 rounded-lg shadow sm:px-6 lg:px-8">
    <h2 className="text-3xl text-red-600 font-bold text-center mb-8 border-b-2 pb-2">Terms & Conditions Information</h2>
    <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300">
      {destinationTermsandConditions ? (
        <p
          className="text-gray-700 text-lg"
          dangerouslySetInnerHTML={{ __html: destinationTermsandConditions }}
        ></p>
      ) : (
        <p className="text-gray-500">No payment information available.</p>
      )}
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
    <div className="bg-pink-100   py-10 max-w-4xl mx-auto">
      {/* Filter Buttons */}
      <div>
      <h2 className="text-3xl font-bold mb-6">Details {destinationName}</h2>
      <p className="text-gray-600 mb-4">Select a category to filter the content:</p>
      </div>
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



