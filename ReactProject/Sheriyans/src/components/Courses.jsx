import React from "react";
import Cards from "./Cards";

const Courses = () => {
  return (
    <div className="courses px-16">
      <div
        className="w-full h-screen px-10 pt-10"
        style={{ fontFamily: "Neue Machina, sans-serif" }}
      >
        <h1 className="text-7xl">
          We're not a <span className="text-[#24CFA6]">course </span> <br />
          <span className="text-[#24CFA6]">factory.</span>
        </h1>
        <h2 className="text-[#E9E9E9] text-2xl font-semibold my-5">
          We focus on courses that really help.
        </h2>
        <div className="text-[#E9E9E9] text-xl font-light mt-45 cursor-pointer hover:underline w-fit">
          Courses Which Do Work for You <i className="ri-arrow-down-long-line"></i>
        </div>
      </div>
      <Cards />
    </div>
  );
};

export default Courses;
