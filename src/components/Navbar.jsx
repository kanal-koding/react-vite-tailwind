
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

import { Link } from 'react-scroll';

// eslint-disable-next-line no-unused-vars
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white py-4 fixed w-full top-0 z-10 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/" className='hover:text-gray-400'>CompanyLogo</a>
        </div>
          <div className="hidden md:flex space-x-6">
          <Link to="profile" spy={true} smooth={true} offset={-70} duration={500} className="hover:text-gray-400 cursor-pointer">Profile</Link>
          <Link to="about" spy={true} smooth={true} offset={-70} duration={500} className="hover:text-gray-400 cursor-pointer">About</Link>
          <Link to="projects" spy={true} smooth={true} offset={-70} duration={500} className="hover:text-gray-400 cursor-pointer">Projects</Link>
          <Link to="products" spy={true} smooth={true} offset={-70} duration={500} className="hover:text-gray-400 cursor-pointer">Products</Link>
          <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} className="hover:text-gray-400 cursor-pointer">Contact</Link>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-400 focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-6 py-4 space-y-2">
            <Link onClick={toggleMenu} to="profile" spy={true} smooth={true} offset={-70} duration={500} className="block text-gray-400 hover:text-white cursor-pointer">Profile</Link>
            <Link onClick={toggleMenu} to="about" spy={true} smooth={true} offset={-70} duration={500} className="block text-gray-400 hover:text-white cursor-pointer">About</Link>
            <Link onClick={toggleMenu} to="projects" spy={true} smooth={true} offset={-70} duration={500} className="block text-gray-400 hover:text-white cursor-pointer">Projects</Link>
            <Link onClick={toggleMenu} to="products" spy={true} smooth={true} offset={-70} duration={500} className="block text-gray-400 hover:text-white cursor-pointer">Products</Link>
            <Link onClick={toggleMenu} to="contact" spy={true} smooth={true} offset={-70} duration={500} className="block text-gray-400 hover:text-white cursor-pointer">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;