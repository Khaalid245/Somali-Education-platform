// src/pages/UploadCourse.jsx
import React, { useState } from 'react';

function UploadCourse() {
  const [courseTitle, setCourseTitle] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [courseFile, setCourseFile] = useState(null);

  const handleFileChange = (e) => {
    setCourseFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Course Uploaded: ${courseTitle}`);
    setCourseTitle('');
    setCourseDescription('');
    setCourseFile(null);
  };

  return (
    <div className="max-w-lg p-6 mx-auto mt-10 bg-white rounded-lg shadow-md">
      <h2 className="mb-6 text-3xl font-bold text-indigo-700">Upload Course</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-semibold text-gray-600" htmlFor="title">
            Course Title
          </label>
          <input
            type="text"
            id="title"
            value={courseTitle}
            onChange={(e) => setCourseTitle(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:border-indigo-400"
            placeholder="Enter the course title"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-semibold text-gray-600" htmlFor="description">
            Course Description
          </label>
          <textarea
            id="description"
            value={courseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:border-indigo-400"
            rows="4"
            placeholder="Enter a brief course description"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-semibold text-gray-600" htmlFor="file">
            Upload File
          </label>
          <input
            type="file"
            id="file"
            onChange={handleFileChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 mt-4 font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default UploadCourse;
