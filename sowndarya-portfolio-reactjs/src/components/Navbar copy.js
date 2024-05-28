// src/components/Navbar.js
import React from 'react';

function Navbar() {
  return (
    <div className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#" className="text-base font-medium text-zinc-500 hover:text-zinc-900">
              Sowndarya K P
            </a>
          </div>
          <nav className="hidden md:flex space-x-10">
            <a href="#" className="text-base font-medium text-zinc-500 hover:text-zinc-900">
              Home
            </a>
            <a href="#" className="text-base font-medium text-zinc-500 hover:text-zinc-900">
              About
            </a>
            <a href="#" className="text-base font-medium text-zinc-500 hover:text-zinc-900">
              Projects
            </a>
            <a href="#" className="text-base font-medium text-zinc-500 hover:text-zinc-900">
              Blog
            </a>
            <a href="#" className="text-base font-medium text-zinc-500 hover:text-zinc-900">
              Contact
            </a>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a href="#" className="text-zinc-400 hover:text-zinc-500">
              <span className="sr-only">Twitter</span>
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M8 19h8V5H8v14zm2-12h4v10h-4V7z"></path>
              </svg>
            </a>
            <a href="#" className="ml-6 text-zinc-400 hover:text-zinc-500">
              <span className="sr-only">Facebook</span>
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path>
              </svg>
            </a>
            <a href="#" className="ml-6 text-zinc-400 hover:text-zinc-500">
              <span className="sr-only">Instagram</span>
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 12 2 12s4.48 10 10 10 10-10 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path>
              </svg>
            </a>
            <a href="#" className="ml-6 text-zinc-400 hover:text-zinc-500">
              <span className="sr-only">YouTube</span>
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M10 8.64L15.27 12 10 15.36V8.64M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
