"use client"
import React from "react";
import { Users, UserCircle, Briefcase, MapPin, BarChart3, FileText,Handshake, Star, Quote, ClipboardList, Monitor, Share, Globe, TrendingUp, Lightbulb, Mail,BarChart } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function RegistrationPage() {

  function isRowLastElement(index) {
    const columns = 3; // Adjust based on grid-cols
    return (index + 1) % columns === 0;
  }
  
  function isLastElement(index) {
    return index === steps.length - 1;
  }

  const steps = [
    {
      icon: <UserCircle className="w-14 h-14 text-gray-600 hover:text-blue-600" />,
      title: "Create Agent Profile",
      description: "Add Basic Details & Register In 2 Minutes",
    },
    {
      icon: <ClipboardList className="w-14 h-14 text-gray-600 hover:text-blue-600" />,
      title: "Listing Dashboard",
      description: "Manage Your Listings Effectively",
    },
    {
      icon: <Monitor className="w-14 h-14 text-gray-600 hover:text-blue-600" />,
      title: "Access Own Dashboard",
      description: "Monitor Your Activities Seamlessly",
    },
    {
      icon: <Share className="w-14 h-14 text-gray-600 hover:text-blue-600" />,
      title: "Integrate Social Media",
      description: "Connect Easily With Your Audience",
    },
    {
      icon: <Globe className="w-14 h-14 text-gray-600 hover:text-blue-600" />,
      title: "SMO With Social Links",
      description: "Optimize Your Social Media Presence",
    },
    {
      icon: <TrendingUp className="w-14 h-14 text-gray-600 hover:text-blue-600" />,
      title: "Daily Boosting",
      description: "Boost Your Content Daily for Growth",
    },
    {
      icon: <FileText className="w-14 h-14 text-gray-600 hover:text-blue-600" />,
      title: "Unlimited Itinerary Posting",
      description: "Post Unlimited Travel Itineraries",
    },
    {
      icon: <Lightbulb className="w-14 h-14 text-gray-600 hover:text-blue-600" />,
      title: "Business Ideas",
      description: "Receive Guidance To Expand Your Business",
    },
    {
      icon: <Mail className="w-14 h-14 text-gray-600 hover:text-blue-600" />,
      title: "Receive Inbounded Leads",
      description: "Get Leads Delivered Directly to You",
    },
    {
      icon: <Handshake className="w-14 h-14 text-gray-600 hover:text-blue-600" />,
      title: "Sell Travel Packages",
      description: "Get In Touch With Travelers for Increased Sales",
    },
    {
      icon: <BarChart className="w-14 h-14 text-gray-600 hover:text-blue-600" />,
      title: "Build Your Business Growth",
      description: "Expand Your Business with Us",
    },
  ];

  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header Section with Registration Form */}
      <header className="relative w-full h-[571px] bg-cover bg-center" style={{ backgroundImage: "url('/images/Andaman-1.png')" }}>
  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col lg:flex-row justify-between items-center px-4 lg:px-[70px]">
    <div className="text-white max-w-md text-center lg:text-left mb-6 lg:mb-0">
      <h1 className="text-2xl lg:text-4xl font-bold mb-4">
        Looking For <span className="text-yellow-400">Genuine Travel Leads?</span>
      </h1>
    </div>
    <div className="bg-white p-6 lg:p-8 shadow-lg h-[95%] rounded-md w-full max-w-sm hidden sm:block">
      <h2 className="text-lg lg:text-xl font-bold text-center text-orange-600">
        List Your Company <span className="text-red-500">FREE</span>
      </h2>
      <p className="text-center text-gray-500 mb-4 lg:mb-6">
        & Expand Your Business Quickly!
      </p>
      <form>
        <div className="mb-4">
          <label htmlFor="mobile" className="block text-gray-700 font-medium">Mobile No</label>
          <div className="flex">
            <span className="inline-flex items-center px-3 bg-gray-200 text-gray-700 rounded-l-md">+91</span>
            <input
              type="text"
              id="mobile"
              name="mobile"
              placeholder="Enter Your Mobile No"
              className="w-full border rounded-r-md p-2"
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium">Email ID</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Your Email ID"
            className="w-full border rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="company" className="block text-gray-700 font-medium">Company Name</label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Enter Company Name"
            className="w-full border rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="business-type" className="block text-gray-700 font-medium">Business Type</label>
          <select id="business-type" name="business-type" className="w-full border rounded-md p-2">
            <option value="">Select Business Type</option>
            <option value="travel-agent">Travel Agent</option>
            <option value="tour-operator">Tour Operator</option>
            <option value="hotel">Hotel</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="flex items-center space-x-2 mb-4">
          <input type="checkbox" id="terms" name="terms" className="h-4 w-4" />
          <label htmlFor="terms" className="text-gray-600 text-sm">
            Yes, I agree to all the <a href="#" className="text-blue-600 underline">Terms & Conditions</a>, <a href="#" className="text-blue-600 underline">Privacy Policy</a> stated herein.
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Join For Free
        </button>
      </form>
    </div>
  </div>
