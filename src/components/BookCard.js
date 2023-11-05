import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'

function BookCard(props) {
    return (
        <>
            <div className=''>
                <div className='h-64 flex flex-col justify-center items-center'>
                    <img src={props.imageUrl} alt='' className='h-60 shadow-lg' />

                </div>
                <div className='text-center font-bold text-lg'>
                    {props.title}
                </div>
                <div className='text-center'>
                    by {props.author}
                </div>
                <div className='w-1/3 bg-gradient-to-b from-amber-50 to-gray-100 text-center mx-auto mt-2 h-10 flex justify-between items-center rounded-md border-4 border-gray-100 font-bold p-1'>
                    <div>
                        {`₹ ${props.rent_price}`}
                    </div>
                    <div className='text-white font-bold h-7 bg-gradient-to-b from-green-500 to-green-700 p-1 shadow-md text-center inline-block flex items-center'>
                        + <AiOutlineShoppingCart />
                    </div>

                </div>
            </div>
        </>
    )
}

export default BookCard
