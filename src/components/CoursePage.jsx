import React from "react";
import mernImg from "../assets/images/mern.svg";
import flutterImg from "../assets/images/flutter.svg";
import cyberImg from "../assets/images/cyber.svg";
import arrowIcon from "../assets/images/arrow.svg";
import bgCourse from "../assets/images/coursebg.svg";
import logo from "../assets/images/logo2.svg"; // add your logo path
import locationIcon from "../assets/images/location_icon.png"; // add your location icon
import phoneIcon from "../assets/images/phone_icon.png"; // add your phone icon
import mailIcon from "../assets/images/mail_icon.png"; // add your mail icon
import { useNavigate } from "react-router-dom";

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

const CoursesPage = () => {
  const navigate = useNavigate(); // Add this inside your component
  return (
    <section
      className="bg-cover bg-center bg-no-repeat min-h-screen pt-[100px]"
      style={{
        backgroundImage: `url(${bgCourse})`,
      }}
    >
      {/* Container for Heading & Cards */}
      <div className="container mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold font-Poppins leading-tight">
            Explore Our <span className="text-pink-500">Professional IT</span>{" "}
            <br />
            Training Programs
          </h1>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
            Learn modern technologies through hands-on, industry-based courses
            designed by experts at Axinor Technologies.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["Featured", "Coding", "Design", "Marketing"].map((tag) => (
            <button
              key={tag}
              className="px-5 py-2 rounded-full text-sm font-medium border border-gray-400 text-black bg-transparent hover:bg-sky-400 hover:text-white hover:border-sky-400 transition"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-20">
          {courses.map((course, index) => (
      <div
        key={index}
        className="rounded-2xl shadow-lg hover:shadow-xl transition p-5 border border-white/30 bg-white/40 backdrop-blur-md flex flex-col justify-center"
      >
        <img
          src={course.img}
          alt={course.title}
          className="rounded-xl w-full object-contain h-48 mb-5"
        />
        <div className="text-left px-1 text-black">
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

          {/* Arrow Button */}
          <div className="mt-4 flex justify-end">
            <button
              className="w-9 h-9 rounded-full flex items-center justify-center bg-white border-2 border-[#e01d5e] transition"
              onClick={() => {
                // Navigate based on course title
                if (course.title === "MERN Stack Development") {
                  navigate("/mern-course");
                } else if (course.title === "Flutter Development") {
                  navigate("/flutter-course");
                } else if (course.title === "Cyber Security") {
                  navigate("/cyber-course");
                }
              }}
            >
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



      {/* Top Footer / Contact Section */}
      <div className="bg-[#0B1120] w-full p-10 text-white flex flex-col lg:flex-row justify-between items-center gap-10">
        {/* Left Content */}
        <div className="flex-1">
          <div className="mb-4">
            <p className="inline-block bg-blue-700 bg-opacity-20 text-blue-500 px-4 py-2 rounded-md font-medium text-sm shadow-sm">
              Contact
            </p>
          </div>
          <h3 className="text-3xl font-semibold mb-3">Get In Touch</h3>
          <p className="text-gray-300 mb-6 max-w-md">
            Have questions about our courses or training programs? <br/>Our team is
            here to help you every step of the way.
          </p>
          <button className="bg-pink-500 px-6 py-2 rounded-full font-semibold hover:bg-pink-600 transition">
            Enquire Now
          </button>
        </div>

        {/* Map */}
        <div className="flex-1 w-full">
          <iframe
            title="Axinor Academy Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.152312083365!2d75.786!3d11.257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65bfa2bce2b83%3A0xb5c7f6d05d63e3d4!2sHiLITE%20Business%20Park!5e0!3m2!1sen!2sin!4v1698179099103!5m2!1sen!2sin"
            width="100%"
            height="280"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Footer Main Section */}
      <div className="bg-[#0B1120] border-t border-gray-800">
        <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row justify-between gap-10 text-gray-300 py-10">
          {/* Logo & Description */}
          <div className="flex-1">
            <img src={logo} alt="Axinor Technologies" className="w-40 mb-4" />
            <p className="max-w-sm">
              A learning initiative by Axinor Technologies empowering future
              developers through real-world training and expert mentorship.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>Home</li>
              <li>Courses</li>
              <li>About Us</li>
              <li>Mentors</li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white font-semibold mb-3">Courses</h4>
            <ul className="space-y-2">
              <li>MERN Stack</li>
              <li>Flutter</li>
              <li>Cyber Security</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <img src={locationIcon} alt="Location" className="w-5 h-5" />
                <span>Kozhikode, Kerala</span>
              </li>
              <li className="flex items-center gap-2">
                <img src={phoneIcon} alt="Phone" className="w-5 h-5" />
                <span>+91 9XXXX XXXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <img src={mailIcon} alt="Email" className="w-5 h-5" />
                <span>info@axinoracademy.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="border-t border-gray-800 py-4">
  <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center text-gray-400 text-sm">
    {/* Centered text */}
    <p className="text-center md:mx-auto">@2025 Axinor Academy. All rights reserved.</p>

    {/* Right aligned on desktop, below on mobile */}
    <div className="flex gap-4 mt-2 md:mt-0 md:ml-auto">
      <span>Terms & Conditions / Privacy Policy</span>
    </div>
  </div>
</div>


      </div>
    </section>
  );
};

export default CoursesPage;
