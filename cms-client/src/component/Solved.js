import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { solvedcomplaints } from '../Store/Slice/SolvedComplaints';

function Solved() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(solvedcomplaints());
    }, []);

    const { solved } = useSelector((state) => state.solved);

    return (
        <div className='flex flex-col gap-8 p-10'>
            <div>
                Solved Complaints
            </div>
            <div>
                <table>
                    <tr>
                        <th className='border border-gray-800 p-3'>Raised by</th>
                        <th className='border border-gray-800 p-3'>Raised on</th>
                        <th className='border border-gray-800 p-3'>Type</th>
                        <th className='border border-gray-800 p-3'>Complaint description</th>
                        <th className='border border-gray-800 p-3'>SolvedBy</th>
                    </tr>
                    {
                        solved.map((data) => (
                            <tr>
                                <td className='border border-gray-800 p-2'>{data.User?.Name}</td>
                                <td className='border border-gray-800 p-2'>{data.RaisedOn}</td>
                                <td className='border border-gray-800 p-2'>{data.Type}</td>
                                <td className='border border-gray-800 p-2'>{data.Description}</td>
                                <td className='border border-gray-800 p-2'>{data.AssignedTo?.Name}</td>
                            </tr>
                        ))
                    }
                </table>
            </div>
        </div>
    )
}

export default Solved
