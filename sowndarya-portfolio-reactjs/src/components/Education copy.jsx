// Education.js
import React from 'react';
import { useTheme } from '../contexts/ThemeContext'; 

const Education = () => {
    const { darkMode } = useTheme(); 
    const recentEngineeringGrads = [
        { id: 1, collegeName: 'G Madegowda Institue Of Technology, Mandya.', batch: '2017-2021', program: 'B.Tech Computer Science and Engineering' },
        // Add more recent engineering graduates data as needed
    ];

    return (

        <div className={`container mx-auto w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:w-12/12 h-40 py-2 ${darkMode ? 'bg-black text-white' : 'bg-white text-gray-800'}` }>
            <div className="mt-8 flex justify-center">
                <div className="max-w-xl">
                    {recentEngineeringGrads.map((graduate) => (
                        <div key={graduate.id} className={`${darkMode ? 'bg-black text-white' : 'bg-white text-gray-800'} mx-auto rounded-lg overflow-hidden shadow-md mb-4`}>
                            <div className="p-4">
                                <h2 className="text-lg font-semibold">{graduate.collegeName}</h2>
                                <p className="text-sm text-gray-600 text-center">Batch: {graduate.batch}</p>
                                <p className="text-sm text-gray-600 text-center">Program: {graduate.program}</p>
                                {/* Add more details about the graduate */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Education;
