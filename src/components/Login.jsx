import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"




function Login() {
 
    

    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
    return (
        <>
            <div>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box  dark:bg-slate-900 dark:text-white">
                        <form method="dialog" >
                            {/* if there is a button in form, it will close the modal */}
                            <button  className=" btn btn-sm btn-circle btn-ghost absolute right-2 top-2" >✕ </button>
                            {/* <button   >✕</button> */}
                        </form>
                        <h3 className="font-bold text-lg">Login!</h3>
                        <div>
                            <form className='p-4 ' onSubmit={handleSubmit(onSubmit)}>
                                <label htmlFor="email">Email</label>
                                <br />
                                <input {...register("email", { required: true })} type="text" id='email' placeholder='Enter your email' className='bg-transparent p-2 outline-none border rounded my-4' />
                                {errors.email && <span className='block text-red-500 mt-[-10px] mb-5'>This field is required</span>}
                                <label htmlFor="password" className='block'  >Password</label>
                                <input {...register("password", { required: true })} type="password" id='password' placeholder='Enter your password ' className='bg-transparent p-2 outline-none border rounded my-4' />
                                {errors.password && <span className='block text-red-500  mt-[-10px] mb-5'>This field is required</span>}
                                <div className='flex justify-between '>
                                    <button className='btn btn-sm btn-secondary rounded  block'>Login</button>
                                    <h3 className='mt-3'>Not registered? <Link className='text-blue-500 underline cursor-pointer' to='/signup' >Signup</Link></h3>
                                </div>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </>
    )
}

export default Login