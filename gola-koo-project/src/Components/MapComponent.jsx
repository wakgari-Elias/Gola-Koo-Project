import React from 'react';
import MapComponent from './MapComponent';

const HeritageDetail = ({ image, name, location, priceBirr, priceDollar, description, distance, travelInfo, lat, lng }) => {
  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Other content here... */}

      {/* Map Section */}
      <h2 className="text-xl font-semibold mt-4">Location Map</h2>
      <MapComponent location={location} lat={lat} lng={lng} />
    </div>
  );
};

// Example usage
const LalibelaDetail = () => {
  return (
    <HeritageDetail
      // Other props...
      lat={12.0333}  // Example latitude for Lalibela
      lng={39.0333}  // Example longitude for Lalibela
    />
  );
};

export default LalibelaDetail;
