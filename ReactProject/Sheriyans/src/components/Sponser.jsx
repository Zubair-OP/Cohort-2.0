import React from 'react'
import Button from './button.jsx'

function Sponser() {
  return (
    <div className='w-full min-h-screen flex p-5 flex-col justify-between'>
      <div className="top text-center text-3xl md:text-[2.7rem] font-400 leading-tight md:leading-12" style={{fontFamily: 'Neue Machina, sans-serif'}}>
        <span className='text-[#E9E9E9]'>
            Top companies  our students 
          <br />
          <span className="text-highlight text-[#24CFA6]">working with</span>
        </span>
      </div>
      <div className="bottom w-full md:w-2/3 h-auto md:h-75 text-center mx-auto my-10 md:my-0">
        <img src="./images/company.webp" alt="" className="w-full h-full object-contain" />
      </div>
      <div className='text-center'>
        <Button text="Explore Courses" />
      </div>
    </div>
  )
}

export default Sponser
