import React, { useEffect, useState } from 'react'
import SellerBookCard from './SellerBookCard'
import { Box } from '@mui/material'
import './Books.css';




function SellerBooks(props) {

  const [books, setBooks] = useState([]);


  useEffect(() => {
        setBooks(props.userBooks)    
  }, [books, props])


  function handleImageurl(url) {
    return url.startsWith("http") ? url : `http://localhost:8080/${url}`;
  }


  return (
    <Box className="booksComponent gap-10 grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
      {
        
        books && books.length<1 ? <div className='italic m-auto'>You haven't added any books yet.</div> :

        books && books.map(book =>
        (
            <SellerBookCard key={book.book.id} id={book.book.id} title={book.book.name} author={book.book.author} description={book.book.description} rent_price={book.book.rent_price} imageUrl={handleImageurl(book.book.imageurl)} genres={book.genres} />
        ))
      }

    </Box >
  )
}

export default SellerBooks
