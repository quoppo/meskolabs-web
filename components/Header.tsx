import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../public/assets/meskolabLogo.png'

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className="flex justify-between items-center px-5 sm:px-20 py-4">
        <div>
          <Link href="/" className='flex items-center gap-3'>
            <Image src={Logo} alt="Meskolabs Logo" width={40} height={40} />
            <p className='text-xl font-poppins'>meskolabs</p>
          </Link>
        </div>
        <nav className="hidden md:flex space-x-6 items-center font-inter">
          <Link href="/" className="text-gray-700 hover:text-gray-900">Page</Link>
          <Link href="/" className="text-gray-700 hover:text-gray-900">Page</Link>
          <Link href="/" className="text-gray-700 hover:text-gray-900">Page</Link>
          <Link href="/" className="bg-black text-white p-2 px-5 text-xs rounded-lg hover:bg-white hover:text-black border-2 border-black">Contact Us</Link>
        </nav>
        <div className="md:hidden">
          <button
            type="button"
            className="text-gray-700 hover:text-gray-900 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-white shadow-md font-inter">
          <Link href="/" onClick={toggleMenu} className="block px-4 py-2 text-gray-700 hover:text-gray-900">Page</Link>
          <Link href="/" onClick={toggleMenu} className="block px-4 py-2 text-gray-700 hover:text-gray-900">Page</Link>
          <Link href="/" onClick={toggleMenu} className="block px-4 py-2 text-gray-700 hover:text-gray-900">Page</Link>
          <Link href="/" onClick={toggleMenu} className="block px-4 py-2 text-gray-700 hover:text-gray-900">Contact</Link>
        </nav>
      )}
    </>
  )
}

export default Header
