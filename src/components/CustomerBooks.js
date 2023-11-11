import React, { useEffect, useState } from 'react'
import BookCard from './BookCard'
import { Box } from '@mui/material'
import axios from 'axios';

import './Books.css';




function CustomerBooks(props) {

  const [books, setBooks] = useState([]);

  const [shouldApplyPropsCondition, setShouldApplyPropsCondition] = useState(false); // to avoid constant re-rendering of the 2nd useEffect

  useEffect(() => {
    axios.get(`http://localhost:8080/books`)
      .then((res) => {
        setBooks(res.data)
        setShouldApplyPropsCondition(true)
      })
      .catch((err) => console.log(err));
  }, [props.selectedGenre])

  function handleImageurl(url) {
    return url.startsWith("http") ? url : `http://localhost:8080/${url}`;
  }


  useEffect(() => {

    if (shouldApplyPropsCondition) {
      if (props.sliceNumber > 0) {
        setBooks(books.slice(0, props.sliceNumber))
        setShouldApplyPropsCondition(false);
      } else if (props.selectedGenre !== undefined && props.selectedGenre !== null) {
        setBooks(books.filter((book)=>book.genres.includes(props.selectedGenre)))
        setShouldApplyPropsCondition(false);
      }
      else if (props.latestAdditions){
        setBooks(books.slice(5).reverse())
        setShouldApplyPropsCondition(false)
      }
    }
  }, [shouldApplyPropsCondition, books, props])




  return (
    <>

      <Box className="booksComponent gap-10 grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
        {

          books.length < 1 ? <div className='italic m-auto'>There are no books in the database.</div> :

            books && books.map(book =>
            (
              <BookCard key={book.book.id} id={book.book.id} title={book.book.name} author={book.book.author} rent_price={book.book.rent_price} imageUrl={handleImageurl(book.book.imageurl)} genres={book.genres} />
            ))
        }
      </Box >
    </>
  )
}

export default CustomerBooks
