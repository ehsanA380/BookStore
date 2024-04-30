import React from 'react'

function Cards({item}) {
  // console.log(item);
  return (
    <>
    <div className='p-3 hover:scale-105 duration-200'>
        <div className="card w-98 bg-base-100 shadow-xl mb-10 border-2 dark:bg-slate-900 dark:text-white">
  <figure><img src={item.image} alt="Shoes" className='w-60' /></figure>
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