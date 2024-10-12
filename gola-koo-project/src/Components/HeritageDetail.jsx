import React from 'react';

const HeritageDetail = ({ image, name, location, priceBirr, priceDollar, description, distance, travelInfo, mapLink }) => {
  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Image */}
      <img
        className="w-full h-60 object-cover rounded-lg"
        src={image}
        alt={name ? `${name} - Heritage Site` : 'Heritage Site'}
        onError={(e) => { e.target.src = 'fallback-image-url.jpg'; }} // Add a fallback image if needed
      />

      {/* Title */}
      <h1 className="text-3xl font-bold mt-4">{name}</h1>
      
      {/* Location */}
      <p className="text-lg text-gray-700 mt-2">{location}</p>

      {/* Price */}
      <div className="flex justify-between mt-4">
        <span className="text-green-600 font-bold">Birr: {priceBirr}</span>
        <span className="text-blue-600 font-bold">USD: {priceDollar}</span>
      </div>

      {/* Distance */}
      <p className="mt-2">Distance from Addis Ababa: {distance} km</p>

      {/* Travel Information */}
      <h2 className="text-xl font-semibold mt-4">Travel Information</h2>
      <p className="text-gray-600">{travelInfo}</p>

      {/* Description */}
      <h2 className="text-xl font-semibold mt-4">Description</h2>
      <p className="text-gray-600">{description}</p>

      {/* Map Link */}
      <h2 className="text-xl font-semibold mt-4">Location</h2>
      <a
        href={mapLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        View on Map
      </a>
    </div>
  );
};

export default HeritageDetail;
