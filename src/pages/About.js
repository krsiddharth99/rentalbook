import React from 'react'
import about_background from '../assets/about_background.jpg'
import about_center from '../assets/about_center.png'
import david from '../assets/Testimonial2.jpg'
import divya from '../assets/Testimonial1.jpg'
import dhawan from '../assets/dhawanmvd.jpeg'
import krsiddharth from '../assets/krsiddharth.jpeg'
import sushant from '../assets/sushant.jpg'

function About() {

    const background = {
        background: `url(${about_background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        /* Other background properties here */
    };

    return (
        <>
            <div className='relative p-14 h-96 mb-8' style={background}>
                <img src={about_center} className='max-w-full max-w-md w-full h-auto absolute bottom-8 left-1/2 transform -translate-x-1/2' alt='' />
            </div>

            <div className='font-bold text-center text-2xl mb-8'>
                FullStack Group 10: Capstone Project
            </div>

            <div className='flex m-6 flex-wrap'>
                <div className='leading-7 flex-1 m-6 text-lg'>
                    <p className='font-bold text-xl'>About BookHive</p>
                    Welcome to BookHive, your premier online lending library! Immerse yourself in a world of literature where endless stories await. Discover a diverse collection of books spanning genres, from gripping novels to informative non-fiction. Join our community of book lovers, borrow your favorite titles, and indulge in the joy of reading without limits. Explore, learn, and experience the magic of storytelling at BookHive – where books come to life!<br /><br />
                    BookHive is the culmination of the collective effort of Group 10 in the FullStack Development specialization of the Masters in Computer Application Course at JAIN University. As a Capstone Group Project, our team has crafted this online lending library using React for the frontend and SpringBoot for the backend. This endeavor represents the skills and knowledge acquired through our MCA program on FullStack Deveopment. Join us as we showcase the culmination of our expertise and passion for FullStack Development
                </div>
                <div className='flex-1 m-6 mx-12'>
                    <div className='text-center font-bold text-xl'>
                        Meet the Team
                    </div>
                    <div className='flex flex-wrap mx-24 justify-evenly'>
                        <div className='mx-8 my-8'>
                            <img src={david} className='w-32' alt=''/>
                            <div className='text-center font-bold'>
                                David Joseph
                            </div>
                        </div>
                        <div className='mx-8 my-8'>
                            <img src={divya} className='w-32' alt=''/>
                            <div className='text-center font-bold'>
                                Divya Gonja
                            </div>
                        </div>
                        <div className='mx-8 my-8'>
                            <img src={krsiddharth} className='w-32' alt=''/>
                            <div className='text-center font-bold'>
                                KR Siddharth
                            </div>
                        </div>
                        <div className='mx-8 my-8'>
                            <img src={sushant} className='w-32' alt=''/>
                            <div className='text-center font-bold'>
                                Sushant Jha
                            </div>
                        </div>
                        <div className='mx-8 my-8'>
                            <img src={dhawan} className='w-32' alt=''/>
                            <div className='text-center font-bold'>
                                Dhawan MVD
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default About