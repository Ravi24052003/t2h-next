"use client";
import React from 'react';
import Image from 'next/image';

function About() {
    return (
        <div className="bg-pink-100 p-6 sm:p-8 rounded-lg flex flex-col sm:flex-row items-center justify-between sm:pr-40 sm:pl-20 space-y-6 sm:space-y-0">
            {/* Left Content */}
            <div className="flex-1 max-w-full sm:max-w-[50%] text-center sm:text-left">
                <h2 className="text-xl sm:text-2xl font-bold mb-4">About Us</h2>
                <p className="text-gray-700 mb-6">
                Triptohoneymoon.com is an expert travel brand under Admire Tours & Holidays Pvt Ltd, dedicated exclusively to crafting exceptional honeymoon experiences for couples across domestic & international destinations. Our mission is to transform your honeymoon dreams into cherished memories by offering personalized, luxurious, and hassle-free honeymoon packages tailored to your unique preferences.
                </p>
                <button className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition">
                    Know More
                </button>
            </div>

            {/* Right Content */}
            <div className="flex max-w-full sm:max-w-[50%] items-center justify-center sm:justify-start  space-x-4 sm:space-x-6">
                {/* Images */}
                <div className="flex space-x-4 items-end">
                    <img
                        src="/images/about1.png"
                        alt="Couple 1"
                        className="rounded-t-[50%] w-[120px] h-[120px] sm:w-[200px] sm:h-[200px] object-cover shadow-lg"
                    />
                    <img
                        src="/images/about2.jpeg"
                        alt="Couple 2"
                        className="rounded-t-[50%] w-[150px] h-[200px] sm:w-60 sm:h-[250px] object-cover shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
}

export default About;
