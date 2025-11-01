import React, { useRef, useEffect } from "react";
import Man from "../assets/images/man.png";
import Woman from "../assets/images/woman.png";
import BackIcon from "../assets/images/back_icon.svg";
import FrontIcon from "../assets/images/front_icon.svg";

const Mentors = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Auto-scroll one card at a time, pausing 10s between
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const isEnd = scrollLeft + clientWidth >= scrollWidth - 5;
        const nextScroll = isEnd ? 0 : scrollLeft + clientWidth;
        scrollRef.current.scrollTo({ left: nextScroll, behavior: "smooth" });
      }
    }, 5000); // 5s pause per card

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="mentors"
      className="py-16 bg-[#F3F6F9] font-[Poppins] relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-10 lg:px-16">
        {/* Main Flex — vertically centered alignment */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Text Section */}
          <div className="lg:w-1/3 w-full flex flex-col items-start text-left justify-center h-full">
            <div className="mb-6 flex flex-col items-start gap-4">
              <p className="inline-block bg-[#EC489926] text-[#EC4899] px-4 py-2 rounded-md font-medium text-base shadow-sm">
                Mentors
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold leading-snug text-[#0F172A]">
                Meet Our <span className="text-[#EC4899]">Mentors</span>
              </h2>
            </div>

            <p className="text-gray-600 mt-5 leading-relaxed text-[15px]">
              Learn from professionals who bring real-world experience, industry
              insights, and passion for teaching to every session.
            </p>

            {/* Button */}
            <div className="mt-10 mb-8">
              <a
                href="#enquiry"
                className="bg-[#EC4899] text-white font-medium rounded-full px-5 sm:px-6 py-2 hover:opacity-95 transition text-sm sm:text-base"
              >
                View All Mentors
              </a>
            </div>

            {/* Arrows */}
            <div className="flex gap-3 mt-10">
              <button
                onClick={() => scroll("left")}
                className="hover:scale-110 transition-transform"
              >
                <img src={BackIcon} alt="Back" className="w-8 h-8" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="hover:scale-110 transition-transform"
              >
                <img src={FrontIcon} alt="Forward" className="w-8 h-8" />
              </button>
            </div>
          </div>

          {/* Right — Scrollable Mentor Cards */}
          <div className="overflow-hidden w-full lg:w-2/3">
            <div
              ref={scrollRef}
              className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory touch-pan-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
            >
              {/* Mentor 1 */}
              <div className="flex-shrink-0 snap-start text-center transform transition-transform duration-300 hover:scale-105 w-[340px] sm:w-[360px]">
                <img
                  src={Man}
                  alt="Rahul Menon"
                  className="rounded-3xl w-full h-[420px] object-cover mx-auto"
                />
                <h3 className="text-[#0F172A] font-semibold text-xl mt-4">
                  Rahul Menon
                </h3>
                <p className="text-gray-500 text-sm">
                  Senior Full Stack Developer
                </p>
              </div>

              {/* Mentor 2 */}
              <div className="flex-shrink-0 snap-start text-center transform transition-transform duration-300 hover:scale-105 w-[340px] sm:w-[360px]">
                <img
                  src={Woman}
                  alt="Anjali Sreedhar"
                  className="rounded-3xl w-full h-[420px] object-cover mx-auto mt-3"
                />
                <h3 className="text-[#0F172A] font-semibold text-xl mt-4">
                  Anjali Sreedhar
                </h3>
                <p className="text-gray-500 text-sm">Flutter Developer</p>
              </div>

              {/* Mentor 3 */}
              <div className="flex-shrink-0 snap-start text-center transform transition-transform duration-300 hover:scale-105 w-[340px] sm:w-[360px]">
                <img
                  src={Man}
                  alt="Rahul Menon"
                  className="rounded-3xl w-full h-[420px] object-cover mx-auto"
                />
                <h3 className="text-[#0F172A] font-semibold text-xl mt-4">
                  Rahul Menon
                </h3>
                <p className="text-gray-500 text-sm">
                  Senior Full Stack Developer
                </p>
              </div>

              {/* Mentor 4 */}
              <div className="flex-shrink-0 snap-start text-center transform transition-transform duration-300 hover:scale-105 w-[340px] sm:w-[360px]">
                <img
                  src={Woman}
                  alt="Anjali Sreedhar"
                  className="rounded-3xl w-full h-[420px] object-cover mx-auto mt-3"
                />
                <h3 className="text-[#0F172A] font-semibold text-xl mt-4">
                  Anjali Sreedhar
                </h3>
                <p className="text-gray-500 text-sm">Flutter Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentors;
