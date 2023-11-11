import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SingleBookComponent from '../components/SingleBookComponent';

function BookPage() {

  const { bookid } = useParams();

  const [currentBook, setCurrentBook] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    axios.get(`http://localhost:8080/books/${bookid}`)
      .then((res) => {
        setCurrentBook(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [bookid]);

  function handleImageurl(url){
    return url.startsWith("http") ? url : `http://localhost:8080/${url}`;
  }

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <SingleBookComponent key={currentBook.book.id} title={currentBook.book.name} author={currentBook.book.author} description={currentBook.book.description} bookCover={handleImageurl(currentBook.book.imageurl)} rentPrice={currentBook.book.rent_price} genres={currentBook.genres} />
      )}
    </>
  )
}

export default BookPage