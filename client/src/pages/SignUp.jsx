import React, { useState } from 'react'
import {Link} from "react-router-dom";

const SignUp = () => {
      const [formData, setFormData]= useState({});
      const [error,setError]=useState(false)
      const [loading,setLoading]=useState(false)
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.id]:e.target.value})

  }
  // console.log(formData); 
  const handleSubmit= async(e)=>{
    e.preventDefault();
   try{
    setLoading(true);
    setError(false);
    const res= await fetch('/api/auth/signup',{
      method:"POST",
      headers:{
        'content-type':'application/json',
      },
      body:JSON.stringify(formData)
    })
    const data= await res.json();
    console.log(data);
    setLoading(false)
    if(data.success===false){
      setError(true)
      return
    }
  
    
   }
   catch(error){
    setLoading(false)
    setError(true)
   }
  }
  return (  
    <div className='max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>SignUp</h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter username' id='username' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange}/>
        <input type='email' placeholder='Enter email' id='email'className='bg-slate-100 p-3 rounded-lg' onChange={handleChange}/>
        <input type="password"  placeholder="Enter password" id="password"className='bg-slate-100 p-3 rounded-lg' onChange={handleChange} />
        <button disabled={loading} className='bg-slate-700 p-3 text-white rounded-lg uppercase
        hover:opacity-95 disabled:opacity-80'>{loading? 'loading...':'sign up'}
        </button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have  an account?</p>
       <Link to='/sign-in'>
       <span className='text-blue-500'>Sign in</span>
       </Link>
      </div>
      <p className='text-red-500 mt-5'>{error && "something went wrong"}</p>
      </div>
  )
}

export default SignUp