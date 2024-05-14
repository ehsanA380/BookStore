import React, { useState } from 'react'
import Update from './Update'
import {Link} from 'react-router-dom'
import axios from 'axios';
import Delete from './Delete';
import { useAuth } from '../context/AuthProvider';


function Cards({ item ,setReloadBook}) {
  // console.log(item);
  const [authUser, setAuthUser] = useAuth()
  
  const clickHandleEdit= (event)=>{
    const bname =document.getElementById('bname');
    const bprice =document.getElementById('bprice');
    const btitle =document.getElementById('btitle');
    const $bcategory =document.querySelector('#bcategory');
    const bimage =document.getElementById('bimage');
    document.getElementById('my_modal_3').showModal();
    console.log(event.target.id);
    bname.value=item.name
    bprice.value=item.price
    btitle.value=item.title
    $bcategory.value =`${item.category}`
    bimage.value=item.image
  }
  const clickHandleDelete = (event)=>{
    const bookName = document.getElementById('bookName');
    bookName.innerText=item.name;
    document.getElementById('my_modal_5').showModal()
  }
  

  return (
    <>
      <div className='p-3 hover:scale-105 duration-200 '>
        <div className="card w-98 bg-base-100 shadow-xl mb-10 border-2 dark:bg-slate-900 dark:text-white"> 
        {
          authUser? 
          authUser.email=='admin@gmail.com'?
          <div className='flex justify-between'>
            <Link to={'?id='+item._id}onClick={()=>clickHandleEdit(event)}   className='w-8'>
              <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-4 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg>
            </Link>
            <Link to={'?id='+item._id}onClick={()=>clickHandleDelete(event)}   className='w-8'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  ml-[-6px] mt-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
            </Link>
          </div>
          :
          '':''
        }
          
          <Update setReloadBook={setReloadBook}  />
          <Delete setReloadBook={setReloadBook}  />
          <figure><img src={item.image} alt="Shoes" className='h-56 ' /></figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline p-3">${item.price}</div>
              <div className="badge badge-outline hover:bg-pink-500 hover:text-white duration-200 p-3  cursor-pointer">Buy now</div>
            </div>
          </div>
        </div>
      </div></>
  )
}

export default Cards