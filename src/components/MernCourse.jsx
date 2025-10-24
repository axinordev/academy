import React, { useState } from "react";
import navbg from "../assets/images/navbg.svg";
import icon5 from "../assets/images/icon5.png"; // Duration
import icon6 from "../assets/images/icon6.png"; // Level
import icon7 from "../assets/images/icon7.png"; // Mentorship
import icon8 from "../assets/images/icon8.png"; // Certificate
import arrowIcon from "../assets/images/arrow.svg";
import dArrow from "../assets/images/d_arrow.png"; // Dropdown arrow
import devImg from "../assets/images/dev.svg";
import f1 from "../assets/images/f1.png"; // forward icon
import b1 from "../assets/images/b1.png"; // backward icon
import insta from "../assets/images/insta.png";
import lin from "../assets/images/lin.png";

// Course modules
const modules = [
  { number: "Module 1", title: "Introduction to MERN Stack", content: "This module covers the basics of MERN stack, including an overview of MongoDB, Express, React, and Node.js." },
  { number: "Module 2", title: "Front-End with React", content: "Learn React fundamentals, components, state management, hooks, and building responsive user interfaces." },
  { number: "Module 3", title: "Back-End with Node.js & Express", content: "Understand server-side development, RESTful APIs, middleware, and connecting with databases using Express." },
  { number: "Module 4", title: "Database with MongoDB", content: "Work with MongoDB, CRUD operations, schema design, and integrating with your backend for dynamic data." },
  { number: "Module 5", title: "Project & Deployment", content: "Build a full-stack project, deploy it on cloud platforms, and learn version control using Git & GitHub." },
];

// Mentor data (expand later)
const mentors = [
  { name: "Rahul Menon", role: "Senior Full Stack Developer", img: devImg },
  { name: "Ananya Nair", role: "Frontend Developer", img: devImg },
  { name: "Vikram Raj", role: "Backend Engineer", img: devImg },
];

