import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

function Delete() {
    const [spinner, setSpinner] = useState(false);
    const urlParams = new URLSearchParams(window.location.search);
    const BookId = urlParams.get('id');
    
    // funtion for delete book
    const deleleBook= async ()=>{
        // Delete Api interigation---------
        setSpinner(true);
        try{
            // const deleteBook= await axios.delete(`http://localhost:4001/book/deleteBook/${BookId}`)
            const deleteBook= await axios.delete(`https://bookstore-backend-v5wi.onrender.com/book/deleteBook/${BookId}`)
            .then(res=>{
                    if (!res.data.deleteBook.deletedCount) {
                    toast.error("This book has been already deleted! Please reload the page");
                    setSpinner(false);
                    document.getElementById('my_modal_5').close();
                    }
                    else{
                        toast.success(res.data.message);
                        console.log(res);
                        setSpinner(false);
                        document.getElementById('my_modal_5').close();
                    }
                    
                
            })
        }catch(err){
            toast.error('Error: internal server Error ',err.response.data.message)
            console.log(err);
            setSpinner(false)
            document.getElementById('my_modal_5').close();

        }

    }
    
  return (
    <>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box  dark:bg-slate-900 dark:text-white">
            <h3 className="font-semibold text-lg inline">Delete Book! </h3>
            (<h5 id='bookName' className='inline'> </h5>)
            <p className="py-4">Are you sure to delete this Book!</p>
            <div className="flex justify-between  ">
                {
                    spinner?
                    <span className="loading loading-spinner loading-lg"></span>
                    :
                    <button className="btn ml-4 btn-sm btn-secondary rounded  block " onClick={deleleBook} >Delete</button>
                }
                <button className="btn mr-4 btn-sm  rounded  block" onClick={()=>document.getElementById('my_modal_5').close()}>Close</button>
            </div>
        </div>
        </dialog>
    </>
  )
}

export default Delete