import Navbar from "./Component/Navbar";
import ImageSliderWithText from "./Component/ImageSliderWithText";
import Herosection from "./Component/Herosection";
import TrendingDestinations from "./Component/TrendingDestinations";
import TrendingWeddingDestinations from "./Component/TrendingWeddingDestinations";
import About from "./Component/About";
import PopularDestination from "./Component/PopularDestination";
import InternationalDes from "./Component/DomesticDes";
import Demostic from "./Component/International";
import Resort from "./Component/Resort";
import Services from "./Component/Services";
import Footer from "./Component/Footer";
import WhyChooseUs from "./Component/WhyChooseUs";
import Testimonial from "./Component/Testimonial";
import Gallery from "./Component/Gallery";

// CI/CD Deployment test 1


export default function page() {
  return (
    <div className="w-full bg-pink-100">
   <Navbar/>
   {/* <ImageSliderWithText/> */}
   <Herosection/>
   <TrendingDestinations/>
   <TrendingWeddingDestinations/>
   <About/>
   <PopularDestination/>
   <InternationalDes/>
   <Demostic/>
   <Resort/>
   <Gallery/>
   <WhyChooseUs/>
   <Testimonial/> 
   <Services/>
   {/* <ContactForm/> */}
   <Footer/>
  </div>
  );
}