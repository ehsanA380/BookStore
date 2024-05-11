import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import Abouts from '../components/Abouts'

 function About() { 
  
   

    


  return (
    <>
      <div >
        <Navbar />
        <div className='min-h-screen'>
          <Abouts/>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default About