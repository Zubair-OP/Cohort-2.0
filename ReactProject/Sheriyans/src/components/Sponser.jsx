import React from 'react'
import Button from './button.jsx'
import { useNavigate } from 'react-router-dom'

function Sponser() {
  const navigate = useNavigate();
  return (
    <div className='w-full min-h-screen flex px-4 md:px-20 py-20 flex-col justify-between items-center'>
      <div className="top text-center text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-tight" style={{ fontFamily: 'Neue Machina, sans-serif' }}>
        <span className='text-[#E9E9E9]'>
          Top <span className="text-[#24CFA6]">companies</span> our <br />
          students working with
        </span>
      </div>
      <div className="bottom w-full max-w-screen-lg mx-auto p-4 md:p-10">
        <img src="./images/company.webp" alt="Companies" className="w-full h-full object-contain" />
      </div>
      <div className='text-center'>
        <Button text="Explore Courses" onClick={() => navigate('/courses')} />
      </div>
    </div>
  )
}

export default Sponser
