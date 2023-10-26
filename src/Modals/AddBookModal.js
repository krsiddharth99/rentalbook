import axios from 'axios';
import React, { useState } from 'react'


function AddBookModal({closeModal}) {

    const [bookTitle, setBookTitle] = useState('');
    const [bookAuthor, setBookAuthor] = useState('');
    const [bookDescription, setBookDescription] = useState('');
    const [bookCover, setBookCover] = useState(null);
    const [rentPrice, setRentPrice] = useState(0);

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

        const fileName = bookTitle.replace(/ /g, '_') + '.' + bookCover.name.split('.').pop();

        const bookCoverFormData = new FormData();
        bookCoverFormData.append("fileName", fileName);
        bookCoverFormData.append("file", bookCover);

        axios.post('http://localhost:8080/upload/bookCover', bookCoverFormData)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));

        const bookData = [];
        bookData.push({
            "name": bookTitle,
            "author": bookAuthor,
            "description": bookDescription,
            "imageurl": `images/${fileName}`,
            "rent_price": parseFloat(rentPrice)
        }
        )

        console.log(bookData)

        axios.post('http://localhost:8080/books', bookData)
            .then(res => {
                console.log(res.data);
                closeModal();
                alert(`${bookTitle} has been added successfully!`);
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
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="bookTitle" type="text" onChange={(e) => setBookTitle(e.target.value)} required />
                    </div>
                    <div className="p-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bookAuthor">
                            Author of the book
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="bookAuthor" type="text" onChange={(e) => setBookAuthor(e.target.value)} required />
                    </div>
                    <div className="p-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bookDescription">
                            Book Description
                        </label>
                        <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="bookDescription" type="text" rows="5" onChange={(e) => setBookDescription(e.target.value)} required />
                    </div>
                    <div className="p-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bookCover">
                            Book Cover
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="bookCover" type="file" accept=".jpg, .jpeg, .png" onChange={bookCoverUpload} required />
                    </div>
                    <div className="p-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rentPrice">
                            Rent Price
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="bookAuthor" type="number" onChange={(e) => setRentPrice(e.target.value)} required />
                    </div>
                    <div className="p-4">
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type="submit">Add Book</button>
                    </div>
                </form>
                <img src={bookCover} alt='' />
            </div>
        </>
    )
}

export default AddBookModal