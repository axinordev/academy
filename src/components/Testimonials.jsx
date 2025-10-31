import React, { useRef } from 'react';
import Testimonial1 from '../assets/images/testimonial1.png';
import Testimonial2 from '../assets/images/testimonial2.png';
import Testimonial3 from '../assets/images/testimonial3.png';
import VideoIcon from '../assets/images/playButton.png';
import BackIcon from '../assets/images/arrow_prev.png';
import FrontIcon from '../assets/images/arrow_next.png';

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
    <section
      id="testimonials"
      className="py-20 bg-[#F3F6F9] relative font-[Poppins]"
    >
      <div className="container mx-auto px-4 flex flex-col gap-12 relative">
        {/* Heading */}
        <div className="relative">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between relative">
            <div>
              <div className="mb-8">
                <p className="inline-block bg-[#EC489926] text-[#EC4899] px-4 py-2 rounded-md font-medium text-sm shadow-sm">
                  Testimonials
                </p>
              </div>
              <h3 className="text-3xl md:text-4xl font-semibold text-[#0F172A] leading-tight mb-6">
                What Our <span className="text-[#EC4899]">Learners</span> Say
              </h3>
              <p className="text-[#46484B] mt-6 max-w-2xl mx-auto lg:mx-0 text-[15px] leading-[26px]">
                Real experiences from our first batches and interns who started
                their <br /> journey with Axinor Academy.
              </p>
            </div>

            {/* Arrows on the right — no white bg */}
            <div className="flex gap-3 mt-8 lg:mt-0 absolute right-[10px] sm:right-[20px] top-36 sm:top-28">
              <button onClick={() => scroll('left')}>
                <img
                  src={BackIcon}
                  alt="Back"
                  className="w-8 h-8 hover:scale-110 transition-transform"
                />
              </button>
              <button onClick={() => scroll('right')}>
                <img
                  src={FrontIcon}
                  alt="Forward"
                  className="w-8 h-8 hover:scale-110 transition-transform"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="overflow-hidden mt-6">
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory touch-pan-x justify-start lg:justify-start pl-[20px]"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {[
              {
                img: Testimonial1,
                name: 'Anjali Raj',
                role: 'MERN Stack Trainee',
                text: 'Axinor Academy helped me move from basic coding knowledge to real project work. The mentors guided me through every step with patience and practical insights.',
              },
              {
                img: Testimonial2,
                name: 'Neha K',
                role: 'Cyber Security Learner',
                text: 'The sessions were well structured, and mentors shared their real experiences from Axinor Technologies. It made learning more engaging and relevant.',
              },
              {
                img: Testimonial3,
                name: 'Arjun P',
                role: 'Flutter Development Intern',
                text: 'What I liked most was the hands-on approach. We built live apps, discussed real client problems, and learned how things work in the IT field.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl shadow-md w-[386px] lg:w-[386px] flex-shrink-0 flex flex-col items-center min-h-[440px] pb-6 snap-start border border-gray-200 ml-[-20px]"
              >
                {/* Profile Image */}
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-24 h-24 object-contain rounded-full mt-6 shadow-md"
                />

                {/* Name + Role */}
                <div className="flex flex-col items-center py-4">
                  <p className="text-[#0F172A] font-semibold text-base mt-1">
                    {item.name}
                  </p>
                  <p className="text-[#46484B] font-medium text-sm">
                    {item.role}
                  </p>
                </div>

                {/* Divider Line */}
                 <div className="w-80 h-[1.5px] bg-[#0F172A]/10 mt-2 mb-2"></div>
                

                {/* Content */}
                <div className="px-6 flex flex-col items-center">
                  <p className="text-[#46484B] text-sm text-center leading-relaxed">
                    {item.text}
                  </p>
                </div>

                {/* Play Video Button */}
                <div className="flex items-center gap-2 bg-gray-100 text-[#46484B] px-1.5 py-1 rounded-full mt-4">
                  <img src={VideoIcon} alt="video icon" className="w-10 h-10" />
                  <span className="text-sm font-medium">Play Video</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
