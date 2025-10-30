import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo_main.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll to change background color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-[Poppins]">
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-[rgba(255,255,255,0.2)] backdrop-blur-md shadow-md" : "bg-transparent"

        }`}
      >
        <div className="flex items-center justify-start relative h-[80px] md:h-[90px] px-4 md:px-8 gap-40">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt="Logo"
              className="object-contain w-[140px] md:w-[160px] h-auto mt-2 md:mt-0"
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-10 text-[#0F172A] font-normal ml-12">
            <li>
              <Link
                to="/"
                className="hover:text-[#EC4899] hover:underline hover:underline-offset-4 transition-all"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/courses"
                className="hover:text-[#EC4899] hover:underline hover:underline-offset-4 transition-all"
              >
                Courses
              </Link>
            </li>
            <li>
              <a
                href="#About"
                className="hover:text-[#EC4899] hover:underline hover:underline-offset-4 transition-all"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#Events"
                className="hover:text-[#EC4899] hover:underline hover:underline-offset-4 transition-all"
              >
                Events
              </a>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-[#EC4899] hover:underline hover:underline-offset-4 transition-all"
              >
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Enquire Now Button */}
          <div className="hidden md:block ml-auto">
            <a
              href="#Enquire"
              className="text-white px-6 py-2 rounded-full font-normal transition-all"
              style={{ backgroundColor: "#EC4899" }}
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
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <ul className="md:hidden bg-[#F0FFFF] text-[#0F172A] px-6 py-6 space-y-4 mt-2 shadow-lg rounded-b-2xl font-normal">
            <li>
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="block hover:text-[#EC4899] hover:underline transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/courses"
                onClick={() => setIsOpen(false)}
                className="block hover:text-[#EC4899] hover:underline transition"
              >
                Courses
              </Link>
            </li>
            <li>
              <a
                href="#About"
                className="block hover:text-[#EC4899] hover:underline transition"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#Events"
                className="block hover:text-[#EC4899] hover:underline transition"
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="#Contact"
                className="block hover:text-[#EC4899] hover:underline transition"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="#Enquire"
                className="block text-center text-white px-6 py-2 rounded-full font-normal"
                style={{ backgroundColor: "#EC4899" }}
                onClick={() => setIsOpen(false)}
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
