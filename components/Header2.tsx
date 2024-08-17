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
    }, 200);
    setLeaveTimeout(timeout);
  };

  return (
    <>
    
      <div className="flex justify-between items-center bg-black text-white rounded-full px-5 sm:px-15 py-4 border border-gray-600 border-w-3/4 mx-auto">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <Image src={Logo} alt="Meskolabs Logo" width={40} height={40} />
            <p className="text-xl font-poppins">meskolabs</p>
          </Link>
        </div>
        <nav className="hidden md:flex space-x-8 items-center font-inter">
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              className="hover:text-gray-300 focus:outline-none"
            >
              Products
            </button>
            {showDropdown && <DropdownMenu />}
          </div>
          <Link href="/#services" className="hover:text-gray-300">Services</Link>
          <Link href="/about-us" className="hover:text-gray-300">About Us</Link>
          <Link href="/#contactUs" className="bg-white text-black py-2 px-5 text-sm rounded-full hover:bg-gray-300 hover:text-black border-2 border-black">
            Contact Us
          </Link>
        </nav>
        <div className="md:hidden">
          <button
            type="button"
            className="text-white hover:text-gray-300 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
     
      </div>
      {isOpen && (
        <nav className="md:hidden bg-[#1a1a1a] text-white font-inter">
          <Link href="/#services" onClick={toggleMenu} className="block px-4 py-2 hover:text-gray-300">Services</Link>
          <Link href="/about-us" onClick={toggleMenu} className="block px-4 py-2 hover:text-gray-300">About Us</Link>
          <Link href="/#contactUs" onClick={toggleMenu} className="block px-4 py-2 hover:text-gray-300">Contact Us</Link>
        </nav>
      )}
    </>
  );
};

export default Header;
