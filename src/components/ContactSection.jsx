import React from "react";
import logo from "../assets/images/logo2.svg"; // your logo
import locationIcon from "../assets/images/location_icon.png";
import phoneIcon from "../assets/images/phone_icon.png";
import mailIcon from "../assets/images/mail_icon.png";



const ContactSection = () => {
  return (
    <section className="bg-[#0B1120] text-white py-16 px-6 md:px-12 lg:px-24">
      {/* Top Section */}
      <div className="mb-6">
          <p className="inline-block bg-blue-700 bg-opacity-20 text-blue-500 px-4 py-2 rounded-md font-medium text-sm shadow-sm">
            Contact
          </p>
        </div>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-300 max-w-md mb-6">
            Have questions about our courses or training programs? Our team is
            here to help you every step of the way.
          </p>
          <button className="bg-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition">
            Enquire Now
          </button>
        </div>

        {/* Right - Map */}
        <div className="flex-1">
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

      {/* Divider */}
      <div className="border-t border-gray-700 my-10"></div>

      {/* Footer Section */}
      <footer className="flex flex-col lg:flex-row justify-between items-start gap-10 text-gray-300">
        {/* Logo & Description */}
        <div className="flex-1">
          <img src={logo} alt="Axinor Technologies" className="w-40 mb-4" />
          <p className="max-w-sm">
            A learning initiative by Axinor Technologies  empowering future
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

        {/* Contact */}
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
      </footer>
    </section>
  );
};

export default ContactSection;
