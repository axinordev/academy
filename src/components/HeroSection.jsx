import React from 'react';
import womanLap from '../assets/images/woman-laptop.svg';
import icon from '../assets/images/icon.png';
import whatsappIcon from '../assets/images/whatsapp_icon.svg';

const HeroSection = () => {
  return (
    <section className="bg-[#F0FFFF] min-h-screen pt-[90px]">
      <div className="container mx-auto px-4">
        
        {/* Top Guarantee Label */}
        <div className="mb-6">
          <p className="inline-block bg-pink-500 bg-opacity-20 text-pink-500 px-4 py-2 rounded-md font-medium text-sm shadow-sm">
            100% Satisfaction Guarantee
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8">

          {/* Left Content */}
          <div className="lg:w-7/12 flex flex-col gap-6">
            {/* Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-Poppins leading-snug">
              Where <span className="text-pink-500">Learning</span> Meets <br/>
              Real-World Innovation.
            </h1>

            {/* Paragraph */}
            <p className="text-gray-500 mt-4 text-left max-w-[700px] leading-relaxed">
              Join a new age learning platform built by Axinor Technologies — 
              where practical skills, mentorship, and innovation come together 
              to help you build a successful tech career.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <a href="#explore" 
                 className="bg-pink-500 text-white font-semibold rounded-full px-6 py-2.5 hover:opacity-90 transition text-sm md:text-base">
                Explore Courses
              </a>

              <a href="#enquire" 
                 className="bg-transparent text-pink-500 border-2 border-pink-500 font-semibold rounded-full px-6 py-2.5 hover:bg-pink-500 hover:text-white transition text-sm md:text-base">
                Enquire Now
              </a>

              <img src={icon} alt="icon" className="w-8 h-8"/>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-5/12 flex justify-center lg:justify-end mt-8 lg:mt-0 relative">
            <img 
              src={womanLap} 
              alt="Woman with Laptop" 
              className="max-w-full h-auto object-contain w-[600px] md:w-[400px] lg:w-[500px]"
            />
          </div>

        </div>
      </div>
     {/* Floating WhatsApp Button in white semi-square */}
<a
  href="https://wa.me/919496787651"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-8 right-6 w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition z-50"
>
  <img src={whatsappIcon} alt="WhatsApp" className="w-8 h-8"/>
</a>

    </section>
  );
};

export default HeroSection;
