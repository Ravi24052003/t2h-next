"use client";
import React from 'react';

function Services() {
  const services = [
    {
      id: 1,
      image: "/images/services1.jpg",
      title: "Hotels",
    },
    {
      id: 2,
      image: "/images/services2.jpg",
      title: "Photoshoot",
    },
    {
      id: 3,
      image: "/images/services3.jpg",
      title: "Wedding",
    },
    {
      id: 4,
      image: "/images/services1.jpg",
      title: "Event",
    },
  ];

  return (
    <div className="bg-pink-50 py-10 w-full">
      <h2 className="text-center text-2xl font-bold mb-6">Our Services</h2>


      <div className=" px-6">
        <div className="flex 
         overflow-x-auto scrollbar-hide justify-start gap-6 md:gap-5 mx-10 px-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl overflow-hidden shadow-lg w-full sm:w-[50%] lg:w-[23%] flex-shrink-0"
            >

              <div className="relative w-full h-40">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2">
                  <h4 className="text-lg font-bold">{service.title}</h4>
                </div>
              </div>


            </div>
          ))}
        </div>
      </div>


    </div>
  );
}

export default Services;
