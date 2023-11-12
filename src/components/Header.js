import React from "react";
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useNavigate } from "react-router-dom";
import { useSearchFilter } from '../context/SearchFilterContext'


function Header() {


  const {setSearchFilter} = useSearchFilter();
  const navigate = useNavigate();

  return (
    <div className='bg-lime-50 flex items-center py-4 px-12 justify-between'>


      <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
        <span className="ml-3 text-4xl" style={{fontFamily:'Griffy'}}>BookHive</span>
      </div>

      <div className="hidden lg:flex w-80 border-b-2 p-2 shadow-sm rounded-md bg-white">
        <input className="w-full outline-none" placeholder="Search Books" onChange={(e)=>setSearchFilter(e.target.value)} onKeyDown={(e)=>e.key === 'Enter' ? navigate('/books'): null}/>
        <span className='cursor-pointer' onClick={()=>navigate('/books')}>🔍</span>
      </div>

      <div className="flex items-center relative">
        <AiOutlineShoppingCart className="text-4xl"/>
        <div className="absolute bottom-5 left-5 w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-sm">2</div>
      </div>


    </div>
  );
}

export default Header;
