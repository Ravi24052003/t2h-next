"use client"
import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import InternationalCarousel from '../Component/Internationalcarousel'
import Image from 'next/image'
import  { useState } from "react";
import { ChevronDown, ChevronUp, Filter } from "lucide-react";
import FilterViet from './FilterViet'
import ExploreCarViet from './ExploreCarViet'




const tripHighlights = [
  { id: 1, category: "Adventure", text: "Trek through the lush rice terraces of Sapa and experience the beauty of Vietnam's mountainous landscapes.", img: "/International/Vietnam-1.png" },
{ id: 2, category: "Cruise", text: "Sail through the breathtaking limestone karsts of Halong Bay on a traditional junk boat.", img: "/International/Vietnam-2.png" },
{ id: 3, category: "Culture", text: "Discover the ancient town of Hoi An, known for its lantern-lit streets and rich Vietnamese heritage.", img: "/International/Vietnam-3.png" },
{ id: 4, category: "Nature", text: "Explore the serene beauty of Phong Nha-Ke Bang National Park with its stunning caves and rivers.", img: "/International/Vietnam-4.png" },
{ id: 5, category: "Luxury", text: "Stay at a luxurious beachfront resort in Da Nang or Nha Trang, enjoying world-class amenities.", img: "/International/Vietnam-5.png" },



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




       
<ExploreCarViet/>


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
  Explore the ancient streets of Hoi An, a UNESCO World Heritage site, known for its lantern-lit ambiance and rich culture.
</li>
<li>
  Cruise through the majestic limestone cliffs of Halong Bay on a traditional junk boat.
</li>
<li>
  Visit the historic Cu Chi Tunnels to learn about Vietnam's fascinating wartime history.
</li>
<li>
  Discover the lush landscapes of Sapa with trekking adventures through rice terraces and hill tribes.
</li>
<li>
  Relax at a luxury beachfront resort in Da Nang or Nha Trang, surrounded by stunning coastal views.
</li>




      </ul>
    </div>

{/* filter */}
<FilterViet/>

{/* content */}
  
</div>
<div className='w-[40%]'>
<img src="/International/Vietnam-2.png" alt="" className="w-[100%] rounded-md" />
</div>

</div>
<InternationalCarousel/>
        <Footer/>
        </div>
        </div>
    )
}

export default Page
