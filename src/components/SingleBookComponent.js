import React from 'react'

import './SingleBookComponent.css';

function SingleBookComponent(props) {

  return (
    <>
    <div className="book-detail">
      <div className="book-cover">
        <img src={props.bookCover} alt="Book Cover" />
      </div>
      <div className="book-info">
        <h2 className='font-bold'>{props.title}</h2>
        <p><b>Author(s):</b> {props.author}</p>
        <p><b>Genres(s):</b> {props.genres.join(", ")}</p>
        <p><b>Description:</b> {props.description}</p>
        <p><b>Price:</b> Rs {props.rentPrice}</p>
        <button className="rent-button" onClick={()=>{
          // if(props.status === undefined || props.status === 'AVAILABLE'){
            props.addToCart()
            props.closeModal()
          // } else {
            // alert("This book has already been reserved by a customer.")
          // }
        }}>Add to Cart</button>
      </div>
    </div>
    </>
  )
}

export default SingleBookComponent