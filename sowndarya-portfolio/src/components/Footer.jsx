import React from 'react';
import { FaDribbble, FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <p className="text-gray-600">&copy; 2022 codewithsadee. All rights reserved.</p>
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
    </footer>
  );
}

export default Footer;
