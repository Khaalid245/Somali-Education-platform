import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaCog, FaUser, FaBell, FaSearch } from 'react-icons/fa';

const Header = ({ profilePicture }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // Toggle dropdown visibility
  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  // Handle Search Submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search?q=${searchTerm}`);
    }
  };

  return (
    <header className="p-4 text-white bg-indigo-600 shadow-md">
      <div className="container flex items-center justify-between mx-auto">
        {/* Title */}
        <h1 className="flex items-center text-sm font-bold ml-7 md:text-xl">
          Student Dashboard
        </h1>

        {/* Search Bar */}
        <form onSubmit={handleSearchSubmit} className="relative hidden md:block">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
            className="px-4 py-2 text-sm text-gray-700 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button type="submit" className="absolute text-gray-500 top-2 right-3">
            <FaSearch />
          </button>
        </form>

        <div className="flex items-center space-x-4">
          {/* Links with Icons */}
          <Link to="/courses" className="flex items-center px-2 text-sm hover:underline md:text-base">
            <FaHome className="mr-1" /> Home
          </Link>
          <Link to="/settings" className="flex items-center px-2 text-sm hover:underline md:text-base">
            <FaCog className="mr-1" /> Settings
          </Link>

          {/* Notifications Icon with Badge */}
          <div className="relative">
            <FaBell className="w-6 h-6 cursor-pointer" />
            <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
          </div>

          {/* Profile Icon / Dropdown */}
          <div className="relative">
            {profilePicture ? (
              <img
                src={profilePicture}
                alt="Profile"
                className="w-10 h-10 mr-2 border border-white rounded-full cursor-pointer"
                onClick={toggleDropdown}
              />
            ) : (
              <FaUser
                className="w-10 h-10 p-2 border border-white rounded-full cursor-pointer"
                onClick={toggleDropdown}
              />
            )}

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 z-10 w-32 mt-2 bg-white rounded-lg shadow-lg">
                <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100">
                  Profile
                </Link>
                <Link to="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100">
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
