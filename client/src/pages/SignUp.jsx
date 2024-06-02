import React from 'react'
import {Link} from "react-router-dom";

const SignUp = () => {
  return (
    <div className='max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>SignUp</h1>
      <form className='flex flex-col gap-4'>
        <input type='text' placeholder='Enter username' id='username' className='bg-slate-100 p-3 rounded-lg'/>
        <input type='email' placeholder='Enter email' id='email'className='bg-slate-100 p-3 rounded-lg'/>
        <input type="password"  placeholder="Enter password" id="password"className='bg-slate-100 p-3 rounded-lg'/>
        <button className='bg-slate-700 p-3 text-white rounded-lg uppercase
        hover:opacity-95 disabled:opacity-80'>sigiup</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have  an account?</p>
       <Link to='/sign-in'>
       <span className='text-blue-500'>Sign in</span>
       </Link>
      </div>
      </div>
  )
}

export default SignUp