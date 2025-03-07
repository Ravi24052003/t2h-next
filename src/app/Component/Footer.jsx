"use client"
import React from 'react'
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
function Footer() {
    return (
        <footer className="bg-[#4B0000] text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Policy Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Policy</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms Of Use
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick links</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="/Card1" className="hover:underline">
                Trending Destination
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Popular Destination
              </a>
            </li>
            <li className="mb-2">
              <a href="/Domestic" className="hover:underline">
                Domestic Destination
              </a>
            </li>
            <li>
              <a href="/International" className="hover:underline">
                International Destination
              </a>
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Support</h3>
          <ul>
            <li className="mb-2">
              <a href="/Contactus" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/AboutUs" className="hover:underline">
                About Us
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Follow Us on</h3>
          <div className="flex space-x-4 mb-4">
            <Link href="https://www.facebook.com/people/Trip-to-Honeymoon/61551720045200/" target='blank'><FaFacebook className="text-xl cursor-pointer hover:text-gray-400" /></Link>
            <Link href="https://www.instagram.com/triptohoneymoon_official/" target='blank'><FaInstagram className="text-xl cursor-pointer hover:text-gray-400" /></Link>
            <Link href="https://www.youtube.com/@AdmireHolidays_official" target='blank'><FaYoutube className="text-xl cursor-pointer hover:text-gray-400" /></Link>
          </div>
          <h4 className="font-semibold mb-2">Subscribe</h4>
          <p className="text-sm mb-4">
          Subscribe to TripToHoneymoon for exclusive honeymoon deals, expert travel tips, and dreamy destination inspirations—delivered to you!
          </p>
          <form className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Email"
              className="px-3 py-2 rounded-lg text-black w-full border"
            />
            <button className="bg-[#8B0000] text-white px-4 py-2 rounded-lg hover:bg-[#700000]">
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="text-center mt-10 text-sm text-gray-400">
        © {new Date().getFullYear()} TriptoHoneymoon, All rights reserved.
      </div>
    </footer>
    )
}

export default Footer
