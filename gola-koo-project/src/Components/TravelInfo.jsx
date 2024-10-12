import React from 'react';

const TravelInfo = ({ travelDetails }) => {
  if (!travelDetails) {
    return <p className="text-center">No travel information available.</p>;
  }

  const { transportation, duration, tips } = travelDetails;

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Travel Information</h2>

      {/* Transportation Information */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Transportation:</h3>
        <p className="text-gray-700">{transportation}</p>
      </div>

      {/* Duration Information */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Estimated Duration:</h3>
        <p className="text-gray-700">{duration}</p>
      </div>

      {/* Tips for Tourists */}
      <div>
        <h3 className="text-xl font-semibold">Tips for Tourists:</h3>
        <p className="text-gray-700">{tips}</p>
      </div>
    </div>
  );
};

export default TravelInfo;
