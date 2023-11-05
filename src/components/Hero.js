import React from 'react'
import harry_potter_series from '../assets/harry_potter_series.png'
import harry_potter_background from '../assets/hero_background.jpg'

function Hero() {
    
    const background = {
        background: `url(${harry_potter_background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        /* Other background properties here */
      };

  return (
    <div className='p-14 flex flex-wrap items-center justify-evenly' style={background}>
        <img src={harry_potter_series} className='max-w-full max-w-lg w-full h-auto mr-4'/>
        <div className='text-3xl text-white'>
            START READING<br/> the <span className='font-bold'>HARRY POTTER </span> Series today!
            <br/>
            <span className='text-sm'>All books now available on BookHive</span>
            <br />
            <div className='mt-8 text-base font-semibold bg-gradient-to-b from-green-500 to-green-700 p-2 shadow-md w-32 text-center inline-block'>
                VIEW MORE
            </div>
        </div>
    </div>
  )
}

export default Hero