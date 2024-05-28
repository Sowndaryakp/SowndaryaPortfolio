import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import sookshmasImage from '../assets/images/sookshmas.jpg'; // Import company logos
import jspidersImage from '../assets/images/jspiders.jpg';
import sapientImage from '../assets/images/sapient.png';
import cmtiImage from '../assets/images/cmti.png';

const experiences = [
  {
    title: 'Internship',
    company: 'Sookshmas E-Learning Pvt. Ltd.',
    duration: 'Sep 2020 - Oct 2020',
    location: 'Bengaluru, Karnataka, India',
    description: 'Internship at Sookshmas E-Learning Pvt. Ltd. from Sep 2020 to Oct 2020 in Bengaluru, Karnataka, India.',
    objective: 'To gain hands-on experience in software development and contribute effectively to the team projects.',
    link: '#',
    logo: sookshmasImage // Specify the company logo
  },
  {
    title: 'Java Full stack software development course',
    company: 'JSpiders - Training & Development Center',
    duration: 'Aug 2021 - Feb 2022 · 7 mos',
    location: 'Bengaluru, Karnataka, India',
    description: 'Java Full stack software development course at JSpiders - Training & Development Center from Aug 2021 to Feb 2022 in Bengaluru, Karnataka, India.',
    objective: 'To learn Java full stack development concepts and enhance programming skills for future projects.',
    link: '#',
    logo: jspidersImage // Specify the company logo
  },
  {
    title: 'Java Developer',
    company: 'Publicis Sapient',
    duration: 'Feb 2022 - Dec 2022 · 11 mos',
    location: 'Bengaluru, Karnataka, India',
    description: 'Publicis Sapient, a Full-time role for 11 months in Bengaluru, Karnataka, India.',
    objective: 'To work in a dynamic environment and utilize my skills in software development for delivering high-quality solutions.',
    link: '#',
    logo: sapientImage // Specify the company logo
  },
  {
    title: 'Full Stack Engineer',
    company: 'CMTI - Central Manufacturing Technology Institute',
    duration: 'Jun 2023 - Present · 1 yr',
    location: 'Bengaluru, Karnataka, India',
    description: 'Full Stack Engineer at CMTI - Central Manufacturing Technology Institute from Jun 2023 to Present in Bengaluru, Karnataka, India.',
    objective: 'To apply my expertise in full stack development and contribute to innovative projects in the manufacturing technology sector.',
    link: '#',
    logo: cmtiImage // Specify the company logo
  },
];

const Experiences = () => {
  const { darkMode } = useTheme();

  const containerClasses = darkMode ? 'bg-black text-white' : 'bg-white text-gray-800';
  const cardClasses = darkMode ? 'bg-black-800 text-white shadow-md' : 'bg-white text-gray-800 shadow-md';

  const descriptionClasses = darkMode ? 'text-gray-200' : 'text-gray-700';

  return (
    <div id="experiences" className={`py-12 ${containerClasses}`}>
      <div className="p-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl font-extrabold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Experiences</h2>
        <p className={`mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
          Here are some of the experiences I have worked on:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {experiences.map((experience, index) => (
            <div key={index} className={`border border-gray-300 rounded-lg shadow-lg relative w-full p-6 md:p-8 transition-shadow duration-300 ease-in-out hover:shadow-2xl ${cardClasses}`}>
              <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
              {experience.company && (
                <div className="mb-4">
                  <p className="text-sm font-medium">{experience.company}</p>
                  <p className="text-xs">{experience.duration}</p>
                  <p className="text-xs">{experience.location}</p>
                </div>
              )}
              <p className={`${descriptionClasses} mb-2`}>{experience.description}</p>
              <p className={`${descriptionClasses} mb-4`}><strong>Objective: </strong>{experience.objective}</p>
              {/* <a href={experience.link} className="text-blue-500 hover:underline">Learn more</a> */}

              {/* Add company logo */}
              <img
                src={experience.logo}
                alt={`${experience.company} Logo`}
                className="absolute top-1 right-2 w-20 h-16 "
              />
            </div>
          ))}
        </div>
      </div>
      <hr className="mt-36" />
    </div>
  );
};

export default Experiences;
//transition-shadow duration-300 ease-in-out hover:shadow-2xl