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
        <h2>{props.title}</h2>
        <p>Author(s): {props.author}</p>
        <p>Description: {props.description}</p>
        <p>Price: Rs {props.rentPrice}</p>
        <button className="rent-button">Rent</button>
      </div>
    </div>
    </>
  )
}

export default SingleBookComponent