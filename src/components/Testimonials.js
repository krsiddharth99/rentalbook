import React from 'react'
import testimonial1 from '../assets/Testimonial1.jpg'
import testimonial2 from '../assets/Testimonial2.jpg'

function Testimonials() {
    return (
        <div className='bg-gray-100 p-4'>
            <div className='text-xl font-bold text-center mt-4'>
                TESTIMONIALS
            </div>

            <div className='flex flex-wrap p-8 justify-evenly'>
                <div className='m-auto max-w-screen-sm bg-white p-12 shadow-lg relative mb-24'>
                    I'm amazed by the extensive book collection and the user-friendly experience this library offers. It's become my go-to place for literary adventures, and I love the supportive reading community here. An absolute must for book enthusiasts!
                    <div className='h-32 w-32 bg-green-100 absolute right-5 rounded-full border-4 '>
                        <img src={testimonial1} className='rounded-full w-full h-full object-cover' alt='Divya Gonja'/>
                    </div>
                    <div className='absolute right-40 bottom-2 font-semibold'>
                        DIVYA GONJA
                    </div>
                </div>
                <div className='m-auto max-w-screen-sm bg-white p-12 shadow-lg relative mb-24'>
                I'm impressed with this online book library. It's a literary paradise with a diverse collection of books. The user-friendly interface and the ability to access it from anywhere make it an invaluable resource for all book lovers. Highly recommended
                    <div className='h-32 w-32 bg-green-100 absolute right-5 rounded-full border-4 '>
                        <img src={testimonial2} className='rounded-full w-full h-full object-cover' alt='David Joseph'/>
                    </div>
                    <div className='absolute right-40 bottom-2 font-semibold'>
                        DAVID JOSEPH
                    </div>
                </div>
              
            </div>

        </div>
    )
}

export default Testimonials