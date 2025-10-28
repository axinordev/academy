import React from 'react';
import Image1 from '../assets/images/image1.svg';
import Image2 from '../assets/images/image2.svg'; // decorative overlay
import Card1 from '../assets/images/card1.png';
import Card2 from '../assets/images/card2.png';
import Card3 from '../assets/images/card3.png';
import Card4 from '../assets/images/card4.png';

const Choose = () => {
  return (
    <section className="py-12 bg-[#F3F6F9] font-[Poppins]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">

          {/* Left Image with overlay */}
          <div className="lg:w-1/2 relative mb-8 lg:mb-0 p-4 lg:pt-16 order-2 lg:order-1">
            <div className="relative translate-x-6 translate-y-6">
              {/* Main Image */}
              <img 
                src={Image1} 
                alt="image1" 
                className="rounded-3xl shadow-lg max-w-[85%] h-auto relative z-10"
              />
              {/* Overlay image */}
              <img 
                src={Image2} 
                alt="decorative" 
                className="absolute top-0 left-0 w-48 h-48 -translate-x-8 translate-y-4 z-20"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2 flex flex-col gap-6 order-1 lg:order-2">

            {/* Heading Section */}
            <div className="text-center lg:text-left">
              <div className="mb-6">
                <p className="inline-block bg-pink-500 bg-opacity-20 text-pink-500 px-4 py-2 rounded-md font-medium text-sm shadow-sm">
                  Why Axinor
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 whitespace-nowrap">
                Why Choose <span className="text-pink-500">Axinor </span>Academy?
              </h2>
              <p className="text-gray-500 max-w-2xl mb-10">
                Explore our most in-demand programs designed to help you gain hands-on skills,
                real-world experience, and confidence to build your tech career.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#F3F6F9] rounded-3xl shadow-md p-5 text-center hover:shadow-lg transition">
                <img src={Card1} alt="card1" className="mx-auto mb-3 w-16 h-16" />
                <p className="text-gray-700 text-sm font-medium">Job ready curriculum</p>
              </div>

              <div className="bg-[#F3F6F9] rounded-3xl shadow-md p-5 text-center hover:shadow-lg transition">
                <img src={Card2} alt="card2" className="mx-auto mb-3 w-16 h-16" />
                <p className="text-gray-700 text-sm font-medium">Hands-On learning</p>
              </div>

              <div className="bg-[#F3F6F9] rounded-3xl shadow-md p-5 text-center hover:shadow-lg transition">
                <img src={Card3} alt="mentor" className="mx-auto mb-3 w-16 h-16" />
                <p className="text-gray-700 text-sm font-medium">Expert Mentors</p>
              </div>

              <div className="bg-[#F3F6F9] rounded-3xl shadow-md p-5 text-center hover:shadow-lg transition">
                <img src={Card4} alt="card4" className="mx-auto mb-3 w-16 h-16" />
                <p className="text-gray-700 text-sm font-medium">Career Support</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
