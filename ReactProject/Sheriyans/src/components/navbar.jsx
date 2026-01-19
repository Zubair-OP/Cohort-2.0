import React, { useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import { Link, NavLink } from 'react-router-dom'

function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='nav w-full text-[rgb(233,233,233)] mb-10 relative z-50' style={{fontFamily: 'Neue Machina, sans-serif'}}>
      
      {/* Desktop & Mobile Header Bar */}
      <div className='flex justify-between items-center px-6 py-4 md:px-10 md:py-6'>
        
        {/* Left: Logo */}
        <div className='left flex flex-col gap-0.5 z-50'>
            <div className='flex gap-3 items-center'>
                <img className='h-8 w-8 md:h-10 md:w-10' src="/images/light-logo_lNzGXRRlQ.webp" alt="Sheriyans Logo" />
                <div>
                    <h3 className='text-sm md:text-md leading-tight'>{props.title}</h3>
                    <h3 className='text-xs md:text-sm'>{props.subtitle}</h3>
                </div>
            </div>
        </div>

        {/* Desktop Menu (Hidden on Mobile) */}
        <div className='hidden md:flex gap-10 items-center text-sm cursor-pointer'>
            <NavLinks />
            <i className="ri-notification-3-fill"></i>
            <img className='w-5 h-5 rounded-full object-center' src="/vite.svg" alt="User" />
        </div>

        {/* Mobile Hamburger Icon */}
        <div className='md:hidden z-50' onClick={toggleMenu}>
          {isOpen ? (
            <i className="ri-close-line text-3xl"></i>
          ) : (
             <i className="ri-menu-line text-3xl"></i>
          )}
        </div>

      </div>

      {/* Mobile Menu Overlay */}
      <div className={`
        fixed top-0 left-0 w-full h-screen bg-[#111] text-white
        flex flex-col items-center justify-center gap-8 text-2xl
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        md:hidden
      `}>
          <NavLinks onClick={() => setIsOpen(false)} />
          <div className='flex gap-6 mt-4'>
             <i className="ri-notification-3-fill"></i>
             <img className='w-6 h-6 rounded-full object-center' src="/vite.svg" alt="User" />
          </div>
      </div>

    </div>
  )
}

const NavLinks = ({ onClick }) => (
  <>
    <NavLink 
        to="/" 
        onClick={onClick}
        className={({isActive}) => isActive ? 'text-[#24CFA6]' : 'text-[#E9E9E9] hover:text-[#24CFA6] transition-colors'}
    >
        Home
    </NavLink>
    <NavLink 
        to="/courses" 
        onClick={onClick}
        className={({isActive}) => isActive ? 'text-[#24CFA6]' : 'text-[#E9E9E9] hover:text-[#24CFA6] transition-colors'}
    >
        Courses
    </NavLink>
    <NavLink 
        to="/bootcamps" 
        onClick={onClick}
        className={({isActive}) => isActive ? 'text-[#24CFA6]' : 'text-[#E9E9E9] hover:text-[#24CFA6] transition-colors'}
    >
        Bootcamps
    </NavLink>
    <NavLink 
        to="/request-callback" 
        onClick={onClick}
        className={({isActive}) => isActive ? 'text-[#24CFA6]' : 'text-[#E9E9E9] hover:text-[#24CFA6] transition-colors'}
    >
        Request Callback
    </NavLink>
    <NavLink 
        to="/classroom" 
        onClick={onClick}
        className={({isActive}) => isActive ? 'text-[#24CFA6]' : 'text-[#E9E9E9] hover:text-[#24CFA6] transition-colors'}
    >
        Classroom
    </NavLink>
  </>
)

export default Navbar
