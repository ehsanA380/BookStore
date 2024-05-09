import React, { useEffect, useState } from 'react'
import Update from './Update'
import {toast} from 'react-hot-toast'
import { Link } from 'react-router-dom';
import axios from 'axios';
function Cards({ item }) {
  
  const [bookId,setBookId]=useState("null");
  let _id;

  const bname= document.getElementById('bname')
  const bPrice= document.getElementById('bPrice')
  const title= document.getElementById('title')
  const imgLink= document.getElementById('imgLink')
  const $select= document.querySelector('#category')

  const fillInputwithBookDetails= (e)=>{
    
  }

  const getBookDetails = async(_id)=>{
        
      
    // setSpinner(true)
    try {
        // const id = '6627ce94fe7624d249cda3b0';
        const id = _id;

        const book = await axios.get(`http://localhost:4001/book/getBook/${id}`)
        // const book = await axios.get(`http://localhost:4001/book/getBook/6627ce94fe7624d249cda3b0`)
            .then(book => {    
                console.log(book.data)
                bname.value=book.data.name
                bPrice.value=book.data.price
                title.value=book.data.title
                $select.value=`${book.data.category}`
                imgLink.value=book.data.image

            })
            console.log(book);
            // console.log("iam call");


        // const bookRes= await axios.put(`http://localhost:4001/book/update/${id}`,bookInfo)
        // .then(res=>{

        //         setSpinner(false);

        //     toast.success('Book updated successfully');

        // })
        // .catch((err)=>{
        //     console.log(err);
        //     setSpinner(false);
        //     toast.error("Error: "+err.response.data.message);
        // })
    }

    catch (err) {
        console.log(err);
        toast.error("Error: connection error");   
    }
}

  const submit = (e)=>{
    document.getElementById('my_modal_3').showModal();
     _id=  e.target.id;
    setBookId(_id);
    // getBookDetails()
    console.log(e.target.id);
    if(bookId!=null){

      setTimeout(() => {
        getBookDetails(_id);
      },1000);
    }

  }


  
  return (
    <>
      <div className='p-3 hover:scale-105 duration-200 '>
        <div className="card w-98 bg-base-100 shadow-xl mb-10 border-2 dark:bg-slate-900 dark:text-white">
          {/* <Link to={'/update'}> */}
          <div  className="w-6 h-6 mt-5 ml-5 cursor-pointer w-8 ">
        <svg onClick={()=>submit(event)} id={item._id}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"  className=' z-0'  >
          <path onClick={()=>submit(event)} id={item._id} strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
        </svg> 
        </div>
        {/* </Link> */}
        <Update item={bookId} />

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