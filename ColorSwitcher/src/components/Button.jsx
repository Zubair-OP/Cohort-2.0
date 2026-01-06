import React from 'react'

function Button({setcolor}) {

const colors = ['red', 'green', 'blue', 'yellow', 'purple']
  return (
    <div>
      <div className='flex gap-10' >
    {colors.map((color) => (
        <button 
          key={color} 
          style={{ backgroundColor: color, color: 'white', margin: '5px', padding: '10px', border: 'none', borderRadius: '5px' }}
          onClick={() => setcolor(color)}
        >
          {color}
        </button>
      ))}
      </div>
    </div>
  )
}

export default Button
