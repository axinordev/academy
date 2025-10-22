import React from "react";
import mernImg from "../assets/images/mern.svg";
import flutterImg from "../assets/images/flutter.svg";
import cyberImg from "../assets/images/cyber.svg";

const CoursesPage = () => {
  return (
    <section className="bg-[#F5F5F5] min-h-screen pt-[100px] pb-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold font-Poppins leading-tight">
            Explore Our{" "}
            <span className="text-pink-500">Professional IT</span> <br />
            Training Programs
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Learn modern technologies through hands-on, industry-based courses
            designed by experts at Axinor Technologies.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["Tutorial", "Coding", "Design", "Marketing"].map((tag) => (
            <button
              key={tag}
              className="px-5 py-2 bg-white border border-gray-200 rounded-full text-gray-700 hover:text-pink-500 hover:border-pink-500 transition font-medium text-sm shadow-sm"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* MERN Stack */}
          <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition p-6 flex flex-col items-center text-center">
            <img
              src={mernImg}
              alt="MERN Stack"
              className="w-28 h-28 object-contain mb-6"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              MERN Stack Development
            </h3>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Level: Intermediate | Duration: 3 Months
            </p>
            <button className="bg-pink-500 text-white px-5 py-2 rounded-full font-medium hover:bg-pink-600 transition">
              Learn More
            </button>
          </div>

          {/* Flutter */}
          <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition p-6 flex flex-col items-center text-center">
            <img
              src={flutterImg}
              alt="Flutter Development"
              className="w-28 h-28 object-contain mb-6"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Flutter Development
            </h3>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Level: Beginner | Duration: 3 Months
            </p>
            <button className="bg-pink-500 text-white px-5 py-2 rounded-full font-medium hover:bg-pink-600 transition">
              Learn More
            </button>
          </div>

          {/* Cyber Security */}
          <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition p-6 flex flex-col items-center text-center">
            <img
              src={cyberImg}
              alt="Cyber Security"
              className="w-28 h-28 object-contain mb-6"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Cyber Security
            </h3>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Level: Intermediate | Duration: 3 Months
            </p>
            <button className="bg-pink-500 text-white px-5 py-2 rounded-full font-medium hover:bg-pink-600 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Get In Touch Section (with Map) */}
        <div className="bg-[#0B1120] rounded-3xl mt-20 p-10 text-white flex flex-col lg:flex-row justify-between items-center gap-10">
          {/* Left Text Content */}
          <div className="flex-1">
            <div className="mb-4">
              <p className="inline-block bg-blue-700 bg-opacity-20 text-blue-500 px-4 py-2 rounded-md font-medium text-sm shadow-sm">
                Contact
              </p>
            </div>
            <h3 className="text-3xl font-semibold mb-3">Get In Touch</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Have questions about our courses or training programs? Our team is
              here to help you every step of the way.
            </p>
            <button className="bg-pink-500 px-6 py-2 rounded-full font-semibold hover:bg-pink-600 transition">
              Enquire Now
            </button>
          </div>

          {/* Map Embed */}
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
      </div>
    </section>
  );
};

export default CoursesPage;
