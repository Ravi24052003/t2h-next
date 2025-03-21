import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import ContactForm from '../Component/ContectForm'


function ContectUS() {
    return (
        <div>
            <Navbar/>
            <ContactForm/>
            <div className="flex justify-center items-center  bg-[#fce7f3] p-4 w-full h-[500px]">
  <div className=" w-full h-[90%] md:w-3/4 lg:w-3/1 ">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3666450052788!2d77.03351460927311!3d28.61877148308028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05b8b8a64bdd%3A0x7fe5e4357250f77b!2sAdmire%20Holidays!5e0!3m2!1sen!2sin!4v1741069151520!5m2!1sen!2sin"
      className="w-full h-full border-0"
      allowFullScreen
      loading="lazy"
    ></iframe>
  </div>
</div>

            <Footer/> 
        </div>
    )
}

export default ContectUS
