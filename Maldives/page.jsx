"use client"
import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import InternationalCarousel from '../Component/Internationalcarousel'
import Image from 'next/image'
import  { useState } from "react";
import { ChevronDown, ChevronUp, Filter } from "lucide-react";
import FilterMal from './FilterMal'
import ExploreCarMal from './ExploreCarMal'




const tripHighlights = [
  { id: 1, category: "Adventure", text: "Explore vibrant coral reefs while snorkeling or scuba diving in the crystal-clear waters of the Maldives.", img: "/International/Maldives-1.png" },
{ id: 2, category: "Cruise", text: "Enjoy a sunset dhoni cruise with breathtaking ocean views and a relaxing ambiance.", img: "/International/Maldives-2.png" },
{ id: 3, category: "Culture", text: "Visit local fishing villages to experience traditional Maldivian culture and lifestyle.", img: "/International/Maldives-3.png" },
{ id: 4, category: "Nature", text: "Discover the natural beauty of the Maldives with dolphin-watching tours and serene island walks.", img: "/International/Maldives-4.png" },
{ id: 5, category: "Luxury", text: "Stay in a luxurious overwater villa offering direct access to turquoise lagoons and world-class services.", img: "/International/Maldives-5.png" },

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




       
<ExploreCarMal/>


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
  Discover vibrant coral reefs while snorkeling or diving in the crystal-clear waters of the Maldives.
</li>
<li>
  Enjoy a romantic sunset cruise aboard a traditional dhoni with stunning ocean views.
</li>
<li>
  Visit local islands to experience the traditional culture and lifestyle of the Maldivian people.
</li>
<li>
  Relax on pristine beaches or indulge in exciting water sports like jet skiing and paddleboarding.
</li>
<li>
  Stay in an overwater villa or beachfront resort, offering luxury and breathtaking views of turquoise lagoons.
</li>

      </ul>
    </div>

{/* filter */}
<FilterMal/>

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
