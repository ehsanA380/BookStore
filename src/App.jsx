import React from 'react'

import Home from './home/Home'
import { Route, Routes } from 'react-router-dom'
import Courses from './courses/Courses'
import SignUp from './components/SignUp'
import Contact from './contact/Contact'
import About from './about/About'


function App() {
  return (
    <>
      
<div className='dark:text-white dark:bg-slate-900  '>
<Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Course' element={<Courses/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Home/>} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/> }/>
      </Routes>
</div>
      
    </>
  )
}

export default App