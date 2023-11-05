import React, { useEffect, useState } from 'react'
import BookCard from './BookCard'
import { Box } from '@mui/material'
import axios from 'axios';

import './Books.css';




function Books(props) {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/books`)
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }, [])

  function handleImageurl(url){
    return url.startsWith("http") ? url : `http://localhost:8080/${url}`;
  }


   const displayBooks = props.sliceNumber > 0 ? books.slice(0, props.sliceNumber) : books.slice(props.sliceNumber);


  return (
    <Box className="booksComponent gap-10 grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
      {
        displayBooks.map(book => (
          <a key={book.id} href={`http://localhost:3000/books/${book.id}`} target="_blank" rel="noopener noreferrer">
            <BookCard key={book.id} title={book.name} author={book.author} rent_price={book.rent_price} imageUrl={handleImageurl(book.imageurl)} />
          </a>
        ))
      }

    </Box>
  )
}

export default Books
