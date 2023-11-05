import React from 'react'

function Features() {
  return (
    <div className='shadow-md bg-gray-50 flex flex-wrap p-12 justify-center'>

      <div className='h-48 rounded mx-12 w-72 bg-gray-100 p-4'>
        <div className='h-40 border border-gray-500 flex items-center flex-col justify-center'>
          <div className='text-center font-bold text-xl'>
            250+ BOOKS
          </div>
          <hr className='border-t-2 border-gray-500 w-1/2 my-2'/>
          <div className='text-center'>
            Browse our vast collection
          </div>
        </div>
      </div>

      <div className='h-48 rounded mx-12 w-72 bg-gray-100 p-4'>
        <div className='h-40 border border-gray-500 flex items-center flex-col justify-center'>
          <div className='text-center font-bold text-xl'>
            MULTIPLE LENDERS
          </div>
          <hr className='border-t-2 border-gray-500 w-1/2 my-2'/>
          <div className='text-center'>
            Anyone can become a lender
          </div>
        </div>
      </div>

      <div className='h-48 rounded mx-12 w-72 bg-gray-100 p-4'>
        <div className='h-40 border border-gray-500 flex items-center flex-col justify-center'>
          <div className='text-center font-bold text-xl'>
            FREE DELIVERY & PICKUP
          </div>
          <hr className='border-t-2 border-gray-500 w-1/2 my-2'/>
          <div className='text-center'>
            Your convenience is our priority
          </div>
        </div>
      </div>

    </div>
  )
}

export default Features