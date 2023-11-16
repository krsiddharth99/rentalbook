import axios from 'axios';
import React, { useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useAuth } from '../context/DecodedToken'
import { useCartUpdate } from '../context/CartUpdateContext';
import { Box, Modal } from '@mui/material';
import BookPageModal from '../Modals/BookPageModal';

function BookCard(props) {


    const [bookPageModal, setBookPageModal] = useState(false);

    const { decodedToken, axiosHeaders } = useAuth();

    const { setShouldCartUpdate } = useCartUpdate();

    const addToCart = () => {

        if (decodedToken !== null) {

            axios.post(`http://localhost:8080/cart/${decodedToken.userId}/${props.id}`, axiosHeaders)
                .then((res) => {
                    console.log(axiosHeaders)
                    console.log(res)
                    setShouldCartUpdate(true)
                    alert(`${props.title} has been added to your cart!`)
                })
                .catch((err) => alert(err.response.data))
        } else {
            alert("You need to be logged in to add to cart!")
        }
    }

    return (
        <>
            <div className={props.status === undefined || props.status === 'AVAILABLE' ? '' : 'opacity-10'}>
                <div className='h-64 flex flex-col justify-center items-center'>
                    <img src={props.imageUrl} alt='' className='h-60 shadow-lg hover:scale-105 hover:shadow-lg hover:shadow-zinc-600 transition-all transition-duration-500 cursor-pointer' onClick={()=>setBookPageModal(true)}/>

                </div>
                <div className='text-center font-bold text-lg'>
                    {props.title}
                </div>
                <div className='text-center'>
                    by {props.author}
                </div>
                <div className='text-center text-sm' style={{ fontStyle: 'italic' }}>
                    [Genre: {props.genres.join(", ")}]
                </div>

                <div className='w-32 bg-gradient-to-b from-amber-50 to-gray-100 text-center mx-auto mt-2 h-10 flex justify-between items-center rounded-md border-4 border-gray-100 font-bold p-1'>
                    <div>
                        {`₹ ${props.rent_price}`}
                    </div>
                    <div className='text-white font-bold h-7 bg-gradient-to-b from-green-500 to-green-700 p-1 shadow-md text-center inline-block flex items-center hover:from-green-700 hover:to-green-800 hover:scale-105 transition-all transition-duration-1000 cursor-pointer' onClick={() => props.status === undefined || props.status === 'AVAILABLE' ? addToCart() : alert("This book is currently not available as it has been reserved / checked out by a user. You cannot add it to your cart.")}>
                        + <AiOutlineShoppingCart />
                    </div>

                </div>
            </div>


            <Modal open={bookPageModal}
                onClose={() => setBookPageModal(false)}>
                <Box className="modal-box-container">
                    <BookPageModal closeModal={() => setBookPageModal(false)} bookId = {props.id} addToCart={addToCart} status={props.status}/>
                </Box>
            </Modal>
        </>
    )
}

export default BookCard
