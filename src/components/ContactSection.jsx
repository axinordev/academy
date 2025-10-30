import React from "react";
import logo from "../assets/images/logo2.svg";
import mapImage from "../assets/images/map.png";
import locationIcon from "../assets/images/location_icon.png";
import phoneIcon from "../assets/images/phone_icon.png";
import mailIcon from "../assets/images/gmail.png";
import linkedinIcon from "../assets/images/linkedin.png";
import instaIcon from "../assets/images/insta1.png";
import fbIcon from "../assets/images/facebook.png";

const ContactSection = () => {
  return (
    <section className="bg-[#0B1120] text-white py-14 px-5 md:px-10 lg:px-20 font-[Poppins]">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-10">
        {/* Left Content */}
        <div className="flex-1">
          <div className="mb-4">
            <p className="inline-block bg-blue-700 bg-opacity-20 text-blue-500 px-4 py-2 rounded-md text-base shadow-sm">
              Contact
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl mb-4 font-medium">Get In Touch</h2>
          <p className="text-gray-300 max-w-full sm:max-w-xl mb-10 text-[16px] leading-relaxed">
  Have questions about our courses or training programs? Our <br />
  team is here to help you every step of the way.
</p>

          <button className="bg-pink-500 text-white px-7 py-3 rounded-full text-[16px] hover:opacity-90 transition">
            Enquire Now
          </button>
        </div>

        {/* Right - Map (Reduced Width) */}
        <div className="flex justify-center w-full lg:w-[40%]">
  <a
    href="https://www.google.com/maps/place/HiLITE+Business+Park/@11.257,75.786,15z"
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full"
  >
    <img
      src={mapImage}
      alt="Axinor Academy Location Map"
      className="w-full h-[260px] rounded-xl object-cover shadow-md hover:opacity-90 transition duration-300"
    />
  </a>
</div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-10"></div>

      {/* Footer Section */}
      <footer className="text-gray-300">
        <div className="flex flex-col lg:flex-row justify-start items-start gap-14 lg:gap-24">
          {/* Left - Logo and Description */}
          <div className="flex-1">
            <img src={logo} alt="Axinor Technologies" className="w-44 mb-5" />
            <p className="max-w-md text-[15px] leading-relaxed">
              A learning initiative by Axinor Technologies -<br/>empowering future
              developers through real-<br/> world training and expert mentorship.
            </p>
          </div>

          {/* Footer Links Group */}
          <div className="flex flex-col sm:flex-row gap-12 mt-10 lg:mt-0 lg:ml-12">
            {/* Quick Links */}
            <div>
              <h4 className="text-white mb-4 text-[16px] underline decoration-gray-700 underline-offset-4">
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
              <h4 className="text-white mb-4 text-[16px] underline decoration-gray-700 underline-offset-4">
                Courses
              </h4>
              <ul className="space-y-2 text-[15px]">
                <li className="hover:text-pink-400 cursor-pointer">
                  MERN Stack
                </li>
                <li className="hover:text-pink-400 cursor-pointer">Flutter</li>
                <li className="hover:text-pink-400 cursor-pointer">
                  Cyber Security
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white mb-4 text-[16px] underline decoration-gray-700 underline-offset-4">
                Contact
              </h4>
              <ul className="space-y-3 text-[15px]">
                <li className="flex items-center gap-2">
                  <img
                    src={locationIcon}
                    alt="Location"
                    className="w-3 h-5 opacity-80"
                  />
                  <span>Kozhikode, Kerala</span>
                </li>
                <li className="flex items-center gap-2">
                  <img
                    src={phoneIcon}
                    alt="Phone"
                    className="w-5 h-5 opacity-80"
                  />
                  <span>+91 9746577647, +91 9446186026</span>
                </li>
                <li className="flex items-center gap-2">
                  <img
                    src={mailIcon}
                    alt="Email"
                    className="w-5 h-5 opacity-80"
                  />
                  <span>info@axinoracademy.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-[14px] text-gray-400 gap-4">
          {/* Left - Social Icons */}
          <div className="flex items-center gap-4">
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="w-5 h-5 hover:opacity-80 cursor-pointer"
            />
            <img
              src={instaIcon}
              alt="Instagram"
              className="w-5 h-5 hover:opacity-80 cursor-pointer"
            />
            <img
              src={fbIcon}
              alt="Facebook"
              className="w-5 h-5 hover:opacity-80 cursor-pointer"
            />
          </div>

          {/* Center - Copyright */}
          <p className="text-center text-gray-400">
            © 2025 Axinor Academy. All rights reserved.
          </p>

          {/* Right - Terms & Privacy */}
          <div className="flex gap-3 sm:gap-4">
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
