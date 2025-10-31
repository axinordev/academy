import React from 'react';
import Video from '../assets/images/video.svg'; // replace with actual path
import Arrow from '../assets/images/arrow.svg'; // import arrow icon
import playIcon from '../assets/images/playIcon.png'; // import play icon
import bg1 from '../assets/images/bgVid.png';

const About = () => {
  return (
    <section
      id="about"
      className="py-14 font-[Poppins] bg-[#F3F6F9] sm:bg-cover sm:bg-center sm:bg-no-repeat"
      style={{ backgroundImage: `url(${bg1})` }}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start gap-10">

          {/* Left Content */}
          <div className="lg:w-7/12 flex flex-col gap-5">
            <div className="mb-8">
              <p className="inline-block bg-[#EC4899] bg-opacity-15 text-[#EC4899] px-4 py-2 rounded-md font-medium text-[13px] shadow-sm">
                About Us
              </p>
            </div>
            <h3 className="text-[34px] leading-[46px] font-semibold text-[#0F172A]">
              Shaping the <span className="text-[#EC4899]">Next Generation</span><br /> of Tech Innovators
            </h3>

            <p className="text-[#0F172A]/80 mt-3 text-[14px] leading-[22px]">
              Backed by Axinor Technologies, a growing IT company, we bring real-world <br />
              expertise into the classroom. Our mission is to help aspiring developers <br />
              gain the skills and confidence to thrive in today’s competitive tech world. <br />
              We focus on practical learning, expert mentorship, and continuous <br />
              innovation — preparing every student for success in the modern workplace.
            </p>

            {/* Arrow Points */}
            <div className="flex flex-col gap-5 mt-4">
              <div className="flex items-center gap-4">
                <img src={Arrow} alt="arrow" className="w-5 h-5" />
                <p className="text-[#3661DA] text-[15px] font-semibold">
                  Practical Learning
                  <span className="text-[#0F172A]/70 font-normal ml-2 text-[13px]">
                    Gain real project experience beyond theory.
                  </span>
                </p>
              </div>

              <div className="flex items-center gap-4">
                <img src={Arrow} alt="arrow" className="w-5 h-5" />
                <p className="text-[#3661DA] text-[15px] font-semibold">
                  Industry-Backed Expertise
                  <span className="text-[#0F172A]/70 font-normal ml-2 text-[13px]">
                    Learn directly from active IT professionals.
                  </span>
                </p>
              </div>

              <div className="flex items-start gap-4">
  <img src={Arrow} alt="arrow" className="w-5 h-5 mt-1" />
  <div className="text-[#3661DA] text-[15px] font-semibold leading-snug">
    Career-Focused Training
    <span className="text-[#0F172A]/70 font-normal text-[13px] ml-2 inline">
      Develop the mindset and skills to excel in
    </span>
    <br />
    <span className="text-[#0F172A]/70 font-normal text-[13px] ml-[200px] inline-block">
      today’s tech world.
    </span>
  </div>
</div>

            </div>
          </div>

          {/* Right Side — Video Section */}
          <div className="lg:w-5/12 flex justify-center lg:justify-end relative mt-6 sm:mt-0">
  <img
    src={Video}
    alt="Video"
    className="rounded-3xl shadow-lg max-w-full h-auto scale-125 transform -translate-x-6 translate-y-6"
  />

  {/* Play Video Overlay Button */}
  <button
  className="absolute bottom-[-45px] left-[-65px] flex items-center justify-between gap-2 bg-[#F8FAFC] text-[#0F172A] px-2 py-1
  rounded-full text-[15px] font-normal shadow-lg hover:opacity-95 transition"
>
  Play Video
  <img src={playIcon} alt="Play" className="w-10 h-10" />
</button>

</div>


        </div>

        {/* Know More Button — matched with Explore Courses */}
        <div className="mt-16 sm:mt-16 flex justify-start">
          <a
            href="#explore"
            className="bg-[#EC4899] text-white font-medium rounded-full px-5 sm:px-6 py-2 hover:opacity-90 transition text-sm sm:text-base"
          >
            Know More About Us
          </a>
        </div>

      </div>
    </section>
  );
};

export default About;
