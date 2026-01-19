import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RequestCallback() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    toast.success("You will received a callback later.")
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    })
    localStorage.setItem('formData', JSON.stringify(formData))
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className='py-10 px-6 md:px-20 flex flex-col items-center w-full min-h-screen pt-24 md:pt-32' style={{fontFamily: 'Neue Machina, sans-serif'}}>
      <h1 className='text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-[#24CFA6] text-center'>
        Request a Callback
      </h1>
      <p className='text-lg md:text-xl text-[#E9E9E9] mb-8 md:mb-10 text-center'>
        Fill out the form below and we'll get back to you shortly.
      </p>
      
      <form onSubmit={handleSubmit} className='w-full max-w-2xl space-y-6 px-0 md:px-10'>
        <div>
          <label className='block text-[#E9E9E9] mb-2'>Name</label>
          <input 
            type='text' 
            name='name'
            value={formData.name}
            onChange={handleChange}
            className='w-full px-4 py-3 bg-[#1a1a1a] border border-[#24CFA6]/30 rounded-md text-[#E9E9E9] focus:outline-none focus:border-[#24CFA6]'
            required
          />
        </div>
        
        <div>
          <label className='block text-[#E9E9E9] mb-2'>Email</label>
          <input 
            type='email' 
            name='email'
            value={formData.email}
            onChange={handleChange}
            className='w-full px-4 py-3 bg-[#1a1a1a] border border-[#24CFA6]/30 rounded-md text-[#E9E9E9] focus:outline-none focus:border-[#24CFA6]'
            required
          />
        </div>
        
        <div>
          <label className='block text-[#E9E9E9] mb-2'>Phone</label>
          <input 
            type='tel' 
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            className='w-full px-4 py-3 bg-[#1a1a1a] border border-[#24CFA6]/30 rounded-md text-[#E9E9E9] focus:outline-none focus:border-[#24CFA6]'
            required
          />
        </div>
        
        <div>
          <label className='block text-[#E9E9E9] mb-2'>Message</label>
          <textarea 
            name='message'
            value={formData.message}
            onChange={handleChange}
            rows='4'
            className='w-full px-4 py-3 bg-[#1a1a1a] border border-[#24CFA6]/30 rounded-md text-[#E9E9E9] focus:outline-none focus:border-[#24CFA6]'
            required
          ></textarea>
        </div>
        
        <button 
          type='submit'
          className='bg-[#24CFA6] px-8 py-3 text-xl text-black rounded-md hover:bg-[#66e4cf] transition-all cursor-pointer shadow-md'
          style={{fontFamily: 'Helvetica Now Display, sans-serif'}}
        >
          Submit Request
        </button>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}

export default RequestCallback
