function Hero() {
  return (
    <>
     <div className='hero w-full h-screen relative text-[rgb(233,233,233)] gap-14 flex flex-col items-center justify-start'>
      <h1 className='text-center leading-[1.1] text-[4.4rem]' style={{fontFamily: 'Neue Machina, sans-serif'}}><span className='text-[#E9E9E9]'>We only <span className="text-highlight text-[#24CFA6]">teach</span> <br />
            what we are really <br />
            really <span className="italic text-white-100 leading-[1.2] font-[RemixIcon]">good</span> at. <br />
          </span>
        </h1>
       <button 
        className="
          inline-flex items-center justify-center
          bg-[#24CFA6]
          px-6 py-1
          text-2xl
          text-black
          rounded-md transition-transform
          hover:bg-[#66e4cf] ease-in-out 0.3s cursor-pointer
          shadow-md"
        style={{fontFamily: 'Helvetica Now Display, sans-serif'}}>
          <p>Check Courses-Make an Impact</p>
        </button>


        <div className="text flex gap-25 text-center" style={{fontFamily: 'Neue Machina, sans-serif'}}>
          <div className="x1 flex flex-col items-center gap-2">
            <span className="text-[#24CFA6] text-3xl font-black">250K+</span> Students taught
          </div>
          <div className="x1 flex flex-col items-center gap-2">
            <span className="text-[#24CFA6] text-3xl font-black">20+</span> Instructer
          </div>
          <div className="x1 flex flex-col items-center gap-2">
            <span className="text-[#24CFA6] text-3xl font-black">617K+</span> Youtube Subs
          </div>
        </div>
        <div className="side-text h-20 w-66 leading-1.4 text-[#E9E9E9] absolute bottom-75 right-25 text-sm transform px-6 py-3 rounded-md shadow-lg" style={{fontFamily: 'Neue Machina, sans-serif'}}>
          Get ready to <span className="text-highlight text-[#12A4A1]">accelerate your career </span> with customized courses and leave
          your mark in the tech industry
        </div>
    </div>
    </>
  )
}

export default Hero
