import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo or Brand Name */}
        <div className="text-2xl font-bold">
          <Link to="/">Ethiopian Heritage</Link>
        </div>

        {/* Navigation Menu */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-yellow-400 transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/heritage-sites" className="hover:text-yellow-400 transition duration-300">
                Heritage Sites
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-400 transition duration-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-400 transition duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
