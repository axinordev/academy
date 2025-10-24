import React from "react";
import navbg from "../assets/images/navbg.svg";

const MernCourse = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat min-h-[40vh] flex flex-col px-6 md:px-12"
        style={{ backgroundImage: `url(${navbg})` }}
      >
        {/* Heading */}
        <div className="flex items-center flex-grow">
          <h1 className="text-3xl md:text-5xl font-semibold text-white font-Poppins max-w-lg">
            MERN Stack Development
          </h1>
        </div>
      </section>

      {/* Description + Floating Form */}
      <section className="relative bg-gray-50 pt-10 pb-24 md:pt-0">
        {/* custom wrapper keeps content left-aligned and allows precise spacing */}
        <div className="relative flex flex-col md:flex-row justify-between items-start md:gap-12 max-w-[1300px] mx-auto px-6 md:px-12">
          
          {/* Left Text (preserve <br/> exactly as requested) */}
          <div className="md:w-1/2 mt-10 md:mt-[-60px] text-left">
            <p className="text-gray-800 text-base md:text-lg font-Poppins leading-relaxed">
              Build dynamic web applications using MongoDB, Express, React, and Node.js — the most <br/>
              in-demand full-stack technology. This course is designed to help learners gain<br/> 
              practical skills in modern full-stack web development. You’ll build real-world projects,<br/>
              learn database handling, front-end frameworks, and back-end logic integration — all<br/>
              under the guidance of experienced mentors from Axinor Technologies.
            </p>
          </div>

          {/* Right Floating Form Card */}
          <div className="md:w-1/2 relative md:-mt-40 flex justify-end">
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
