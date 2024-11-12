// src/pages/Contact.jsx
import React from 'react';
import { FaUser, FaEnvelope, FaPhoneAlt, FaCommentDots } from 'react-icons/fa';
import { FiLinkedin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 mt-20 bg-gradient-to-r from-indigo-50 to-indigo-100">
      <h1 className="mb-4 text-4xl font-bold text-center text-gray-800">Contact Us</h1>
      <p className="mb-6 text-lg text-center text-gray-700">
        We’d love to hear from you! Please fill out the form below to get in touch.
      </p>
      
      <div className="flex flex-col w-full max-w-5xl p-6 bg-white rounded-lg shadow-lg md:flex-row">
        {/* Contact Information Section */}
        <div className="w-full p-4 mb-4 bg-gray-200 rounded-lg shadow-md md:w-1/3 md:mb-0">
          <h2 className="mb-4 text-2xl font-semibold text-blue-600">Contact Information</h2>
          <div className="flex items-center mb-4">
            <FaEnvelope className="mr-2 text-blue-600" />
            <span className="text-gray-700">Email: your-email@example.com</span>
          </div>
          <div className="flex items-center mb-4">
            <FaPhoneAlt className="mr-2 text-blue-600" />
            <span className="text-gray-700">Phone: Your Phone Number</span>
          </div>
          <div className="flex items-center mb-4">
            <FaCommentDots className="mr-2 text-blue-600" />
            <span className="text-gray-700">School: Your School Name</span>
          </div>
          <div className="mt-6">
            <h3 className="mb-2 text-lg font-semibold">Connect with Us</h3>
            <div className="flex space-x-4">
              {/* WhatsApp */}
              <a
                href="https://wa.me/YourWhatsAppNumber"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-500 transition duration-200 hover:text-blue-600"
              >
                <FaWhatsapp className="text-2xl" />
              </a>

              {/* Email */}
              <a
                href="mailto:your-email@example.com"
                className="flex items-center text-blue-500 transition duration-200 hover:text-blue-600"
              >
                <FaEnvelope className="text-2xl" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/your-linkedin-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-500 transition duration-200 hover:text-blue-600"
              >
                <FiLinkedin className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <form className="w-full p-4 md:w-2/3">
          <h2 className="mb-4 text-2xl font-semibold">Get in Touch</h2>
          <div className="flex flex-col mb-4">
            <label htmlFor="name" className="mb-1 text-gray-700">Your Name</label>
            <div className="flex items-center border border-gray-800 rounded-lg">
        
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="flex-1 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="mb-1 text-gray-700">Your Email</label>
            <div className="flex items-center border border-gray-800 rounded-lg hover:border-blue-600">
             
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="flex-1 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="phone" className="mb-1 text-gray-700">Your Phone Number</label>
            <div className="flex items-center border border-gray-800 rounded-lg">
         
              <input
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
                className="flex-1 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="message" className="mb-1 text-gray-700">Your Message</label>
            <div className="flex items-center border border-gray-800 rounded-lg">
           
              <textarea
                id="message"
                rows="5"
                placeholder="Type your message here"
                className="flex-1 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <button className="w-full py-3 mt-4 font-semibold text-white transition duration-300 rounded-lg ">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
