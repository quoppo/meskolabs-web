import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/assets/meskolabLogo.png';

const DropdownMenu: React.FC = () => {
  return (
    <div className="absolute bg-white shadow-lg mt-2 rounded-lg w-48 z-10">
      <Link href="/kequel" className="block px-4 py-2 text-gray-700 hover:text-gray-900">Kequel</Link>
      <Link href="/dlvr" className="block px-4 py-2 text-gray-700 hover:text-gray-900">DLVR</Link>
      <Link href="/dronesports" className="block px-4 py-2 text-gray-700 hover:text-gray-900">Drone Sports India</Link>
      <Link href="/delta-robotics" className="block px-4 py-2 text-gray-700 hover:text-gray-900">Delta Robotics</Link>
    </div>
  );
};

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [leaveTimeout, setLeaveTimeout] = useState<NodeJS.Timeout | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    if (leaveTimeout) {
      clearTimeout(leaveTimeout);
      setLeaveTimeout(null);
    }
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setShowDropdown(false);
    }, 200); // Adjust the delay (in milliseconds) as needed
    setLeaveTimeout(timeout);
  };

  return (
    <>
      <div className={'relative flex justify-between items-center px-5 sm:px-15 py-4'} style={{ opacity: 1, transition: 'opacity 0.3s ease' }}>
        <div>
          <Link href="/" className='flex items-center gap-3'>
            <Image src={Logo} alt="Meskolabs Logo" width={40} height={40} />
            <p className='text-xl font-poppins'>meskolabs</p>
          </Link>
        </div>
        <nav className="hidden md:flex space-x-6 items-center font-inter relative">
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              Products
            </button>
            {showDropdown && <DropdownMenu />}
          </div>
          <Link href="/#services" className="text-gray-700 hover:text-gray-900">Services</Link>
          <Link href="/about-us" className="text-gray-700 hover:text-gray-900">About Us</Link>
          <Link href="/#contactUs" className="bg-white text-black p-2 px-5 text-xs rounded-full hover:bg-black hover:text-white border-2 border-black">Contact Us</Link>
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
          
          <Link href="/#services" onClick={toggleMenu} className="block px-4 py-2 text-gray-700 hover:text-gray-900">Services</Link>
          <Link href="/about-us" onClick={toggleMenu} className="block px-4 py-2 text-gray-700 hover:text-gray-900">About Us</Link>
          <Link href="/#contactUs" onClick={toggleMenu} className="block px-4 py-2 text-gray-700 hover:text-gray-900">Contact Us</Link>

        </nav>
      )}
    </>
  );
};

export default Header;
