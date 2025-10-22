import React from "react";
import mernImg from "../assets/images/mern.svg"; // replace with your actual file name
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
    
    <section className="bg-[#F0FFFF] py-20" id="courses">
      <div className="container mx-auto px-6 text-center">
        {/* Section Heading */}
        <div className="mb-6">
          <p className="inline-block bg-pink-500 bg-opacity-20 text-pink-500 px-4 py-2 rounded-md font-medium text-sm shadow-sm">
            Our Courses
          </p>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our <span className="text-pink-500">Featured</span> Courses
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-10">
          Explore our most in-demand programs designed to help you gain hands-on skills,
          real-world experience, and confidence to build your tech career.
        </p>

        
        {/* Filter Buttons */}
<div className="flex flex-wrap justify-center gap-3 mb-10">
  {["Featured", "Coding", "Design", "Marketing"].map((item, idx) => (
    <button
      key={idx}
      className="px-4 py-2 rounded-full text-sm font-medium border border-gray-400 text-black bg-transparent hover:bg-sky-400 hover:text-white hover:border-sky-400 transition"
    >
      {item}
    </button>
  ))}
</div>


        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-5"
            >
              <img
                src={course.img}
                alt={course.title}
                className="rounded-xl w-full h-48 object-cover mb-5"
              />
              <div className="text-left px-1">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-lg">{course.title}</h3>
                  <p className="text-sm text-gray-500">{course.duration}</p>
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  <span className="font-medium">Level:</span> {course.level}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  <span className="font-medium">Includes:</span> {course.includes}
                </p>

                {/* Arrow button */}
 <div className="mt-4 flex justify-end">
  <button className="w-9 h-9 rounded-full flex items-center justify-center bg-white border-2 border-[#e01d5e] transition">
    <img 
      src={arrowIcon} 
      alt="arrow icon" 
      className="w-4 h-4 object-contain"
    />
  </button>
</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
