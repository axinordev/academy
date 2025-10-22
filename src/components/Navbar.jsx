import React, { useState } from "react";
import logo from "../assets/images/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#F0FFFF]">
      {/* Navbar */}
      <nav className="bg-[#F0FFFF] w-full fixed top-0 left-0 z-50">
        <div className="flex items-center justify-between relative h-[70px] px-4 md:px-10 overflow-hidden">
          
          {/* Cropped & Shifted Logo */}
          <div className="absolute top-0 left-0 w-[200px] h-[200px] overflow-hidden -translate-y-10">
            <img
              src={logo}
              alt="Logo"
              className="object-cover w-full h-full transform scale-[0.8] translate-x-[-10px] translate-y-[-10px]"
            />
          </div>

          {/* Desktop Menu - Center */}
          <ul className="hidden md:flex items-center space-x-8 text-black font-normal mx-auto">
            <li>
              <a
                href="#Header"
                className="hover:underline hover:underline-offset-4 hover:text-pink-500 transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#Course"
                className="hover:underline hover:underline-offset-4 hover:text-pink-500 transition"
              >
                Course
              </a>
            </li>
            <li>
              <a
                href="#About"
                className="hover:underline hover:underline-offset-4 hover:text-pink-500 transition"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#Events"
                className="hover:underline hover:underline-offset-4 hover:text-pink-500 transition"
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="#Contact"
                className="hover:underline hover:underline-offset-4 hover:text-pink-500 transition"
              >
                Contact Us
              </a>
            </li>
          </ul>

          {/* Enquire Now Button - Right */}
          <div className="hidden md:block flex-shrink-0">
            <a
              href="#Enquire"
              className="bg-pink-500 text-white px-6 py-2 rounded-full font-normal "
            >
              Enquire Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden bg-[#F0FFFF] text-black px-6 py-4 space-y-4 mt-[120px]">
            <li>
              <a
                href="#Header"
                className="hover:underline hover:underline-offset-4 hover:text-pink-500 block transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#Course"
                className="hover:underline hover:underline-offset-4 hover:text-pink-500 block transition"
              >
                Course
              </a>
            </li>
            <li>
              <a
                href="#About"
                className="hover:underline hover:underline-offset-4 hover:text-pink-500 block transition"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#Events"
                className="hover:underline hover:underline-offset-4 hover:text-pink-500 block transition"
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="#Contact"
                className="hover:underline hover:underline-offset-4 hover:text-[#F5276C] block transition"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="#Enquire"
                className="bg-[#F5276C] text-white px-6 py-2 rounded-full font-normal hover:underline hover:underline-offset-4 transition block text-center"
              >
                Enquire Now
              </a>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
