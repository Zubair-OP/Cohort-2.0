import React from 'react'
import Button from './button.jsx'
import { useNavigate } from 'react-router-dom'

function Video() {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col items-center gap-10 md:gap-8 lg:gap-15 w-full md:min-h-0 lg:min-h-screen justify-center md:py-8 lg:py-0 md:mb-0 lg:mb-10 px-4'>
      <div className="top text-center text-3xl md:text-[2.2rem] lg:text-[2.7rem] font-400 leading-tight md:leading-tight lg:leading-12" style={{ fontFamily: 'Neue Machina, sans-serif' }}>
        <span className='text-[#E9E9E9]'>
          we do whatever it takes to help you
          <br />
          <span className="text-highlight text-[#24CFA6]">understand the concepts.</span>
        </span>
      </div>
      <div className="video-container w-full sm:w-2/3 md:w-3/4 h-[30vh] md:h-[50vh] lg:h-lvh rounded-md overflow-hidden shadow-lg">
        <iframe className='w-full h-full' frameBorder="0" src="https://www.youtube.com/embed/60SRAWmMXyc"></iframe>
      </div>
      <Button onClick={() => navigate('/request-callback')} text="Explore Free Learning" />
    </div>
  )
}

export default Video
