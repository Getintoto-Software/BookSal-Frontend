import React from 'react';
import "../App.css"

const Card = () => {
  return (
    <div className="bg-white shadow-md rounded px-4 py-6">
      <h2 className="text-lg font-bold">{futsal.name}</h2>
      <p className="text-gray-600">{futsal.location}</p>
      <p className="text-gray-600">{futsal.description}</p>
    </div>
  );
};

export default Card;