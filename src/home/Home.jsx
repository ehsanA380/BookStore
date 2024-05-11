import React from 'react'
import Navbar from '../components/navbar'
import Banner from '../components/Banner'
import Freebook from '../components/Freebook'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen' >
      <Banner/>
      <Freebook/>
    </div>
    <Footer/>
    </>
  )
}

export default Home