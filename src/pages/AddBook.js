import React, {useState} from 'react'
import AddBookWithGoogleAPI from '../Modals/AddBookWithGoogleAPI'
import {Box, Button, Modal} from '@mui/material'

import './AddBook.css';
import AddBookModal from '../Modals/AddBookModal';

function AddBook() {

    const [googleModal, setGoogleModal] = useState(false);

    const [addBookModal, setAddBookModal] = useState(false);

    const openGoogleBooksAPIModal = () => setGoogleModal(true);
    const closeGoogleBooksAPIModal = () => setGoogleModal(false);

    const openAddBookModal = () => setAddBookModal(true);
    const closeAddBookModal = () => setAddBookModal(false);


    return (


        <Box className="mainBox">
            <Button variant="contained"
                onClick={openGoogleBooksAPIModal}>Search on Google Books</Button>
            <Modal open={googleModal}
                onClose={closeGoogleBooksAPIModal}>
                <Box className="modal-box-container">
                    <AddBookWithGoogleAPI/>
                </Box>
            </Modal>

            <Button variant="contained"
                onClick={openAddBookModal}>Upload your own book</Button>
            <Modal open={addBookModal}
                onClose={closeAddBookModal}>
                <Box className="modal-box-container">
                    <AddBookModal closeModal={closeAddBookModal}/>
                </Box>
            </Modal>
        </Box>

    )
}
export default AddBook
