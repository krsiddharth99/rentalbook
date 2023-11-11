import React, { useEffect, useState } from 'react'
import AddBookWithGoogleAPI from '../Modals/AddBookWithGoogleAPI'
import { Box, Button, Modal } from '@mui/material'
import manageBooks_background from '../assets/manageBooks_background.jpg'
import addBookPic from '../assets/addBook.png'

import './ManageBooks.css';
import AddBookModal from '../Modals/AddBookModal';
import axios from 'axios'

import { useAuth } from '../context/DecodedToken'
import SellerBooks from '../components/SellerBooks'

function ManageBooks() {

    const { decodedToken } = useAuth();

    const [googleModal, setGoogleModal] = useState(false);

    const [addBookModal, setAddBookModal] = useState(false);

    const openGoogleBooksAPIModal = () => setGoogleModal(true);
    const closeGoogleBooksAPIModal = () => setGoogleModal(false);

    const openAddBookModal = () => setAddBookModal(true);
    const closeAddBookModal = () => setAddBookModal(false);


    const [existingBooks, setExistingBooks] = useState();


    const background = {
        background: `url(${manageBooks_background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        /* Other background properties here */
    };


    useEffect(() => {

        if (decodedToken && decodedToken.userId) {
            axios.get(`http://localhost:8080/books/seller/${decodedToken.userId}`)
                .then((response) => {
                    setExistingBooks(response.data);
                })
                .catch((err) => console.log(err));
        }

    }, [decodedToken])


    return (
        
        <>
            <div className='p-8 bg-gray-100 text-2xl shadow-md text-center mb-8'>
                Manage Books
            </div>


            <div className='p-14 flex flex-wrap items-center justify-evenly mb-8' style={background}>
                <img src={addBookPic} className='max-w-60 max-w-lg w-50 h-auto mr-4' alt='' />
                <div className='text-4xl text-white leading-relaxed'>
                    New Feature!
                    <br />
                    Quickly add books using the <span className='text-yellow-300 font-semibold'>Google Books API</span>.
                </div>
            </div>

            <div className='mb-8 '>
                <div className='text-center text-2xl'>
                    Your Books
                </div>
            </div>

            <SellerBooks userBooks={existingBooks}/>


            <Box className="mainBox">
                <Button variant="contained"
                    onClick={openGoogleBooksAPIModal}>Search on Google Books</Button>
                <Modal open={googleModal}
                    onClose={closeGoogleBooksAPIModal}>
                    <Box className="modal-box-container">
                        <AddBookWithGoogleAPI />
                    </Box>
                </Modal>

                <Button variant="contained"
                    onClick={openAddBookModal}>Upload your own book</Button>
                <Modal open={addBookModal}
                    onClose={closeAddBookModal}>
                    <Box className="modal-box-container">
                        <AddBookModal closeModal={closeAddBookModal} />
                    </Box>
                </Modal>
            </Box>

        </>

    )
}
export default ManageBooks
