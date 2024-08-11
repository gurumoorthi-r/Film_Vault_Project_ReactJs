import React from 'react'
import BannerImg from '../assets/Banner.jpeg'
function Banner() {
  return (
    <div className=' relative h-[20vh] md:h-[80vh] bg-cover ' style={{backgroundImage: `url(https://brandfuge.com/wp-content/uploads/2019/03/The-Path-to-Avengers-Endgame-1140x641.jpg)`}}>
        <div className='absolute text-center bg-gray-600/70 text-white text-xl py-2 bottom-0 w-full '>Avengers</div>
    </div>
  )
}

export default Banner