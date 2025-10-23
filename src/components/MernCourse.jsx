import React from "react";
import logo from "../assets/images/logo1.svg";
import navbg from "../assets/images/navbg.svg";

const MernCourse = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat min-h-[60vh] flex flex-col"
      style={{ backgroundImage: `url(${navbg})` }}
    >
      {/* ===== Navbar ===== */}
      <div className="flex justify-between items-center px-6 md:px-12 py-6">
        {/* Logo */}
        <img src={logo} alt="Logo" className="w-36 md:w-44" />

        {/* Enquire Now Button */}
        <button className="bg-pink-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-pink-700 transition">
          Enquire Now
        </button>
      </div>

      {/* ===== Heading ===== */}
      <div className="flex-grow flex items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl font-semibold text-white font-Poppins">
          MERN Stack Development
        </h1>
      </div>
    </section>
  );
};

export default MernCourse;
