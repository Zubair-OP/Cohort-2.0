import React from 'react'
import Cards from './Cards.jsx'

function Page3() {
  return (
    <div className='w-full h-min-screen px-20  py-15 gap-10'>
      <div className="top text-[2.5rem] mb-20" style={{fontFamily: 'Neue Machina, sans-serif'}}>
        <h1>
          <span>Courses Offered.</span>
        </h1>
      </div>
      <Cards />
    </div>
  )
}

export default Page3
