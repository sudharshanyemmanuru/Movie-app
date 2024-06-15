import React from 'react'
import Logo from '../MovieLogo.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-4'> 
        <img src={Logo} alt="" className='w-[50px]'/>
        <Link to="/" className='text-blue-500 text-3xl font-bold'>Movies</Link>
        <Link to="/watchlist" className='text-blue-500 text-3xl font-bold'>Watch List</Link>
    </div>
  )
}

export default Navbar