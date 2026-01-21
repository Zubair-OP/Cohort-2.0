import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import courses from "../data/courses";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Cards() {
  const navigate = useNavigate();
  const containerRef = useRef();

  const handleCardClick = (id) => {
    navigate(`/course/${id}`);
  };

  useGSAP(() => {
    gsap.from('.course-card', {
      opacity: 0.7,
      scale: 0.96,
      duration: 1,
      stagger: 0.3, // Stagger for "one by one" effect
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%', // Starts when top of container is 75% down viewport
        end: 'bottom bottom', // Ends when bottom of container hits bottom of viewport
        scrub: 1, // Smooth scrub tied to scroll
      }
    })
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {courses.map((item, index) => (
        <div
          key={index}
          className="course-card bg-[#171717] rounded-2xl overflow-hidden 
                     flex flex-col h-130"
          style={{ fontFamily: "Helvetica Now Display, sans-serif" }}
        >
          {/* Image */}
          <div className="h-60 w-full shrink-0">
            <img
              src={item.imgsrc}
              alt={item.heading}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Content */}
          <div className="flex flex-col grow px-6 py-4 gap-3 text-[rgb(233,233,233)]">
            <h2 className="text-[20px] font-semibold line-clamp-2">
              {item.heading}
            </h2>

            <span
              className={`w-fit px-2 py-1 text-sm rounded
                ${item.language === "Hinglish" ? "bg-[#882727]" : "bg-[#2C2C2C]"}
              `}
            >
              {item.language}
            </span>

            <div className="mt-5">
              <p className="text-sm opacity-80">Limited Time Discount</p>

              <div className="flex justify-between items-center mt-1">
                <p className="text-lg font-semibold">
                  {item.price}
                  <span className="line-through opacity-60 text-sm ml-3">
                    {item.oldPrice}
                  </span>
                </p>

                <span className="bg-[rgb(233,233,233)] text-black px-3 py-1 rounded-md font-bold text-sm">
                  {item.off}
                </span>
              </div>
            </div>

            {/* Button */}
            <button
              onClick={() => handleCardClick(item.id)}
              className="mt-auto bg-[#24CFA6] text-black py-3 
                         rounded-xl font-semibold text-lg transition-transform
          hover:bg-[#66e4cf] ease-in-out 0.3s cursor-pointer
          shadow-md"
            >
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
