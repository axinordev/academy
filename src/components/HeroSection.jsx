import React from 'react';
import womanLap from '../assets/images/woman-laptop.svg';
import icon from '../assets/images/icon.png';
import whatsappIcon from '../assets/images/whatsapp_icon.svg';
import bg2 from '../assets/images/herSecBg.svg';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="bg-cover bg-center bg-no-repeat min-h-screen flex items-center"
      style={{ backgroundImage: `url(${bg2})` }}
    >
      {/* Wrapper */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-start pt-[200px] px-0 mx-0">

        {/* Left Text Section */}
        <div className="lg:w-7/12 bg-transparent rounded-2xl p-8 flex flex-col gap-5 ml-[30px] font-['Poppins']">
          
          {/* Top Guarantee Label */}
          <div className="mb-3">
            <p className="inline-flex items-center justify-center text-[14px] font-medium leading-[20px] text-[#EC4899] bg-[#EC489926] rounded-md px-2 py-[2px] w-auto h-[28px]">
              100% Satisfaction Guarantee
            </p>
          </div>

   {/* Heading with more line spacing */}
<h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0F172A] -mt-2 leading-[4.2rem]">
  Where <span className="text-[#EC4899]">Learning</span> Meets <br />
  Real-World Innovation.
</h1>


          {/* Paragraph */}
          <p className="text-[#0F172A] max-w-[650px] text-base leading-relaxed">
            Join a new age learning platform built by Axinor Technologies — <br />
            where practical skills, mentorship, and innovation come together 
            to help you <br /> build a successful tech career.
          </p>

          {/* Buttons + Icon */}
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <a 
              href="#explore"
              className="bg-[#EC4899] text-white font-medium rounded-full px-6 py-2.5 hover:opacity-90 transition text-sm md:text-base"
            >
              Explore Courses
            </a>

            <a 
              href="#enquire"
              className="border-2 border-[#EC4899] text-[#EC4899] font-medium rounded-full px-6 py-2.5 hover:bg-[#EC4899] hover:text-white transition text-sm md:text-base"
            >
              Enquire Now
            </a>

            <img src={icon} alt="icon" className="w-7 h-7 md:w-8 md:h-8" />
          </div>
        </div>

        {/* Right Image Section */}
        <div className="lg:w-5/12 bg-transparent rounded-2xl flex justify-center lg:justify-end mt-8 lg:mt-0 relative left-[-40px]">
          <img
            src={womanLap}
            alt="Woman with Laptop"
            className="w-[420px] md:w-[500px] lg:w-[580px] h-auto object-contain"
          />
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919496787651"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-5 w-14 h-14 md:w-16 md:h-16 bg-white rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition z-50"
      >
        <img src={whatsappIcon} alt="WhatsApp" className="w-7 h-7 md:w-8 md:h-8" />
      </a>
    </section>
  );
};

export default HeroSection;
