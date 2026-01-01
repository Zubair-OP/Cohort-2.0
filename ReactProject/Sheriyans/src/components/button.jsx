import React from 'react'

const Button = ({text}) => {
  return (
    <div>
      <button className='px-8 py-2 rounded-md bg-[#24CFA6] text-[#000000] mb-10 transition-transform
          hover:bg-[#66e4cf] ease-in-out 0.3s cursor-pointer text-xl
          shadow-md' style={{fontFamily: 'helvetica, sans-serif', }}>{text}</button>
    </div>
  )
}

export default Button
