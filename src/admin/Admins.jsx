import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import Admin from '../components/Admin'
function Admins() {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen' >
        <Admin/>
    </div>
    <Footer/>

    </>
  )
}

export default Admins