const MernCourse = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [mentorIndex, setMentorIndex] = useState(0);

  const toggleModule = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const nextMentor = () => {
    setMentorIndex((prev) => (prev === mentors.length - 1 ? 0 : prev + 1));
  };

  const prevMentor = () => {
    setMentorIndex((prev) => (prev === 0 ? mentors.length - 1 : prev - 1));
  };

  const mentor = mentors[mentorIndex];

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat min-h-[40vh] flex flex-col px-6 md:px-12"
        style={{ backgroundImage: `url(${navbg})` }}
      >
        <div className="flex items-center flex-grow">
          <h1 className="text-3xl md:text-5xl font-semibold text-white font-Poppins max-w-lg">
            MERN Stack Development
          </h1>
        </div>
      </section>

      {/* Description + Floating Form */}
      <section className="relative bg-gray-50 pb-24 md:pt-0">
        <div className="relative flex flex-col md:flex-row justify-between items-start md:gap-8 max-w-[1300px] mx-auto px-6 md:px-12">
          {/* Left Text Section */}
          <div className="md:w-3/5 mt-[40px] text-left items-left">
            {/* Course Description */}
            <p className="text-gray-800 text-sm md:text-base font-Poppins leading-relaxed">
              Build dynamic web applications using MongoDB, Express, React, and Node.js — the most <br />
              in-demand full-stack technology. This course is designed to help learners gain <br />
              practical skills in modern full-stack web development. You’ll build real-world projects, <br />
              learn database handling, front-end frameworks, and back-end logic integration — all <br />
              under the guidance of experienced mentors from Axinor Technologies.
            </p>

            {/* Icons Row */}
            <div className="mt-5 space-y-3">
              <div className="flex items-center gap-3">
                <img src={icon5} alt="Duration" className="w-5 h-5" />
                <span className="font-semibold text-gray-900">Duration:</span>
                <span className="text-gray-700 ml-1">3 Months</span>
              </div>
              <div className="flex items-center gap-3">
                <img src={icon6} alt="Level" className="w-5 h-5" />
                <span className="font-semibold text-gray-900">Level:</span>
                <span className="text-gray-700 ml-1">Beginner to Intermediate</span>
              </div>
              <div className="flex items-center gap-3">
                <img src={icon7} alt="Mentorship" className="w-5 h-5" />
                <span className="font-semibold text-gray-900">Mentorship:</span>
                <span className="text-gray-700 ml-1">Live Instructor-Led</span>
              </div>
              <div className="flex items-center gap-3">
                <img src={icon8} alt="Certificate" className="w-5 h-5" />
                <span className="font-semibold text-gray-900">Certificate on Completion</span>
              </div>
            </div>

            {/* Course Overview */}
            <div className="mt-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 font-Poppins mb-3">
                Course Overview
              </h2>
              <p className="text-gray-800 text-sm md:text-base font-Poppins leading-relaxed">
                This course is designed to help learners gain practical skills in modern full-stack web development. You’ll build real-world projects, learn database handling, front-end frameworks, and back-end logic integration — all under the guidance of experienced mentors from Axinor Technologies.
              </p>
            </div>

            {/* What You'll Learn */}
            <div className="mt-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 font-Poppins mb-4 flex items-center gap-2">
                What You’ll Learn
              </h2>
              <div className="space-y-3">
                {[
                  "Build responsive web apps with React",
                  "Create and manage APIs using Node.js and Express",
                  "Work with MongoDB databases",
                  "Deploy apps on cloud platforms",
                  "Version control using Git & GitHub",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <img src={arrowIcon} alt="Arrow" className="w-4 h-4 mt-1" />
                    <span className="text-gray-800 text-sm md:text-base font-Poppins">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Modules */}
            <div className="mt-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 font-Poppins mb-4">
                Modules
              </h2>

              <div className="space-y-3">
                {modules.map((module, index) => (
                  <div key={index} className="bg-blue-100 rounded-lg">
                    <button
                      className="w-full flex justify-between items-center px-4 py-3"
                      onClick={() => toggleModule(index)}
                    >
                      <div className="flex flex-col text-left">
                        <span className="text-gray-500 text-sm font-Poppins">{module.number}</span>
                        <span className="text-gray-900 text-base md:text-lg font-Poppins">{module.title}</span>
                      </div>
                      <img
                        src={dArrow}
                        alt="Dropdown Arrow"
                        className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                      />
                    </button>

                    {openIndex === index && (
                      <div className="px-4 py-3 text-gray-700 font-Poppins text-sm border-t border-gray-300">
                        {module.content}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Mentors Section */}
<div className="mt-12 relative flex flex-col items-center">
  <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 font-Poppins mb-6">
    Mentors
  </h2>

  {/* Outer container for arrows + card */}
  <div className="relative flex items-center justify-center w-full md:w-[550px] mx-auto">

    {/* Backward Arrow (left side outside the card) */}
    <img
      src={b1}
      alt="Previous"
      onClick={prevMentor}
      className="absolute left-[-70px] top-1/2 transform -translate-y-1/2 w-12 h-12 cursor-pointer opacity-90 hover:opacity-100 transition"
    />

    {/* Transparent Mentor Card */}
    <div className="flex flex-col items-center bg-transparent border border-gray-300 rounded-2xl p-6 w-full md:w-[450px] shadow-lg text-center backdrop-blur-md">
      {/* Mentor Image */}
      <div className="w-full h-[420px] rounded-xl flex items-center justify-center">
        <img
          src={mentor.img}
          alt={mentor.name}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Name & Designation */}
      <p className="text-gray-900 text-xl md:text-2xl font-Poppins font-semibold mt-4">
        {mentor.name}
      </p>
      <p className="text-gray-600 text-sm md:text-base font-Poppins">
        {mentor.role}
      </p>

      {/* Social Icons */}
      <div className="flex gap-4 mt-3">
        <img src={insta} alt="Instagram" className="w-6 h-6 cursor-pointer" />
        <img src={lin} alt="LinkedIn" className="w-6 h-6 cursor-pointer" />
      </div>
    </div>

    {/* Forward Arrow (right side outside the card) */}
    <img
      src={f1}
      alt="Next"
      onClick={nextMentor}
      className="absolute right-[-70px] top-1/2 transform -translate-y-1/2 w-12 h-12 cursor-pointer opacity-90 hover:opacity-100 transition"
    />
  </div>
  {/* Duration & Fees Section */}
<div className="mt-16 text-left w-full md:w-[900px] mx-auto">
  <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 font-Poppins mb-6">
    Duration & Fees
  </h2>

  {/* Two boxes side by side */}
  <div className="flex flex-col md:flex-row justify-between items-start gap-6">
    
    {/* Duration Box */}
    <div className="bg-blue-100 rounded-2xl p-6 shadow-md w-full md:w-[420px]">
      <div className="flex flex-col space-y-3">
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 rounded-full bg-blue-700"></span>
          <span className="text-gray-900 font-semibold font-Poppins text-lg">Duration</span>
        </div>
        <div className="flex flex-col space-y-2 ml-7">
          <div className="flex items-center gap-2">
            <img src={arrowIcon} alt="Arrow" className="w-4 h-4" />
            <span className="text-gray-800 font-Poppins">4 Months</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={arrowIcon} alt="Arrow" className="w-4 h-4" />
            <span className="text-gray-800 font-Poppins">5 Days In A Week</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={arrowIcon} alt="Arrow" className="w-4 h-4" />
            <span className="text-gray-800 font-Poppins">3 Hours Class</span>
          </div>
        </div>
      </div>
    </div>

    {/* Fees Box */}
    <div className="bg-blue-100 rounded-2xl p-6 shadow-md w-full md:w-[420px]">
      <div className="flex items-center gap-3">
        <span className="w-3 h-3 rounded-full bg-blue-700"></span>
        <span className="text-gray-900 font-semibold font-Poppins text-lg">Fees</span>
      </div>
      <div className="mt-4 ml-7 space-y-2">
        <div className="flex items-center gap-2">
          <img src={arrowIcon} alt="Arrow" className="w-4 h-4" />
          <span className="text-gray-800 font-Poppins">₹ 25,000 (Full Course)</span>
        </div>
        <div className="flex items-center gap-2">
          <img src={arrowIcon} alt="Arrow" className="w-4 h-4" />
          <span className="text-gray-800 font-Poppins">Installments Available</span>
        </div>
        <div className="flex items-center gap-2">
          <img src={arrowIcon} alt="Arrow" className="w-4 h-4" />
          <span className="text-gray-800 font-Poppins">Includes Certificate</span>
        </div>
      </div>
    </div>

  </div>
</div>

</div>

          </div>

          {/* Right Floating Form Card */}
          <div className="md:w-1/2 relative md:-mt-32 flex justify-end">
            <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
              <form className="space-y-5">
                <div className="grid grid-cols-1 gap-4">
                  <input type="text" placeholder="Name" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-500 outline-none font-Poppins" />
                  <input type="email" placeholder="Email" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-500 outline-none font-Poppins" />
                  <input type="tel" placeholder="Phone Number" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-500 outline-none font-Poppins" />
                  <input type="text" placeholder="Location" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-500 outline-none font-Poppins" />
                </div>

                <textarea placeholder="Message" rows="4" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-500 outline-none font-Poppins"></textarea>

                <div className="flex justify-end">
                  <button type="submit" className="bg-pink-600 text-white font-Poppins font-medium px-6 py-3 rounded-lg hover:bg-pink-700 transition">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MernCourse;
