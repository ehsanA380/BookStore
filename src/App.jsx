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
  const [loading, setLoading] = useState(true)

  const handleLoading = () => {
    setLoading(false);
  }


  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, [])


  // console.log(authUser);
  return (
    <>
      {
        loading ?
          <div className='w-screen h-screen dark:bg-black flex justify-center items-center'>
            <img src="https://cdn.dribbble.com/users/154752/screenshots/1244719/book.gif " className='rounded-full rounded-t-full md:w-96 md:h-96 w-40 h-40  border-2 border-black' alt="loading..." />
          </div>
          :

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
      }

    </>
  )
}

export default App