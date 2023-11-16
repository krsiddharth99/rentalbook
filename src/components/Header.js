import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useNavigate } from "react-router-dom";
import { useSearchFilter } from '../context/SearchFilterContext'
import { useAuth } from '../context/DecodedToken'
import axios from "axios";
import { useCartUpdate } from "../context/CartUpdateContext";
import { Box, Modal } from "@mui/material";
import ViewCartModal from "../Modals/ViewCartModal";


function Header() {

  const [cartModal, setCartModal] = useState(false);


  const { setSearchFilter } = useSearchFilter();
  const navigate = useNavigate();

  const { decodedToken, axiosHeaders } = useAuth();

  const [userCart, setUserCart] = useState([]);

  const { shouldCartUpdate, setShouldCartUpdate } = useCartUpdate();

  useEffect(() => {
    if (decodedToken !== undefined && decodedToken !== null) {

      axios.get(`http://localhost:8080/cart/${decodedToken.userId}`, axiosHeaders)
        .then((res) => {
          setUserCart(res.data)
        }
        )
        .catch((err) => console.log(err));
    }

    setShouldCartUpdate(false);

  }, [decodedToken, shouldCartUpdate, setShouldCartUpdate, axiosHeaders])



  return (
    <div className='bg-lime-50 flex items-center py-4 px-12 justify-between'>

      <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
        <span className="ml-3 text-4xl" style={{ fontFamily: 'Griffy' }}>BookHive</span>
      </div>

      <div className="hidden lg:flex w-80 border-b-2 p-2 shadow-sm rounded-md bg-white">
        <input className="w-full outline-none" placeholder="Search Books" onChange={(e) => setSearchFilter(e.target.value)} onKeyDown={(e) => e.key === 'Enter' ? navigate('/books') : null} />
        <span className='cursor-pointer' onClick={() => navigate('/books')}>🔍</span>
      </div>

      <div className="flex items-center relative">
        <AiOutlineShoppingCart className="text-4xl cursor-pointer" onClick={()=>setCartModal(true)}/>

        {userCart.length < 1 ? '' : <div className="absolute bottom-5 left-5 w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-sm">{userCart.length}</div>}

      </div>

      <Modal open={cartModal}
        onClose={()=>setCartModal(false)}>
        <Box className="modal-box-container">
          <ViewCartModal closeModal={()=>setCartModal(false)} cart={userCart}/>
        </Box>
      </Modal>


    </div>
  );
}

export default Header;
