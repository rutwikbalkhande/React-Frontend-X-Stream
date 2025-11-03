import React from 'react';

export const InsuranceCard = ({ title, description, icon, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer p-6 flex flex-col items-center text-center"
    >
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-6">{description}</p>
      <button className="mt-auto w-full px-4 py-2 bg-cyan-600 text-white rounded-md font-medium hover:bg-cyan-700 transition-colors">
        Learn More
      </button>
    </div>
  );
};