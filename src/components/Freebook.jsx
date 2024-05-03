import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from './Cards';
import axios from 'axios'

function Freebook() {
  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
   
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const [book,setBook]= useState([]);

  useEffect(()=>{
    const getBook=async ()=>{
      try{
        const res = await axios.get('https://bookstore-backend-v5wi.onrender.com/book');
        const data=  res.data;
        const Freebook =  data.filter((data) => (data.category === "free"));
        setBook(Freebook);
        // console.log(Freebook);
      }
      catch(err){
        console.log(err);
      }
    }
    getBook();
  },[])
  
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-5 '>
        <div space-y-10>

          <h1 className='font-semi-bold text-xl pb-2'>Free Offered Course</h1>
          
        </div>
        <div className='px-5'>
          <Slider {...settings}>
          {book.map(item=>(
            <Cards item={item} key={item} />
          ))}
          </Slider>
        </div>
      </div>
    </>
  )
}

export default Freebook