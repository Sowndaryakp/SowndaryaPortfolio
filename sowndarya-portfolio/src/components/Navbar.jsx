import React from 'react';
import { FaDribbble, FaGithub, FaLinkedin } from 'react-icons/fa';

function Navbar() {
  return (
    <div className="bg-white shadow-lg rounded-lg mx-auto w-10/12 h-16 mt-9">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-full">
        <div className="flex items-center flex-grow">
          <a href="#" className="text-2xl font-bold text-zinc-600">
            Sowndarya K P
          </a>
        </div>
        <div className="flex justify-center flex-grow">
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="text-base font-medium text-zinc-500 hover:text-pink-500">
              Home
            </a>
            <a href="#" className="text-base font-medium text-zinc-500 hover:text-pink-500">
              About
            </a>
            <a href="#" className="text-base font-medium text-zinc-500 hover:text-pink-500">
              Skills
            </a>
            <a href="#" className="text-base font-medium text-zinc-500 hover:text-pink-500">
              Projects
            </a>
            <a href="#" className="text-base font-medium text-zinc-500 hover:text-pink-500">
              Experience
            </a>
            <a href="#" className="text-base font-medium text-zinc-500 hover:text-pink-500">
              Contact
            </a>
          </nav>
        </div>
        <div className="flex items-center justify-end flex-grow">
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
