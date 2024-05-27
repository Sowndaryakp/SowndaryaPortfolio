import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext'; 
import nptelImage from '../assets/images/nptel.jpg';

const Certificates = () => {
  const { darkMode } = useTheme();
  const [showPopup, setShowPopup] = useState(false);

  const certificateDetails = {
    name: "NPTEL Online Certification in Programming in Java",
    language: "Java",
    score: "81%",
    type: "Elite"
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const containerClasses = darkMode ? 'bg-black text-white' : 'bg-white text-gray-800';
  const cardClasses = darkMode ? 'bg-white-800 text-white' : 'bg-white-200 text-gray-800';

  return (
    <div id="certificates" className={`w-full h-full ${containerClasses}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-32">
        <h2 className={`text-2xl md:text-4xl font-bold text-center mb-8 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          Certificates
        </h2>
        <div className="flex justify-center items-center">
          <div
            onClick={togglePopup}
            className={`w-64 h-64 ${cardClasses} border border-gray-300 rounded-lg shadow-lg flex justify-center items-center cursor-pointer transition-shadow duration-300 ease-in-out hover:shadow-2xl`}
          >
            <div className="text-center">
              <p className="text-xl md:text-2xl font-bold mb-2">{certificateDetails.name}</p>
              <p>Language: {certificateDetails.language}</p>
              <p>Score: {certificateDetails.score}</p>
              <p>Type: {certificateDetails.type}</p>
              <p className="text-center mt-4">
                <button 
                  className="text-blue-500 hover:underline" 
                  onClick={(e) => { e.stopPropagation(); togglePopup(); }}
                >
                  Click here to view image
                </button>
              </p>
            </div>
          </div>
        </div>
        {showPopup && (
          <div className="fixed top-0 left-0 z-50 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-8 shadow-xl w-1/2 h-auto">
              <div className="flex justify-end">
                <button onClick={togglePopup} className="text-gray-500 hover:text-gray-700 focus:outline-none">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <img src={nptelImage} alt="Certificate" className="w-full h-auto" />
            </div>
          </div>
        )}
      </div>
      <hr className={`mt-16 ${darkMode ? 'border-gray-700' : 'border-gray-300'}`} />
    </div>
  );
};

export default Certificates;
