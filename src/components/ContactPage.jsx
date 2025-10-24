import React from "react";
import arrowIcon from "../assets/images/icon4.svg";
import bgCourse from "../assets/images/courseBg.svg";
import logo from "../assets/images/logo2.svg";
import locationIcon from "../assets/images/location_icon.png";
import phoneIcon from "../assets/images/phone_icon.png";
import mailIcon from "../assets/images/mail_icon.png";
import studentImg from "../assets/images/student.svg";
import contactOverlay from "../assets/images/bg2.svg";

const ContactPage = () => {
  return (
    <>
      {/* ===== Section 1: Hero + Contact Form ===== */}
      <section
        className="bg-cover bg-center bg-no-repeat w-full pt-[100px] pb-20"
        style={{ backgroundImage: `url(${bgCourse})` }}
      >
        <div className="container mx-auto px-6 md:px-12 text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold font-Poppins leading-tight">
            Let's <span className="text-pink-500">Connect</span>
          </h1>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
            Have questions about our courses, admissions, or training programs?
            <br />
            Reach out to us — our team will guide you every step of the way.
          </p>
        </div>

        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#0B1120] text-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4 text-gray-300">
              <li><strong>Address:</strong> Axinor Technologies, Kozhikode, Kerala</li>
              <li><strong>Phone:</strong> +91 9XXXX XXXXX</li>
              <li><strong>Email:</strong> info@axinoracademy.com</li>
              <li><strong>Hours:</strong> 9:30 AM – 6:30 PM</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8">
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Name" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-pink-500" />
              <input type="email" placeholder="Email" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-pink-500" />
              <input type="text" placeholder="Course" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-pink-500" />
              <textarea rows="4" placeholder="Message" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-pink-500"></textarea>
              <button className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition">Submit</button>
            </form>
          </div>
        </div>
      </section>

      {/* ===== Section 2: Visit Our Office ===== */}
      <section
        className="relative w-full bg-cover bg-center bg-no-repeat py-20"
        style={{ backgroundImage: `url(${contactOverlay})`, minHeight: "500px" }}
      >
        <div className="relative max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start gap-10 z-10">
          
          {/* Text Content */}
          <div className="flex-1 text-left">
            <h2 className="text-3xl font-Poppins text-blue-500 mb-4">
              Visit Our Office
            </h2>
            <p className="text-black mb-6 font-Poppins">
              We'd love to meet you in person at our Kozhikode office. Come and
              explore our learning environment, meet our team, and get guidance
              about courses that suit your career path.
            </p>
            <p className="font-Poppins text-blue-500 flex items-start gap-2">
              <img src={arrowIcon} alt="icon" className="w-6 h-6 mt-1" />
              HiLITE Business Park – Tower 2, 7th floor <br />
              6RWM+X9G, Poovangal, Kozhikode, <br />
              Pantheeramkavu, Kerala 673014
            </p>
          </div>

          {/* Map */}
          <div className="flex-1 w-full">
            <div className="relative w-full" style={{ paddingBottom: '52.7%' }}> {/* Aspect ratio 914/482 */}
              <iframe
                title="Axinor Academy Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.563643205297!2d75.8241!3d11.2117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65f3dcb84b5e3%3A0x2d7b1f44d8d132e3!2sHiLITE%20Business%20Park%2C%20Tower%202!5e0!3m2!1sen!2sin!4v1698145200000!5m2!1sen!2sin"
                className="absolute top-0 left-0 w-full h-full rounded-2xl border-0 shadow-lg"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

        </div>
      </section>

      {/* ===== Section 3: CTA Gradient Card ===== */}
      <section
  className="relative w-full bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${contactOverlay})` }}
>
  <div className="py-20">
    <div className="container mx-auto px-4 sm:px-6 md:px-12">
      <div className="bg-gradient-to-r from-[#4B4EF9] to-[#d7d5f7] rounded-2xl flex flex-col md:flex-row justify-between items-start text-white p-6 md:p-10 shadow-lg relative overflow-visible h-auto md:h-[280px]">
        {/* Left Text */}
        <div className="mb-6 md:mb-0 max-w-full md:max-w-lg z-10">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2">
            Ready to Begin Your Learning Journey?
          </h3>
          <p className="text-gray-100 mb-3 text-sm sm:text-base">
            Talk to our academic advisors and discover the best <br className="hidden md:block" />
            course path for you.
          </p>
          <button className="bg-pink-600 text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition">
            Contact Our Team
          </button>
        </div>

        {/* Right Image */}
<div className="w-full md:w-[500px] relative z-10 -mt-16 md:-mt-24 md:translate-x-8 lg:translate-x-12 md:-translate-y-8 lg:-translate-y-12">
  <img
    src={studentImg}
    alt="Student"
    className="rounded-2xl object-cover w-full h-auto"
  />
</div>



      </div>
    </div>
  </div>
</section>

      {/* ===== Footer ===== */}
      <footer>
        <div className="bg-[#0B1120] w-full p-10 text-white flex flex-col items-center text-center gap-10">
          <div className="flex-1">
            <div className="mb-4">
              <p className="inline-block bg-blue-700 bg-opacity-20 text-blue-500 text-center px-4 py-2 rounded-md font-medium text-sm shadow-sm">
                Contact
              </p>
            </div>
            <h3 className="text-3xl font-semibold mb-3">Get In Touch</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Have questions about our courses or training programs? <br /> Our
              team is here to help you every step of the way.
            </p>
            <button className="bg-pink-500 px-6 py-2 rounded-full font-semibold hover:bg-pink-600 transition">
              Enquire Now
            </button>
          </div>
        </div>

        <div className="bg-[#0B1120] border-t border-gray-800">
          <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row justify-between gap-10 text-gray-300 py-10">
            <div className="flex-1">
              <img src={logo} alt="Axinor Technologies" className="w-40 mb-4" />
              <p className="max-w-sm">
                A learning initiative by Axinor Technologies empowering future
                developers through real-world training and expert mentorship.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2">
                <li>Home</li>
                <li>Courses</li>
                <li>About Us</li>
                <li>Mentors</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3">Courses</h4>
              <ul className="space-y-2">
                <li>MERN Stack</li>
                <li>Flutter</li>
                <li>Cyber Security</li>
              </ul>
            </div>

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

          <div className="border-t border-gray-800 py-4">
            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center text-gray-400 text-sm">
              <p className="text-center md:mx-auto">
                ©2025 Axinor Academy. All rights reserved.
              </p>
              <div className="flex gap-4 mt-2 md:mt-0 md:ml-auto">
                <span>Terms & Conditions / Privacy Policy</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactPage;
