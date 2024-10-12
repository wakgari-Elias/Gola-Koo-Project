import React from 'react';

const CityInfo = ({ city }) => {
  if (!city) {
    return <p className="text-center">No city information available.</p>;
  }

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-4">{city.name}</h1>
      <p className="text-gray-700 mb-4">{city.description}</p>
      
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">Notable Attractions:</h2>
        <ul className="list-disc pl-5">
          {city.attractions.map((attraction, index) => (
            <li key={index} className="text-gray-700">{attraction}</li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-semibold">Population:</h2>
        <p className="text-gray-700">{city.population}</p>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-semibold">Additional Information:</h2>
        <p className="text-gray-700">{city.additionalInfo}</p>
      </div>
    </div>
  );
};

export default CityInfo;
