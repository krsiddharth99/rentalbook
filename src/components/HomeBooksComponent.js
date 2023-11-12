import React, { useEffect, useState } from 'react'
import BookCard from './BookCard'
import { Box } from '@mui/material'
import axios from 'axios';
import './Books.css';




function HomeBooksComponent(props) {

  const [books, setBooks] = useState([]);

  const [displayBooks, setDisplayBooks] = useState([]);


  useEffect(() => {
    axios.get(`http://localhost:8080/books`)
      .then((res) => {
        setBooks(res.data)
      })
      .catch((err) => console.log(err));
  }, [])


  function handleImageurl(url) {
    return url.startsWith("http") ? url : `http://localhost:8080/${url}`;
  }



  useEffect(() => {

      if (props.sliceNumber > 0) {
        setDisplayBooks(books.slice(0, props.sliceNumber))
      }

  }, [books, props.sliceNumber])








  return (
    <>

      <Box className="booksComponent gap-10 grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
        {

          books.length < 1 ? <div className='italic m-auto'>There are no books in the database.</div> :

            displayBooks && displayBooks.map(book =>
            (
              <BookCard key={book.book.id} id={book.book.id} title={book.book.name} author={book.book.author} rent_price={book.book.rent_price} imageUrl={handleImageurl(book.book.imageurl)} genres={book.genres} />
            ))
        }
      </Box >
    </>
  )
}

export default HomeBooksComponent
