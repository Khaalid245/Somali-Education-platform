// src/components/Card.jsx
import React from 'react';
import { FaUsers, FaBook, FaDollarSign } from 'react-icons/fa';

// Map for icons to add an appropriate icon per card
const iconMap = {
  users: <FaUsers />,
  book: <FaBook />,
  'dollar-sign': <FaDollarSign />,
};

function Card({ title, value, icon, bgColor }) {
  return (
    <div className={`p-6 rounded-lg shadow-md text-white flex items-center ${bgColor}`}>
      <div className="mr-4 text-4xl">{iconMap[icon]}</div>
      <div>
        <h3 className="mb-1 text-lg font-semibold">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
}

export default Card;
