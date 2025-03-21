"use client"
import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import InternationalCarousel from '../Component/Internationalcarousel'
import Image from 'next/image'
import  { useState } from "react";
import { ChevronDown, ChevronUp, Filter } from "lucide-react";
import FilterPar from './FilterPar'
import ExploreCarPar from './ExploreCarPar'




const tripHighlights = [
  {
    id: 1,
    category: "Adventure",
    text: "Climb the Eiffel Tower and enjoy breathtaking views of Paris.",
    img: "/International/Paris-1.png"
  },
  {
    id: 2,
    category: "Cruise",
    text: "Take a romantic Seine River cruise and admire the city’s iconic landmarks.",
    img: "/International/Paris-2.png"
  },
  {
    id: 3,
    category: "History",
    text: "Explore the historic Louvre Museum, home to world-famous art like the Mona Lisa.",
    img: "/International/Paris-3.png"
  },
  {
    id: 4,
    category: "Culinary",
    text: "Indulge in Parisian cuisine at Michelin-starred restaurants or charming cafes.",
    img: "/International/Paris-4.png"
  },
  {
    id: 5,
    category: "Luxury",
    text: "Stay in an opulent hotel overlooking the Champs-Élysées or the Seine.",
    img: "/International/Paris-5.png"
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




       
<ExploreCarPar/>


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
  Visit the iconic Eiffel Tower, take an elevator to the top for breathtaking views of Paris, and enjoy the sparkling lights at night.
</li>
<li>
  Take a relaxing boat ride along the Seine River, passing famous landmarks like Notre-Dame Cathedral and the Musée d'Orsay while enjoying the scenic beauty.
</li>
<li>
  Explore the world-famous Louvre Museum, home to thousands of artworks, including the Mona Lisa and the Venus de Milo, and immerse yourself in history and art.
</li>
<li>
  Stroll through the charming streets of Montmartre, discover local artists, and visit the beautiful Sacré-Cœur Basilica for stunning city views.
</li>
<li>
  Indulge in authentic French cuisine at quaint cafes, savoring delicious pastries, croissants, and gourmet dishes that Paris is renowned for.
</li>

      </ul>
    </div>

{/* filter */}
<FilterPar/>

{/* content */}
  


  
</div>
<div className='w-[40%]'>
<img src="/International/Paris-4.png" alt="" className="w-[100%] rounded-md" />
</div>

</div>
<InternationalCarousel/>
        <Footer/>
        </div>
        </div>
    )
}

export default Page
