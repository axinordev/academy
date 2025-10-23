import React from 'react';
import Video from '../assets/images/video.svg'; // replace with actual path
import Arrow from '../assets/images/arrow.svg'; // import arrow icon
import bg1 from '../assets/images/about_bg_new.svg'

const About = () => {
  return (
  <section
  id="about"
  className="py-12 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${bg1})` }}
>


      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-8">

          {/* Left Content */}
          <div className="lg:w-7/12 flex flex-col gap-6">
            <div className="mb-6">
          <p className="inline-block bg-pink-500 bg-opacity-20 text-pink-500 px-4 py-2 rounded-md font-medium text-sm shadow-sm">
            About Us
          </p>
        </div>
            <h3 className="text-3xl md:text-4xl font-bold font-Poppins">
              Shaping the <span className='text-pink-500'>Next Generation</span> of Tech Innovators
            </h3>
            <p className="text-gray-500 mt-4">
              Backed by Axinor Technologies, a growing IT company, we bring real-world expertise into the classroom. Our mission is to help aspiring 
              developers gain the skills and confidence to thrive in today’s competitive tech world.
              We focus on practical learning, expert mentorship, and continuous innovation preparing every student for success in the modern workplace.
            </p>

            {/* Arrow Bullets with Descriptions */}
            <div className="flex flex-col gap-3 mt-4">
              <div className="flex items-start gap-2">
                <img src={Arrow} alt="arrow" className="w-4 h-4 mt-1" />
                <div className="flex flex-col">
                  <p className="text-blue px-0 py-0 text-sm font-medium">Practical learning</p>
                  <span className="text-gray-500 text-sm">Gain real project experience beyond theory.</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <img src={Arrow} alt="arrow" className="w-4 h-4 mt-1" />
                <div className="flex flex-col">
                  <p className="text-black px-0 py-0 text-sm font-medium">Industry-Backed Expertise</p>
                  <span className="text-gray-500 text-sm">Learn directly from active IT professionals.</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <img src={Arrow} alt="arrow" className="w-4 h-4 mt-1" />
                <div className="flex flex-col">
                  <p className="text-black px-0 py-0 text-sm font-medium">Career-Focused Training</p>
                  <span className="text-gray-500 text-sm">Develop the mindset and skills to excel in today’s tech world.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-5/12 flex justify-center lg:justify-end">
            <img 
              src={Video} 
              alt="Video" 
              className="rounded-3xl shadow-lg max-w-full h-auto"
            />
          </div>
        </div>

        {/* Button placed outside left content */}
        <div className="mt-6 flex justify-start lg:justify-start">
          <button className="bg-pink-500 text-white px-3 py-2 rounded-full font-medium hover:opacity-90 transition w-auto">
            Know More About Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
