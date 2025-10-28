import React from "react";
import mernImg from "../assets/images/mern.svg";
import flutterImg from "../assets/images/flutter.svg";
import cyberImg from "../assets/images/cyber.svg";
import arrowIcon from "../assets/images/arrow.svg";

const courses = [
  {
    img: mernImg,
    title: "MERN Stack Development",
    duration: "3 Months",
    level: "Beginner to Advanced",
    includes: "Live Projects & Mentorship",
  },
  {
    img: flutterImg,
    title: "Flutter Development",
    duration: "3 Months",
    level: "Beginner Friendly",
    includes: "UI/UX Integration + Live App Projects",
  },
  {
    img: cyberImg,
    title: "Cyber Security",
    duration: "3 Months",
    level: "Intermediate",
    includes: "Ethical Hacking & Security Tools",
  },
];

const FeaturedCourses = () => {
  return (
    <section className="bg-[#F3F6F9] py-14 font-['Poppins'] text-[#0F172A]" id="courses">
      <div className="container mx-auto px-6 text-center">

        {/* Section Heading */}
        <div className="mb-4">
          <p className="inline-block bg-[#EC489926] text-[#EC4899] px-3 py-[3px] rounded-md font-medium text-xs shadow-sm">
            Our Courses
          </p>
        </div>

        <h2 className="text-3xl md:text-4xl font-semibold mt-6 mb-6 text-[#0F172A]">
  Our <span className="text-[#EC4899]">Featured</span> Courses
</h2>



        <p className="max-w-2xl mx-auto mb-10 text-[15px] leading-relaxed">
          Explore our most in-demand programs designed to help you gain hands-on 
          <br />
          skills, real-world experience, and confidence to build your tech career.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {["Featured", "Coding", "Design", "Marketing"].map((item, idx) => (
            <button
              key={idx}
              className="px-4 py-2 rounded-full text-sm font-normal border border-gray-400 text-[#0F172A] bg-transparent 
                         hover:bg-[#BCD8F1] hover:text-[#0F172A] hover:border-[#BCD8F1] transition"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4 w-[350px] h-[360px] flex flex-col justify-between 
              ${index === 0 ? "-ml-8" : ""} 
              ${index === 2 ? "ml-8" : ""}`}
            >
              <div>
                <img
                  src={course.img}
                  alt={course.title}
                  className="rounded-xl w-full h-[180px] object-cover mb-3"
                />
                <div className="text-left">
                  <div className="flex justify-between items-center">
                    <h3 className="font-normal text-lg">{course.title}</h3>
                    <p className="text-sm">{course.duration}</p>
                  </div>
                  <p className="text-sm mt-3">
                    <span className="font-medium">Level:</span> {course.level}
                  </p>
                  <p className="text-sm mt-1">
                    <span className="font-medium">Includes:</span> {course.includes}
                  </p>
                </div>
              </div>

              {/* Arrow Button */}
              <div className="mt-4 flex justify-end">
                <button className="w-9 h-9 rounded-full flex items-center justify-center bg-white border-2 border-[#e01d5e] hover:bg-[#e01d5e] hover:border-[#e01d5e] hover:shadow-md transition">
                  <img
                    src={arrowIcon}
                    alt="arrow icon"
                    className="w-4 h-4 object-contain"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
