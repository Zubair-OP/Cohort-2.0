import React from 'react'
import { useState } from 'react'

function App() {

  // const[Name,setName] = useState('')
  // const[Email,setEmail] = useState('')
  // const[Number,setNumber] = useState('')

  // function DataHnadler(e){
  //   setName(e);
  //   setEmail(e);
  //   setNumber(e);
  // }

  // function ClearHandler() {
  //   setName('')
  //   setEmail('')
  //   setNumber('')
  // }


  const [Data, setData] = useState({
    name:'',
    email:'',
    number:''
  })

  function InputHandler(e) {
    const {name , value} = e.target;
    setData({...Data , [name]:value})
  }

  function ClearHandler() {
    setData({
      name:'',
      email:'',
      number:''
    })
  }
  return (
    <>
    <div className='box'>
      <input type="text" value={Data.name} name='name'  placeholder='Enter your name' onChange={InputHandler}/>
      <h1>{Data.name}</h1>
      <input type="text" value={Data.email} name='email' placeholder='Enter your Email' onChange={InputHandler}/>
      {Data.email}
      <input type="number" value={Data.number} name='number' placeholder='Enter your Number' onChange={InputHandler}/>
      {Data.number}
      <button className='btn' onClick={ClearHandler}>Clear Data</button>
    </div>
    
    </>
    
  )
}

export default App