</header>




      {/* Why Choose Section */}
      <section className="bg-gray-50 py-16 w-full text-center">
      <h2 className="text-4xl font-bold mb-8">
    How You <span className="text-blue-600">Grow with travelnworld.com</span>
  </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
          <div className=" group flex flex-col items-center">
            <Users className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h2 className="text-xl font-bold group-hover:text-blue-700">2 Lac +</h2>
            <p className="text-gray-600">Monthly Travel Leads/Enquiries</p>
          </div>
          <div className=" group flex flex-col items-center">
            <Briefcase className="w-12 h-12 text-blue-600 mb-4  group-hover:scale-110 transition-transform duration-300" />
            <h2 className="text-xl font-bold group-hover:text-blue-700">1 Lac +</h2>
            <p className="text-gray-600">Travel Packages</p>
          </div>
          <div className="group flex flex-col items-center">
            <MapPin className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h2 className="text-xl font-bold group-hover:text-blue-700">2000+</h2>
            <p className="text-gray-600">Destinations</p>
          </div>
          <div className="group flex flex-col items-center">
            <BarChart3 className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h2 className="text-xl font-bold group-hover:text-blue-700">Free VECTOR</h2>
            <p className="text-gray-600">(Lead Management Panel)</p>
          </div>
        </div>

        <div className="mt-8">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 ">
            Join For Free
          </button>
        </div>
      </section>

      {/* Trusted Agents Section */}
      <section className="py-16 bg-gray-50 w-full text-center">
        <h2 className="text-4xl font-bold mb-8">5000+ <span className="text-blue-600">Trusted Agents</span></h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4">
          <img src="/images/Andaman-1.png" alt="Agent 1" className="w-full h-auto" />
          <img src="/images/Andaman-2.png" alt="Agent 2" className="w-full h-auto" />
          <img src="/images/Andaman-3.png" alt="Agent 3" className="w-full h-auto" />
          <img src="/images/Andaman-4.png" alt="Agent 4" className="w-full h-auto" />
          <img src="/images/Andaman-5.png" alt="Agent 5" className="w-full h-auto" />
          <img src="/images/Goa-1.png" alt="Agent 6" className="w-full h-auto" />
          <img src="/images/Goa-1.png" alt="Agent 6" className="w-full h-auto" />
          <img src="/images/Goa-1.png" alt="Agent 6" className="w-full h-auto" />
          <img src="/images/Goa-1.png" alt="Agent 6" className="w-full h-auto" />
          <img src="/images/Goa-1.png" alt="Agent 6" className="w-full h-auto" />
        </div>
      </section>


       {/* How You Grow Section */}

       <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-100 text-center">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
        How You <span className="text-blue-600">Grow with travelnworld.com</span>
      </h2>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`relative group ${isRowLastElement(index) || isLastElement(index) ? "" : "after:content-[''] after:absolute after:right-[-30px] after:top-[63px] after:w-[61px] after:h-[35px] after:bg-[url('https://static.tourtravelworld.com/images/icons/right-sign.png')] after:bg-no-repeat"}`}
          >
            <div
              className="w-24 h-24 bg-white shadow-lg flex items-center justify-center rounded-full mx-auto group-hover:scale-110 transition-transform duration-300"
            >
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold mt-6 text-gray-800 group-hover:text-blue-600">
              {step.title}
            </h3>
            <p className="text-gray-600 mt-2 group-hover:text-gray-800">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <button className="bg-blue-600 text-white px-10 py-4 rounded-lg text-lg font-bold shadow-md hover:bg-blue-700 transition duration-300">
          Join For Free
        </button>
      </div>
    </section>
  






      {/* Pricing Section */}
{/* <section className="py-16 bg-white w-full text-center">
  <h2 className="text-2xl font-bold mb-8">
    Get A Package to <span className="text-blue-600">Start Enjoying Amazing Benefits</span>
  </h2>
  <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
    <div className="relative bg-white shadow-lg rounded-lg overflow-hidden border-t-4 border-blue-600 flex flex-col">
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold text-blue-600">Gold</h3>
        <p className="text-gray-600 mb-4">₹ 27,000 /yr</p>
        <ul className="text-gray-600 text-sm space-y-2">
          <li>500 Package Posting limits on TTW</li>
          <li>Template Based Website</li>
          <li>75 Packages displayed on Priority ranking </li>
          <li>50 Travel Leads</li>
          <li>125 Domestic Inquiry SMS</li>
          <li>25 International Inquiry SMS</li>
        </ul>
      </div>
      <div className="bg-blue-600 text-white py-3 text-center font-semibold cursor-pointer hover:bg-blue-700 mt-auto">
        Select Plan
      </div>
    </div>

    <div className="relative bg-white shadow-lg rounded-lg overflow-hidden border-t-4 border-green-600 flex flex-col">
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold text-green-600">Platinum</h3>
        <p className="text-gray-600 mb-4">₹ 55,000 /yr</p>
        <ul className="text-gray-600 text-sm space-y-2">
          <li>500 Package Posting limits on TTW</li>
          <li>Template Based Website</li>
          <li>100 Packages displayed on Priority ranking</li>
          <li>75 Travel Leads</li>
          <li>400 Domestic Inquiry SMS</li>
          <li>100 International Inquiry SMS</li>
        </ul>
      </div>
      <div className="bg-green-600 text-white py-3 text-center font-semibold cursor-pointer hover:bg-green-700 mt-auto">
        Select Plan
      </div>
    </div>

    <div className="relative bg-white shadow-lg rounded-lg overflow-hidden border-t-4 border-yellow-500 flex flex-col">
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold text-yellow-500">Star</h3>
        <p className="text-gray-600 mb-4">₹ 90,000 /yr</p>
        <ul className="text-gray-600 text-sm space-y-2">
          <li>500 Package Posting limits on TTW</li>
          <li>Template Based Website</li>
          <li>200 Packages displayed on Priority ranking</li>
          <li>100 Travel Leads</li>
          <li>800 Domestic Inquiry SMS</li>
          <li>200 International Inquiry SMS</li>
        </ul>
      </div>
      <div className="bg-yellow-500 text-white py-3 text-center font-semibold cursor-pointer hover:bg-yellow-600 mt-auto">
        Select Plan
      </div>
    </div>
  </div>
</section> */}


 {/* Testimonial Section */}
  {/* Testimonial Section */}
  <section className="py-16 bg-gray-100 w-full">
        <h2 className="text-2xl font-bold text-center mb-8">
          Client <span className="text-blue-600">Testimonials</span>
        </h2>
        <div className="max-w-4xl mx-auto">
          <Slider {...testimonialSettings}>
            <div className="text-center p-6">
              <Quote className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <p className="text-gray-600 italic">"Very good service provided for us."</p>
            </div>
            <div className="text-center p-6">
              <Quote className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <p className="text-gray-600 italic">
                "I am using tour travel services and my first experience is awesome. Very nice."
              </p>
            </div>
            <div className="text-center p-6">
              <Quote className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <p className="text-gray-600 italic">
                "I really wish to make the best of my holidays this year with you guys."
              </p>
            </div>
          </Slider>
        </div>
      </section>



    </div>
  );
}
