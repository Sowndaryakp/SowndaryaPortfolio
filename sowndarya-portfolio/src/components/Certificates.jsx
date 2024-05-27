import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const certificates = [
  {
    name: "NPTEL Online Certification in Programming in Java",
    provider: "NPTEL",
    language: "Java",
    score: "81%",
    type: "Elite",
    link: "https://drive.google.com/file/d/1exTSCN6GKZW1IHAA6PkvViFN1204fy6p/view?usp=drive_link"
  },
  {
    name: "Java Full Stack Software Development Course",
    provider: "JSpiders - Training & Development Center",
    // link: "https://drive.google.com/file/d/1dcq9uuxVWLXn65YCKuCmHFQYhnOmV9RA/view?usp=sharing"
  },
  {
    name: "AWS Partner: Accreditation (Technical)",
    provider: "AWS Training Online",
    link: "https://drive.google.com/file/d/1dcq9uuxVWLXn65YCKuCmHFQYhnOmV9RA/view?usp=drive_link"
  },
  {
    name: "Java Programming for Complete Beginners",
    provider: "Udemy",
    link: "https://drive.google.com/file/d/1T4Jyq7FP_FMjqtDPPcT3FlQ3luWWYllT/view?usp=drive_link"
  },
  {
    name: "JSP, Servlets and JDBC for Beginners: Build a Database App",
    provider: "Udemy",
    link: "https://drive.google.com/file/d/1TFIB3svTgWOSpYJ3fF-2qEV116Nd9O9c/view?usp=drive_link"
  },
  {
    name: "Problem Solving Through Programming In C",
    provider: "NPTEL",
    // link: "https://drive.google.com/file/d/1nqWKnwk6HEmxvHbmkjQw2aHoZLOt6CUY/view?usp=drive_link"
  }
];

const Certificates = () => {
  const { darkMode } = useTheme();

  const containerClasses = darkMode ? 'bg-black text-white' : 'bg-white text-gray-800';
  const cardClasses = darkMode ? 'bg-black-800 text-white' : 'bg-white text-gray-800';

  return (
<<<<<<< HEAD
    <div id="certificates" className={`w-full h-full ${containerClasses}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-32">
        <h2 className={`text-2xl md:text-4xl font-bold text-center mb-8 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          Certificates
        </h2>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {certificates.map((certificate, index) => (
              <div key={index} className={`p-6 border border-gray-300 rounded-lg shadow-lg rounded-lg shadow-md flex items-center transition-shadow duration-300 ease-in-out hover:shadow-2xl ${cardClasses}`}>
                <div>
                  <h3 className="text-xl font-semibold">{certificate.name}</h3>
                  {certificate.provider && <p>{certificate.provider}</p>}
                  {certificate.link && (
                    <p className="mt-4">
                      <a href={certificate.link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">View Certificate</a>
                    </p>
                  )}
                </div>
              </div>
            ))}
=======
    <div id="certificates" className={`w-full h-full ${darkMode ? 'bg-black' : 'bg-white'}`}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-32`}>
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-white-800">Certificates</h2>
        <div className="flex justify-center items-center">
          <div
            onClick={togglePopup}
            className={`w-64 h-64 ${darkMode ? 'bg-white-800 text-charm-50' : 'bg-white-200 text-black-800'} border border-white-300 rounded-lg shadow-lg flex justify-center items-center cursor-pointer hover:shadow-white`}
          >
            <p className="text-center">
              <span className="text-xl md:text-2xl font-bold">{certificateDetails.name}</span>
              <br />
              <span>Language: {certificateDetails.language}</span>
              <br />
              <span>Score: {certificateDetails.score}</span>
              <br />
              <span>Type: {certificateDetails.type}</span>
              <p className="text-center mt-4">
              <button className="text-blue-500 hover:underline" onClick={(e) => { e.stopPropagation(); togglePopup(); }}>
                Click here to view image
              </button>
            </p>

            </p>
>>>>>>> 9733ba53d347b9413303bd14879644cefbbcbbee
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
