import React, { useState } from 'react'
import NotViewed from './NotViewed';
import Inprogress from './Inprogress';
import Solved from './Solved';
import { useDispatch } from 'react-redux';
import { ComplaintCategory } from '../Store/Slice/CategorySlice';

function AdminHome() {

    const dispatch = useDispatch();

    const [component, setComponent] = useState("NotViewed");

    const handleCategory = async (e) => {
      e.preventDefault();
      const ele = e.target.elements;
      const Type = ele[0].value;
      ele[0].value = "";
      dispatch(
        ComplaintCategory({ Type })
      );
    }

    const handleLogout = () => {
      // sessionStorage.removeItem("");
      window.location.href = '/adminlogin';
    }

  return (
    <div className='min-h-screen'>
      <button onClick={handleLogout}>Logout</button>
        <div className='p-10 flex flex-col gap-3'>
          <h1>Add new complaint category</h1>
          <form onSubmit={handleCategory} className='flex gap-4'>
            <input type='text' placeholder='Enter the category' className='border border-gray-800'></input>
            <button>Add</button>
          </form>
        </div>
        <div className='flex gap-5 px-10'>
            <button className='border border-gray-800' onClick={() => setComponent("NotViewed")}>Complaints not viewed</button>
            <button className='border border-gray-800' onClick={() => setComponent("Inprogress")}>Complaints Assigned and Inprogress</button>
            <button className='border border-gray-800' onClick={() => setComponent("Solved")}>Solved Complaints</button>
        </div>
        <div>
            {component === "NotViewed" && <NotViewed />}
            {component === "Inprogress" && <Inprogress />}
            {component === "Solved" && <Solved />}
        </div>
    </div>
  )
}

export default AdminHome
