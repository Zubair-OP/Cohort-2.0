import React from 'react'

function Classroom() {
  return (
    <div className='py-10 px-20' style={{fontFamily: 'Neue Machina, sans-serif'}}>
      <h1 className='text-5xl font-bold mb-6 text-[#24CFA6]' >
        Classroom
      </h1>
      <p className='text-xl text-[#E9E9E9] mb-10'>
        Join our interactive classroom sessions and learn with peers.
      </p>
      
      <div className='space-y-8'>
        <div className='bg-[#1a1a1a] p-8 rounded-lg border border-[#24CFA6]/20'>
          <h3 className='text-3xl font-semibold mb-4 text-[#24CFA6]'>Live Sessions</h3>
          <p className='text-[#C5C5C5] mb-4'>
            Attend live coding sessions with experienced instructors. Get your doubts cleared in real-time.
          </p>
          <ul className='space-y-2 text-[#E9E9E9]'>
            <li>✓ Interactive learning environment</li>
            <li>✓ Real-time doubt resolution</li>
            <li>✓ Hands-on projects</li>
            <li>✓ Peer collaboration</li>
          </ul>
        </div>
        
        <div className='bg-[#1a1a1a] p-8 rounded-lg border border-[#24CFA6]/20'>
          <h3 className='text-3xl font-semibold mb-4 text-[#24CFA6]'>Recorded Content</h3>
          <p className='text-[#C5C5C5]'>
            Access all recordings anytime, anywhere. Learn at your own pace with lifetime access to course materials.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Classroom
