import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Solverhistory } from '../Store/Slice/SolverHistorySlice';

function SolverHistory() {

  const dispatch = useDispatch();

  const solver = sessionStorage.getItem("SOLVER");

  useEffect(() => {
    dispatch(Solverhistory({ solver }));
  }, []);

  const { solverhistory } = useSelector((state) => state.solverhistory);

  return (
    <div className='min-h-screen flex flex-col justify-center items-center gap-8 pb-14 px-24'>
      <div>
        ComplaintHistory
      </div>
      <div>
        {solverhistory.lenght === 0 && <>No complaints available</>}
        <table>
          <tr>
            <th className='border border-gray-800 p-3'>Raised by</th>
            <th className='border border-gray-800 p-3'>Type</th>
            <th className='border border-gray-800 p-3'>Raised on</th>
            <th className='border border-gray-800 p-3'>Complaint description</th>
            <th className='border border-gray-800 p-3'>Complaint image</th>
          </tr>
          {
            solverhistory.map((data) => (
              <tr key={data}>
                <td className='border border-gray-800 p-2'>{data.User?.Name}</td>
                <td className='border border-gray-800 p-2'>{data.Type}</td>
                <td className='border border-gray-800 p-2'>{data.RaisedOn}</td>
                <td className='border border-gray-800 p-2'>{data.Description}</td>
                <td className='border border-gray-800 p-2 text-center'>
                  {
                    data.Image == "" && <p>Image not uploaded</p> ||
                    <img className='h-52 w-80' src={data.Image} alt='Unable to load image'></img>
                  }
                </td>
              </tr>
            )
            )
          }
        </table>
      </div>
    </div>
  )
}

export default SolverHistory
