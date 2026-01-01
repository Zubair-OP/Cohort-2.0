import React from 'react'
import Navbar from './components/navbar.jsx'
import Hero from './components/Hero.jsx'
import Video from './components/Video.jsx'
import Page3 from './components/Page3.jsx'
import Sponser from './components/Sponser.jsx'

function App() {
  return (
    <>
    <div className='main min-h-full w-full text-[#C5C5C5] relative'>
      <img className="fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full h-full object-cover -z-10" src="/images/blur.svg" alt="" />
      <Navbar className="some-class z-10"/>
      <Hero/>
      <Video/>
      <Page3/>
      <Sponser/>
    </div>
    </>
  )
}

export default App
