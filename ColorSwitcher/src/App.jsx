import React from 'react'
import Card from './components/Card'
import Button from './components/Button'
import { useState, useEffect } from 'react'

function App() {

   // Load saved color from localStorage or use 'transparent' as default
   const [color, setcolor] = useState(() => {
     const savedColor = localStorage.getItem('cardColor');
     return savedColor || 'transparent';
   });

   // Save color to localStorage whenever it changes
   useEffect(() => {
     localStorage.setItem('cardColor', color);
   }, [color]);
  return (

   <>
    <div className='flex w-full flex-col items-center justify-center gap-5 p-10'>
      <h3>Color Switcher</h3>
      <Button color={color} setcolor={setcolor} />
      <Card color={color} />
    </div>
    </>
  )
}

export default App
