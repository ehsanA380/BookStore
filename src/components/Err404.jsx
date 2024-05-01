import React from 'react'
import { Link } from 'react-router-dom'

function Err404() {
  return (
    <>
    <div className='min-h-screen flex justify-center items-center flex-col  dark:bg-slate-900 dark:text-white '>
      <h1 className='text-4xl md:text-8xl text-red-500'>404! </h1>
      <h1 className='text-4xl md:text-8xl '> page not found</h1>
      <Link to={'/'} className='border hover:bg-black duration-200 py-3 px-5 mt-3 rounded-full bg-secondary text-white cursor-pointer '>Back to home</Link>
    </div>
    </>
  )
}


export default Err404;