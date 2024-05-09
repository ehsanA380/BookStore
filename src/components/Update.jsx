import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'
import axios from 'axios'
import {toast} from 'react-hot-toast'

function Update({item}) {

    const [spinner, setSpinner] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    // const [authUser,setAuthUser]=useAuth();

    // console.log("updae",item);

    const onSubmit = async (data) => {
        const bookInfo = {
            name: data.bname,
            price: data.bPrice,
            title: data.title,
            category: data.category,
            image: data.imgLink
        }
        console.log(bookInfo);
        
        setSpinner(true)
        try {
            
            
            const bookRes= await axios.put(`http://localhost:4001/book/update/${item}`,bookInfo)
            .then(res=>{

                setTimeout(() => {
                    
                    setSpinner(false);
                    document.getElementById('updateModalCloser').click()
                }, 1000);
                
                toast.success('Book updated successfully');
                
            })
            .catch((err)=>{
                console.log(err);
                setSpinner(false);
                toast.error("Error: "+err.response.data.message);
            })
        }
        catch (err) {
            console.log("internal server error",err);
            toast.error("Error: connection error",);
        }
    }
        // }
 
    

    return (
        <>
            
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" id='updateModalCloser'>✕</button>
                        </form>
                        <h3 className="font-bold text-lg">Update Book!</h3>
                        <div>
                            <form className='p-4' onSubmit={handleSubmit(onSubmit)}>

                                <div className='flex  flex-col mb-[-10px] md:flex-row border-1 '>
                                    <div className='px-1  w-1/2'>
                                        <label htmlFor='bname'> Name:</label>
                                        <input {...register("bname", { required: false })} type="text" placeholder='Enter the Book name' className="focus:border-green-500 w-full bg-transparent p-2 outline-none border rounded my-4" id='bname' />
                                        {errors.bname && <span className='block text-red-500 mt-[-10px] mb-5'>This field is required</span>}
                                    </div>
                                    <div className='px-1  w-1/2'>
                                        <label htmlFor='bPrice'> Price:</label>
                                        <input {...register("bPrice", { required: false })} type="text" placeholder='Enater the book price' className="focus:border-green-500 w-full bg-transparent p-2 outline-none border rounded my-4" id='bPrice' />
                                        {errors.bPrice && <span className='block text-red-500 mt-[-10px] mb-5'>This field is required</span>}
                                    </div>
                                </div>
                                <div className='flex  flex-col mb-[-10px] md:flex-row  '>
                                    <div className='px-1  w-1/2'>
                                        <label htmlFor='bname'> Title:</label>
                                        <input {...register("title", { required: false })} type="text" placeholder='Enter the book title' className="focus:border-green-500 w-full bg-transparent p-2 outline-none border rounded my-4" id='title' />
                                        {errors.title && <span className='block text-red-500 mt-[-10px] mb-5'>This field is required</span>}
                                    </div>
                                    <div className='px-1  w-1/2'>
                                        <label htmlFor='bPrice'> Category:</label>
                                        <select   {...register("category", { required: false })} type="text" className="dark:text-white focus:border-green-500 w-full bg-transparent p-2 outline-none border rounded my-4" id='category' >
                                            <option className='dark:text-black' disabled >Select</option>
                                            <option className='dark:text-black'  value='free'>Free</option>
                                            <option className='dark:text-black'  value='paid'>Paid</option>
                                        </select>
                                        {errors.category && <span className='block text-red-500 mt-[-10px] mb-5'>This field is required</span>}



                                    </div>
                                </div>

                                <div className='px-1'>
                                    <label htmlFor='bPrice'> Image Link:</label>
                                    <input {...register("imgLink", { required: false })} type="text" placeholder='Paste here your img link' className="focus:border-green-500 w-full bg-transparent p-2 outline-none border rounded my-4" id='imgLink' />
                                    {errors.imgLink && <span className='block text-red-500 mt-[-10px] mb-5'>This field is required</span>}
                                </div>
                                <br />

                                <div className='flex justify-between '>
                                    {
                                        spinner ?
                                            <span className="loading loading-spinner loading-lg"></span>

                                            :
                                            <button className='btn btn-sm btn-secondary rounded  block' >Add Book</button>


                                    }

                                    <h3 className='mt-1'>goto  <Link className='text-blue-500 underline cursor-pointer' to='/Course' >Courses</Link >

                                    </h3>

                                </div>
                            </form>
                        </div>
                    </div>
                </dialog>
        </>
    )
}

export default Update