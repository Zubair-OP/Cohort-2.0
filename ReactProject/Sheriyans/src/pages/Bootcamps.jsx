import React from 'react'

function Bootcamps() {
  return (
    <div className='py-30 px-20' style={{fontFamily: 'Neue Machina, sans-serif'}}>
      <h1 className='text-5xl font-bold mb-6 text-[#24CFA6]'>
        Bootcamps
      </h1>
      <p className='text-xl text-[#E9E9E9]' style={{fontFamily: 'Neue Machina, sans-serif'}}>
        Intensive training programs to accelerate your learning journey.
      </p>
      <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='bg-[#1a1a1a] p-6 rounded-lg border border-[#24CFA6]/20'>
          <h3 className='text-2xl font-semibold mb-3 text-[#24CFA6]'>Koder 2.0</h3>
          <p className='text-[#C5C5C5]'>Master both frontend and backend development in 12 weeks.</p>
        </div>
        <div className='bg-[#1a1a1a] p-6 rounded-lg border border-[#24CFA6]/20'>
          <h3 className='text-2xl font-semibold mb-3 text-[#24CFA6]'>Kodex 2.0</h3>
          <p className='text-[#C5C5C5]'>Learn design principles and modern tools in 8 weeks.</p>
        </div>
      </div>
    </div>
  )
}

export default Bootcamps
