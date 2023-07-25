import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { notviewedcomplaints } from '../Store/Slice/NotViewedSlice';
import { UpdateView } from '../Store/Slice/UpdateView';
import { GetCategory } from '../Store/Slice/GetCategorySlice';
import { Categorybasedsolvers } from '../Store/Slice/CategoryBasedSolvers';

function NotViewed() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(notviewedcomplaints());
    dispatch(GetCategory());
  }, []);

  const { notviewed } = useSelector((state) => state.notviewed);
  const { complaintCategory } = useSelector((state) => state.complaintCategory);
  const { CategoryBasedSolvers } = useSelector((state) => state.CategoryBasedSolvers);

  const [drop, setdrop] = useState();
  const [leveldrop, setleveldrop] = useState();

  const [complaint, setcomplaint] = useState();

  const toggle = (id) => {
    setdrop(drop === id ? undefined : id);
    setcomplaint(id);
  }

  const handleCategory = async (Id) => {
    setleveldrop(leveldrop === Id ? undefined : Id);
    const Category = Id;
    dispatch(
      Categorybasedsolvers({ Category })
    );
  }

  const renderDropdowns = () => {
    return (
      complaintCategory?.length > 0 && complaintCategory.map((opt, i) => (
        <div key={i} value={opt} className='bg-slate-200 px-3'>
          <button onClick={(e) => handleCategory(opt._id)} className='flex'>
            {opt.Type}
          </button>
          <div>
            {leveldrop === opt._id && renderlevelDrops()}
          </div>
        </div>
      ))
    )
  };

  const handleSolvers = async (Id) => {
    const AssignedTo = Id;
    setleveldrop(false)
    setdrop(false);
    dispatch(
      UpdateView({ complaint, AssignedTo })
    );
  }

  const renderlevelDrops = () => {
    return (
      CategoryBasedSolvers?.length > 0 && CategoryBasedSolvers.map((opt, i) => (
        <div key={i} value={opt} className='bg-slate-200 px-3'>
          <button onClick={(e) => handleSolvers(opt._id)} className='flex'>
            {opt.Name}
          </button>
        </div>
      ))
    )
  }

  return (
    <div className='flex flex-col gap-8 p-10'>
      <div>
        Complaints Not Viewed
      </div>
      <div>
        <table>
          <tr>
            <th className='border border-gray-800 p-3'>Raised by</th>
            <th className='border border-gray-800 p-3'>Raised on</th>
            <th className='border border-gray-800 p-3'>Type</th>
            <th className='border border-gray-800 p-3'>Complaint description</th>
            <th className='border border-gray-800 p-3'>Assign a worker</th>
          </tr>
          {
            notviewed.map((data, index) => (
              <tr>
                <td className='border border-gray-800 p-2'>{data.User.Name}</td>
                <td className='border border-gray-800 p-2'>{data.RaisedOn}</td>
                <td className='border border-gray-800 p-2'>{data.Type}</td>
                <td className='border border-gray-800 p-2'>{data.Description}</td>
                <td className='border border-gray-800 p-2'>
                  <div className='h-10 z-0'>
                    <div className='bg-slate-400 rounded-md px-3 py-1 z-10 w-full'>
                      <button onClick={(e) => toggle(data._id)} className='flex'>
                        Assign
                        <div className={`pt-1 ml-8 ${drop === data._id && "rotate-180 duration-1000"}`}>
                          <ion-icon name="chevron-down-outline"></ion-icon>
                        </div>
                      </button>
                    </div>
                    <div className='flex'>
                      <div className='z-40 h-fit w-fit rounded-md mt-1 overflow-hidden translate-x-10'>
                        {drop === data._id && renderDropdowns()}
                      </div>
                      <div className='z-40 h-fit w-fit rounded-md mt-3 overflow-hidden translate-x-11'>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))
          }
        </table>
      </div>
    </div>
  )
}

export default NotViewed
