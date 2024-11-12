// src/pages/Home.jsx
import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { FaClock } from "react-icons/fa";
import HomeImage from '../assets/picture.png';
import FrontEnd from '../assets/frontend.jpeg';
import BackEnd from '../assets/backend.jpeg';
import DataScience from '../assets/data.jpeg';
import GraphicDesign from '../assets/images.jpeg'
import PublicSpeaking from '../assets/public.png'

import TechKh from '../assets/khalid.jpeg';
import TechM from '../assets/mubarak.jpg';
import TechH from '../assets/hamse.jpeg';


function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen pt-10 p-7 bg-gradient-to-r from-indigo-50 to-indigo-100">
      {/* Hero Section */}
     <div className="w-full max-w-5xl my-5">
      {/* Intro Section */}
      <motion.div 
        className="grid items-center gap-8 p-4 justify-items-center md:grid-cols-2 md:gap-12 md:p-8 lg:p-12"
        initial="hidden" 
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut", staggerChildren: 0.3 } }
        }}
      >
        
        {/* Text Section */}
        <motion.div
          className="p-5 mt-4 text-center md:text-left"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 1 } }
          }}
        >
          <h3 className="mb-4 text-2xl font-bold leading-tight text-indigo-800 sm:text-3xl lg:text-3xl">
            Anytime, Anywhere<br /> Access to Study Your Skills<br /> 
            Just Make It <span className="text-indigo-500">One Click</span>
          </h3>
          <p className="text-base text-gray-600 sm:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, perspiciatis. Asperiores, 
            placeat voluptatem corrupti nesciunt quod officiis!
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full max-w-md sm:max-w-lg md:max-w-full"
          variants={{
            hidden: { opacity: 0, x: 20 },
            visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } }
          }}
        >
          <img src={HomeImage} alt="Home Background" className="object-cover rounded-lg shadow-xl sm:h-64 md:h-72 lg:h-full" />
        </motion.div>
      </motion.div>

      {/* About Us Section */}
      <motion.div
        className="py-16 shadow-lg w-12/12 to-indigo-200"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut", staggerChildren: 0.3 } }
        }}
      >
        <div className="container px-6 mx-auto text-center md:px-12 lg:px-20">
          
          {/* Title and Introduction */}
          <motion.h2
            className="text-3xl font-bold text-indigo-800 md:text-4xl lg:text-5xl"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 1 } }
            }}
          >
            About Us
          </motion.h2>
          
          <motion.p
            className="mt-4 text-lg text-gray-700 md:text-xl"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.3 } }
            }}
          >
            Dedicated to empowering individuals with quality education and skills training, we strive to make learning accessible to all.
          </motion.p>

          {/* About Us Highlights */}
          <motion.div
            className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } }
            }}
          >
            {/* Card 1 */}
            <motion.div
              className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)" }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-indigo-100 rounded-full">
                <span className="text-3xl text-indigo-600">🎓</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-indigo-700">Our Mission</h3>
              <p className="mt-2 text-gray-600">
                To create an inclusive, high-quality educational environment that supports lifelong learning and skill development for all.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)" }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-indigo-100 rounded-full">
                <span className="text-3xl text-indigo-600">🤝</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-indigo-700">Our Vision</h3>
              <p className="mt-2 text-gray-600">
                To be a leading force in education and skills training, fostering empowerment and advancing communities worldwide.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)" }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-indigo-100 rounded-full">
                <span className="text-3xl text-indigo-600">🌍</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-indigo-700">Global Impact</h3>
              <p className="mt-2 text-gray-600">
                Connecting people from diverse backgrounds, we bring meaningful educational opportunities across borders.
              </p>
            </motion.div>

          </motion.div>
        </div>
      </motion.div>
    </div>

      {/* Courses Section */}
      <div className="w-full max-w-5xl mx-auto my-8 text-center">
  <h2 className="mb-10 text-3xl font-semibold text-indigo-700">Our Courses</h2>
  <motion.div
    className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
    initial="hidden"
    animate="visible"
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration: 0.5,
          staggerChildren: 0.3, // Stagger the child animations
        },
      },
    }}
  >
    {/* Course Card Component */}
    {[
      { title: "HTML & CSS", img: FrontEnd, instructor: "John Doe", duration: "4 Weeks", desc: "Learn the basics of web development with HTML and CSS. Perfect for beginners!", profile: TechKh },
      { title: "JavaScript", img: FrontEnd, instructor: "Sarah Lee", duration: "6 Weeks", desc: "Unlock the power of JavaScript and add interactivity to your websites.", profile: TechM },
      { title: "React", img: DataScience, instructor: "Alice Johnson", duration: "8 Weeks", desc: "Get started with React and learn to build dynamic, responsive applications.", profile: TechH },
      { title: "Tailwind CSS", img: GraphicDesign, instructor: "Michael Smith", duration: "3 Weeks", desc: "Style your websites with Tailwind CSS for rapid, modern designs.", profile: TechKh },
      { title: "Python Basics", img: PublicSpeaking, instructor: "Emily White", duration: "5 Weeks", desc: "Learn Python programming with a focus on practical applications and problem-solving.", profile: TechM }
    ].map((course, index) => (
      <motion.div
        key={index}
        className="flex flex-col p-6 transition-transform bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-1"
        variants={{
          hidden: { opacity: 0, y: 30 }, // Start slightly below
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" },
          },
        }}
        whileHover={{ scale: 1.03 }} // Slightly enlarge on hover
      >
        <img src={course.img} alt={course.title} className="object-cover w-full h-32 transition-transform duration-300 ease-in-out rounded-t-lg hover:scale-110" />
        
        <div className="flex-grow mt-4">
          <h3 className="mb-2 text-xl font-bold text-indigo-600">{course.title}</h3>
          <p className="text-gray-700">{course.desc}</p>
          
          <div className="flex items-center mt-4 text-sm text-gray-500">
            <img src={course.profile} alt={`Instructor ${course.instructor}`} className="w-8 h-8 mr-2 rounded-full" />
            <span>Instructor: {course.instructor}</span>
          </div>

          <div className="flex items-center mt-2 text-sm text-gray-500">
            <FaClock className="mr-1" />
            <span>Duration: {course.duration}</span>
          </div>
        </div>

        {/* Enroll Now Button */}
        <div className="flex justify-center mt-6">
          <button className="px-6 py-2 text-white transition-all duration-200 bg-indigo-600 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
            <a href="/signup">Enroll Now</a>
          </button>
        </div>
      </motion.div>
    ))}
  </motion.div>
