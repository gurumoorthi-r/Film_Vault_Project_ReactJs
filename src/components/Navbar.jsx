import React from 'react'
import Logo from '../assets/MovieLogo.jpeg'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='flex border bg-gray-400 space-x-12 items-center pl-4 py-1'>
        <img className='w-[40px] border rounded-full border-blue-600 shadow-sm shadow-black' src={Logo}  alt="" />
        <Link  to="/" className='text-blue-600 text-xl font-bold'>Movies</Link>
        <Link  className='text-blue-600 text-xl font-bold' to="/watchlist">Watchlist</Link>
    </div>
  )
}

export default Navbar