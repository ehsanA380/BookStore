import React from 'react'
import { useAuth } from '../context/AuthProvider'
import Logout from './Logout';
import { Link } from 'react-router-dom';


function UserData({item}) {
    // console.log(item);
  return (
    <>
    <div>
    <div className="dropdown " >
  <div tabIndex={0} role="button"   className="p-2.5 border-2 text-[20px]  rounded-full btn m-1 border-black dark:border-white dark:bg-slate-900 dark:text-white">{(item.fname).charAt(0)}{(item.lname).charAt(0)}</div>
  <div tabIndex={0} id='userdata' className=" dark:bg-slate-900 dark:text-white border-2  dark:border-white dropdown-content z-[1] card card-compact w-82 p-2 shadow bg-primary text-primary-content right-0 ">
    <div className="card-body">
        {/* <button to={'/'}  className='absolute right-3 border-1 top-2 text-xl p-1 rounded-full'>✕</button> */}
      <h3 className="card-title">{item.fname} {item.lname}</h3>
      <p className='wrap'> Email: <span className='text-wrap'> {item.email}</span></p>
    </div>
    <div className='p-2'><Logout/></div>
    
  </div>
</div>
    </div>
    </>
  )
}

export default UserData