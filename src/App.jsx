import React, { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast';
import Home from './home/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import Courses from './courses/Courses'
import SignUp from './components/SignUp'
import Contact from './contact/Contact'
import About from './about/About'
import Err404 from './components/Err404'
import { useAuth } from './context/AuthProvider';


function App() {
  const [authUser, setAuthUser] = useAuth()



  // console.log(authUser);
  return (
    <>
     

          <div className='dark:text-white dark:bg-slate-900  '>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Course' element={authUser ? <Courses /> : <Navigate to='/signup' />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/login' element={!authUser ? <Home /> : <Navigate to='/' />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/about' element={<About />} />
              <Route path='*' element={<Err404 />} />
            </Routes>
            <Toaster />
          </div>
      

    </>
  )
}

export default App
