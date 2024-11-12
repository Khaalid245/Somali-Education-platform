import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaBook, FaGraduationCap, FaUser, FaFolderOpen, FaCog, FaTimes } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Toggle Button for Mobile */}
      <button 
        className="fixed left-0 z-20 flex items-center justify-center ml-5 text-white bg-indigo-600 rounded-full shadow-lg top-6 lg:hidden"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar */}
      <aside 
        className={`fixed  inset-y-0 left-0 z-10 w-64 p-6 bg-indigo-700 text-white transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:w-64 lg:h-auto`}
      >
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-center text-white">Dashboard Menu</h2>
        </div>
        <ul>
          <li className="mb-4">
            <Link to="/courses" className="flex items-center p-3 text-white transition-colors rounded hover:bg-indigo-600">
              <FaBook className="mr-3" size={20} />
              Courses
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/upload-course" className="flex items-center p-3 text-white transition-colors rounded hover:bg-indigo-600">
              <FaGraduationCap className="mr-3" size={20} />
              Upload Course
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/dashboard" className="flex items-center p-3 text-white transition-colors rounded hover:bg-indigo-600">
              <FaUser className="mr-3" size={20} />
              Dashboard
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/users" className="flex items-center p-3 text-white transition-colors rounded hover:bg-indigo-600">
              <FaFolderOpen className="mr-3" size={20} />
              Users
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/settings" className="flex items-center p-3 text-white transition-colors rounded hover:bg-indigo-600">
              <FaCog className="mr-3" size={20} />
              Settings
            </Link>
          </li>
        </ul>
      </aside>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-0 bg-black opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
