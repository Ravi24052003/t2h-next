
"use client";
import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import DomesticDes from "../Component/DomesticDes";
import DomesticCarousel from "../Component/DomesticCarousel";

const page = () => {


  return (
    <>
    <Navbar/>
    <DomesticCarousel/>
    <DomesticDes/>
  <Footer/> 
    </>
  );
};

export default page;
