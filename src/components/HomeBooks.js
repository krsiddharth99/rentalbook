import React from 'react'
import { useNavigate } from 'react-router-dom'
import HomeBooksComponent from './HomeBooksComponent.js';

function HomeBooks() {

  const navigate = useNavigate();

  return (
    <div className='p-4 mb-8'>
      <div className='text-xl font-bold text-center mt-4'>
        BROWSE BOOKS
      </div>
      <HomeBooksComponent sliceNumber={5}/>

      <div className='mt-8 mx-auto text-white font-semibold bg-gradient-to-b from-green-500 to-green-700 p-2 shadow-md w-32 text-center cursor-pointer' onClick={()=>navigate(`/books`)}>
        VIEW MORE
      </div>
    </div>
  )
}

export default HomeBooks