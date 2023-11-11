import axios from 'axios'
import { PiTrashFill } from 'react-icons/pi'
import { MdEditSquare } from 'react-icons/md'
import { useState } from 'react'
import UpdateBookModal from '../Modals/UpdateBookModal'
import { Box, Modal } from '@mui/material'

function SellerBookCard(props) {

    const handleDelete = () => {
        axios.delete(`http://localhost:8080/books/${props.id}`)
        .then((res) => {
            console.log(res)
            alert(`Successfully deleted "${props.title}"`)
            window.location.reload();
        })
        .catch((err) => console.log(err))
    }


    // UpdateModal
    const [updateModalIsOpen, setUpdateModalIsOpen] = useState(false);

    const openUpdateModal = () => setUpdateModalIsOpen(true)
    const closeUpdateModal = () => setUpdateModalIsOpen(false)
    

    return (
        <>
            <div className=''>
                <div className='h-64 flex flex-col justify-center items-center relative'>
                    <img src={props.imageUrl} alt='' className='h-60 shadow-lg' />
                    <div className='absolute bottom-0 right-20 text-4xl text-red-800 hover:text-6xl transition-all duration-650 cursor-pointer' onClick={handleDelete}>
                        <PiTrashFill />
                    </div>
                    <div className='absolute bottom-0 left-20 text-4xl text-blue-800 hover:text-6xl transition-all duration-650 cursor-pointer' onClick={openUpdateModal}>
                        <MdEditSquare />
                    </div>
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

                <Modal open={updateModalIsOpen}
                    onClose={closeUpdateModal}>
                    <Box className="modal-box-container">
                        <UpdateBookModal key={props.id} id={props.id} title={props.title} author={props.author} description={props.description} imageUrl={props.imageUrl} genres={props.genres} rent_price={props.rent_price} closeModal={closeUpdateModal} />
                    </Box>
                </Modal>


            </div>
        </>
    )
}

export default SellerBookCard
