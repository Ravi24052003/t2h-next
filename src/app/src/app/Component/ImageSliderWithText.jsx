"use client";

import { useState } from 'react';
import Image from 'next/image';
import Slide1 from '../../../public/images/weddingslide1.jpg';
import Slide2 from '../../../public/images/weddingslide2.jpg'


const ImageSliderWithText = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const images = [
//     "C:\Users\md majdi\Desktop\New folder\trip-to-honymoon\slid1.png",
//     "C:\Users\md majdi\Desktop\New folder\trip-to-honymoon\slid2.png"
//   ];

//   Function to switch images
//   const nextImage = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

  return (
    <div className="relative bg-[#cf391e] w-full h-20  md:h-32 lg:h-30">
      {/* Image Slider */}
      <div className='flex h-40'>
        <Image
          src={Slide1}
          alt='image'
          className=' object-cover object-center w-50 h-30'
        />
        <Image
          src={Slide2}
          alt='Poster1'
          className=' object-cover object-center w-50 h-30'
        />
      </div>
      
      {/* Text Block */}
      <div className="absolute inset-0 flex justify-start items-center px-8">
        <div className="text-white space-y-4">
          <h4 className="text-lg font-semibold">Company Name</h4>
          <h1 className="text-4xl font-bold">Wedding Planner</h1>
          <button className="bg-white  hover:bg-blue-600 text-black py-2 px-6 rounded-md mt-4">
            Know More
          </button>
        </div>
      </div>

      {/* Image Slide Navigation */}
      {/* <div className="absolute top-1/2 left-2 z-10 cursor-pointer" onClick={nextImage}>
        <span className="text-white text-4xl font-semibold">→</span>
      </div> */}
    </div>
  );
};

export default ImageSliderWithText;