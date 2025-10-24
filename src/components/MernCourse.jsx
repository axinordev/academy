import React from "react";
import navbg from "../assets/images/navbg.svg";
import icon5 from "../assets/images/icon5.png"; // Duration
import icon6 from "../assets/images/icon6.png"; // Level
import icon7 from "../assets/images/icon7.png"; // Mentorship
import icon8 from "../assets/images/icon8.png"; // Certificate
import arrowIcon from "../assets/images/arrow.svg";

const MernCourse = () => {
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
          <div className="md:w-1/2 mt-[40px] text-left">
            <p className="text-gray-800 text-sm md:text-base font-Poppins leading-relaxed">
              Build dynamic web applications using MongoDB, Express, React, and Node.js — the most <br/>
              in-demand full-stack technology. This course is designed to help learners gain<br/> 
              practical skills in modern full-stack web development. You’ll build real-world projects,<br/>
              learn database handling, front-end frameworks, and back-end logic integration — all<br/>
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

            <div className="mt-8">
    <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 font-Poppins mb-3">
      Course Overview
    </h2>
    <p className="text-gray-800 text-sm md:text-base font-Poppins leading-relaxed">
      This course is designed to help learners gain practical skills in modern full-stack web development. You’ll build real-world projects, learn database handling, front-end frameworks, and back-end logic integration — all under the guidance of experienced mentors from Axinor Technologies.
    </p>
  </div>

{/* What You'll Learn Section */}
<div className="mt-8">
  <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 font-Poppins mb-4 flex items-center gap-2">
    What You’ll Learn
    
  </h2>

  <div className="space-y-3">
    <div className="flex items-start gap-2">
      <img src={arrowIcon} alt="Arrow" className="w-4 h-4 mt-1" />
      <span className="text-gray-800 text-sm md:text-base font-Poppins">
        Build responsive web apps with React
      </span>
    </div>
    <div className="flex items-start gap-2">
      <img src={arrowIcon} alt="Arrow" className="w-4 h-4 mt-1" />
      <span className="text-gray-800 text-sm md:text-base font-Poppins">
        Create and manage APIs using Node.js and Express
      </span>
    </div>
    <div className="flex items-start gap-2">
      <img src={arrowIcon} alt="Arrow" className="w-4 h-4 mt-1" />
      <span className="text-gray-800 text-sm md:text-base font-Poppins">
        Work with MongoDB databases
      </span>
    </div>
    <div className="flex items-start gap-2">
      <img src={arrowIcon} alt="Arrow" className="w-4 h-4 mt-1" />
      <span className="text-gray-800 text-sm md:text-base font-Poppins">
        Deploy apps on cloud platforms
      </span>
    </div>
    <div className="flex items-start gap-2">
      <img src={arrowIcon} alt="Arrow" className="w-4 h-4 mt-1" />
      <span className="text-gray-800 text-sm md:text-base font-Poppins">
        Version control using Git & GitHub
      </span>
    </div>
  </div>
</div>



          </div>

          {/* Right Floating Form Card */}
          <div className="md:w-1/2 relative md:-mt-32 flex justify-end">
            <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
              <form className="space-y-5">
                <div className="grid grid-cols-1 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-500 outline-none font-Poppins"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-500 outline-none font-Poppins"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-500 outline-none font-Poppins"
                  />
                  <input
                    type="text"
                    placeholder="Location"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-500 outline-none font-Poppins"
                  />
                </div>

                <textarea
                  placeholder="Message"
                  rows="4"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-500 outline-none font-Poppins"
                ></textarea>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-pink-600 text-white font-Poppins font-medium px-6 py-3 rounded-lg hover:bg-pink-700 transition"
                  >
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
