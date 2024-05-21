import React, { useState } from 'react';
import { FaDribbble, FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg rounded-lg mx-auto w-10/12 h-20 mt-9 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-full">
        <div className="whitespace-nowrap">
          <a href="#" className="text-2xl font-bold text-zinc-600">
            Sowndarya K P
          </a>
        </div>
        <nav className={`fixed top-0 left-0 bg-white w-64 h-screen z-20 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:static md:flex md:items-center md:space-x-8 md:w-auto md:h-auto md:bg-transparent md:translate-x-0`}>
          <div className="flex justify-between items-center w-full p-4 md:hidden">
            <a href="#" className="text-2xl font-bold text-zinc-600">Sowndarya K P</a>
            <button onClick={toggleMobileMenu} className="text-gray-700 text-2xl">
              <FaTimes />
            </button>
          </div>
          <div className="flex flex-col space-y-4 mt-8 md:mt-0 md:flex-row md:space-y-0 md:space-x-8">
            <a href="#" className="text-base font-medium text-zinc-500 hover:text-pink-500">Home</a>
            <a href="#" className="text-base font-medium text-zinc-500 hover:text-pink-500">About</a>
            <a href="#" className="text-base font-medium text-zinc-500 hover:text-pink-500">Skills</a>
            <a href="#" className="text-base font-medium text-zinc-500 hover:text-pink-500">Projects</a>
            <a href="#" className="text-base font-medium text-zinc-500 hover:text-pink-500">Experience</a>
            <a href="#" className="text-base font-medium text-zinc-500 hover:text-pink-500">Contact</a>
          </div>
          <div className="flex items-center gap-4 mt-8 md:mt-0">
            <a href="#" className="text-gray-700 text-2xl transition duration-300 transform hover:-translate-y-1">
              <FaLinkedin />
            </a>
            <a href="#" className="text-gray-700 text-2xl transition duration-300 transform hover:-translate-y-1">
              <FaDribbble />
            </a>
            <a href="#" className="text-gray-700 text-2xl transition duration-300 transform hover:-translate-y-1">
              <FaGithub />
            </a>
          </div>
        </nav>
        <button onClick={toggleMobileMenu} className="md:hidden text-gray-700 text-2xl">
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-10" onClick={toggleMobileMenu}></div>
      )}
    </header>
  );
}

export default Navbar;
