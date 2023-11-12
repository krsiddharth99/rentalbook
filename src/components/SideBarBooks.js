import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { useSearchFilter } from '../context/SearchFilterContext'

function SideBarBooks({ setSelectedGenre, selectedGenre, setSortBy, sortBy }) {

    const { setSearchFilter, searchFilter } = useSearchFilter();

    const [genres, setGenres] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/books/genres`)
            .then((res) => setGenres(res.data))
            .catch((err) => console.log(err))
    }, [])

    const handleGenreFilter = (clickedGenre, e) => {
        setSelectedGenre(clickedGenre);
    }

    const handleSortBy = (e) => {
        sortBy === e.target.id ? setSortBy(null) : setSortBy(e.target.id);
    }

    const handleClearSearchFilter = () => {
        setSearchFilter('')
    }


    return (
        <>
            <div className='w-80 p-8 pr-28 shadow-md'>
                <p className='font-semibold text-xl'>CATEGORIES</p>

                {selectedGenre === null ?
                    ''
                    :
                    <p className='font-thin text-sm italic mb-4 cursor-pointer text-blue-800' onClick={() => setSelectedGenre(null)}>Clear Filter</p>
                }

                <ul className='mb-8 overflow-y-auto w-64 h-96'>
                    {genres.map((genre) => (
                        <li key={genre.id} className={`cursor-pointer mb-2 hover:text-gray-400 ${selectedGenre === genre.genre ? 'font-bold' : ''}`} onClick={(e) => handleGenreFilter(genre.genre, e)}>{genre.genre}</li>
                    ))}
                </ul>

                <p className='font-semibold text-xl'>SORT BY</p>
                <ul className='mb-8 overflow-y-auto w-64'>
                    <li id="latestAdditions" className={`cursor-pointer mb-2 hover:text-gray-400 ${sortBy === 'latestAdditions' ? 'font-bold' : ''}`} onClick={(e) => handleSortBy(e)}>Latest Additions</li>
                    <li id="bookTitle" className={`cursor-pointer mb-2 hover:text-gray-400 ${sortBy === 'bookTitle' ? 'font-bold' : ''}`} onClick={(e) => handleSortBy(e)}>Book Title</li>
                    <li id="price" className={`cursor-pointer mb-2 hover:text-gray-400 ${sortBy === 'price' ? 'font-bold' : ''}`} onClick={(e) => handleSortBy(e)}>Price</li>
                </ul>

                {searchFilter === null || searchFilter === '' ? '' : <p className='text-md cursor-pointer italic hover:text-gray-400' onClick={handleClearSearchFilter}>Clear Search Filter</p>}

            </div>




        </>
    )
}

export default SideBarBooks