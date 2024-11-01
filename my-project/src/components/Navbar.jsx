import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdHome, MdInfo, MdLibraryBooks, MdContactMail } from 'react-icons/md';
import { FiLogIn, FiUserPlus } from 'react-icons/fi';
import { GiOpenBook } from 'react-icons/gi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="top-0 z-50 w-full text-white bg-blue-500 ">
      <div className="flex items-center justify-between p-4 mx-auto max-w-7xl">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wider">
          Somali Learning
        </Link>

        {/* Desktop Menu */}
        <div className="items-center hidden space-x-6 text-xl md:flex">
          <Link to="/" className="flex items-center space-x-1 hover:underline">
            <MdHome className="text-lg" />
            <span>Home</span>
          </Link>
          <Link to="/about" className="flex items-center space-x-1 hover:underline">
            <MdInfo className="text-lg" />
            <span>About</span>
          </Link>
          <Link to="/courses" className="flex items-center space-x-1 hover:underline">
            <GiOpenBook className="text-lg" />
            <span>Courses</span>
          </Link>
          <Link to="/contact" className="flex items-center space-x-1 hover:underline">
            <MdContactMail className="text-lg" />
            <span>Contact</span>
          </Link>
          
        </div>

        {/* Auth Links */}
        <div className="hidden space-x-4 text-xl md:flex">
          <Link to="/signin" className="flex items-center space-x-1 hover:underline">
            <FiLogIn className="text-lg" />
            <span>Sign In</span>
          </Link>
          <Link to="/signup" className="flex items-center space-x-1 hover:underline">
            <FiUserPlus className="text-lg" />
            <span>Sign Up</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="text-white bg-blue-500 md:hidden">
          <Link to="/" className="block px-4 py-2 hover:bg-blue-600" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/about" className="block px-4 py-2 hover:bg-blue-600" onClick={toggleMenu}>
            About
          </Link>
          <Link to="/courses" className="block px-4 py-2 hover:bg-blue-600" onClick={toggleMenu}>
            Courses
          </Link>
          <Link to="/contact" className="block px-4 py-2 hover:bg-blue-600" onClick={toggleMenu}>
            Contact
          </Link>
          <Link to="/signin" className="block px-4 py-2 hover:bg-blue-600" onClick={toggleMenu}>
            Sign In
          </Link>
          <Link to="/signup" className="block px-4 py-2 hover:bg-blue-600" onClick={toggleMenu}>
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
