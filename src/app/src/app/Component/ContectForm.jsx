"use client";
import React from 'react'
import { Mail, Phone, MapPin } from "lucide-react";
function ContactForm() {
    return (
        <div className=" space-x-4 overflow-x-auto px-[5%] py-5 bg-pink-100">
          <h2 className="text-4xl font-bold text-center text-gray-80 pt-4">
        Contact Us?
      </h2>
            <div className="min-h-full bg-gradient-to-r from-bg-pink-100 to-blue-100 flex justify-center items-center py-10">
              
              <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  
                  {/* Contact Information Section */}
                  <div className="flex flex-col justify-center bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-3xl font-bold text-red-800 mb-4">Get in Touch</h2>
                    <p className="text-gray-600 mb-6">
                      We’d love to hear from you! Whether you have a question or need assistance, feel free to reach out.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <Phone className="text-red-600 w-6 h-6 " />
                        <span className="text-gray-800 w-[70%] font-medium">01140612834</span>
                      </div>
                      <div className="flex items-center gap-2  sm:gap-4">
                        <Mail className="text-red-600 w-6 h-6" />
                        <span className="text-gray-800 w-[70%] font-medium break-words">info@triptohoneymoon.com</span>
                      </div>
                      <div className="flex items-center  gap-2  sm:gap-4">
                        <MapPin className="text-red-600 w-6 h-6" />
                        <span className="text-gray-800 w-[70%]  font-medium">
                        Address: 34,Sewak park(1st floor), Dwarka more metro,Near metro piller no-772 New Delhi-110059.
                        </span>
                      </div>
                    </div>
                  </div>
        
                  {/* Contact Form Section */}
                  <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-3xl font-bold text-red-800 mb-6">Contact Form</h2>
                    <form className="space-y-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows="4"
                          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                          placeholder="Enter your message"
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg shadow-md focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                      >
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            </div>
    )
}

export default ContactForm
