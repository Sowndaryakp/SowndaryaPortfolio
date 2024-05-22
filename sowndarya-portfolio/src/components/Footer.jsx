import React from 'react';
import { FaDribbble, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSun as SunIcon, FaMoon as MoonIcon } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

function Footer() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <footer className={darkMode ? "bg-black py-4 text-gray-200" : "bg-white py-4 text-gray-600"}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <p>&copy; 2024 sowndarya kp. All rights reserved.</p>
          <div className="flex gap-2">
            <a href="https://www.linkedin.com/in/sowndarya-k-p/" className={`text-gray-700 text-1xl transition duration-300 transform hover:-translate-y-1 ${darkMode && "text-white"}`}>
              <FaLinkedin />
            </a>
            <a href="#" className={`text-gray-700 text-1xl transition duration-300 transform hover:-translate-y-1 ${darkMode && "text-white"}`}>
              <FaDribbble />
            </a>
            <a href="https://github.com/Sowndaryakp" className={`text-gray-700 text-1xl transition duration-300 transform hover:-translate-y-1 ${darkMode && "text-white"}`}>
              <FaGithub />
            </a>
            <button onClick={toggleTheme} className="text-white-700 text-1xl transition duration-300 transform hover:-translate-y-1">
            {darkMode ? <SunIcon /> : <MoonIcon />}
          </button>
          </div>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
