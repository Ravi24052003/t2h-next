import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
// import React, { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineAddIcCall, MdOutlineMessage } from "react-icons/md";
// import api from "../../api.js";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, YoutubeIcon } from "lucide-react";


const App = () => {
  return (
    <div><div>
    <video
    autoPlay
    loop
    muted
    className="w-full md:h-[80vh] object-cover"
  >
    <source src="/images/hero.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-28 lg:pt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 select-none">
        <div className="relative rounded-3xl overflow-hidden brightness-75">
          <img
            // autoPlay
            // muted
            // loop
            src="https://t4.ftcdn.net/jpg/00/65/48/25/360_F_65482539_C0ZozE5gUjCafz7Xq98WB4dW6LAhqKfs.jpg"
            // playsInline
            className="w-full h-72 sm:h-96 object-cover"
          >
            {/* <source
              src="https://cdn.videvo.net/videvo_files/video/free/2019-07/small_watermarked/190705_01_Drone_4k_011_preview.webm"
              type="video/webm"
            />
            <source
              src="https://cdn.videvo.net/videvo_files/video/free/2019-07/small_watermarked/190705_01_Drone_4k_011_preview.mp4"
              type="video/mp4"
            />   */}
            
          </img>
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6 sm:px-12 z-10 max-w-4xl mx-auto">
            <h1 className="text-white  text-5xl sm:text-6xl font-extrabold leading-tight mb-2 text-center">
              Travel n World<span className="text-blue-500">.</span>
            </h1>
            <p className="text-lg sm:text-xl font-medium mb-6 text-center">
              Explore the World with Us
            </p>
            <p className="text-sm sm:text-base max-w-2xl leading-relaxed font-normal text-center">
              Travel n World is your ultimate travel companion, offering curated travel packages, expert guides, and unforgettable experiences to destinations worldwide.
            </p>
            <div className="flex justify-center mt-8 slider-dots">
              {[...Array(5)].map((_, i) => (
                <button
                  key={i}
                  aria-label={`Slide ${i + 1}`}
                  className={i === 0 ? "active" : ""}
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "9999px",
                    backgroundColor: i === 0 ? "#3b82f6" : "#6b7280",
                    border: "none",
                    margin: "0 6px",
                    transition: "background-color 0.3s ease",
                  }}
                ></button>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
          <i className="fas fa-chevron-down text-white text-2xl animate-bounce"></i>
        </div>
      </section>

      {/* Passion Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-44 relative">
        <div className="bg-blue-200 rounded-3xl py-24 px-6 sm:px-12 text-center select-none relative z-10">
          <h2 className="text-blue-900 font-semibold text-lg mb-2 tracking-wide">
            CREATED WITH PASSION
          </h2>
          <p className="text-blue-900 text-xs max-w-2xl mx-auto mb-10 leading-tight">
            We are passionate about crafting unforgettable travel experiences. Our expert team carefully designs every package to bring you the best of the world with elegance and simplicity.
          </p>
        </div>
        <div className="flex justify-center gap-6 max-w-5xl mx-auto absolute left-1/2 transform -translate-x-1/2 -bottom-20 z-20">
          {[
            {
              icon: "fas fa-globe-americas",
              title: "Global Destinations",
              text: "Explore a wide range of destinations across the globe, from tropical beaches to historic cities.",
              highlighted: false,
            },
            {
              icon: "fas fa-heart",
              title: "Personalized Packages",
              text: "Tailored travel packages designed to fit your preferences and budget perfectly.",
              highlighted: true,
            },
            {
              icon: "fas fa-rocket",
              title: "Fast Booking",
              text: "Easy and quick booking process to get you on your dream trip without hassle.",
              highlighted: false,
            },
            {
              icon: "fas fa-mobile-alt",
              title: "Responsive Support",
              text: "Dedicated customer support available anytime to assist you on your journey.",
              highlighted: false,
            },
          ].map((card, index) => (
            <div
              key={index}
              className={`${
                card.highlighted ? "bg-blue-600 text-white" : "bg-white text-gray-900"
              } rounded-xl shadow-md p-6 w-56 cursor-default transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl`}
            >
              <div className={`bg-blue-200 w-15 h-10 mx-auto rounded-3xl relative -top-10 text-5xl text-center  mb-3 ${card.highlighted ? "text-blue-900" : "text-blue-900"}`}>
                <i className={card.icon}></i>
              </div>
              <h3 className={`font-semibold mb-1 text-sm ${card.highlighted ? "text-white" : "text-gray-900"}`}>
                {card.title}
              </h3>
              <p
                className={`text-xs leading-tight ${
                  card.highlighted ? "text-blue-200" : "text-gray-600"
                }`}
              >
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>


    <section className="bg-gradient-to-r from-white-100 to white-300 py-20">
      <div className="min-h-screen bg-gray-50 py-12">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg">
          We’d love to hear from you. Whether you have questions, feedback, or need support, our team is here to help!
        </p>
      </div>

      <div className="container mx-auto px-6 lg:px-20 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 h-32"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-lg space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">Contact Information</h2>
              <p className="text-gray-600">Reach out to us directly through the information below.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="text-blue-600" />
                  <p className="text-gray-600">1800-121-4252</p>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-blue-600" />
                  <p className="text-gray-600">info@travelnworld.com</p>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="text-blue-600" />
                  <p className="text-gray-600">34, Sewak Park (1st floor), Dwarka More Metro, Near Metro
                  Pillar No-772, New Delhi-110059</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Follow Us</h2>
              <div className="flex justify-center space-x-6">
                <a
                  href="#"
                  className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Facebook"
                >
                  <Facebook />
                </a>
                <a
                  href="#"
                  className="p-3 bg-red-600 text-white rounded-full hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  aria-label="Twitter"
                >
                  <YoutubeIcon />
                </a>
                <a
                  href="#"
                  className="p-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  aria-label="Instagram"
                >
                  <Instagram />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Our Location</h2>
          <div className="w-full h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3576360114916!2d77.03171221069958!3d28.619041584592416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05b8b8a64bdd%3A0x7fe5e4357250f77b!2sAdmire%20Holidays!5e0!3m2!1sen!2sin!4v1745401778544!5m2!1sen!2sin"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    </section>

    </div>
  );
};

export default App;
