  "use client"
import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import InternationalCarousel from '../Component/Internationalcarousel'
import Image from 'next/image'
import ExploreCarousel from '../Component/ExploreCarousel'
import  { useState } from "react";



const tripHighlights = [
  { id: 1, category: "Adventure", text: "Explore Dubai's cutting-edge architectural wonders and marvel at the city's iconic skyline of skyscrapers and futuristic design." },
  { id: 2, category: "Cruise", text: "Sail along Dubai Marina aboard a traditional dhow cruise, enjoying views of the city's iconic marvels, while savoring a delicious dinner and cultural entertainment." },
  { id: 3, category: "History", text: "Learn about Dubai's rich history at the Dubai Museum, exploring exhibits that showcase the city's cultural heritage and transformation over time." },
  { id: 4, category: "Safari", text: "Indulge in a desert safari adventure, with activities like dune bashing in a 4x4, camel riding, sandboarding, and a traditional Bedouin-style camp experience." },
  { id: 5, category: "Luxury", text: "Stay at the iconic Atlantis The Palm resort, offering luxurious accommodations and access to the thrilling Aquaventure Waterpark." },
];

function Page() {


  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredHighlights =
    selectedCategory === "All"
      ? tripHighlights
      : tripHighlights.filter((highlight) => highlight.category === selectedCategory);
  
    return (
        <div className='bg-pink-100'>
        <Navbar/>
        
    <div className=" rounded-b-lg bg-gray-100">
  <video
    src="/images/hero.mp4"
    playsInline
    width="100%"
    className=" rounded-b-lg w-full h-[350px] lg:h-[450px] object-fill"
    autoPlay
    muted
    loop
    
  >
    Your browser does not support the video tag.
  </video>
</div>




        {/* <div className="bg-gray-100 min-h-screen mx-10">
      <main className="container   py-8">
        <div className="mb-8  flex justify-center flex-wrap gap-[8] ">
          
          <img
            src="/International/dubai-1.png"
            alt="Dubai Skyline"
            className="w-[24%] h-64 object-cover rounded-lg shadow-md"
          />
          <img
            src="/International/dubai-1.png"
            alt="Dubai Skyline"
            className="w-[24%] h-64 object-cover rounded-lg shadow-md"
          />
          <img
            src="/International/dubai-1.png"
            alt="Dubai Skyline"
            className="w-[24%] h-64 object-cover rounded-lg shadow-md"
          />
          <img
            src="/International/dubai-1.png"
            alt="Dubai Skyline"
            className="w-[24%] h-64 object-cover rounded-lg shadow-md"
          />
          <img
            src="/International/dubai-1.png"
            alt="Dubai Skyline"
            className="w-[24%] h-64 object-cover rounded-lg shadow-md"
          />
          <img
            src="/International/dubai-1.png"
            alt="Dubai Skyline"
            className="w-[24%] h-64 object-cover rounded-lg shadow-md"
          />
          <img
            src="/International/dubai-1.png"
            alt="Dubai Skyline"
            className="w-[24%] h-64 object-cover rounded-lg shadow-md"
          />
          <img
            src="/International/dubai-1.png"
            alt="Dubai Skyline"
            className="w-[24%] h-64 object-cover rounded-lg shadow-md"
          />
        </div>
        
        
      </main>
      
    </div> */}
<ExploreCarousel/>


{/* Trip Highlight */}


<div className=" mx-[5%] px-6 py-10 w-[50%] ">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Trip Highlights</h2>
      <ul className="list-disc pl-6 space-y-4 text-gray-700">
        <li>
          Explore Dubai's cutting-edge architectural wonders and marvel at the
          city's iconic skyline of skyscrapers and futuristic design.
        </li>
        <li>
          Sail along Dubai Marina aboard a traditional dhow cruise, enjoying
          views of the city's iconic marvels, while savoring a delicious dinner
          and cultural entertainment.
        </li>
        <li>
          Learn about Dubai's rich history at the Dubai Museum, exploring
          exhibits that showcase the city's cultural heritage and transformation
          over time.
        </li>
        <li>
          Indulge in a desert safari adventure, with activities like dune
          bashing in a 4x4, camel riding, sandboarding, and a traditional
          Bedouin-style camp experience.
        </li>
        <li>
          Stay at the iconic Atlantis The Palm resort, offering luxurious
          accommodations and access to the thrilling Aquaventure Waterpark.
        </li>
      </ul>
    </div>

{/* filter */}

<div className="bg-white px-6 py-10 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-white mb-6">Trip Highlights</h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-4 mb-6 bg-[#F4F6F9]">
        {["All", "Adventure", "Cruise", "History", "Safari", "Luxury"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg font-medium ${
              selectedCategory === category
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Highlights List */}
      <ul className="list-disc pl-6 space-y-4 text-gray-700">
        {filteredHighlights.map((highlight) => (
          <li key={highlight.id}>{highlight.text}</li>
        ))}
      </ul>
    </div>


{/* written content */}
<div className=''>
<h1 className='mx-40 mt-10 text-left text-4xl font-bold'>Explore Dubai</h1>


<div className='flex gap-3 mt-3 mb-3  justify-center  rounded-2xl  mx-40'>
<div className=' w-[70%]  '>
  <img src="/International/Dubai-1.png "
  className='w-[100%] h-[397] rounded-lg'
  />
  <div className='px-1 mt-10'>
    <h1  className='text-3xl font-bold '>Top 5 reasons why you should consider Dubai for your honeymoon destination</h1>
    <p>You might be thinking why should you consider the Dubai honeymoon trip? here’s how you can get an exotic honeymoon in Dubai and make your marriage memorable.

Dubai is one of the few Middle Eastern cities that extends a warm welcome to visitors. The United Arab Emirates is made up of seven municipalities. The city, which is located southwest of the Arabian Gulf and east of the Arabian Peninsula, is well-known for its gorgeous coastline, endless deserts, and year-round sunshine. If you are also planning your vacation, you can check out the best tour and travel agency in Kolkata.</p>
<h1  className='text-3xl font-bold '>An Adventures Experience In Dubai Honeymoon Trip </h1>
<p>
The city is home to world-record-breaking constructions such as the Burj Khalifa, the Burj Al Arab, and the Miracle Garden. Any tourist to Dubai will experience the traditional Arabic culture thanks to the city’s rich heritage. The Dubai Museum is a well-known historical landmark. The museum is housed inside Al Fahidi Fort, one of Dubai’s oldest buildings, and contains significant relics and motivational tales that represent the city’s humble beginnings and a great Dubai honeymoon trip. 
<br /><br />
The Burj Al Arab is yet another well-known building. The hotel, which stands majestically on the man-made ground amidst the sea, is well recognized for its distinctive structure and luxurious décor. Make your marriage memorable with a beautiful Dubai honeymoon trip. 
<br /><br />
Dubai is surrounded by the glittering waters of the Gulf, which helps give the city those immense skies and an incredible sense of light.
<br /><br />
The Spice Souk and the Gold Souk are two of the most well-known souks in Dubai. While the Gold Souk offers incomparable discounts on its well-created jewelry, the Spice Souk offers a wide selection of exotic herbs and spices. 
<br /> <br />
Dubai Mall, the biggest retail center in the world, is located in the city. The Dubai Mall also has a gigantic ice rink, an indoor amusement park, and a towering aquarium in addition to stores and eateries. Additionally, it has the Dubai Fountain, where scheduled performances are held. They claim that the fountain has incredible light and sound synchronization that can be seen from the moon.
<br /><br />
The Mall of the Emirates is another well-known shopping area in Dubai. The largest indoor ski slope in the world can be found at Ski Dubai, one of MOE’s main attractions. Check the travel agency in Delhi for an adventurous Dubai honeymoon trip.
</p>
<br /><br />
<h3 className='font-bold'>For Enjoyment and Excitement</h3>
<p>
  -Join Skydive Dubai and go skydiving <br />
-Join the Balloon Adventures Emirates on a hot air balloon ride. <br />
-Learn more about the legendary Dubai Desert Safari. <br />
-At the Dubai Aquarium and Underwater Zoo, discover the wonders of water. <br />
-Enjoy the waterpark at the Atlantis. <br />
-Visit Ski Dubai and go skiing. <br />
<br /> <br /> <br />
Due to Dubai’s extensive history of trade, the nations that actively brought in and conducted business in the city have had a significant impact on the city’s distinctive character in terms of food. Cardamom, saffron, cinnamon, and turmeric are just a few of the spices that are a staple of any traditional Emirati menu. You can buy famous dates, spices, and exotic perfumes on a Dubai honeymoon trip
</p>

  </div>
</div>
<div className='w-[30%]'>
<img src="/International/dubai-2.png" alt="" className="w-[100%] rounded-md" />
</div>

</div>
<InternationalCarousel/>
        <Footer/>
        </div>
        </div>
    )
}

export default Page
