import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ ur, title }) => {
  return (
    <Link to="#" className="w-full sm:w-40 md:w-48 lg:w-56">
      <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 h-56 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
        {/* Product Image */}
        <img src={ur} alt={title} className="w-full h-40 object-cover p-3" />
        {/* Product Title */}
        <div className="p-3 text-center">
          <h3 className="text-white text-sm font-semibold">{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
