import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HeroSection from './Components/HeroSection';
import HeritageList from './Components/HeritageList';
import HeritageDetail from './Components/HeritageDetail'; // Import for detailed view
import Testimonials from './Components/Testimonials';
import About from './Components/About';
import ContactForm from './Components/ContactForm';
import MapComponent from './Components/MapComponent'; // Import for map view
import SearchBar from './Components/SearchBar'; // Import for searching
import CityInfo from './Components/CityInfo'; // Import for city information
import TravelInfo from './Components/TravelInfo'; // Import for travel information
import './index.css'; // or the path to your CSS file


const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <HeroSection />
        <SearchBar /> {/* You might want to place this at the top of your list */}
        
        <Routes>
          {/* Main Route for Heritage List */}
          <Route path="/" element={<HeritageList />} />

          {/* Route for Heritage Detail */}
          <Route path="/heritage/:id" element={<HeritageDetail />} />

          {/* Additional Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/map" element={<MapComponent />} />
          <Route path="/city-info" element={<CityInfo />} />
          <Route path="/travel-info" element={<TravelInfo />} />
        </Routes>

        <Testimonials />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
