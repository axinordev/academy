import React, { useRef } from 'react';
import Testimonial1 from '../assets/images/testimonial1.png';
import Testimonial2 from '../assets/images/testimonial2.png';
import Testimonial3 from '../assets/images/testimonial3.png';
import VideoIcon from '../assets/images/video_icon.png';
import BackIcon from '../assets/images/back_icon.svg';
import FrontIcon from '../assets/images/front_icon.svg';

const Testimonials = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="py-12 bg-[#F0FFFF] relative">
      <div className="container mx-auto px-4 flex flex-col gap-8 relative">

        {/* Heading & Description */}
        <div className="text-center lg:text-left relative">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="mb-6">
          <p className="inline-block bg-pink-500 bg-opacity-20 text-pink-500 px-4 py-2 rounded-md font-medium text-sm shadow-sm">
            Testimonials
          </p>
        </div>
              <h3 className="text-3xl md:text-4xl font-bold font-Poppins">
                What Our <span className='text-pink-500'>Learners</span> Say
              </h3>
              <p className="text-gray-500 mt-4 max-w-2xl mx-auto lg:mx-0">
                Real experiences from our first batches and interns who started their journey with Axinor Academy.
              </p>
            </div>

            {/* Scroll Buttons */}
            <div className="flex gap-3 mt-4 justify-end w-full">
              <button
                onClick={() => scroll('left')}
                className="bg-white hover:bg-gray-100 transition rounded-full p-2 shadow-md"
              >
                <img src={BackIcon} alt="Back" className="w-8 h-8" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="bg-white hover:bg-gray-100 transition rounded-full p-2 shadow-md"
              >
                <img src={FrontIcon} alt="Forward" className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonial Cards - Scrollable */}
        <div className="overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory touch-pan-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Card 1 */}
            <div className="bg-white rounded-3xl shadow-md w-[320px] md:w-[420px] flex-shrink-0 flex flex-col items-center min-h-[420px] pb-6 snap-start">
              <img
                src={Testimonial1}
                alt="Jane Doe"
                className="w-20 h-20 object-contain rounded-full mt-4 shadow-md"
              />
              <div className="flex flex-col items-center py-4">
                <p className="text-black font-semibold text-sm mt-1">Anjali Raj</p>
                <p className="text-gray-700 font-medium text-sm">MERN Stack Trainee</p>
              </div>
              <div className="p-6 flex flex-col items-center">
                <p className="text-gray-700 text-sm text-center leading-relaxed">
                  Axinor Academy helped me move from basic coding knowledge to real project work.
                  The mentors guided me through every step with patience and practical insights.
                </p>
              </div>
              <div className="flex items-center gap-2 bg-gray-100 text-gray-500 px-4 py-2 rounded-full mt-2">
                <img src={VideoIcon} alt="video icon" className="w-4 h-4" />
                <span className="text-sm font-medium">Play Video</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl shadow-md w-[320px] md:w-[420px] flex-shrink-0 flex flex-col items-center min-h-[420px] pb-6 snap-start">
              <img
                src={Testimonial2}
                alt="John Smith"
                className="w-20 h-20 object-contain rounded-full mt-4 shadow-md"
              />
              <div className="flex flex-col items-center py-4">
                <p className="text-black font-semibold text-sm mt-1">Neha K</p>
                <p className="text-gray-700 font-medium text-sm">Cyber Security Learner</p>
              </div>
              <div className="p-6 flex flex-col items-center">
                <p className="text-gray-700 text-sm text-center leading-relaxed">
                  The sessions were well structured, and mentors shared their real experiences from
                  Axinor Technologies. It made learning more engaging and relevant.
                </p>
              </div>
              <div className="flex items-center gap-2 bg-gray-100 text-gray-500 px-4 py-2 rounded-full mt-2">
                <img src={VideoIcon} alt="video icon" className="w-4 h-4" />
                <span className="text-sm font-medium">Play Video</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-3xl shadow-md w-[320px] md:w-[420px] flex-shrink-0 flex flex-col items-center min-h-[420px] pb-6 snap-start">
              <img
                src={Testimonial3}
                alt="Emily Johnson"
                className="w-20 h-20 object-contain rounded-full mt-4 shadow-md"
              />
              <div className="flex flex-col items-center py-4">
                <p className="text-black font-semibold text-sm mt-1">Arjun P</p>
                <p className="text-gray-700 font-medium text-sm">Flutter Development Intern</p>
              </div>
              <div className="p-6 flex flex-col items-center">
                <p className="text-gray-700 text-sm text-center leading-relaxed">
                  What I liked most was the hands-on approach. We built live apps, discussed real client problems,
                  and learned how things work in the IT field.
                </p>
              </div>
              <div className="flex items-center gap-2 bg-gray-100 text-gray-500 px-4 py-2 rounded-full mt-2">
                <img src={VideoIcon} alt="video icon" className="w-4 h-4" />
                <span className="text-sm font-medium">Play Video</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
