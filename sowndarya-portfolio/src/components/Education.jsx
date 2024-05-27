// Projects.js
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Education = () => {
  const { darkMode } = useTheme();
  const recentEngineeringGrads = [
    {
      id: 1,
      collegeName: 'G Madegowda Institute Of Technology, Mandya, Karnataka',
      batch: '2017-2021',
      ug: 'Bachelor of Engineering',
      branch: 'Computer Science and Engineering'
    },
    // Add more recent engineering graduates data as needed
  ];

  const containerClasses = darkMode ? 'bg-black text-white' : 'bg-white text-gray-800';
  const cardClasses = darkMode ? 'bg-black-800 text-white' : 'bg-white text-gray-800';
  const descriptionClasses = darkMode ? 'text-gray-200' : 'text-gray-700';

  return (
    <div id="education-info" className={`py-12 ${containerClasses}`}>
      <div className="p-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center ">
        <h2 className={`text-3xl font-extrabold mb-8 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Education</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {recentEngineeringGrads.map((graduate) => (
            <div 
              key={graduate.id} 
              className={`w-full max-w-sm p-6 border border-gray-300 rounded-lg shadow-lg ${cardClasses} transition-shadow duration-300 ease-in-out hover:shadow-2xl`}
            >
              <h3 className="text-xl font-semibold mb-4">{graduate.collegeName}</h3>
              <p className={`text-md mb-2 ${descriptionClasses}`}><b>Batch:</b> {graduate.batch}</p>
              <p className={`text-md mb-2 ${descriptionClasses}`}><b>UG:</b> {graduate.ug}</p>
              <p className={`text-md ${descriptionClasses}`}><b>Branch:</b> {graduate.branch}</p>
              
              {/* Add more details about the graduate */}
            </div>
          ))}
        </div>
      </div>
      <hr className={`mt-20 ${darkMode ? 'border-gray-700' : 'border-gray-300'}`} />
    </div>
  );
};

export default Education;
