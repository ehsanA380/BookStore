import React, { useState } from 'react'
import Update from './Update'
import {Link} from 'react-router-dom'
import axios from 'axios';


function Cards({ item }) {
  // console.log(item);
  
  const clickHandle= async(event)=>{
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
  

  return (
    <>
      <div className='p-3 hover:scale-105 duration-200 '>
        <div className="card w-98 bg-base-100 shadow-xl mb-10 border-2 dark:bg-slate-900 dark:text-white"> 
          <Link to={'?id='+item._id}onClick={()=>clickHandle(event)} id='clickElement'  className='w-8'>< img  src="../../public/icon/editIcon.png" alt="editIcon" id={item._id} className='w-8 m-4' /> </Link>
          <Update  />
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