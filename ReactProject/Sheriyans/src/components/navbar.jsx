import React from 'react'
import 'remixicon/fonts/remixicon.css'

function Navbar(props) {
  return (
    <div className='nav w-full text-[rgb(233,233,233)] flex justify-around items-center mb-10' style={{fontFamily: 'Neue Machina, sans-serif', padding: '10px 30px'}}>
        <div className='left flex flex-col gap-0.5'>
            <div className='flex gap-3 items-center'>
                <img className='h-10 w-10' src="/images/light-logo_lNzGXRRlQ.webp" alt="Sheriyans Logo" />
                <div>
                    <h3 className='text-md'>{props.title}</h3>
                    <h3 className='text-md'>{props.subtitle}</h3>
                </div>
            </div>
        </div>
        <div className='rite flex gap-12 items-center text-sm cursor-pointer'>
            {props.links.map((e)=>{
                return <p>{e}</p>
            })}
            <i className="ri-notification-3-fill"></i>
            <img className='w-5 h-5 rounded-full object-center' src="vite.svg" alt="Some Icon" />
        </div>
    </div>
  )
}

export default Navbar
