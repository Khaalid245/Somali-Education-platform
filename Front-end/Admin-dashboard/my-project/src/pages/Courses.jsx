// src/pages/Courses.jsx
import React from 'react';
import Table from '../components/Table';
import { FaBook, FaUser, FaUsers } from 'react-icons/fa'; // Import icons from react-icons

const courseData = [
  { title: 'React Basics', instructor: 'John Doe', enrolled: 120 },
  { title: 'Advanced JavaScript', instructor: 'Jane Smith', enrolled: 80 },
  // Add more courses here
];

function Courses() {
  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="mb-8 text-4xl font-bold text-indigo-700">Courses</h1>

      {/* Table Section */}
      <div className="p-6 bg-white rounded-lg shadow-md">
        <Table data={courseData} columns={['title', 'instructor', 'enrolled']} />
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex items-center p-6 bg-white rounded-lg shadow-md">
          <FaBook className="mr-4 text-4xl text-blue-600" />
          <div>
            <h2 className="text-xl font-semibold">Total Courses</h2>
            <p className="text-3xl font-bold text-indigo-600">{courseData.length}</p>
          </div>
        </div>
        <div className="flex items-center p-6 bg-white rounded-lg shadow-md">
          <FaUser className="mr-4 text-4xl text-green-600" />
          <div>
            <h2 className="text-xl font-semibold">Instructors</h2>
            <p className="text-3xl font-bold text-green-600">
              {courseData.reduce((acc, curr) => {
                return acc.includes(curr.instructor) ? acc : [...acc, curr.instructor];
              }, []).length}
            </p>
          </div>
        </div>
        <div className="flex items-center p-6 bg-white rounded-lg shadow-md">
          <FaUsers className="mr-4 text-4xl text-yellow-600" />
          <div>
            <h2 className="text-xl font-semibold">Total Enrolled</h2>
            <p className="text-3xl font-bold text-yellow-600">
              {courseData.reduce((acc, curr) => acc + curr.enrolled, 0)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
