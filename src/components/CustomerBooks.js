import React, { useEffect, useState } from 'react'
import BookCard from './BookCard'
import { Box } from '@mui/material'
import axios from 'axios';

import { useSearchFilter } from '../context/SearchFilterContext'

import './Books.css';




function CustomerBooks(props) {

  const [books, setBooks] = useState([]);

  const [displayBooks, setDisplayBooks] = useState([]);

  const [genre, setGenre] = useState('');

  const { searchFilter } = useSearchFilter();


  const [shouldApplyPropsCondition, setShouldApplyPropsCondition] = useState(false); // to avoid constant re-rendering of the 2nd useEffect

  useEffect(() => {
    axios.get(`http://localhost:8080/books`)
      .then((res) => {
        setBooks(res.data)
        setDisplayBooks(res.data)
        setShouldApplyPropsCondition(true)
      })
      .catch((err) => console.log(err));
  }, [props.selectedGenre, props.sortBy])




  function handleImageurl(url) {
    return url.startsWith("http") ? url : `http://localhost:8080/${url}`;
  }


  // To make sure that the shouldApplyPropsCondition is set to true after there is a change in the searchFilter, so that the follow useEffect can run
  useEffect(()=>{
    setShouldApplyPropsCondition(true)
  },[searchFilter])


  useEffect(() => {

    setGenre(props.selectedGenre);

    if (shouldApplyPropsCondition) {
     if (props.selectedGenre !== undefined && props.selectedGenre !== null) {
        setDisplayBooks(books.filter((book) => book.genres.includes(props.selectedGenre)))
        setShouldApplyPropsCondition(false);
      }
      else if (props.latestAdditions) {
        setDisplayBooks(books.slice(5).reverse())
        setShouldApplyPropsCondition(false)
      }

      if (props.sortBy !== null) {

        if (props.sortBy === 'latestAdditions') {
          setDisplayBooks(books.reverse());
          if (genre !== null) {
            setDisplayBooks((prevBooks) => prevBooks.filter((book) => book.genres.includes(genre)));
          }
          setShouldApplyPropsCondition(false)
        } else if (props.sortBy === 'bookTitle') {
          setDisplayBooks(books.slice().sort((a, b) => a.book.name.localeCompare(b.book.name)))
          if (genre !== null) {
            setDisplayBooks((prevBooks) => prevBooks.filter((book) => book.genres.includes(genre)));
          }
          setShouldApplyPropsCondition(false);
        }else if (props.sortBy === 'price'){
          setDisplayBooks(books.slice().sort((a, b) => b.book.rent_price - a.book.rent_price));
          setShouldApplyPropsCondition(false);
        }

      }

      if (searchFilter !== null) {
        setDisplayBooks(books.filter((book) => book.book.name.toLowerCase().includes(searchFilter.toLowerCase())));
        setShouldApplyPropsCondition(false);
      }


    }
  }, [shouldApplyPropsCondition, books, props, genre, searchFilter])








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

export default CustomerBooks
