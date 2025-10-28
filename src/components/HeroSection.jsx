import React from 'react';
import womanLap from '../assets/images/woman-laptop.svg';
import icon from '../assets/images/group.svg';
import whatsappIcon from '../assets/images/whatsapp_icon.svg';
import bg2 from '../assets/images/bg2.png';
import wm from '../assets/images/woman-lap.jpeg';


const HeroSection = () => {
  return (
    <section
      id="hero"
      className="bg-cover bg-center bg-no-repeat min-h-screen flex items-start md:items-center md:justify-center font-['Poppins']"
      
    >
      <img
        src={bg2}
        alt="Background"
        className="absolute top-0 left-0 w-full object-cover z-0 object-top hidden md:block"
        
      />
      
      <div className='flex flex-col'>
      {/* Wrapper */}
      <div className="w-full flex flex-col-reverse lg:flex-row z-10 items-center justify-between px-5 sm:px-10 lg:px-[40px] pt-[100px] sm:pt-[40px] lg:pt-[200px]">

        {/* Left Text Section */}
        <div className="lg:w-7/12 w-full bg-transparent rounded-2xl p-5 sm:p-6 lg:p-8 flex flex-col gap-5 text-center lg:text-left">
          
          {/* Top Guarantee Label */}
          <div className="mb-2 sm:mb-3">
            <p className="inline-flex items-center justify-center text-[13px] sm:text-[14px] font-medium text-[#EC4899] bg-[#EC489926] rounded-md px-3 py-[3px]">
              100% Satisfaction Guarantee
            </p>
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-[53px] lg:text-5xl font-semibold text-[#0F172A] leading-snug sm:leading-[3rem] md:leading-[80px]">
           <span className='md:leading-[80px]'> Where <span className="text-[#EC4899]">Learning</span> Meets </span>
            <span className='md:leading-[80px]'>Real-World Innovation<span className='text-[#3661DA]'>.</span></span>
          </h1>

          {/* Paragraph */}
          <p className="text-[#0F172A] text-[14px] sm:text-base leading-relaxed max-w-[650px] mx-auto lg:mx-0">
            Join a new age learning platform built by Axinor Technologies — <br/>
            where practical skills, mentorship, and innovation come together 
            to help you<br/> build a successful tech career.
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

            <img src={icon} alt="icon" className="h-6  sm:h-7  md:h-8" />
          </div>
        </div>

        {/* Right Image Section */}
        {/* <div className="w-4/5 flex justify-center lg:justify-end mb-6 lg:mb-0">
          <img
            src={womanLap}
            alt="Woman with Laptop"
            className="w-full h-full object-contain"
          />
        </div> */}
      </div>

      <img
        src={wm}
        alt="Background"
        className="relative left-0  object-cover w-[200%] z-0 object-bottom  md:hidden "
        
      />
</div>
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919496787651"
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
