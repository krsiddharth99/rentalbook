import React from 'react'

import './BookCard.css'

function BookCard(props) {
  return (
    <>
        <div className='bookCard'>
            <div className='cardImage'>
                <img src={props.imageUrl} alt=''/>
                
            </div>
            <div className='cardTitle'>
                {props.title}
            </div>
            <div className='cardAuthor'>
                {props.author}
            </div>
            <div className='cardButton'>
                <button>
                    {`Rent - ₹ ${props.rent_price}`}
                </button>
            </div>
        </div>
    </>
  )
}

export default BookCard
