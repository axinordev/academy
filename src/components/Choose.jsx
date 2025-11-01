import React from 'react';
import Image1 from '../assets/images/image1.svg';
import Image2 from '../assets/images/image2.svg';
import Card1 from '../assets/images/card1.png';
import Card2 from '../assets/images/card2.png';
import Card3 from '../assets/images/card3.png';
import Card4 from '../assets/images/card4.png';

const Choose = () => {
  return (
    <section className="py-24 bg-[#F3F6F9] font-[Poppins] text-[#0F172A]/80 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">

          {/* Left Image with overlay */}
          <div className="lg:w-1/2 relative mb-8 lg:mb-0 order-2 lg:order-1 flex justify-center lg:justify-start px-4 py">
            <div className="relative mt-6 sm:mt-12">
              {/* Overlay Image */}
              <img
                src={Image2}
                alt="decorative overlay"
                className="absolute top-0 left-0 lg:-left-8 w-[140px] sm:w-[180px] h-auto z-20"

              />
              {/* Main Image */}
              <img
                src={Image1}
                alt="main"
                className="relative w-[320px] sm:w-[460px] md:w-[580px] h-auto top-10 left-3 sm:left-8 z-10 rounded-tr-[40px] rounded-br-[40px] rounded-bl-[40px] shadow-lg object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2 flex flex-col gap-6 order-1 lg:order-2 mt-10 lg:mt-14 lg:translate-x-4 text-center lg:text-left">

            {/* Heading Section */}
            <div>
              <div className="mb-4">
                <p className="inline-block bg-[#EC489926] text-[#EC4899] px-3 py-1.5 rounded-md font-medium text-sm shadow-sm">
                  Why Axinor
                </p>
              </div>

              <h2
                className="font-semibold text-[26px] sm:text-[32px] leading-[38px] sm:leading-[44px] mb-4 text-[#0F172A]"
                style={{ fontFamily: 'Poppins', fontWeight: 600 }}
              >
                Why Choose <span className="text-[#EC4899]">Axinor </span>Academy?
              </h2>

              <p className="text-[#0F172A]/80 max-w-2xl mx-auto lg:mx-0 mb-8 text-[15px] leading-[25px]">
                Learn from industry professionals, work on real projects, and gain the
                skills you need to launch a successful tech career.
              </p>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-6 place-items-center lg:place-items-start">
              
              {/* Card 1 */}
              <div className="bg-[#F3F6F9] border border-[#CBD5E1] rounded-2xl p-3 text-center transition h-[120px] flex flex-col justify-center w-[240px]">
                <img src={Card1} alt="card1" className="mx-auto mb-2 w-14 h-14" />
                <p className="text-[#0F172A]/80 text-sm font-medium">Job Ready Curriculum</p>
              </div>

              {/* Card 2 */}
              <div className="bg-[#F3F6F9] border border-[#CBD5E1] rounded-2xl p-3 text-center transition h-[120px] flex flex-col justify-center w-[240px] sm:-ml-8 lg:-ml-8">
                <img src={Card2} alt="card2" className="mx-auto mb-2 w-14 h-14" />
                <p className="text-[#0F172A]/80 text-sm font-medium">Hands-On Learning</p>
              </div>

              {/* Card 3 */}
              <div className="bg-[#F3F6F9] border border-[#CBD5E1] rounded-2xl p-3 text-center transition h-[120px] flex flex-col justify-center w-[240px]">
                <img src={Card3} alt="mentor" className="mx-auto mb-2 w-14 h-14" />
                <p className="text-[#0F172A]/80 text-sm font-medium">Expert Mentors</p>
              </div>

              {/* Card 4 */}
              <div className="bg-[#F3F6F9] border border-[#CBD5E1] rounded-2xl p-3 text-center transition h-[120px] flex flex-col justify-center w-[240px] sm:-ml-8 lg:-ml-8">
                <img src={Card4} alt="card4" className="mx-auto mb-2 w-14 h-14" />
                <p className="text-[#0F172A]/80 text-sm font-medium">Career Support</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
