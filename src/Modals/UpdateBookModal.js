import axios from 'axios';
import React, { useState } from 'react'
import { useAuth } from '../context/DecodedToken';


function UpdateBookModal(props) {

    const { decodedToken, axiosHeaders } = useAuth();


    const [bookTitle, setBookTitle] = useState(props.title);
    const [bookAuthor, setBookAuthor] = useState(props.author);
    const [bookDescription, setBookDescription] = useState(props.description);
    const [bookCover, setBookCover] = useState(props.imageUrl);
    const [bookGenre, setBookGenre] = useState(props.genres.join(', '));
    const [rentPrice, setRentPrice] = useState(props.rent_price);


    function bookCoverUpload(e) {
        console.log(`Hi there`);
        if (e.target.files.length === 1) {
            setBookCover(e.target.files[0])
        } else {
            alert("You must upload exactly one file!");
        }
    }

    function handleSubmit(e) {
        e.preventDefault();

        const fileName = typeof(bookCover) !== 'string' ? bookTitle.replace(/ /g, '_') + '.' + bookCover.name.split('.').pop() : props.title.replace(/ /g, '_') + '.jpg'

        let bookData = {};

        if (typeof (bookCover) !== 'string') {
            const bookCoverFormData = new FormData();
            bookCoverFormData.append("fileName", fileName);
            bookCoverFormData.append("file", bookCover);

            axios.post('http://localhost:8080/upload/bookCover', bookCoverFormData, axiosHeaders)
                .then(res => console.log(res.data))
                .catch(err => console.log(err));
        }

        bookData = {
            "book": {
                "name": bookTitle,
                "author": bookAuthor,
                "description": bookDescription,
                "imageurl": props.imageUrl.includes("books.google.com") ? props.imageUrl : `images/${fileName}`,
                "rent_price": parseFloat(rentPrice)
            },
            "user_id": decodedToken.userId,
            "genres": bookGenre.split(',')
        }




        console.log(bookData)

        axios.put(`http://localhost:8080/books/${props.id}`, bookData, axiosHeaders)
            .then(res => {
                console.log(res.data);
                alert(`${bookTitle} has been updated successfully!`);
                window.location.reload()
            })
            .catch(err => console.log(err))

    }


    return (
        <>
            <div className='w-full'>
                <form className="bg-white shadow-md rounded px-8 py-1" onSubmit={handleSubmit}>
                    <div className="p-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bookTitle">
                            Book Title
                        </label>
                        <input defaultValue={props.title} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="bookTitle" type="text" onChange={(e) => setBookTitle(e.target.value)} required />
                    </div>
                    <div className="p-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bookAuthor">
                            Author of the book
                        </label>
                        <input defaultValue={props.author} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="bookAuthor" type="text" onChange={(e) => setBookAuthor(e.target.value)} required />
                    </div>
                    <div className="p-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bookDescription">
                            Book Description
                        </label>
                        <textarea defaultValue={props.description} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="bookDescription" type="text" rows="5" onChange={(e) => setBookDescription(e.target.value)} required />
                    </div>
                    <div className="p-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bookCover">
                            Book Cover <span className='italic font-thin'>If you do not upload a new cover, the previous cover will continue to be the cover.</span>
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="bookCover" type="file" accept=".jpg, .jpeg, .png" onChange={bookCoverUpload}/>
                    </div>
                    <div className="p-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rentPrice">
                            Rent Price
                        </label>
                        <input defaultValue={props.rent_price} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="bookAuthor" type="number" onChange={(e) => setRentPrice(e.target.value)} required />
                    </div>
                    <div className="p-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bookGenre">
                            Genre <span className='font-thin italic'>(You can add multiple Authors by placing a comma between each author)</span>
                        </label>
                        <input defaultValue={props.genres} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="bookGenre" type="text" onChange={(e) => setBookGenre(e.target.value)} required />
                    </div>
                    <div className="p-4">
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type="submit">Update Book</button>
                    </div>
                </form>
                <img src={bookCover} alt='' />
            </div>
        </>
    )
}

export default UpdateBookModal
