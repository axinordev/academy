import React from "react";
import logo from "../assets/images/logo.svg"; // adjust if your logo path differs

const MernCourse = () => {
  return (
    <section className="bg-[#F0FFFF] min-h-screen">
      {/* ====== Header Section (Navbar + Title) ====== */}
      <div className="bg-gradient-to-r from-[#0B1120] to-[#1B1F3B] text-white pb-16 px-6 md:px-20">
        {/* Navbar */}
        <nav className="flex items-center justify-between py-6 max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Axinor Logo" className="w-10 h-10" />
            <h1 className="font-bold text-xl">Axinor Academy</h1>
          </div>

          <ul className="hidden md:flex space-x-8 font-medium">
            <li className="hover:text-pink-400 transition cursor-pointer">Home</li>
            <li className="hover:text-pink-400 transition cursor-pointer">Courses</li>
            <li className="hover:text-pink-400 transition cursor-pointer">About Us</li>
            <li className="hover:text-pink-400 transition cursor-pointer">Events</li>
            <li className="hover:text-pink-400 transition cursor-pointer">Contact</li>
          </ul>

          <button className="bg-pink-500 text-white px-5 py-2 rounded-full hover:bg-pink-600 transition text-sm">
            Enquire Now
          </button>
        </nav>

        {/* Hero / Course Header */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-10">
          {/* Left Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              MERN Stack Development
            </h1>
            <p className="text-gray-300 leading-relaxed mb-6">
              Build dynamic web applications using MongoDB, Express, React, and
              Node.js — the most in-demand full-stack technology. This course
              helps learners gain practical skills in modern web development
              under expert mentors from Axinor Technologies.
            </p>

            {/* Course Info */}
            <div className="space-y-3 text-sm md:text-base">
              <p>
                <span className="font-semibold text-white">Duration:</span> 3
                Months
              </p>
              <p>
                <span className="font-semibold text-white">Level:</span>{" "}
                Beginner to Intermediate
              </p>
              <p>
                <span className="font-semibold text-white">Mentorship:</span>{" "}
                Live Instructor-Led
              </p>
              <p>
                <span className="font-semibold text-white">Certificate:</span>{" "}
                On Completion
              </p>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white text-gray-800 rounded-2xl shadow-lg p-8 max-w-md w-full mx-auto md:mx-0">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <input
                type="text"
                placeholder="Location"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <textarea
                placeholder="Message"
                rows="3"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              ></textarea>
              <button
                type="submit"
                className="bg-pink-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-pink-600 transition w-full"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ====== Course Details Section ====== */}
      <div className="max-w-5xl mx-auto py-16 px-6 md:px-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Course Overview
        </h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          This course is designed to help learners gain practical skills in
          modern full-stack web development. You'll build real-world projects,
          learn database handling, front-end frameworks, and back-end logic
          integration — all under the guidance of experienced mentors from
          Axinor Technologies.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          What You’ll Learn
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Build responsive web applications using React</li>
          <li>Create and manage APIs using Node.js and Express</li>
          <li>Work with MongoDB databases efficiently</li>
          <li>Deploy full-stack applications on cloud platforms</li>
          <li>Implement version control using Git & GitHub</li>
        </ul>
      </div>
    </section>
  );
};

export default MernCourse;
