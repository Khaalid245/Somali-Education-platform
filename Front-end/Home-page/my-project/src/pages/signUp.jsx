import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    age: '',
    gender: '',
    education_level: '',
    nationality: '',
    birth_date: '',
    languages: [] // Array to store selected languages
  });


  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLanguagesChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      languages: checked
        ? [...prevState.languages, value]
        : prevState.languages.filter((lang) => lang !== value)
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const response = await axios.post('https://somali-education-platform.onrender.com/register', formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        alert(response.data.message);
        navigate('/SignIn');
    } catch (error) {
        alert(error.response?.data?.message || "An error occurred");
    }
};

  return (
    <div className="flex items-center justify-center min-h-screen pt-20 bg-gray-100">
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-md">
        <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* First Name */}
            <div className="flex flex-col">
              <label htmlFor="first_name" className="mb-2 font-semibold text-gray-700">First Name</label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                placeholder="Enter your first name"
                required
                className="p-3 border border-gray-300 rounded-md outline-none focus:border-blue-500"
              />
            </div>

            {/* Last Name */}
            <div className="flex flex-col">
              <label htmlFor="last_name" className="mb-2 font-semibold text-gray-700">Last Name</label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                placeholder="Enter your last name"
                required
                className="p-3 border border-gray-300 rounded-md outline-none focus:border-blue-500"
              />
            </div>

            {/* Username */}
            <div className="flex flex-col">
              <label htmlFor="username" className="mb-2 font-semibold text-gray-700">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your username"
                required
                className="p-3 border border-gray-300 rounded-md outline-none focus:border-blue-500"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 font-semibold text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="p-3 border border-gray-300 rounded-md outline-none focus:border-blue-500"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col">
              <label htmlFor="password" className="mb-2 font-semibold text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
                className="p-3 border border-gray-300 rounded-md outline-none focus:border-blue-500"
              />
            </div>

            {/* Age */}
            <div className="flex flex-col">
              <label htmlFor="age" className="mb-2 font-semibold text-gray-700">Age</label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                min="1"
                placeholder="Enter your age"
                required
                className="p-3 border border-gray-300 rounded-md outline-none focus:border-blue-500"
              />
            </div>

            {/* Gender */}
            <div className="flex flex-col">
              <label htmlFor="gender" className="mb-2 font-semibold text-gray-700">Gender</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="p-3 border border-gray-300 rounded-md outline-none focus:border-blue-500"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Education Level */}
            <div className="flex flex-col">
              <label htmlFor="education_level" className="mb-2 font-semibold text-gray-700">Education Level</label>
              <select
                id="education_level"
                name="education_level"
                value={formData.education_level}
                onChange={handleChange}
                required
                className="p-3 border border-gray-300 rounded-md outline-none focus:border-blue-500"
              >
                <option value="">Select Education Level</option>
                <option value="highSchool">High School</option>
                <option value="primary">Primary</option>
                <option value="diploma">Diploma</option>
                <option value="university">University</option>
                <option value="graduated">Graduated</option>
              </select>
            </div>

            {/* Nationality */}
            <div className="flex flex-col">
              <label htmlFor="nationality" className="mb-2 font-semibold text-gray-700">Nationality</label>
              <input
                type="text"
                id="nationality"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                placeholder="Enter your nationality"
                required
                className="p-3 border border-gray-300 rounded-md outline-none focus:border-blue-500"
              />
            </div>

            {/* Birth Date */}
            <div className="flex flex-col">
              <label htmlFor="birth_date" className="mb-2 font-semibold text-gray-700">Birth Date</label>
              <input
                type="date"
                id="birth_date"
                name="birth_date"
                value={formData.birth_date}
                onChange={handleChange}
                required
                className="p-3 border border-gray-300 rounded-md outline-none focus:border-blue-500"
              />
            </div>

            {/* Languages */}
            <div className="flex flex-col md:col-span-2">
              <label className="mb-2 font-semibold text-gray-700">Languages</label>
              <div className="flex flex-col space-y-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    value="somali"
                    checked={formData.languages.includes('somali')}
                    onChange={handleLanguagesChange}
                    className="mr-2"
                  />
                  Somali
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    value="english"
                    checked={formData.languages.includes('english')}
                    onChange={handleLanguagesChange}
                    className="mr-2"
                  />
                  English
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    value="arabic"
                    checked={formData.languages.includes('arabic')}
                    onChange={handleLanguagesChange}
                    className="mr-2"
                  />
                  Arabic
                </label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
