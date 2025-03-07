"use client";
import React from 'react'
function Herosection() {
  return (
    <div className=" w-full bg-gray-100">
  <video
    src="/images/hero.mp4"
    playsInline
    width="100%"
    className=" w-full h-[350px] lg:h-[450px] object-fill"
    autoPlay
    muted
    loop
    
  >
    Your browser does not support the video tag.
  </video>
</div>

  )
}

export default Herosection
