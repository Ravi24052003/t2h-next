import Navbar from "./Component/Navbar";
import ImageSliderWithText from "./Component/ImageSliderWithText";
import Herosection from "./Component/Herosection";
import Card1 from "./Component/Card1";
import Card2 from "./Component/Card2";
import About from "./Component/About";
import BigCarousel from "./Component/BigCarousel";
import InternationalDes from "./Component/DomesticDes";
import Demostic from "./Component/International";
import Resort from "./Component/Resort";
import Services from "./Component/Services";
import Footer from "./Component/Footer";
import WhyChooseUs from "./Component/WhyChooseUs";
import Testimonial from "./Component/Testimonial";
import ContactForm from "./Component/ContectForm";
import Link from "next/link";
import Itinerary from "./Component/Itinerary";



export default function page() {
  return (
    <div className="w-full bg-pink-100">
   <Navbar/>
   {/* <ImageSliderWithText/> */}
   <Herosection/>
   {/* <Itinerary/> */}
   <Card1/>
   <Card2/>
   <About/>
   <BigCarousel/>
   <InternationalDes/>
   <Demostic/>
   <Resort/>
   <WhyChooseUs/>
   <Testimonial/> 
   <Services/>
   {/* <ContactForm/> */}
   <Footer/>
  </div>
  );
}