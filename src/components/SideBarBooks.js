import axios from 'axios';
import React, { useEffect, useState } from 'react'

function SideBarBooks({ setSelectedGenre, selectedGenre }) {

    const [genres, setGenres] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/books/genres`)
            .then((res) => setGenres(res.data))
            .catch((err) => console.log(err))
    }, [])

    const handleGenreFilter = (clickedGenre, e) => {
        setSelectedGenre(clickedGenre);
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

                <ul>
                    {genres.map((genre) => (
                        <li key={genre.id} className={`cursor-pointer mb-2 hover:text-gray-400 ${selectedGenre === genre.genre ? 'font-bold' : ''}`} onClick={(e) => handleGenreFilter(genre.genre, e)}>{genre.genre}</li>
                    ))}
                </ul>

            </div>




        </>
    )
}

export default SideBarBooks