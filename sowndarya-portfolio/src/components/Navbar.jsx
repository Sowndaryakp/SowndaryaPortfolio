// src/components/Navbar.js
import React from 'react';
import { FaDribbble, FaGithub, FaLinkedin } from 'react-icons/fa';

function Navbar() {
  return (
    <div className="bg-white shadow-lg rounded-lg mx-auto w-8/12 h-16 mt-9">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full">
        <div className="flex items-center lg:w-0 lg:flex-1">
          <a href="#" className="text-base font-medium text-zinc-900">
            Sowndarya K P
          </a>
        </div>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="text-base font-medium text-zinc-500 hover:text-pink-500">
            Home
          </a>
          <a href="#" className="text-base font-medium text-zinc-500 hover:text-pink-500">
            About
          </a>
          <a href="#" className="text-base font-medium text-zinc-500 hover:text-pink-500">
            Projects
          </a>
          <a href="#" className="text-base font-medium text-zinc-500 hover:text-pink-500">
            Blog
          </a>
          <a href="#" className="text-base font-medium text-zinc-500 hover:text-pink-500">
            Contact
          </a>
        </nav>

        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <div className="flex gap-2">
            <a href="#" className="text-gray-700 text-1xl transition duration-300 transform hover:-translate-y-1">
              <FaLinkedin />
            </a>
            <a href="#" className="text-gray-700 text-1xl transition duration-300 transform hover:-translate-y-1">
              <FaDribbble />
            </a>
            <a href="#" className="text-gray-700 text-1xl transition duration-300 transform hover:-translate-y-1">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
