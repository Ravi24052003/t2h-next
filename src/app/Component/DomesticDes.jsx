"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

function DomesticDes() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImageIndex2, setCurrentImageIndex2] = useState(0);

  // Arrays of images for each destination
  const destination1Images = ["/images/int1.png", "/images/int2.png", "/images/int1.png"];
  const destination2Images = ["/Domestic/Kashmir-4.png", "/Domestic/Kashmir-5.png", "/images/kerala1.jpeg"];

  // Change images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % destination1Images.length);
      setCurrentImageIndex2((prev) => (prev + 1) % destination2Images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-pink-100 p-6">
      {/* Container */}
      <div className="flex justify-between my-4 mx-auto max-w-6xl">
        <h2 className="text-xl text-start font-semibold text-gray-700">
          Domestic Destination
        </h2>
        <h2 className="text-red-600 text-xl text-end">See More</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Left Section */}
        <div className="md:col-span-2">
          {/* Destination 1 */}
          <div className="grid md:grid-cols-2 gap-4 items-center bg-[#FFAD9E] px-4 p-4 md:pb-0 md:mb-0 mb-5 rounded-lg md:rounded-b-none">
            <img
              src={destination1Images[currentImageIndex]}
              alt="Destination 1"
              className="w-full h-56 object-cover rounded-lg"
            />
            <div>
              <h3 className="text-lg font-semibold">Andaman</h3>
              <p className="text-sm text-gray-600">
              Pristine beaches, turquoise waters, lush forests, and serene islands.
              </p>
              <p className="text-red-500 font-semibold text-lg mt-2">
                4000.00 Per head
              </p>
              <Link href="/DomesticsPages/Andaman" ><button className="mt-2 bg-red-500 text-white px-4 py-2 rounded-lg">
                Book Now
              </button></Link>
            </div>
          </div>

          {/* Destination 2 */}
          <div className="grid md:grid-cols-2 gap-4 items-center bg-[#FFAD9E] px-4 p-4 md:pt-0 rounded-lg md:rounded-t-none">
            <div>
              <h3 className="text-lg font-semibold">Kashmir</h3>
              <p className="text-sm text-gray-600">
              Beautiful mountains, green valleys, calm lakes, and snowy landscapes.
              </p>
              <p className="text-red-500 font-semibold text-lg mt-2">
                4000.00 Per head
              </p>
              <Link href="/DomesticsPages/Kashmir" > <button className="mt-2 bg-red-500 text-white px-4 py-2 rounded-lg">
                Book Now
              </button></Link>
            </div>
            <img
              src={destination2Images[currentImageIndex2]}
              alt="Destination 2"
              className="w-full h-56 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-red-900 text-white p-6 rounded-lg flex flex-col items-center space-y-4">
          <h3 className="text-lg font-semibold">Company Name</h3>
          <h2 className="text-2xl font-bold">Wedding Planner</h2>
          <img
            src="/images/int3.png"
            alt="Wedding Couple"
            className="w-full h-56 object-cover rounded-lg"
          />
          <button className="bg-red-500 px-6 py-2 rounded-lg text-white">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default DomesticDes;
