import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const HeritagePlaceCard = ({ image, name, location, priceBirr, priceDollar, description }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      {/* Image */}
      <img className="w-full h-48 object-cover" src={image} alt={name} />

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        
        {/* Location */}
        <p className="text-gray-700 mb-4">{location}</p>
        
        {/* Price */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-green-600 font-bold">Birr: {priceBirr}</span>
          <span className="text-blue-600 font-bold">USD: {priceDollar}</span>
        </div>

        {/* Description */}
        <p className="text-gray-600">{description}</p>

        {/* Call to Action */}
        <div className="mt-4">
          <a
            href="#"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

// Define prop types
HeritagePlaceCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  priceBirr: PropTypes.number.isRequired,
  priceDollar: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default HeritagePlaceCard;
