import React, { useEffect, useState } from 'react'
import CustomerBooks from '../components/CustomerBooks'
import SideBarBooks from '../components/SideBarBooks'

function AllBooks() {

    const [selectedGenre, setSelectedGenre] = useState(null);

    useEffect(()=>{

    },[selectedGenre])


    return (
        <>
            <div className='p-8 bg-gray-100 text-2xl shadow-md text-center'>
                Books
            </div>

            <div className='flex'>
                <SideBarBooks setSelectedGenre = {setSelectedGenre} selectedGenre = {selectedGenre}/>
                <CustomerBooks selectedGenre = {selectedGenre}/>
            </div>


        </>
    )
}

export default AllBooks