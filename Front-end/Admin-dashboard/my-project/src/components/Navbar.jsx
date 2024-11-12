import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCog, FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full p-4 text-white bg-red-400">
      <div className="flex items-center justify-between">
        {/* Dashboard Title */}
        
        {/* Hamburger Icon for Mobile */}
        <button
          className="block md:hidden"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Menu */}
        <div className="items-center hidden gap-4 md:flex">
          {/* Settings Link with Icon */}
          <Link to="/settings" className="flex items-center text-sm hover:text-gray-300">
            <FaUserCog className="mr-1" />
            Settings
          </Link>

          {/* Profile Link with Icon */}
          <Link to="/profile" className="flex items-center text-sm hover:text-gray-300">
            <FaUserCircle className="mr-1" />
            Profile
          </Link>

          {/* Placeholder for Profile Picture */}
          <div className="flex items-center justify-center w-8 h-8 bg-gray-600 rounded-full">
            <span className="text-white">K</span> {/* Displaying the initial */}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="flex flex-col items-center space-y-2 md:hidden">
          <Link
            to="/settings"
            className="flex items-center text-sm hover:text-gray-300"
            onClick={toggleMobileMenu}
          >
            <FaUserCog className="mr-1" />
            Settings
          </Link>
          <Link
            to="/profile"
            className="flex items-center text-sm hover:text-gray-300"
            onClick={toggleMobileMenu}
          >
            <FaUserCircle className="mr-1" />
            Profile
          </Link>
          <div className="flex items-center justify-center w-8 h-8 bg-gray-600 rounded-full">
            <span className="text-white">K</span> {/* Displaying the initial */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
