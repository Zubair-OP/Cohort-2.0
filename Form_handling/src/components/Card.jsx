import React from 'react'

function Card({list, DeleteHandler}) {
  return (
    <div>
      {list.map((elem,idx)=>{
        return <div className='w-[25%] bg-white text-black p-5 m-2 flex flex-col items-center gap-2'>
        <img className='w-19 h-19 rounded-full object-center object-cover' src={elem.imageUrl} alt="" />
        <h1 className='text-2xl font-bold text-black'>{elem.name}</h1>
        <h2 className='text-md'>{elem.email}.</h2>
        <h3 className='text-lg italic font-bold'>{elem.role}</h3>
        <button className='px-8 py-3 bg-emerald-300 rounded-2xl' onClick={() => DeleteHandler(idx)}>Delete</button>
       </div>
       })}
    </div>
  )
}

export default Card
