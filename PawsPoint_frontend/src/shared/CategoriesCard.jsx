import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesCard = ({ categoryName, ur }) => {
  return (
    <Link to="#">
      <div className='bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 h-40 w-36 md:h-56 md:w-52 p-3 flex flex-col rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300'>
        <div className="relative w-full h-full overflow-hidden rounded-md">
          <img src={ur} className='h-full w-full object-cover transition-transform duration-300 transform group-hover:scale-110' alt={categoryName} />
        </div>
        <hr className="my-2 border-gray-500" />
        <h2 className='text-white text-lg font-semibold text-center text-gradient bg-clip-text'>{categoryName}</h2>
      </div>
    </Link>
  );
};


export default CategoriesCard;