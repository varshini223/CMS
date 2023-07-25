import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { AdminLoginData } from '../Store/Slice/AdminLoginSlice';

function AdminLogin() {

  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const [Incorrect, setIncorrect] = useState();

  const { AdminLogin } = useSelector((state) => (state.AdminLoginData));

  const handleLoginData = async (e) => {
    e.preventDefault();
    const ele = e.target.elements;
    const Name = ele[0].value;
    const Password = ele[1].value;
    ele[0].value = "";
    ele[1].value = "";
    dispatch(
      AdminLoginData({ Name, Password })
    );
  };

  useEffect(() => {
    if (AdminLogin?.data?.response === "success") {
      Navigate("/admin");
    } else if (AdminLogin?.data?.response === "Incorrect password") {
      setIncorrect(true);
    }
  }, [AdminLogin]);

  return (
    <div className='min-h-screen flex flex-col justify-center items-center gap-4'>
      <h1 className='text-blue-600 font-semibold text-3xl'>Admin Login</h1>
      <form onSubmit={handleLoginData}>
        <div className='grid gap-8 bg-blue-400 px-14 pt-14 pb-5 rounded-lg'>
          <input type="text" placeholder='Name' className='text-center h-10 rounded-lg' />
          <input type="password" placeholder='Password' className='text-center h-10 rounded-lg' />
          <div className='flex justify-center'>
            <button className='bg-white h-10 w-20 rounded-lg text-blue-600 font-semibold'>SUBMIT</button>
          </div>
          <span className='pl-5'>{Incorrect && <div className='text-red-600 font-semibold'>Incorrect Password</div>}</span>
        </div>
      </form>
    </div>
  )
}

export default AdminLogin
