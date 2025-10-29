import React from 'react';
import Image1 from '../assets/images/image1.svg';
import Image2 from '../assets/images/image2.svg'; // decorative overlay
import Card1 from '../assets/images/card1.png';
import Card2 from '../assets/images/card2.png';
import Card3 from '../assets/images/card3.png';
import Card4 from '../assets/images/card4.png';

const Choose = () => {
  return (
    <section className="py-24 bg-[#F3F6F9] font-[Poppins] text-[#0F172A]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">

          {/* Left Image with overlay */}
          <div className="lg:w-1/2 relative mb-8 lg:mb-0 order-2 lg:order-1">
            <div className="relative translate-x-6 mt-12">
              
              {/* Overlay Image (on top) */}
              <img
                src={Image2}
                alt="decorative overlay"
                className="absolute top-0 left-0 w-[200px] h-[200px] z-20"
              />

              {/* Main Image (below) */}
              <img
                src={Image1}
                alt="main"
                className="relative w-[560px] h-[470px] top-10 left-8 z-10 rounded-tr-[40px] rounded-br-[40px] rounded-bl-[40px] shadow-lg object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2 flex flex-col gap-6 order-1 lg:order-2 mt-10 lg:mt-14 translate-x-6">

            {/* Heading Section */}
            <div className="text-center lg:text-left">
              <div className="mb-6">
                <p className="inline-block bg-[#EC489926] text-[#EC4899] px-4 py-2 rounded-md font-medium text-sm shadow-sm">
                  Why Axinor
                </p>
              </div>

              {/* Figma-accurate heading with reduced font size */}
              <h2
                className="font-medium text-[32px] leading-[44px] mb-4 whitespace-nowrap"
                style={{ fontFamily: 'Poppins', fontStyle: 'Medium', fontWeight: 500 }}
              >
                Why Choose <span className="text-[#EC4899]">Axinor </span>Academy?
              </h2>

              <p className="text-[#0F172A]/70 max-w-2xl mb-10 text-[15px] leading-[25px]">
                Learn from industry professionals, work on real projects, and gain the <br/>
                skills you need to launch a successful tech career.
              </p>
            </div>

                       
                {/* Cards Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-1 gap-y-6 mt-[-10px] place-items-start">
  <div className="bg-[#F3F6F9] border border-[#CBD5E1] rounded-2xl p-4 text-center transition h-[120px] flex flex-col justify-center w-[230px]">
    <img src={Card1} alt="card1" className="mx-auto mb-2 w-14 h-14" />
    <p className="text-[#0F172A] text-sm font-medium">Job ready curriculum</p>
  </div>

  <div className="bg-[#F3F6F9] border border-[#CBD5E1] rounded-2xl p-4 text-center transition h-[120px] flex flex-col justify-center w-[230px]">
    <img src={Card2} alt="card2" className="mx-auto mb-2 w-14 h-14" />
    <p className="text-[#0F172A] text-sm font-medium">Hands-On learning</p>
  </div>

  <div className="bg-[#F3F6F9] border border-[#CBD5E1] rounded-2xl p-4 text-center transition h-[120px] flex flex-col justify-center w-[230px]">
    <img src={Card3} alt="mentor" className="mx-auto mb-2 w-14 h-14" />
    <p className="text-[#0F172A] text-sm font-medium">Expert Mentors</p>
  </div>

  <div className="bg-[#F3F6F9] border border-[#CBD5E1] rounded-2xl p-4 text-center transition h-[120px] flex flex-col justify-center w-[230px]">
    <img src={Card4} alt="card4" className="mx-auto mb-2 w-14 h-14" />
    <p className="text-[#0F172A] text-sm font-medium">Career Support</p>
  </div>
</div>

     </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
