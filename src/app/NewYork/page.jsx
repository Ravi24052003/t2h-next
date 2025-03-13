"use client"
import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import InternationalCarousel from '../Component/Internationalcarousel'
import Image from 'next/image'
import  { useState } from "react";
import { ChevronDown, ChevronUp, Filter } from "lucide-react";
import FilterNew from './FilterNew'
import ExploreCarNew from './ExploreCarNew'




const tripHighlights = [
  {
    day: 1,
    title: "Arrival in New York | Times Square Exploration",
    text: "Arrive in New York City and immerse yourself in the vibrant energy of Times Square, filled with dazzling lights and iconic billboards."
  },
  {
    day: 2,
    title: "New York City Tour | Statue of Liberty",
    text: "Embark on a city tour and visit landmarks like the Statue of Liberty and Ellis Island, uncovering the rich history of immigration and freedom."
  },
  {
    day: 3,
    title: "Central Park Stroll | Museum Visit",
    text: "Take a leisurely stroll through Central Park, then explore renowned museums like the Metropolitan Museum of Art or the American Museum of Natural History."
  },
  {
    day: 4,
    title: "Empire State Building | Broadway Show",
    text: "Enjoy breathtaking views of the city from the Empire State Building and experience the magic of a world-class Broadway performance."
  },
  {
    day: 5,
    title: "Departure",
    text: "Bid farewell to New York City with unforgettable memories of its iconic landmarks, culture, and energy."
  }
  
  
];

function Page() {

  const [activeDay, setActiveDay] = useState(null);

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  

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




       
<ExploreCarNew/>


{/* Trip Highlight */}







{/* written content */}
<div className=''>
{/* <h1 className='mx-40 mt-10 text-left text-4xl font-bold'>Explore Dubai</h1>  */}


<div className='flex gap-3 mt-3 mb-3  justify-center  rounded-2xl  mx-[10%]'>
<div className=' w-[60%]  '>
  {/* <img src="/International/Dubai-1.png "
  className='w-[100%] h-[397] rounded-lg'
  /> */}


<div className="">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Trip Highlights</h2>
      <ul className="list-disc pl-6 space-y-4 text-gray-700">
      <li>
  Marvel at the iconic Statue of Liberty and Ellis Island, symbols of freedom and history, and learn about their significance.
</li>
<li>
  Take a scenic walk through Central Park, enjoying its lush landscapes, picturesque bridges, and serene lakes in the heart of the city.
</li>
<li>
  Visit the Metropolitan Museum of Art, home to an extensive collection of art from around the world, including timeless masterpieces.
</li>
<li>
  Experience the energy of Times Square with its vibrant lights, bustling streets, and entertainment options that never sleep.
</li>
<li>
  Savor the diverse culinary delights of New York City, from classic New York-style pizza to fine dining experiences in world-class restaurants.
</li>


      </ul>
    </div>

{/* filter */}
<FilterNew/>

{/* content */}
  


  
</div>
<div className='w-[40%]'>
<img src="/International/dubai-4.png" alt="" className="w-[100%] rounded-md" />
</div>

</div>
<InternationalCarousel/>
        <Footer/>
        </div>
        </div>
    )
}

export default Page
