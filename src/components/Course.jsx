import React from 'react'
import {useState , useEffect} from 'react'
import list from '../../public/list.json'
import Cards from './Cards'
import {Link} from 'react-router-dom'
import axios  from  'axios'
function Course() {
  const [book,setBook]= useState([]);
  const [loadingBook, setLoadingBook] = useState(true);
  const slideArr= [1,2,3,4,5,6,7,8,9,10,11,12];
  


  useEffect(()=>{
    const getBook = async ()=>{
      try{
       const res= await axios.get('https://bookstore-backend-v5wi.onrender.com/book')
      //  const res= await axios.get('http://localhost:4001/book')
        // console.log(res.data);
        setBook(res.data)
        setLoadingBook(false)
      }catch(err){
        console.log(err);
      }

    }
    getBook();
  },[])
  return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
            <div className='pt-28 item-center justify-center text-center'>
                <h1 className='text-2xl  md:text-4xl  '>We're delighted to have you <span className='text-pink-500'> Here! :)</span></h1>
                <p className='text-center mt-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum eius impedit fuga quis soluta sequi dolorem natus, pariatur veritatis aspernatur quae ea repudiandae doloribus voluptas illo reiciendis modi, quidem ut sapiente. Omnis, quasi?Lorem ipsum dolor, sit amet consectetur elit. Dolorem soluta fuga provident? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel magni sapiente architecto!</p>
                <Link to={'/'}><button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md  hover:bg-pink-700 duration-300'>Back</button></Link>
            </div>
                <div className='mt-12 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 '>
                  {
                    loadingBook?
                    slideArr.map(data=>(
                      <div className='p-3 hover:scale-105 duration-200 '>
                      <div className=" card w-98 h-96 bg-base-100 shadow-xl mb-10 border-2">
                      <div className="skeleton h-full w-full "></div>
                      </div>
                    </div>
                    ))
                    :
                    book.map(item=>(
                    <Cards item={item} key={item.id}/>
                    ))
                  }
                
                </div>
        </div>
    </>
  )
}

export default Course