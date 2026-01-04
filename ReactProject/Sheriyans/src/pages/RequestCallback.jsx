import React, { useState } from 'react'

function RequestCallback() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you! We will call you back soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className='py-10 px-20 flex flex-col items-center w-full' style={{fontFamily: 'Neue Machina, sans-serif'}}>
      <h1 className='text-5xl font-bold mb-6 text-[#24CFA6]'>
        Request a Callback
      </h1>
      <p className='text-xl text-[#E9E9E9] mb-10'>
        Fill out the form below and we'll get back to you shortly.
      </p>
      
      <form onSubmit={handleSubmit} className='min-w-2xl space-y-6 px-10'>
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
    </div>
  )
}

export default RequestCallback
