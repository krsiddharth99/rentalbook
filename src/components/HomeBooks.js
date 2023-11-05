import React from 'react'
import Books from './Books.js'

function HomeBooks() {
  return (
    <div className='p-4 mb-8'>
      <div className='text-xl font-bold text-center mt-4'>
        BROWSE BOOKS
      </div>
      <Books sliceNumber={5}/>

      <div className='mt-8 mx-auto text-white font-semibold bg-gradient-to-b from-green-500 to-green-700 p-2 shadow-md w-32 text-center'>
        VIEW MORE
      </div>
    </div>
  )
}

export default HomeBooks