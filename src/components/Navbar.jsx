import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#1e1e1e] text-white py-4 px-8 shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-semibold text-green-400">Allya Maulida</div>

        {/* Menu */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          <li>
            <Link to="/" className="hover:text-green-400">Home</Link>
          </li>
          <li>
            <Link to="/portofolio" className="hover:text-green-400">Portofolio</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-green-400">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
