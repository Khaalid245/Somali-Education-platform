// src/pages/About.jsx
import React, { useState } from 'react';
import { FaRocket, FaEye, FaProjectDiagram } from 'react-icons/fa';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Import social media icons
import { motion } from 'framer-motion'; // Import Framer Motion

function About() {
  const [showMissionDetails, setShowMissionDetails] = useState(false);
  const [showVisionDetails, setShowVisionDetails] = useState(false);
  const [showProjectDetails, setShowProjectDetails] = useState(false);

  return (
    <div className="flex flex-col items-center min-h-screen p-8 mt-12 text-gray-700">
      {/* Page Header */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold ">About Us</h1>
        <p className="max-w-lg mx-auto mt-2 text-lg">
          Welcome to our platform! We’re dedicated to delivering high-quality, accessible education to empower and inspire.
        </p>
      </header>

      {/* Vertical Card Container */}
      <div className="flex flex-col w-full max-w-6xl space-y-4">
        {/* Mission Card */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }} 
          className="relative flex flex-col p-6 transition-transform transform bg-white rounded-lg shadow-lg hover:scale-105"
        >
          <div className="flex items-center mb-4">
            <div className="p-2 bg-blue-100 rounded-full">
              <FaRocket className="text-3xl text-blue-600" />
            </div>
            <h2 className="ml-2 text-2xl font-semibold text-blue-600">Our Mission</h2>
          </div>
          <p className="mb-2 text-base leading-relaxed text-gray-600">
            Our mission is to create an inclusive learning environment that empowers individuals to reach their full potential.
          </p>
          <button 
            onClick={() => setShowMissionDetails(!showMissionDetails)}
            className="absolute px-4 py-2 text-white transition-colors bg-blue-600 rounded top-4 right-4 hover:bg-blue-700"
          >
            {showMissionDetails ? 'Show Less' : 'Learn More'}
          </button>
          {showMissionDetails && (
            <p className="mt-2 text-base leading-relaxed text-gray-600">
              We provide resources and support to help students build the skills they need for a bright future.
            </p>
          )}
        </motion.div>

        {/* Vision Card */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }} 
          className="relative flex flex-col p-6 transition-transform transform bg-white rounded-lg shadow-lg hover:scale-105"
        >
          <div className="flex items-center mb-4">
            <div className="p-2 bg-blue-100 rounded-full">
              <FaEye className="text-3xl text-blue-600" />
            </div>
            <h2 className="ml-2 text-2xl font-semibold text-blue-600">Our Vision</h2>
          </div>
          <p className="mb-2 text-base leading-relaxed text-gray-600">
            We envision a world where everyone has access to quality education and the opportunity to improve their lives.
          </p>
          <button 
            onClick={() => setShowVisionDetails(!showVisionDetails)}
            className="absolute px-4 py-2 text-white transition-colors bg-blue-600 rounded top-4 right-4 hover:bg-blue-700"
          >
            {showVisionDetails ? 'Show Less' : 'Learn More'}
          </button>
          {showVisionDetails && (
            <p className="mt-2 text-base leading-relaxed text-gray-600">
              Through innovation and dedication, we strive to be a leader in online learning for underserved communities.
            </p>
          )}
        </motion.div>

        {/* Project Card */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }} 
          className="relative flex flex-col p-6 transition-transform transform bg-white rounded-lg shadow-lg hover:scale-105"
        >
          <div className="flex items-center mb-4">
            <div className="p-2 bg-blue-100 rounded-full">
              <FaProjectDiagram className="text-3xl text-blue-600" />
            </div>
            <h2 className="ml-2 text-2xl font-semibold text-blue-600">About This Project</h2>
          </div>
          <p className="mb-2 text-base leading-relaxed text-gray-600">
            Our platform is designed to make learning accessible and engaging.
          </p>
          <button 
            onClick={() => setShowProjectDetails(!showProjectDetails)}
            className="absolute px-4 py-2 text-white transition-colors bg-blue-600 rounded top-4 right-4 hover:bg-blue-700"
          >
            {showProjectDetails ? 'Show Less' : 'Learn More'}
          </button>
          {showProjectDetails && (
            <p className="mt-2 text-base leading-relaxed text-gray-600">
              With a variety of courses and resources, we aim to help learners become confident and capable professionals.
            </p>
          )}
        </motion.div>
      </div>

      {/* Footer Section */}
      <footer className="w-full py-6 mt-8 text-white bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="mb-4 text-2xl font-bold">Stay Connected</h3>
          <div className="flex justify-center mb-4 space-x-4">
            <a href="#" className="hover:text-gray-200">
              <FaFacebook className="text-2xl" />
            </a>
            <a href="#" className="hover:text-gray-200">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="#" className="hover:text-gray-200">
              <FaLinkedin className="text-2xl" />
            </a>
            <a href="#" className="hover:text-gray-200">
              <FaInstagram className="text-2xl" />
            </a>
          </div>
          <p className="text-sm">© 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default About;
