import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { solverBased } from '../Store/Slice/SolverBasedComplaint';
import { UpdateInprogress } from '../Store/Slice/UpdateInprogress';

function Solvers() {

  const dispatch = useDispatch();

  const solver = sessionStorage.getItem("SOLVER");

  useEffect(() => {
    dispatch(solverBased({ solver }));
  }, []);

  const { solvercomplaint } = useSelector((state) => state.solvercomplaint);

  const handlestatus = async (Id) => {
    const id = Id;
    dispatch(
      UpdateInprogress({ id })
    );
  }

  const handleLogout = () => {
    sessionStorage.removeItem("SOLVER");
    window.location.href = '/solverslogin';
  }
  
  return (
    <div className='flex flex-col gap-8 p-10'>
      <div>
        Complaints Assigned
      </div>
      <div>
        <Link to="/solverhistory" >Complaint history</Link>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div>
          <table>
            <tr>
              <th className='border border-gray-800 p-3'>Raised by</th>
              <th className='border border-gray-800 p-3'>Raised on</th>
              <th className='border border-gray-800 p-3'>Type</th>
              <th className='border border-gray-800 p-3'>Complaint description</th>
              <th className='border border-gray-800 p-3'>Update status</th>
            </tr>
            {
              solvercomplaint.map((data) => (
                <tr>
                    <td className='border border-gray-800 p-2'>{data.User?.Name}</td>
                    <td className='border border-gray-800 p-2'>{data.RaisedOn}</td>
                    <td className='border border-gray-800 p-2'>{data.Type}</td>
                    <td className='border border-gray-800 p-2'>{data.Description}</td>
                    <td className='border border-gray-800 p-2'>
                    <button className='bg-blue-300 p-1 rounded-sm' onClick={(e) => handlestatus(data._id)}>Mark as Completed</button>
                    </td>
                </tr>
               ))
             }
          </table>
        </div>
    </div>
  )
}

export default Solvers
