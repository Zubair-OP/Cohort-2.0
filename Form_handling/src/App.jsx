import { useState } from 'react';
import Card from './components/Card';

function App() {

  var userlist = JSON.parse(localStorage.getItem("userlist")) || [];

  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [role, setRole] = useState('');
  const [list, setlist] = useState(userlist);

  const DeleteHandler = (idx) =>{
    const copylist = [...list];
    copylist.splice(idx, 1);
    setlist(copylist);
    localStorage.setItem("userlist", JSON.stringify(copylist));
  }

  const formHandler = (e) =>{
    e.preventDefault();

    const newList = [...list, {name, email, imageUrl, role}];
    setlist(newList);
    console.log(newList);
    localStorage.setItem("userlist", JSON.stringify(newList));

    setname('');
    setemail('');
    setImageUrl('');
    setRole('');
  }

  return (
    <>
      <div className='w-full h-screen bg-black text-white flex flex-col p-10 gap-5'>
        <form onSubmit={(e)=>{
          formHandler(e);
        }}>
          <input className='text-white p-5 border-sky-100 border-2 w-[45%]' 
          type="text" 
          value={name}
          onChange={(e) => setname(e.target.value)}
          required
          placeholder='Enter your Name'/>
          <input className='text-white p-5 border-sky-100 border-2 w-[45%]' 
          type="text" 
          value={email}
          onChange={(e)=> setemail(e.target.value)}
          required
          placeholder='Enter your Email' />
          <input className='text-white p-5 border-sky-100 border-2 w-[45%]' 
          type="text"
          value={imageUrl}
          onChange={(e)=> setImageUrl(e.target.value)} 
          required
          placeholder='Enter Image Url' />
          <input className='text-white p-5 border-sky-100 border-2 w-[45%] ' 
          type="text" 
          value={role}
          onChange={(e)=> setRole(e.target.value)} 
          required
          placeholder='Enter your Role' />
           <button className='text-white p-2 w-[90%] m-auto bg-emerald-500 cursor-pointer'>Submit</button>
        </form>
       <Card list={list} DeleteHandler={DeleteHandler} />
      </div>
    </>
  )
}

export default App
