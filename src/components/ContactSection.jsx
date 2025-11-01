import React from "react";
import logo from "../assets/images/logo2.svg";

import locationIcon from "../assets/images/location_icon.png";
import phoneIcon from "../assets/images/phone_icon.png";
import mailIcon from "../assets/images/gmail.png";
import linkedinIcon from "../assets/images/linkedin.png";
import instaIcon from "../assets/images/insta1.png";
import fbIcon from "../assets/images/facebook.png";

const ContactSection = () => {
  return (
    <section className="bg-[#0B1120] text-white py-14 px-4 md:px-8 lg:px-12 font-[Poppins]">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-10">
        {/* Left Content */}
        <div className="flex-1 text-left">
          <div className="mb-5 text-center lg:text-left">
            <p className="inline-block bg-[#D4DFFFA1] bg-opacity-20 text-[#1E3A8A] px-4 py-2 rounded-md text-base shadow-sm">
              Contact
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl mb-6 font-semibold text-center lg:text-left">
            Get In Touch
          </h2>
          <p className="text-gray-300 max-w-full sm:max-w-xl mb-10 text-[16px] leading-relaxed text-center lg:text-left">
            Have questions about our courses or training programs? Our <br className="hidden lg:block" />
            team is here to help you every step of the way.
          </p>

          <div className="flex justify-center lg:justify-start">
            <a
              href="#enquiry"
              className="bg-[#EC4899] text-white font-medium rounded-full px-5 sm:px-6 py-2 hover:opacity-90 transition text-sm sm:text-base"
            >
              Enquire Now
            </a>
          </div>
        </div>

        {/* Right - Map */}
        <div className="flex justify-center w-full lg:w-[40%] rounded-2xl mt-10 lg:mt-0">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.1892559963344!2d75.83090097402366!3d11.247484050330433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65b2adf0f23a7%3A0xeaa072a82e5d541e!2sHiLITE%20Business%20Park%20-%20Tower%202!5e0!3m2!1sen!2sin!4v1761970251470!5m2!1sen!2sin"
    width="600"
    height="450"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="rounded-2xl w-full sm:w-[80%] lg:w-[100%] h-[220px] sm:h-[300px] lg:h-[260px]"
  ></iframe>
</div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-10"></div>

      {/* Footer Section */}
      <footer className="text-gray-300">
        <div className="flex flex-col lg:flex-row justify-start items-start gap-10 lg:gap-16">
          {/* Left - Logo and Description */}
          <div className="flex-1 -ml-0 lg:-ml-4 text-center lg:text-left">
            <img src={logo} alt="Axinor Technologies" className="w-44 sm:w-56 mb-4 mx-auto lg:mx-0" />
            <p className="max-w-md text-[15px] leading-relaxed mx-auto lg:ml-4">
              A learning initiative by Axinor Technologies – <br />
              empowering future developers through real-<br />world training and expert mentorship.
            </p>
          </div>

          {/* Footer Links Group */}
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 lg:gap-40 mt-8 lg:mt-0 text-center sm:text-left w-full sm:w-auto justify-center lg:justify-start">
            {/* Quick Links */}
            <div>
              <h4 className="text-white mb-3 text-[17px] underline decoration-gray-700 underline-offset-4">
                Quick Links
              </h4>
              <ul className="space-y-2 text-[15px]">
                <li className="hover:text-pink-400 cursor-pointer">Home</li>
                <li className="hover:text-pink-400 cursor-pointer">Courses</li>
                <li className="hover:text-pink-400 cursor-pointer">About Us</li>
                <li className="hover:text-pink-400 cursor-pointer">Mentors</li>
              </ul>
            </div>

            {/* Courses */}
            <div>
              <h4 className="text-white mb-3 text-[17px] underline decoration-gray-700 underline-offset-4">
                Courses
              </h4>
              <ul className="space-y-2 text-[15px]">
                <li className="hover:text-pink-400 cursor-pointer">MERN Stack</li>
                <li className="hover:text-pink-400 cursor-pointer">Flutter</li>
                <li className="hover:text-pink-400 cursor-pointer">Cyber Security</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white mb-3 text-[17px] underline decoration-gray-700 underline-offset-4">
                Contact
              </h4>
              <ul className="space-y-2 text-[15px]">
                <li className="flex justify-center sm:justify-start items-start gap-2">
                  <img src={locationIcon} alt="Location" className="w-4 h-5 opacity-80 mt-1" />
                  <span>Kozhikode, Kerala</span>
                </li>
                <li className="flex justify-center sm:justify-start items-start gap-2">
                  <img src={phoneIcon} alt="Phone" className="w-5 h-5 opacity-80 mt-1" />
                  <span>
                    +91 9746577647 <br /> +91 9446186026
                  </span>
                </li>
                <li className="flex justify-center sm:justify-start items-start gap-2">
                  <img src={mailIcon} alt="Email" className="w-5 h-4 opacity-80 mt-1" />
                  <span>info@axinoracademy.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-[14px] text-gray-400 gap-4 text-center lg:text-left">
          {/* Social Icons */}
          <div className="flex items-center justify-center lg:justify-start gap-4">
            <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5 hover:opacity-80 cursor-pointer" />
            <img src={instaIcon} alt="Instagram" className="w-5 h-5 hover:opacity-80 cursor-pointer" />
            <img src={fbIcon} alt="Facebook" className="w-5 h-5 hover:opacity-80 cursor-pointer" />
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-center">
            © 2025 Axinor Academy. All rights reserved.
          </p>

          {/* Terms */}
          <div className="flex justify-center gap-3 sm:gap-4">
            <span className="hover:text-pink-400 cursor-pointer">
              Terms & Condition / Privacy Policy
            </span>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;
