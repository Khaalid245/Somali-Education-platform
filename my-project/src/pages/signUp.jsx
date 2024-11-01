import React, { useState } from 'react';

function SignUp() {
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const handleLanguageChange = (event) => {
    const { value } = event.target;
    setSelectedLanguages((prev) => 
      prev.includes(value) ? prev.filter((lang) => lang !== value) : [...prev, value]
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen pt-20 bg-gray-100">
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-md">
        <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">Sign Up</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* First Name Field */}
            <div className="flex flex-col">
              <label htmlFor="firstName" className="mb-2 font-semibold text-gray-700">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter your first name"
                required
                className="p-3 border border-gray-300 rounded-md outline-none focus:border-blue-500"
              />
            </div>

            {/* Last Name Field */}
            <div className="flex flex-col">
              <label htmlFor="lastName" className="mb-2 font-semibold text-gray-700">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
                required
                className="p-3 border border-gray-300 rounded-md outline-none focus:border-blue-500"
              />
            </div>

            {/* Username Field */}
            <div className="flex flex-col">
              <label htmlFor="username" className="mb-2 font-semibold text-gray-700">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                required
                className="p-3 border border-gray-300 rounded-md outline-none focus:border-blue-500"
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 font-semibold text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                className="p-3 border border-gray-300 rounded-md outline-none focus:border-blue-500"
              />
            </div>

            {/* Password Field */}
            <div className="flex flex-col">
              <label htmlFor="password" className="mb-2 font-semibold text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
                className="p-3 border border-gray-300 rounded-md outline-none focus:border-blue-500"
              />
            </div>

            {/* Age Field */}
            <div className="flex flex-col">
              <label htmlFor="age" className="mb-2 font-semibold text-gray-700">Age</label>
              <input
                type="number"
                id="age"
                name="age"
                min="1"
                placeholder="Enter your age"
                required
                className="p-3 border border-gray-300 rounded-md outline-none focus:border-blue-500"
              />
            </div>

            {/* Gender Field */}
            <div className="flex flex-col">
              <label htmlFor="gender" className="mb-2 font-semibold text-gray-700">Gender</label>
              <select
                id="gender"
                name="gender"
                required
                className="p-3 border border-gray-300 rounded-md outline-none focus:border-blue-500"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Education Level Field */}
            <div className="flex flex-col">
              <label htmlFor="education" className="mb-2 font-semibold text-gray-700">Education Level</label>
              <select
                id="education"
                name="education"
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

            {/* Nationality Field */}
            <div className="flex flex-col">
              <label htmlFor="nationality" className="mb-2 font-semibold text-gray-700">Nationality</label>
              <input
                type="text"
                id="nationality"
                name="nationality"
                placeholder="Enter your nationality"
                required
                className="p-3 border border-gray-300 rounded-md outline-none focus:border-blue-500"
              />
            </div>

            {/* Birth Date Field */}
            <div className="flex flex-col">
              <label htmlFor="birthDate" className="mb-2 font-semibold text-gray-700">Birth Date</label>
              <input
                type="date"
                id="birthDate"
                name="birthDate"
                required
                className="p-3 border border-gray-300 rounded-md outline-none focus:border-blue-500"
              />
            </div>

            {/* Languages Field with Checkboxes */}
            <div className="flex flex-col md:col-span-2">
              <label className="mb-2 font-semibold text-gray-700">Languages</label>
              <div className="flex flex-col space-y-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    value="somali"
                    checked={selectedLanguages.includes('somali')}
                    onChange={handleLanguageChange}
                    className="mr-2"
                  />
                  Somali
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    value="english"
                    checked={selectedLanguages.includes('english')}
                    onChange={handleLanguageChange}
                    className="mr-2"
                  />
                  English
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    value="arabic"
                    checked={selectedLanguages.includes('arabic')}
                    onChange={handleLanguageChange}
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
}

export default SignUp;
