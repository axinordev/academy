import React from 'react';

import icon from '../assets/images/group.svg';
import whatsappIcon from '../assets/images/whatsapp_icon.svg';
import bg2 from '../assets/images/bg3.png';
import wm from '../assets/images/woman-lap.jpeg';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-start md:items-center justify-start font-['Poppins'] bg-[#F3F6F9] md:bg-transparent relative overflow-hidden"
    >
      {/* Desktop Background */}
      <img
        src={bg2}
        alt="Background"
        className="absolute top-0 left-0 w-full object-cover z-0 object-top hidden md:block"
      />

      <div className="flex flex-col w-full">
        {/* Main Wrapper */}
        <div className="w-full flex flex-col-reverse lg:flex-row z-10 items-center justify-between px-6 md:px-10 lg:-ml-6 gap-10 pt-[100px] sm:pt-[80px] lg:pt-[200px]">
          {/* Left Text Section */}
          <div className="lg:w-7/12 w-full bg-transparent rounded-2xl p-5 sm:p-6 lg:p-8 flex flex-col gap-5 text-center lg:text-left">
            {/* Label */}
            <div className="mb-2 sm:mb-3">
              <p className="inline-flex items-center justify-center text-[13px] sm:text-[14px] font-medium text-[#EC4899] bg-[#EC489926] rounded-md px-3 py-[3px]">
                100% Satisfaction Guarantee
              </p>
            </div>

            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-[53px] lg:text-5xl font-semibold text-[#0F172A] leading-snug sm:leading-[3rem] md:leading-[80px]">
              <span className="md:leading-[80px]">
                Where <span className="text-[#EC4899]">Learning</span> Meets
              </span>
              <span className="md:leading-[80px]">
                {' '}
                Real-World Innovation
                <span className="text-[#3661DA]">.</span>
              </span>
            </h1>

            {/* Description */}
            <p className="text-[#0F172A] text-[14px] sm:text-base leading-relaxed max-w-[650px] mx-auto lg:mx-0">
              Join a new-age learning platform built by Axinor Technologies —
              where practical skills, mentorship, and innovation come together to help
              you build a successful tech career.
            </p>

            {/* Buttons + Icon */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mt-2">
              <a
                href="#explore"
                className="bg-[#EC4899] text-white font-medium rounded-full px-5 sm:px-6 py-2 hover:opacity-90 transition text-sm sm:text-base"
              >
                Explore Courses
              </a>

              <a
                href="#enquire"
                className="border-2 border-[#EC4899] text-[#EC4899] font-medium rounded-full px-5 sm:px-6 py-2 hover:bg-[#EC4899] hover:text-white transition text-sm sm:text-base"
              >
                Enquire Now
              </a>

              <img src={icon} alt="icon" className="h-6 sm:h-7 md:h-8" />
            </div>
          </div>
        </div>

        {/* Mobile Background Image */}
        <img
          src={wm}
          alt="Background"
          className="relative w-full h-[350px] sm:h-[400px] object-cover object-bottom z-0 md:hidden rounded-t-[30px]"
        />
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919446186026"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-4 sm:bottom-6 sm:right-5 w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition z-50"
      >
        <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6 sm:w-7 sm:h-7" />
      </a>
    </section>
  );
};

export default HeroSection;
