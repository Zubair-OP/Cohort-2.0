import React from "react";
import Cards from "./Cards";

const Courses = () => {
  return (
    <div className="courses w-full px-4 md:px-16">
      <div
        className="w-full min-h-[60vh] md:min-h-screen pt-12 flex flex-col items-center md:items-start text-center md:text-left"
        style={{ fontFamily: "Neue Machina, sans-serif" }}
      >
        <h1 className="text-5xl md:text-7xl font-bold leading-none">
          We're not a <span className="text-[#24CFA6]">course </span> <br />
          <span className="text-[#24CFA6]">factory.</span>
        </h1>
        <h2 className="text-[#E9E9E9] text-xl md:text-2xl font-semibold my-5">
          We focus on courses that really help.
        </h2>
        <div className="text-[#E9E9E9] text-xl font-light mt-16 md:mt-45 cursor-pointer hover:underline w-fit">
          Courses Which Do Work for You <i className="ri-arrow-down-long-line"></i>
        </div>
      </div>
      <Cards />
    </div>
  );
};

export default Courses;
