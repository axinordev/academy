import React from "react";

import arrowIcon from "../assets/images/arrow.svg";
import bgCourse from "../assets/images/CourseBg.svg";
import logo from "../assets/images/logo2.svg"; // add your logo path
import locationIcon from "../assets/images/location_icon.png"; // add your location icon
import phoneIcon from "../assets/images/phone_icon.png"; // add your phone icon
import mailIcon from "../assets/images/mail_icon.png"; // add your mail icon



const ContactPage = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat min-h-screen pt-[100px]"
      style={{
        backgroundImage: `url(${bgCourse})`,
      }}
    >
      {/* Container for Heading & Cards */}
      <div className="container mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold font-Poppins leading-tight">
            Let's <span className="text-pink-500">Connect</span>{" "}
            
          </h1>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
            Have questions about our courses, admissions, or training programs?<br/>
             Reach out to us — our team will guide you every step of the way.
          </p>
        </div>
        
      </div>

      {/* Top Footer / Contact Section */}
      <div className="bg-[#0B1120] w-full p-10 text-white flex flex-col lg:flex-row justify-between items-center gap-10">
        {/* Left Content */}
        <div className="flex-1">
          <div className="mb-4">
            <p className="inline-block bg-blue-700 bg-opacity-20 text-blue-500 px-4 py-2 rounded-md font-medium text-sm shadow-sm">
              Contact
            </p>
          </div>
          <h3 className="text-3xl font-semibold mb-3">Get In Touch</h3>
          <p className="text-gray-300 mb-6 max-w-md">
            Have questions about our courses or training programs? Our team is
            here to help you every step of the way.
          </p>
          <button className="bg-pink-500 px-6 py-2 rounded-full font-semibold hover:bg-pink-600 transition">
            Enquire Now
          </button>
        </div>

        {/* Map */}
        <div className="flex-1 w-full">
          <iframe
            title="Axinor Academy Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.152312083365!2d75.786!3d11.257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65bfa2bce2b83%3A0xb5c7f6d05d63e3d4!2sHiLITE%20Business%20Park!5e0!3m2!1sen!2sin!4v1698179099103!5m2!1sen!2sin"
            width="100%"
            height="280"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Footer Main Section */}
      <div className="bg-[#0B1120] border-t border-gray-800">
        <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row justify-between gap-10 text-gray-300 py-10">
          {/* Logo & Description */}
          <div className="flex-1">
            <img src={logo} alt="Axinor Technologies" className="w-40 mb-4" />
            <p className="max-w-sm">
              A learning initiative by Axinor Technologies empowering future
              developers through real-world training and expert mentorship.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>Home</li>
              <li>Courses</li>
              <li>About Us</li>
              <li>Mentors</li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white font-semibold mb-3">Courses</h4>
            <ul className="space-y-2">
              <li>MERN Stack</li>
              <li>Flutter</li>
              <li>Cyber Security</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <img src={locationIcon} alt="Location" className="w-5 h-5" />
                <span>Kozhikode, Kerala</span>
              </li>
              <li className="flex items-center gap-2">
                <img src={phoneIcon} alt="Phone" className="w-5 h-5" />
                <span>+91 9XXXX XXXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <img src={mailIcon} alt="Email" className="w-5 h-5" />
                <span>info@axinoracademy.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="border-t border-gray-800 py-4">
  <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center text-gray-400 text-sm">
    {/* Centered text */}
    <p className="text-center md:mx-auto">@2025 Axinor Academy. All rights reserved.</p>

    {/* Right aligned on desktop, below on mobile */}
    <div className="flex gap-4 mt-2 md:mt-0 md:ml-auto">
      <span>Terms & Conditions / Privacy Policy</span>
    </div>
  </div>
</div>


      </div>
    </section>
  );
};

export default ContactPage;