</div>

{/* our Facilitator */}
  <div className="w-full max-w-5xl mx-auto my-10">
      {/* Facilitators Section Title */}
      <h2 className="mb-8 text-4xl font-bold text-center text-indigo-800">Our Facilitators</h2>
      <div className="flex flex-col items-center justify-center space-y-10 md:flex-row md:space-y-0 md:space-x-8">
        {/* Facilitator 1 */}
        <div className="flex flex-col items-center p-4 transition-transform transform rounded-lg shadow-md bg-gray-50 hover:shadow-xl hover:scale-105">
          <img src={TechKh} alt="Facilitator TechKh" className="w-32 h-32 transition-shadow duration-300 border-4 border-indigo-600 rounded-full shadow-lg hover:shadow-2xl" />
          <h3 className="mt-4 text-xl font-semibold text-gray-800">Tech Kh</h3>
          <p className="mt-1 text-sm text-gray-500">Web Development Specialist</p>
        </div>

        {/* Facilitator 2 */}
        <div className="flex flex-col items-center p-4 transition-transform transform rounded-lg shadow-md bg-gray-50 hover:shadow-xl hover:scale-105">
          <img src={TechH} alt="Facilitator TechH" className="w-32 h-32 transition-shadow duration-300 border-4 border-indigo-600 rounded-full shadow-lg hover:shadow-2xl" />
          <h3 className="mt-4 text-xl font-semibold text-gray-800">Tech H</h3>
          <p className="mt-1 text-sm text-gray-500">Front-end Developer</p>
        </div>

        {/* Facilitator 3 */}
        <div className="flex flex-col items-center p-4 transition-transform transform rounded-lg shadow-md bg-gray-50 hover:shadow-xl hover:scale-105">
          <img src={TechM} alt="Facilitator TechM" className="w-32 h-32 transition-shadow duration-300 border-4 border-indigo-600 rounded-full shadow-lg hover:shadow-2xl" />
          <h3 className="mt-4 text-xl font-semibold text-gray-800">Tech M</h3>
          <p className="mt-1 text-sm text-gray-500">Python Programming Expert</p>
        </div>
      </div>
    </div>
    
    {/* why choose us */}
    <div className="w-full max-w-5xl p-6 mx-auto my-10 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="mb-6 text-4xl font-bold text-center text-indigo-800">Why Choose Us?</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <div className="flex flex-col p-4 transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg">
          <div className="mb-2 text-4xl">🖥️</div>
          <h3 className="text-lg font-semibold text-indigo-600">Latest Trend of Technologies</h3>
          <p className="mt-1 text-gray-700">In this school, you can find lessons that are compatible with the modern technologies of web development and mobile app development.</p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col p-4 transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg">
          <div className="mb-2 text-4xl">🔨</div>
          <h3 className="text-lg font-semibold text-indigo-600">Learning Through Doing</h3>
          <p className="mt-1 text-gray-700">The course we offer is not just short projects that you throw away; we will teach you real-world projects that you cannot find in trainings and other courses.</p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col p-4 transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg">
          <div className="mb-2 text-4xl">🌍</div>
          <h3 className="text-lg font-semibold text-indigo-600">Learn At Your Base</h3>
          <p className="mt-1 text-gray-700">All the courses we offer are online, and you can take them anywhere in the world at any time.</p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col p-4 transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg">
          <div className="mb-2 text-4xl">🚀</div>
          <h3 className="text-lg font-semibold text-indigo-600">Engagement Platform</h3>
          <p className="mt-1 text-gray-700">When you watch the lessons, you will not feel any burden and you won't be bored. The website is fast, and we use the latest technologies in the world.</p>
        </div>

        {/* Card 5 */}
        <div className="flex flex-col p-4 transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg">
          <div className="mb-2 text-4xl">🤝</div>
          <h3 className="text-lg font-semibold text-indigo-600">Reliable Student Support</h3>
          <p className="mt-1 text-gray-700">If you feel stuck or don't understand something, there is a community that will support you and solve your problems without wasting much time looking for people.</p>
        </div>

        {/* Card 6 */}
        <div className="flex flex-col p-4 transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg">
          <div className="mb-2 text-4xl">🔒</div>
          <h3 className="text-lg font-semibold text-indigo-600">Lifetime Access</h3>
          <p className="mt-1 text-gray-700">Once you sign up for the course, it will never close; it will be free and there are no hidden fees.</p>
        </div>
      </div>
    </div>

  
    <div className="flex flex-col items-center w-full min-h-screen p-4 bg-gradient-to-r from-blue-50 to-indigo-100">
      <h1 className="mb-8 text-4xl font-bold text-gray-800">Welcome to Our Platform</h1>

      {/* Container for Buttons and Login Form */}
      <div className="flex flex-col items-center justify-between w-full max-w-4xl gap-10 md:flex-row">
        
        {/* Button Section */}

        <div className="flex w-full max-w-xs gap-4">
      
          <button 
            onClick={() => navigate('/singup')}  // Navigate to Signup
            className="w-full py-3 text-lg font-semibold text-white transition duration-300 bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Create Account
          </button>
          
          <p className="w-full py-3 font-semibold text-center text-white transition duration-300 bg-blue-500 rounded-lg g hover:bg-blue-600">
             <a href="/signup" className="text-center text-whit hover:underline">Sign up</a>
          </p>
        </div>

        {/* Login Form Section */}
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">Login</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1 text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block mb-1 text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button 
              type="submit"
              className="w-full py-3 font-semibold text-white transition duration-300 bg-blue-500 rounded-lg hover:bg-blue-600"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>



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
          <p className="text-sm text-gray-600">Email: somalilearning@gmail.com</p>
          <p className="text-sm text-gray-600">Phone: +252634812540</p>
          <p className="text-sm text-gray-600">Address: Road one St, hargiesa, Country</p>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="pt-8 mt-8 text-center border-t border-gray-200">
        <p className="text-sm text-gray-500">© 2024 Our Platform. All rights reserved.</p>
      </div>
    </footer>
    


    </div>
  );
}

export default Home;
