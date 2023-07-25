import React from 'react'
import { useNavigate } from 'react-router-dom';
import user from '../Image/user.png';
import solver from '../Image/solver.png';
import admin from '../Image/admin.png';

function Login() {

  const Navigate = useNavigate();

  const handleUserLogin = () => {
    Navigate("/userlogin");
  }

  const handleSolversLogin = () =>{
    Navigate("/solverslogin");
  }

  const handleAdminLogin = () => {
    Navigate("/adminlogin");
  }

  return (
    <div className='min-h-screen flex justify-end items-center bg-[url(https://cdn.dribbble.com/users/1067746/screenshots/6002017/media/bac39925e22450414f0ddf95b2ce06ce.jpg?compress=1&resize=1000x750&vertical=center)] bg-left bg-no-repeat'>
      <div className='flex gap-10 pr-16'>
        <button className='flex flex-col items-center border-[#5393ea] border-4 rounded-lg p-2' onClick={() => handleUserLogin()}>
          <img src={user} alt='unable to load' className='h-28 w-28'></img>
          <p className='text-blue-600 font-bold text-lg'>Student</p>
        </button>
        <button className='flex flex-col items-center border-[#5393ea] border-4 rounded-lg p-2' onClick={() => handleSolversLogin()}>
          <img src={solver} alt='unable to load' className='h-28 w-28'></img>
          <p className='text-blue-600 font-bold text-lg'>Solvers</p>
        </button>
        <button className='flex flex-col items-center border-[#5393ea] border-4 rounded-lg p-2' onClick={() => handleAdminLogin()}>
          <img src={admin} alt='unable to load' className='h-28 w-28'></img>
          <p className='text-blue-600 font-bold text-lg'>Admin</p>
        </button>
      </div>
    </div>
  )
}

export default Login
