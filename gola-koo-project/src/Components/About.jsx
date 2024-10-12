import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center">About Us</h1>
      <p className="mt-4 text-lg text-gray-700">
        Welcome to our platform dedicated to showcasing the rich cultural heritage of Ethiopia. Our mission is to promote awareness and appreciation of Ethiopia's historical sites, traditions, and diverse cultures.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6">Our Mission</h2>
      <p className="mt-2 text-gray-600">
        We aim to connect tourists with the beauty and history of Ethiopia by providing comprehensive information about various cultural heritage sites. Our goal is to encourage tourism and foster a greater understanding of Ethiopia’s unique cultural identity.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Why Cultural Heritage Matters</h2>
      <p className="mt-2 text-gray-600">
        Cultural heritage is a vital part of our identity. It represents the history, values, and traditions passed down through generations. By preserving and sharing our cultural sites, we ensure that future generations can appreciate and learn from them.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Get Involved</h2>
      <p className="mt-2 text-gray-600">
        We invite you to explore the various cultural heritage places in Ethiopia, share your experiences, and help promote the preservation of our rich heritage. Your journey contributes to a greater appreciation of the culture and history of our beloved country.
      </p>
      
      <div className="text-center mt-6">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default About;
