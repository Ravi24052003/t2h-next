"use client"
import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import InternationalCarousel from '../Component/Internationalcarousel'
import Image from 'next/image'
import  { useState } from "react";
import { ChevronDown, ChevronUp, Filter } from "lucide-react";
import FilterThai from './FilterThai'
import ExploreCarThai from './ExploreCarThai'




const tripHighlights = [
  { id: 1, category: "Adventure", text: "Embark on an exciting trek through the lush jungles of Chiang Mai and visit hidden waterfalls.", img: "/International/Thailand-1.png" },
{ id: 2, category: "Cruise", text: "Take a scenic boat ride along the Chao Phraya River and enjoy views of Bangkok's iconic temples.", img: "/International/Thailand-2.png" },
{ id: 3, category: "Culture", text: "Explore the grandeur of the Grand Palace and learn about Thailand’s rich cultural heritage.", img: "/International/Thailand-3.png" },
{ id: 4, category: "Nature", text: "Visit Khao Sok National Park and enjoy a serene canoe ride through its emerald lakes.", img: "/International/Thailand-4.png" },
{ id: 5, category: "Luxury", text: "Relax in a beachfront villa in Krabi or Phuket with stunning views of the Andaman Sea.", img: "/International/Thailand-5.png" },


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




       
<ExploreCarThai/>


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
  Visit iconic temples like Wat Arun and Wat Phra Kaew, showcasing Thailand's rich heritage.
</li>
<li>
  Cruise to stunning islands like Koh Phi Phi and relax on their pristine beaches.
</li>
<li>
  Experience the vibrant floating markets and savor authentic Thai street food.
</li>
<li>
  Explore Khao Sok National Park with jungle treks and serene canoe rides.
</li>
<li>
  Unwind in a luxury beachfront villa in Krabi or Phuket with breathtaking ocean views.
</li>



      </ul>
    </div>

{/* filter */}
<FilterThai/>

{/* content */}
  
</div>
<div className='w-[40%]'>
<img src="/International/Thailand-4.png" alt="" className="w-[100%] rounded-md" />
</div>

</div>
<InternationalCarousel/>
        <Footer/>
        </div>
        </div>
    )
}

export default Page
