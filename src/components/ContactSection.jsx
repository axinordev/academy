import React from "react";
import logo from "../assets/images/logo2.svg";
import locationIcon from "../assets/images/location_icon.png";
import phoneIcon from "../assets/images/phone_icon.png";
import mailIcon from "../assets/images/mail_icon.png";
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
          <iframe
            title="Axinor Academy Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.152312083365!2d75.786!3d11.257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65bfa2bce2b83%3A0xb5c7f6d05d63e3d4!2sHiLITE%20Business%20Park!5e0!3m2!1sen!2sin!4v1698179099103!5m2!1sen!2sin"
            width="100%"
            height="260"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
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
            <p className="max-w-sm text-[15px] leading-relaxed">
              A learning initiative by Axinor Technologies empowering future
              developers through real-world training and expert mentorship.
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
                    className="w-5 h-5 opacity-80"
                  />
                  <span>Kozhikode, Kerala</span>
                </li>
                <li className="flex items-center gap-2">
                  <img
                    src={phoneIcon}
                    alt="Phone"
                    className="w-5 h-5 opacity-80"
                  />
                  <span>+91 9XXXX XXXXX</span>
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
              Terms & Condition
            </span>
            <span>/</span>
            <span className="hover:text-pink-400 cursor-pointer">
              Privacy Policy
            </span>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;
