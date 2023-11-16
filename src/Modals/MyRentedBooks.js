import React, { useCallback, useEffect, useState } from 'react'
import { useAuth } from '../context/DecodedToken'
import axios from 'axios';
import { useCartUpdate } from '../context/CartUpdateContext';
import { IoMdReturnLeft } from "react-icons/io";

function MyRentedBooks() {

    const { decodedToken, axiosHeaders } = useAuth();

    const { shouldCartUpdate, setShouldCartUpdate } = useCartUpdate();

    const [rentedBooks, setRentedbooks] = useState([]);

    const handleReturn = useCallback((bookId) => {
        axios.delete(`http://localhost:8080/rented/return/${decodedToken.userId}/${bookId}`, axiosHeaders)
            .then((res) => alert(res.data))
            .catch((err) => console.log(err));
        setShouldCartUpdate(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[decodedToken.userId, setShouldCartUpdate, shouldCartUpdate, axiosHeaders])

    useEffect(() => {
        axios.get(`http://localhost:8080/rented/${decodedToken.userId}`, axiosHeaders)
            .then((res) => setRentedbooks(res.data))
            .catch((err) => console.log(err))
    }, [shouldCartUpdate, decodedToken.userId, axiosHeaders])

    return (

        <>
            <div className='p-8 bg-gray-100 text-2xl shadow-md text-center mb-8'>
                My Rented Books
            </div>

            <table className='w-full text-left border-separate border border-slate-600 p-2 mb-4'>

                <thead>
                    <tr>
                        <th>Book</th>
                        <th>Return</th>
                    </tr>
                </thead>

                <tbody>

                    {rentedBooks.length > 0
                        ? rentedBooks.map((book) => (
                            <tr key={book.id}>
                                <td>{book.name}</td>
                                <td className='cursor-pointer hover:scale-105' onClick={() => handleReturn(book.id)}><IoMdReturnLeft /></td>
                            </tr>
                        ))
                        : <tr>
                            <td>There are currently no books with you.</td>
                        </tr>
                    }

                </tbody>
            </table>


        </>

    )
}
export default MyRentedBooks
