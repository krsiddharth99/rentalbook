import React, { useEffect, useRef, useState } from 'react'
import { AiTwotonePhone } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/DecodedToken';


function StaticHeader() {

    const navigate = useNavigate();



    const { decodedToken } = useAuth();

    // Dropdown menu for Profile name

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const dropdownRef = useRef(null);
    const profileNameRef = useRef(null);


    useEffect(() => {

        // Add event listener to handle clicks outside of the dropdown
        const handleOutsideClick = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target) && !profileNameRef.current.contains(e.target)) {
                // Click occurred outside of the dropdown, close it
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            // Remove the event listener when the component unmounts
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [decodedToken]);


    const toggleDropDown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }

    const handleLogout = () => {
        localStorage.clear();
        setIsDropdownOpen(false);
        window.location.reload();
    }




    return (
        <>  
            <div className="bg-green-600 flex flex-wrap py-2 px-4 lg:px-14 text-white justify-between space-x-4">
                <div className='hidden lg:flex'>
                    <div className='mr-4 cursor-pointer' onClick={()=>navigate('/books')}>Books</div>
                    <div className='mr-4'>About Us</div>
                    <div className='mr-4'>Contact</div>
                </div>
                <div className='flex items-center'>
                    <AiTwotonePhone /> &nbsp; +91 98765 4321
                </div>

                <div className='relative'>
                    {localStorage.getItem('userFirstName') !== null && localStorage.getItem('userLastName') !== null ?
                        <div ref={profileNameRef} className='flex items-center cursor-pointer' onClick={toggleDropDown}>{localStorage.getItem('userFirstName')} {localStorage.getItem('userLastName')}</div>
                        :
                        <div className='flex items-center cursor-pointer' onClick={() => navigate('/login')}> Login </div>
                    }

                    {isDropdownOpen && decodedToken.roles === 'CUSTOMER' && (
                        <ul ref={dropdownRef} className="absolute z-10 top-6 left-0 w-32 mt-2 bg-green-600 shadow-lg">
                            <li className="cursor-pointer p-2 hover:bg-green-500 border">
                                Profile
                            </li>
                            <li className="cursor-pointer p-2 hover:bg-green-500 border" onClick={handleLogout}>
                                Logout
                            </li>
                        </ul>
                    )}


                    {isDropdownOpen && decodedToken.roles === 'SELLER' && (
                        <ul ref={dropdownRef} className="absolute z-10 top-6 left-0 w-32 mt-2 bg-green-600 shadow-lg">
                            <li className="cursor-pointer p-2 hover:bg-green-500 border">
                                Profile
                            </li>
                            <li className="cursor-pointer p-2 hover:bg-green-500 border" onClick={()=> navigate('/managebooks/')}>
                                Manage Books
                            </li>
                            <li className="cursor-pointer p-2 hover:bg-green-500 border" onClick={handleLogout}>
                                Logout
                            </li>
                        </ul>
                    )}


                </div>



            </div>
        </>
    )
}

export default StaticHeader