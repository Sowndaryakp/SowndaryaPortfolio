import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';
import todoreactImage from '../assets/images/todoreact.png';
import gerbindia1 from '../assets/images/gerbindia1.png';

const projects = [
  {
    title: 'Todo App in ReactJS, Tailwind CSS, and Firebase',
    description: 'A simple Todo app built with ReactJS and Tailwind CSS',
    image: todoreactImage,
    details: `
      <strong>Problem Statement:</strong><br />
      Create a Todo application using ReactJS and Tailwind CSS that allows users to add, delete, and mark tasks as completed.<br /><br />

      <strong>Technical Skills:</strong><br />
      <ul>
        <li>ReactJS (Hooks)</li>
        <li>Tailwind CSS</li>
        <li>Firebase integration for data management</li>
        <li>State management within React</li>
        <li>Event handling for user interactions</li>
      </ul><br />

      <strong>Challenges:</strong><br />
      <ul>
        <li>Implementing state management to handle Todo items efficiently.</li>
        <li>Styling components effectively using Tailwind CSS to ensure a visually appealing interface.</li>
        <li>Managing user interactions such as adding, deleting, and marking tasks as completed in a seamless manner.</li>
      </ul><br />

      <strong>Learning:</strong><br />
      <ul>
        <li>Understanding and utilizing React Hooks for efficient state management within the application.</li>
        <li>Exploring advanced Tailwind CSS techniques to enhance the visual presentation of components.</li>
        <li>Adopting best practices for building Todo applications, including handling data storage and user interactions effectively.</li>
      </ul>
    `,
  },
  {
    title: 'IOT-based Solution for Machine Monitoring [GerbIndia]',
    description: 'Develop a frontend web application for a machine monitoring dashboard.',
    image: gerbindia1,
    details: `
      <strong>Problem Statement:</strong><br />
      Develop a frontend web application for a machine monitoring dashboard.<br /><br />

      <strong>Technical Skills:</strong><br />
      <ul>
        <li>Proficiency in HTML5, CSS3, Tailwind CSS, JavaScript, and Vue.js for frontend development.</li>
        <li>Dynamic data fetching from the backend using the Axios library.</li>
        <li>Experience in modern frontend technologies, particularly Vue.js and Axios.</li>
        <li>Skills in responsive design and user interface development.</li>
        <li>Integration of various frontend libraries and frameworks.</li>
      </ul><br />

      <strong>Challenges:</strong><br />
      <ul>
        <li>Creating a responsive and visually appealing user interface for the machine monitoring dashboard.</li>
        <li>Successfully integrating Axios for seamless data communication with the backend.</li>
        <li>Ensuring a user-friendly experience by implementing best practices in frontend development.</li>
      </ul><br />

      <strong>Learning:</strong><br />
      <ul>
        <li>Enhanced proficiency in Vue.js and Axios through practical application in a real-world project.</li>
        <li>Improved skills in responsive design and user interface development.</li>
        <li>Hands-on experience in integrating frontend libraries and frameworks to enhance application functionality and performance.</li>
      </ul>
    `,
  },
  // Add other projects here
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const { darkMode } = useTheme();

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const projectCardClasses = darkMode ? 'bg-black-800 text-white' : 'bg-white text-gray-800';
  const descriptionClasses = darkMode ? 'text-gray-200' : 'text-gray-700';
  const closeBtnColor = darkMode ? 'text-white' : 'text-gray-800'; // Adjust close button color based on dark mode

  return (
    <div id="projects" className={`py-12 ${darkMode ? 'bg-black' : 'bg-white'}`}>
      <hr className="-mt-8" />
      <div className="p-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl font-extrabold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Projects</h2>
        <p className={`mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
        Below are some of the advanced projects I have developed, showcasing my expertise and versatility in Fullstack Web Development. Each project reflects my commitment to creating efficient, scalable, and user-friendly applications.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className={`p-6 border border-gray-300 rounded-lg shadow-lg rounded-lg shadow-md flex items-center transition-shadow duration-300 ease-in-out hover:shadow-2xl ${projectCardClasses}`} onClick={() => openModal(project)}>
              <img src={project.image} alt={project.title} className="w-10 h-10 mr-4" />
              <div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className={descriptionClasses}>{project.description}</p>
                <div onClick={() => openModal(project)} className="cursor-pointer">
                  <p className="text-blue-500 underline">Read More</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <div className={`fixed inset-0 ${darkMode ? 'bg-black' : 'bg-white'} bg-opacity-50 flex items-center justify-center z-50`}>
          <div className={`p-8 rounded-lg shadow-lg max-w-2xl w-full relative ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`} style={{ maxHeight: '80vh', overflowY: 'auto' }}>
            <button onClick={closeModal} className={`absolute top-2 right-2 ${closeBtnColor}`}>
              <FaTimes size={20} />
            </button>
            <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
            <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-auto mb-4" />
            <div dangerouslySetInnerHTML={{ __html: selectedProject.details }} className="mb-4"></div>
          </div>
        </div>
      )}
      <hr className="mt-10" />
    </div>
  );
};

export default Projects;
