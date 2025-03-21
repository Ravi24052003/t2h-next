"use client"; // Add this directive

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="bg-blue-950 p-4 sticky top-0 w-full z-10">
      <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
      <Link href="/LandingPages" className="flex items-center text-white ">
  {/* Logo */}
  <img src="/images/logo.png" alt="Website Logo" className="h-[40px] w-[200px]  md:w-[100%] mr-2" />
  
</Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-1">
           <Link href="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Home</Link>
          <Link href="/AboutUs" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">About</Link>
          <Link href="/Domestic" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Domestic</Link>
          <Link href="/International" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">International</Link>
          <Link href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Blogs</Link>
          <Link href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Gift an experience</Link>
          <Link href="/Contactus" className="text-white hover:bg-gray-700 bg-red-500 px-3 py-2 rounded-md">Contact Us</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            <span className="block w-6 h-1 bg-white mb-1"></span>
            <span className="block w-6 h-1 bg-white mb-1"></span>
            <span className="block w-6 h-1 bg-white"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-950 p-4 text-center">
          <Link href="/" className="text-white block py-2">Home</Link>
          <Link href="/AboutUs" className="text-white block py-2">About</Link>
          <Link href="/Domestic" className="text-white block py-2">Domestic</Link>
          <Link href="/International" className="text-white block py-2">International</Link>
          <Link href="/" className="text-white block py-2">Blogs</Link>
          <Link href="/" className="text-white block py-2">Gift an experience</Link>
          <Link href="/" className="text-white block py-2">Services</Link>
          <Link href="/ContactuS" className="text-white block py-2">Contact Us</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;