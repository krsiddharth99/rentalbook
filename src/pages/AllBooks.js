import React, { useEffect, useState } from 'react'
import CustomerBooks from '../components/CustomerBooks'
import SideBarBooks from '../components/SideBarBooks'
import { useSearchFilter } from '../context/SearchFilterContext';

function AllBooks() {

    const [selectedGenre, setSelectedGenre] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    const { searchFilter, setSearchFilter } = useSearchFilter();

    useEffect(()=>{
    },[selectedGenre, sortBy])


    return (
        <>
            <div className='p-8 bg-gray-100 text-2xl shadow-md text-center'>
                Books
            </div>

            <div className='flex'>
                <SideBarBooks setSelectedGenre = {setSelectedGenre} selectedGenre = {selectedGenre} sortBy={sortBy} setSortBy={setSortBy} searchFilter={searchFilter} setSearchFilter={setSearchFilter}/>
                <CustomerBooks selectedGenre = {selectedGenre} sortBy={sortBy} searchFilter={searchFilter}/>
            </div>


        </>
    )
}

export default AllBooks