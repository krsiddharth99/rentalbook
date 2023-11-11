import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

function BookCard(props) {

    const navigate = useNavigate();

    return (
        <>
            <div className=''>
                <div className='h-64 flex flex-col justify-center items-center'>
                    <img src={props.imageUrl} alt='' className='h-60 shadow-lg hover:scale-105 hover:shadow-lg hover:shadow-zinc-600 transition-all transition-duration-500 cursor-pointer' onClick={() => navigate(`/books/${props.id}`)} />

                </div>
                <div className='text-center font-bold text-lg'>
                    {props.title}
                </div>
                <div className='text-center'>
                    by {props.author}
                </div>
                <div className='text-center text-sm' style={{ fontStyle: 'italic' }}>
                    [Genre: {props.genres.join(", ")}]
                </div>

                <div className='w-32 bg-gradient-to-b from-amber-50 to-gray-100 text-center mx-auto mt-2 h-10 flex justify-between items-center rounded-md border-4 border-gray-100 font-bold p-1'>
                    <div>
                        {`₹ ${props.rent_price}`}
                    </div>
                    <div className='text-white font-bold h-7 bg-gradient-to-b from-green-500 to-green-700 p-1 shadow-md text-center inline-block flex items-center hover:from-green-700 hover:to-green-800 hover:scale-105 transition-all transition-duration-1000 cursor-pointer'>
                        + <AiOutlineShoppingCart />
                    </div>

                </div>
            </div>
        </>
    )
}

export default BookCard
