import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RiDeleteBin6Line } from 'react-icons/ri'
import axios from 'axios';
import { useAuth } from '../context/DecodedToken'
import { useCartUpdate } from '../context/CartUpdateContext';


function ViewCartModal({ cart }) {
  
  const { decodedToken, axiosHeaders } = useAuth();

  const { shouldCartUpdate, setShouldCartUpdate } = useCartUpdate();

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((accumulator, book) => accumulator + book.rent_price, 0));
  }, [setTotal, cart, shouldCartUpdate])



  const handleDeleteBook = (bookId)=>{
    axios.delete(`http://localhost:8080/cart/${decodedToken.userId}/${bookId}`, axiosHeaders )
    .then((res)=>alert(res.data))
    .catch((err)=>console.log(err))

    setShouldCartUpdate(true);
  }

  const handleCheckOut = () => {
    axios.post(`http://localhost:8080/cart/checkout/${decodedToken.userId}`, axiosHeaders)
    .then((res)=>alert(res.data))
    .catch((err) => console.log(err))

    setShouldCartUpdate(true);
  }


  const navigate = useNavigate();

  return (
    <>
      <div className='bg-white p-4 '>
        <div className='text-xl text-center font-semibold mb-6'>
          Your Cart
        </div>

        <table className='w-full text-left border-separate border border-slate-600 p-2 mb-4'>

          <thead>
            <tr>
              <th>Book</th>
              <th>Price</th>
              <th>Remove</th>
            </tr>
          </thead>

          <tbody>
            {cart.length > 0
              ?

              cart.map((book) => (
                <tr key={book.id} className='bg-gray-100' >

                  <td className='py-2 px-2 cursor-pointer' onClick={() => navigate(`/books/${book.id}`)}>
                    {book.name}
                  </td>
                  <td className='py-2 px-2 ' >Rs {book.rent_price}</td>
                  <td className='py-2 px-2 text-center flex justify-center cursor-pointer hover:scale-125' onClick={()=>handleDeleteBook(book.id)}> <RiDeleteBin6Line /></td>

                </tr>
              ))
              :
              ''
            }

            <tr className='bg-gray-100'>
              <th className='py-2 px-2'>Total</th>
              <th className='py-2 px-2 ' colSpan={2}>Rs {total}</th>
            </tr>
          </tbody>
        </table>

        <div className='flex justify-end'>
          <span className='font-semibold bg-gradient-to-b from-green-500 to-green-700 p-2 shadow-md text-white text-center cursor-pointer' onClick={handleCheckOut}>Checkout</span>
        </div>


      </div>
    </>
  )
}

export default ViewCartModal