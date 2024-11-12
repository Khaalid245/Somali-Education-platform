// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import SignIn from './pages/SignIn';
import SignUp from './pages/signUp';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses/>} />
          <Route path="/signin" element={<SignIn />} />
          <Route path='/signup' element={<SignUp/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
