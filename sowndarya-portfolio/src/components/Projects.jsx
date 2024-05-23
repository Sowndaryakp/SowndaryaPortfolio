import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';
import todoreactImage from '../assets/images/todoreact.png'; // Import the Todo app image
// import todoAppLogo from '../assets/images/todo-app-logo.png'; // Import the Todo app logo

const projects = [
  {
    title: 'Todo App in ReactJS and Tailwind CSS',
    description: 'A simple Todo app built with ReactJS and Tailwind CSS',
    image: todoreactImage,
    // logo: todoAppLogo, // Specify the logo for the Todo app
    details: `
      <strong>Problem Statement:</strong><br />
      Create a Todo application using ReactJS and Tailwind CSS that allows users to add, delete, and mark tasks as completed.<br /><br />

      // <strong>Technical Skills:</strong><br />
      // <ul>
      //   <li>ReactJS (Hooks)</li>
      //   <li>Tailwind CSS</li>
      //   <li>State management</li>
      //   <li>Event handling</li>
      // </ul><br />

      <strong>Challenges:</strong><br />
      <ul>
        <li>Implementing state management for Todo items</li>
        <li>Styling components with Tailwind CSS</li>
        <li>Handling user interactions (adding, deleting, completing tasks)</li>
      </ul><br />

      <strong>Learning:</strong><br />
      <ul>
        <li>React Hooks for state management</li>
        <li>Advanced Tailwind CSS techniques</li>
        <li>Best practices for building Todo applications</li>
      </ul>
    `,
  },
  // Add more projects here if needed
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

  const projectCardClasses = darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800';
  const descriptionClasses = darkMode ? 'text-gray-200' : 'text-gray-700';

  return (
    <div id="projects" className={`py-12 ${darkMode ? 'bg-black' : 'bg-white'}`}>
      <hr className="-mt-8" />
      <div className="p-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl font-extrabold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Projects</h2>
        <p className={`mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
        I've worked on numerous projects over the years, but these are the ones I'm most proud of. Many are open-source, so if something catches your eye, feel free to check out the code and contribute your ideas for improvement.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className={`p-6 rounded-lg shadow-md flex items-center hover:bg-white-200 ${projectCardClasses}`} onClick={() => openModal(project)}>
              <img src={project.logo} alt={project.title} className="w-10 h-10 mr-4" />
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
        <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full relative">
            <button onClick={closeModal} className="absolute top-2 right-2 text-gray-800 dark:text-gray-200">
              <FaTimes size={20} />
            </button>
            <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
            <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full mb-4" /> {/* Set width and height to full */}
            <div dangerouslySetInnerHTML={{ __html: selectedProject.details }} className="mb-4"></div>
          </div>
        </div>
      )}
      <hr className="mt-10" />
    </div>
  );
};

export default Projects;

