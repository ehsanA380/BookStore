import React from 'react'
import { useForm } from "react-hook-form"
import Slider from "react-slick";
import List from '../../public/list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from './Cards';

function Freebook() {
  const filterData = List.filter((data) => (data.category === "Free"));
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
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  console.log(filterData);
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-5 '>
        <div space-y-10>

          <h1 className='font-semi-bold text-xl pb-2'>Free Offered Course</h1>
          
        </div>
        <div className=''>
          <Slider {...settings}>
          {filterData.map(item=>(
            <Cards item={item} key={item} />
          ))}
          </Slider>
        </div>
      </div>
    </>
  )
}

export default Freebook