import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
        <div className="container">
           
            <nav className='w-full flex justify-center py-5 bg-green-800 '>
                <ul className=' flex justify-end gap-5 '>
                    <li><Link to="/" className='text-xl font-semibold text-black'>Home</Link></li>
                    <li><Link to="/About" className='text-xl font-semibold text-black'>About</Link></li>
                    <li><Link to="/Login" className='text-xl font-semibold text-black'>Login</Link></li>
                </ul>
            </nav>
        </div>
    </>
  )
}

export default Navbar
