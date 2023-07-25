import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { complainthistory } from '../Store/Slice/HistorySlice';

function ComplaintHistory() {

   const dispatch = useDispatch();

   const user = sessionStorage.getItem("USER");

   useEffect(() => {
      dispatch(complainthistory({ user }));
   }, []);

   const { history } = useSelector((state) => state.history);

   return (
      <div className='min-h-screen flex flex-col justify-center items-center gap-8 pb-14 px-24'>
         <div>
            ComplaintHistory
         </div>
         <div>
            {history.lenght === 0 && <>No complaints available</>}
            <table>
               <tr>
                  <th className='border border-gray-800 p-3'>Type</th>
                  <th className='border border-gray-800 p-3'>Raised on</th>
                  <th className='border border-gray-800 p-3'>Complaint description</th>
                  <th className='border border-gray-800 p-3'>Complaint image</th>
                  <th className='border border-gray-800 p-3'>Viewed the complaint</th>
                  <th className='border border-gray-800 p-3'>Assigned and Inprogress</th>
                  <th className='border border-gray-800 p-3'>Completed</th>
               </tr>
               {
                  history.map((data) => (
                     <tr key={data}>
                        <td className='border border-gray-800 p-2'>{data.Type}</td>
                        <td className='border border-gray-800 p-2'>{data.RaisedOn}</td>
                        <td className='border border-gray-800 p-2'>{data.Description}</td>
                        <td className='border border-gray-800 p-2 text-center'>
                           {
                              data.Image == "" && <p>Image not uploaded</p> ||
                              <img className='h-52 w-80' src={data.Image} alt='Unable to load image'></img>
                           }
                        </td>
                        <td className='border border-gray-800 p-2 text-center'>
                           {data.Viewed === "true" && <p>✔️</p>}
                        </td>
                        <td className='border border-gray-800 p-2 text-center'>
                           {data.Inprogress === "true" && <p>✔️</p>}
                        </td>
                        <td className='border border-gray-800 p-2 text-center'>
                           {data.Completed === "true" && <p>✔️</p>}
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

export default ComplaintHistory
