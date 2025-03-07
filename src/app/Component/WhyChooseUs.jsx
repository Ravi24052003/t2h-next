"use client";
import React from "react";

function WhyChooseUs() {
  const features = [
    {
      icon: "💎",
      title: "Exclusive Deals",
      description:
        "We offer exclusive deals with top resorts, giving you luxurious experiences at the best prices.",
    },
    {
      icon: "🎧",
      title: "24/7 Support",
      description:
        "Our dedicated support team is available around the clock to assist you with any queries.",
    },
    {
      icon: "ℹ️",
      title: "Clear & Detailed Packages",
      description:
        "We provide clear and detailed information about every package, so you can make informed decisions.",
    },
    {
      icon: "📍",
      title: "Local Support",
      description:
        "Get the help you need from our local teams at your honeymoon destination for seamless travel.",
    },
    {
      icon: "✈️",
      title: "Great Flight Deals",
      description:
        "We help you book flights at the best rates, ensuring your honeymoon is cost-effective and enjoyable.",
    },
    {
      icon: "✅",
      title: "Quick & Easy Booking",
      description:
        "Our booking process is simple and quick, so you can focus on enjoying your honeymoon.",
    },
  ];

  return (
    <div className="bg-pink-100 py-16">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Why Choose Us?
      </h2>
      <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 px-20">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="text-4xl bg-gradient-to-r from-red-400 to-pink-500 text-white p-4 rounded-full mb-4">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-center">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyChooseUs;
