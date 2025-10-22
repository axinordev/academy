import React, { useRef } from "react";
import Mentor2 from "../assets/images/mentor2.svg";
import Mentor3 from "../assets/images/mentor3.svg";
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
    <section id="mentors" className="py-16 bg-[#F0FFFF] relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row justify-start items-start gap-10">

          {/* Left Text Content */}
          <div className="lg:w-1/3 w-full flex flex-col items-start text-left">
            {/* Mentors Title Line */}
            <div className="mb-4 flex items-center gap-3 flex-wrap">
              <p className="inline-block bg-pink-500 bg-opacity-20 text-pink-500 px-4 py-2 rounded-md font-medium text-sm shadow-sm">
                Mentors
              </p>
              <h2 className="text-3xl md:text-4xl font-Poppins font-semibold leading-snug">
                Meet Our <span className="text-pink-500">Mentors</span>
              </h2>
            </div>

            <p className="text-gray-600 mt-2 leading-relaxed">
              Learn from professionals who bring real-world experience,
              industry insights, and passion for teaching to every session.
            </p>

            {/* View All Mentors Button */}
            <div className="mt-6">
              <div className="inline-block bg-pink-500 text-white px-6 py-2 rounded-xl font-medium text-sm hover:bg-pink-600 transition shadow-md cursor-pointer">
                View All Mentors
              </div>
            </div>

            {/* Scroll Buttons */}
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => scroll("left")}
                className="bg-white rounded-full p-2 shadow-md hover:scale-105 transition"
              >
                <img src={BackIcon} alt="Back" className="w-6 h-6" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="bg-white rounded-full p-2 shadow-md hover:scale-105 transition"
              >
                <img src={FrontIcon} alt="Forward" className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Right Mentor Cards */}
          <div className="overflow-hidden w-full lg:w-2/3">
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory touch-pan-x hide-scrollbar"
            >
              {/* Mentor Card 1 */}
              <div className="bg-white rounded-3xl shadow-md w-[280px] sm:w-[320px] flex-shrink-0 flex flex-col items-center p-6 snap-start">
                <img
                  src={Mentor2}
                  alt="Mentor 2"
                  className="w-28 h-28 object-contain rounded-full mb-4 shadow-md"
                />
                <h4 className="text-lg font-semibold text-black">
                  Divya Menon
                </h4>
                <p className="text-gray-500 font-medium text-sm">
                  Cyber Security Analyst
                </p>
                <p className="text-gray-600 text-sm mt-3 text-center leading-relaxed">
                  Specialized in ethical hacking, security assessment, and
                  cybersecurity training for emerging developers.
                </p>
              </div>

              {/* Mentor Card 2 */}
              <div className="bg-white rounded-3xl shadow-md w-[280px] sm:w-[320px] flex-shrink-0 flex flex-col items-center p-6 snap-start">
                <img
                  src={Mentor3}
                  alt="Mentor 3"
                  className="w-28 h-28 object-contain rounded-full mb-4 shadow-md"
                />
                <h4 className="text-lg font-semibold text-black">Arjun P</h4>
                <p className="text-gray-500 font-medium text-sm">
                  Flutter Developer & Trainer
                </p>
                <p className="text-gray-600 text-sm mt-3 text-center leading-relaxed">
                  Passionate about mobile app development, guiding students to
                  design and deploy cross-platform Flutter apps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hide scrollbar globally */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Mentors;
