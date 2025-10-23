import React from "react";
import navbg from "../assets/images/navbg.svg";

const MernCourse = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="bg-cover bg-center bg-no-repeat min-h-[40vh] flex flex-col px-6 md:px-12"
        style={{ backgroundImage: `url(${navbg})` }}
      >
        {/* Heading */}
        <div className="flex items-center flex-grow">
          <h1 className="text-3xl md:text-5xl font-semibold text-white font-Poppins max-w-lg">
            MERN Stack Development
          </h1>
        </div>
      </section>

      {/* Next Section */}
      <section className="py-20 bg-gray-50">
  <div className="container mx-auto px-6 md:px-12">
    <div className="max-w-3xl">
      <p className="text-gray-800 text-lg md:text-xl font-Poppins leading-relaxed text-left">
        Build dynamic web applications using MongoDB, Express, React, and Node.js — the most in-demand full-stack technology. This course is designed to help learners gain practical skills in modern full-stack web development. You’ll build real-world projects, learn database handling, front-end frameworks, and back-end logic integration — all under the guidance of experienced mentors from Axinor Technologies.
      </p>
    </div>
  </div>
</section>

    </>
  );
};

export default MernCourse;
