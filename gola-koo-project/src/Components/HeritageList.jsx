import React from 'react';
import HeritagePlaceCard from './HeritagePlaceCard';
import placeImage1 from '../assets/lalibela.jpg'; // Example image 1
import placeImage2 from '../assets/axum.jpg';     // Example image 2
import placeImage3 from '../assets/gondar.jpg';   // Example image 3

const HeritageList = () => {
  // Sample data for heritage places
  const heritagePlaces = [
    {
      id: 1,
      image: placeImage1,
      name: 'Lalibela',
      location: 'Amhara Region',
      priceBirr: '2500',
      priceDollar: '50',
      description: 'Lalibela is known for its rock-hewn churches, a major pilgrimage site.',
    },
    {
      id: 2,
      image: placeImage2,
      name: 'Axum',
      location: 'Tigray Region',
      priceBirr: '3000',
      priceDollar: '60',
      description: 'Axum is the ancient capital of the Kingdom of Aksum, famous for its obelisks and ruins.',
    },
    {
      id: 3,
      image: placeImage3,
      name: 'Gondar',
      location: 'Amhara Region',
      priceBirr: '2800',
      priceDollar: '55',
      description: 'Gondar is known for its castles and palaces, a UNESCO World Heritage site.',
    },
  ];

  return (
    <div className="container mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {heritagePlaces.map((place) => (
        <HeritagePlaceCard
          key={place.id}
          image={place.image}
          name={place.name}
          location={place.location}
          priceBirr={place.priceBirr}
          priceDollar={place.priceDollar}
          description={place.description}
        />
      ))}
    </div>
  );
};

export default HeritageList;
