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
    includes: "Ethical Hacking",
  },
];

const FeaturedCourses = () => {
  return (
    <section
      className="bg-[#F3F6F9] py-14 font-['Poppins'] text-[#0F172A] mt-52"
      id="courses"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
        {/* Section Heading */}
        <div className="mb-4">
          <p className="inline-block bg-[#EC489926] text-[#EC4899] px-4 py-2 rounded-md font-medium text-s">
            Our Courses
          </p>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-6 mb-6 text-[#0F172A] w-fit mx-auto leading-tight">
          Our <span className="text-[#EC4899]">Featured</span> Courses
        </h2>

        <p className="max-w-2xl mx-auto mb-10 text-[15px] leading-relaxed">
          Explore our most in-demand programs designed to help you gain hands-on
          <br className="hidden sm:block" />
          skills, real-world experience, and confidence to build your tech career.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {["Featured", "Coding", "Design", "Marketing"].map((item, idx) => (
            <button
              key={idx}
              className="px-4 py-2 rounded-full text-sm font-normal border border-[#C7DDF4] text-[#0F172A] bg-transparent 
                         hover:bg-[#BCD8F1] hover:text-[#0F172A] hover:border-[#BCD8F1] transition"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Course Cards */}
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3 
            gap-8 
            justify-start
            items-start
            ml-4
          "
        >
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-[#C7DDF4] transition p-4 w-[385px] h-[400px] flex flex-col justify-between opacity-80 hover:opacity-100 hover:shadow-lg duration-200"
            >
              {/* Course Image */}
              <img
                src={course.img}
                alt={course.title}
                className="rounded-xl w-full h-[200px] object-cover mb-3"
              />

              {/* Title + Duration */}
              <div className="flex items-center justify-between text-left">
                <h3 className="font-normal text-[16px] sm:text-[17px] text-[#0F172A]">
                  {course.title}
                </h3>
                <p className="text-sm text-[#6B7280] whitespace-nowrap ml-2">
                  {course.duration}
                </p>
              </div>

              {/* Level + Includes + Arrow */}
              <div className="flex justify-between items-end mt-3">
                <div className="text-left text-[#6B7280] text-[13px] leading-snug">
                  <p>
                    <span className="font-medium text-[#0F172A] opacity-80">
                      Level:
                    </span>{" "}
                    {course.level}
                  </p>
                  <p className="mt-1">
                    <span className="font-medium text-[#0F172A] opacity-80">
                      Includes:
                    </span>{" "}
                    {course.includes}
                  </p>
                </div>

                {/* Arrow Button */}
                <button
                  className="group w-9 h-9 rounded-full flex items-center justify-center bg-white border-2 border-[#e01d5e]
                  hover:bg-[#e01d5e] hover:border-white transition ml-2"
                >
                  <img
                    src={arrowIcon}
                    alt="arrow icon"
                    className="w-4 h-4 object-contain transition group-hover:brightness-0 group-hover:invert"
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
