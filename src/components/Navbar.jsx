import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#1e1e1e] text-white py-4 px-8 shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-semibold text-green-400">Allya Maulida</div>

        {/* Menu */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          <li className="hover:text-green-400 cursor-pointer">Home</li>
          <li className="hover:text-green-400 cursor-pointer">Portofolio</li>
          <li className="hover:text-green-400 cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;