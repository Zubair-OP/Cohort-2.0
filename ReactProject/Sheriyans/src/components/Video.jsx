import React from 'react'
import Button from './button.jsx'

function Video() {
  return (
    <div className='flex flex-col items-center gap-15 w-full min-h-screen justify-center mb-10'>
      <div className="top text-center text-[2.7rem] font-400 leading-12" style={{fontFamily: 'Neue Machina, sans-serif'}}>
        <span className='text-[#E9E9E9]'>
          we do whatever it takes to help you
          <br />
          <span className="text-highlight text-[#24CFA6]">understand the concepts.</span>
        </span>
      </div>
      <div className="video-container w-3/4 h-lvh rounded-md overflow-hidden shadow-lg">
          <iframe className='w-full h-full' frameborder="0" src="https://www.youtube.com/embed/60SRAWmMXyc"></iframe>
        </div>
        <Button text="Explore Free Learning" />
    </div>
  )
}

export default Video
