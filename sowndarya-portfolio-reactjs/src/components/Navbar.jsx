// components/Navbar.jsx
import React, { useState } from 'react';
import { FaDribbble, FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext'; 
import { FaSun as SunIcon, FaMoon as MoonIcon } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import soniImage from '../assets/images/soni.png'; 

function Navbar() {
  const { darkMode, toggleTheme } = useTheme(); 

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 bg-${darkMode ? 'black' : 'white'} shadow-lg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
      <div className="flex-1 flex items-center justify-start -space-x-7">
        <a href="#" className="text-2xl mt-4 font-bold">
          <img src={soniImage} alt="Soni Logo" className="h-28 w-52" />
        </a>
        <a href="#" className={`text-2xl font-bold ${darkMode ? 'text-gray-300' : 'text-zinc-600'}`}>
          Sowndarya K P
        </a>
      </div>

        <nav className={`bg-${darkMode ? 'black' : 'white'} fixed top-0 left-0 w-64 h-screen z-20 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:static md:flex md:items-center md:space-x-8 md:w-auto md:h-auto md:bg-transparent md:translate-x-0`}>
          <div className="flex justify-between items-center w-full p-4 md:hidden">
            <a href="#" className={`text-2xl font-bold ${darkMode ? 'text-gray-300' : 'text-zinc-600'}`}>Sowndarya K P</a>
            <button onClick={toggleMobileMenu} className={`text-gray-700 text-2xl ${darkMode ? 'text-white' : ''}`}>
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          <div className="flex flex-col space-y-4 mt-4 md:mt-0 md:flex-row md:space-y-0 md:space-x-6 ml-4">
            <ScrollLink to="user-info" smooth={true} duration={500} className={`text-base font-medium ${darkMode ? 'text-gray-300' : 'text-zinc-500'} hover:text-pink-500`} onClick={closeMobileMenu}>
              About
            </ScrollLink>
            <ScrollLink to="education-info" smooth={true} duration={500} className={`text-base font-medium ${darkMode ? 'text-gray-300' : 'text-zinc-500'} hover:text-pink-500`} onClick={closeMobileMenu}>
              Education
            </ScrollLink>
            <ScrollLink to="skills-info" smooth={true} duration={500} className={`text-base font-medium ${darkMode ? 'text-gray-300' : 'text-zinc-500'} hover:text-pink-500`} onClick={closeMobileMenu}>
              Skills
            </ScrollLink>
            <ScrollLink to="projects" smooth={true} duration={500} className={`text-base font-medium ${darkMode ? 'text-gray-300' : 'text-zinc-500'} hover:text-pink-500`} onClick={closeMobileMenu}>
              Projects
            </ScrollLink>
            <ScrollLink to="certificates" smooth={true} duration={500} className={`text-base font-medium ${darkMode ? 'text-gray-300' : 'text-zinc-500'} hover:text-pink-500`} onClick={closeMobileMenu}>
              Certificates
            </ScrollLink>
            <ScrollLink to="experiences" smooth={true} duration={500} className={`text-base font-medium ${darkMode ? 'text-gray-300' : 'text-zinc-500'} hover:text-pink-500`} onClick={closeMobileMenu}>
              Experience
            </ScrollLink>
            <ScrollLink to="contact-me" smooth={true} duration={500} className={`text-base font-medium ${darkMode ? 'text-gray-300' : 'text-zinc-500'} hover:text-pink-500`} onClick={closeMobileMenu}>
              Contact
            </ScrollLink>
            {/* <ScrollLink to="vuejs-portfolio" smooth={true} duration={500} className={`text-base font-medium ${darkMode ? 'text-gray-300' : 'text-zinc-500'} hover:text-pink-500`} onClick={closeMobileMenu}>
              Vuejs Portfolio
            </ScrollLink> */}
          </div>
          <div className="flex items-center gap-4 mt-96 md:mt-0">
            <a href="https://www.linkedin.com/in/sowndarya-k-p/" target="_blank" rel="noopener noreferrer" className={`text-gray-700 text-2xl transition duration-300 transform hover:-translate-y-1 ${darkMode ? 'text-white' : ''}`} onClick={closeMobileMenu}>
              <FaLinkedin />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer"  className={`text-gray-700 text-2xl transition duration-300 transform hover:-translate-y-1 ${darkMode ? 'text-white' : ''}`} onClick={closeMobileMenu}>
              <FaDribbble />
            </a>
            <a href="https://github.com/Sowndaryakp" target="_blank" rel="noopener noreferrer" className={`text-gray-700 text-2xl transition duration-300 transform hover:-translate-y-1 ${darkMode ? 'text-white' : ''}`} onClick={closeMobileMenu}>
              <FaGithub />
            </a>
            <button onClick={toggleTheme} className={`text-2xl  ${darkMode ? 'text-gray-300' : 'text-zinc-600'} text-white transition duration-300 transform hover:-translate-y-1`}>
              {darkMode ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </nav>
        <button onClick={toggleMobileMenu} className={`${darkMode ? 'text-gray-300' : 'text-zinc-600'} md:hidden text-white-700 text-2xl`}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className={`fixed inset-0 bg-black opacity-50 z-10  `} onClick={toggleMobileMenu}></div>
      )}
    </header>
  );
}

export default Navbar;
