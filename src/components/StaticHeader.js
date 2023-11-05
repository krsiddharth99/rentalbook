import React from 'react'
import { AiTwotonePhone } from 'react-icons/ai'

function StaticHeader() {
    return (
        <>
            <div className="bg-green-600 flex flex-wrap py-2 px-4 lg:px-14 text-white justify-between space-x-4">
                <div className='hidden lg:flex'>
                    <div className='mr-4'>Books</div>
                    <div className='mr-4'>About Us</div>
                    <div className='mr-4'>Contact</div>
                </div>
                <div className='flex items-center'>
                <AiTwotonePhone /> &nbsp; +91 98765 4321
                </div>
                <div className='flex items-center'>
                    My Account
                </div>
            </div>
        </>
    )
}

export default StaticHeader