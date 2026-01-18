import React from 'react'
import { useNavigate } from 'react-router-dom'

function Hero() {
  const navigate = useNavigate()
  
  return (
    <>
     <div className='hero w-full min-h-screen relative text-[rgb(233,233,233)] gap-10 md:gap-10 flex flex-col items-center justify-start pt-8 md:pt-0 px-4 md:px-0'>
      <h1 className='text-center leading-[1.1] text-3xl md:text-[4.0rem] sm:text-[3.2rem]' style={{fontFamily: 'Neue Machina, sans-serif'}}><span className='text-[#E9E9E9]'>We only <span className="text-highlight text-[#24CFA6]">teach</span> <br />
            what we are really <br />
            really <span className="italic text-white-100 leading-[1.2] font-[RemixIcon]">good</span> at. <br />
          </span>
        </h1>
       <button onClick={() => navigate('/courses')}
        className="
          inline-flex items-center justify-center
          bg-[#24CFA6]
          px-4 py-3 md:px-6 md:py-1
          text-lg md:text-2xl
          text-black
          rounded-md transition-transform
          hover:bg-[#66e4cf] ease-in-out 0.3s cursor-pointer
          shadow-md"
        style={{fontFamily: 'Helvetica Now Display, sans-serif'}}>
          <p>Check Courses-Make an Impact</p>
        </button>


        <div className="text flex flex-col md:flex-row gap-8 md:gap-25 text-center mt-8 md:mt-0" style={{fontFamily: 'Neue Machina, sans-serif'}}>
          <div className="x1 flex flex-col items-center gap-2">
            <span className="text-[#24CFA6] text-2xl md:text-3xl font-black">250K+</span> Students taught
          </div>
          <div className="x1 flex flex-col items-center gap-2">
            <span className="text-[#24CFA6] text-2xl md:text-3xl font-black">20+</span> Instructer
          </div>
          <div className="x1 flex flex-col items-center gap-2">
            <span className="text-[#24CFA6] text-2xl md:text-3xl font-black">617K+</span> Youtube Subs
          </div>
        </div>
        
        <div className="side-text w-full md:w-72 leading-1.4 text-[#E9E9E9] mt-10 md:mt-0 md:absolute md:bottom-20 md:right-10 lg:right-15 lg:bottom-64 text-sm transform px-6 py-3 rounded-md shadow-lg bg-[#222] md:bg-transparent text-center md:text-left" style={{fontFamily: 'Neue Machina, sans-serif'}}>
          Get ready to <span className="text-highlight text-[#12A4A1]">accelerate your career </span> with customized courses and leave
          your mark in the tech industry
        </div>
    </div>
    </>
  )
}

export default Hero
