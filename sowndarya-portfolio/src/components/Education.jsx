// Projects.js
import React from 'react';
import { useTheme } from '../contexts/ThemeContext'; 

const Education = () => {
    const { darkMode } = useTheme();
    const recentEngineeringGrads = [
        { id: 1, collegeName: 'G Madegowda Institue Of Technology, Mandya.', batch: '2017-2021', program: 'B.Tech Computer Science and Engineering' },
        // Add more recent engineering graduates data as needed
    ];
    return (
        <div className={`container mx-auto px-4 py-8 ${darkMode ? 'bg-black text-white' : 'bg-white text-gray-800'}` }>
            <h2 className="text-3xl font-bold mb-4">Education</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="max-w-4xl mx-auto justify-center " >
                    {recentEngineeringGrads.map((graduate) => (
                        <div key={graduate.id} className={`${darkMode ? 'bg-black text-white' : 'bg-white text-gray-800'} rounded-lg overflow-hidden shadow-md mb-4`}>
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
