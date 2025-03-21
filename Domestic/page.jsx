
"use client";
import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import DomesticDes from "../Component/DomesticDes";
import DomesticCarousel from "../Component/DomesticCarousel";
import Gallery from "../Component/Gallery";
import Herosection from "../Component/Herosection";

const page = () => {


  return (
    <>
      <Navbar />
      <Herosection/>
      <DomesticCarousel />
      <DomesticDes />
      <Gallery />
      <Footer />
    </>
  );
};

export default page;
