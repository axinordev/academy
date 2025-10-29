import React, { useRef } from "react";
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

  return (
    <section
      id="mentors"
      className="py-16 bg-[#F3F6F9] font-[Poppins] relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row justify-start items-start gap-10">
          
          {/* Left Text Section */}
          <div className="lg:w-1/3 w-full flex flex-col items-start text-left">
            <div className="mb-4 flex flex-col items-start gap-3">
              <p className="inline-block bg-[#EC489926] text-[#EC4899] px-4 py-2 rounded-md font-medium text-base shadow-sm">
                Mentors
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold leading-snug text-[#0F172A]">
                Meet Our <span className="text-[#EC4899]">Mentors</span>
              </h2>
            </div>

            <p className="text-gray-600 mt-2 leading-relaxed text-[15px]">
              Learn from professionals who bring real-world experience, industry
              insights, and passion for teaching to every session.
            </p>

            <div className="mt-6">
              <button className="bg-[#EC4899] text-white px-6 py-2 rounded-xl font-medium text-sm hover:bg-[#db377f] transition-all duration-300 shadow-md">
                View All Mentors
              </button>
            </div>

            {/* Arrows */}
            <div className="flex gap-6 mt-8">
              <button
                onClick={() => scroll("left")}
                className="hover:scale-110 transition-transform"
              >
                <img src={BackIcon} alt="Back" className="w-12 h-12" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="hover:scale-110 transition-transform"
              >
                <img src={FrontIcon} alt="Forward" className="w-12 h-12" />
              </button>
            </div>
          </div>

          {/* Right Side — Scrollable Mentor Cards */}
          <div className="overflow-hidden w-full lg:w-2/3">
            <div
              ref={scrollRef}
              className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory touch-pan-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
            >{/* Mentor 1 */}
<div className="flex-shrink-0 snap-start text-center transform transition-transform duration-300 hover:scale-105">
  <img
    src={Man}
    alt="Rahul Menon"
    className="rounded-3xl w-[320px] sm:w-[360px] lg:[320px] h-auto object-cover mx-auto -mt-[2px]" // lifted up 2px
  />
  <h3 className="text-[#0F172A] font-semibold text-xl mt-4">
    Rahul Menon
  </h3>
  <p className="text-gray-500 text-sm">Senior Full Stack Developer</p>
</div>

{/* Mentor 2 */} <div className="flex-shrink-0 snap-start text-center transform transition-transform duration-300 hover:scale-105"> <img src={Woman} alt="Anjali Sreedhar" className="rounded-3xl w-[320px] sm:w-[360px] lg:[320px] h-auto object-cover mx-auto" /> <h3 className="text-[#0F172A] font-semibold text-xl mt-4"> Anjali Sreedhar </h3> <p className="text-gray-500 text-sm">Flutter Developer</p> </div>

{/* Mentor 3 */}
<div className="flex-shrink-0 snap-start text-center transform transition-transform duration-300 hover:scale-105">
  <img
    src={Man}
    alt="Rahul Menon"
    className="rounded-3xl w-[320px] sm:w-[360px] lg:[320px] object-cover mx-auto -mt-[2px]" // lifted up 2px
  />
  <h3 className="text-[#0F172A] font-semibold text-xl mt-4">
    Rahul Menon
  </h3>
  <p className="text-gray-500 text-sm">Senior Full Stack Developer</p>
</div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentors;
