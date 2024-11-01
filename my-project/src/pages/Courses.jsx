import React from 'react';
import { MdAccessTime, MdGrade } from 'react-icons/md';
import FrontEnd from '../assets/frontend.jpeg';
import BackEnd from '../assets/backend.jpeg';
import DataScience from '../assets/data.jpeg';
import GraphicDesign from '../assets/images.jpeg';
import PublicSpeaking from '../assets/public.png';
import { Link } from 'react-router-dom'; // Ensure you import Link for navigation
import { motion } from 'framer-motion';

// Sample data for courses with actual images
const coursesData = [
  {
    id: 1,
    title: 'Front end',
    description: 'Learn the basics of front end, tools, and best practices. This course covers HTML, CSS, and JavaScript.',
    duration: '4 weeks',
    level: 'Beginner',
    imageUrl: FrontEnd,
    skillEnhancement: 'Improve your coding skills and learn to work in teams.',
    free: true,
  },
  {
    id: 2,
    title: 'Back end',
    description: 'Deep dive into JavaScript concepts, including ES6 features, asynchronous programming, and more.',
    duration: '6 weeks',
    level: 'Intermediate',
    imageUrl: BackEnd,
    skillEnhancement: 'Master JavaScript and enhance your problem-solving skills.',
    free: true,
  },
  {
    id: 3,
    title: 'Data Analytics',
    description: 'A comprehensive guide to analyzing data.',
    duration: '5 weeks',
    level: 'Beginner',
    imageUrl: DataScience,
    skillEnhancement: 'Build interactive user interfaces and web applications.',
    free: true,
  },
  {
    id: 4,
    title: 'Graphic Design',
    description: 'Deep dive into graphic design using tools like Adobe Photoshop and Illustrator.',
    duration: '8 weeks',
    level: 'Introduction',
    imageUrl: GraphicDesign,
    skillEnhancement: 'You will enhance your skills; no prior experience is needed.',
    free: true,
  },
  {
    id: 5,
    title: 'Public Speaking',
    description: 'Enhance your public speaking skills and learn to communicate effectively.',
    duration: '4 weeks',
    level: 'Beginner',
    imageUrl: PublicSpeaking,
    skillEnhancement: 'Gain confidence and improve your presentation skills.',
    free: true,
  },
];

function CourseCard({ course }) {
  return (
    <motion.div 
      className='max-w-sm p-4 transition-transform duration-200 transform bg-white rounded-lg shadow-lg hover:scale-105'
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className='h-40 overflow-hidden rounded-t-lg'>
        <img src={course.imageUrl} alt={course.title} className='object-cover w-full h-full transition-transform duration-300 hover:scale-110' />
      </div>
      <h4 className='mt-2 text-lg font-semibold'>{course.title}</h4>
      <p className='text-sm text-gray-600'>{course.description}</p>
      <div className='flex items-center mt-1'>
        <MdAccessTime className='mr-1 text-gray-500' />
        <span className='text-sm text-gray-500'>Duration: {course.duration}</span>
      </div>
      <div className='flex items-center mt-1'>
        <MdGrade className='mr-1 text-gray-500' />
        <span className='text-sm text-gray-500'>Level: {course.level}</span>
      </div>
      <p className='mt-1 text-sm text-gray-700'>{course.skillEnhancement}</p>
      <p className='mt-1'>
        <span className={`font-bold ${course.free ? 'text-green-500' : 'text-red-500'}`}>
          {course.free ? 'Free Course' : 'Paid Course'}
        </span>
      </p>
      <button className='px-3 py-1 mt-2 text-sm text-white bg-blue-500 rounded'>Enroll Now</button>
    </motion.div>
  );
}

function Courses() {
  return (
    <motion.div className='p-6 pt-20'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className='mb-6 text-3xl font-bold text-center text-black'>Our Courses</h3>
      
      {/* Professionally styled introduction paragraph */}
      <p className='max-w-3xl mx-auto mb-6 text-lg text-center text-gray-700'>
        <span className="font-semibold text-blue-600">At Our Platform,</span> we believe in making quality education accessible to all. 
        All our courses are <span className="font-bold text-green-500">completely free</span>, designed to empower learners with the skills to succeed in today's competitive environment. 
        Join us in bridging educational gaps and competing globally.
      </p>

      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {coursesData.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
      
      {/* Button contact */}
      <div className='flex flex-col items-center justify-center p-5 pt-10 mt-10 space-y-4 md:flex-row md:space-x-6 md:space-y-0'>
        <button className='px-6 py-2 text-white transition-colors bg-green-500 rounded shadow hover:bg-green-600'>
          <a href="/signup">JOIN NOW</a>
        </button>
        <button className='px-6 py-2 text-white transition-colors bg-blue-500 rounded shadow hover:bg-blue-600'>
          Contact Us: +1234567890
        </button>
      </div>

      {/* Footer Section */}
      <footer className="w-full py-12 text-gray-900 bg-gradient-to-r from-blue-300 to-indigo-150">
        <div className="container grid grid-cols-1 gap-12 px-6 mx-auto md:grid-cols-3 lg:px-8">
          
          {/* Quick Links Section */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-lg font-semibold text-indigo-700">Quick Links</h3>
            <Link to="/" className="hover:text-indigo-500">Home</Link>
            <Link to="/about" className="hover:text-indigo-500">About Us</Link>
            <Link to="/contact" className="hover:text-indigo-500">Contact</Link>
            <Link to="/signup" className="hover:text-indigo-500">Sign Up</Link>
          </div>
          
          {/* Newsletter Subscription Section */}
          <div>
            <h3 className="text-lg font-semibold text-indigo-700">Stay Updated</h3>
            <p className="mt-2 text-sm text-gray-600">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form className="flex mt-4">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full px-4 py-2 mr-2 text-gray-700 bg-white border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
              <button 
                type="submit" 
                className="px-4 py-2 font-semibold text-white bg-indigo-500 rounded-r-md hover:bg-indigo-600"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-lg font-semibold text-indigo-700">Contact Us</h3>
            <p className="text-sm text-gray-600">Email: support@example.com</p>
            <p className="text-sm text-gray-600">Phone: +123 456 7890</p>
            <p className="text-sm text-gray-600">Address: 123 Main St, City, Country</p>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="pt-8 mt-8 text-center border-t border-gray-200">
          <p className="text-sm text-gray-500">© 2024 Our Platform. All rights reserved.</p>
        </div>
      </footer>
      
    </motion.div>
  );
}

export default Courses;
