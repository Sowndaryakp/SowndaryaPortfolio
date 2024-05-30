import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';
import todoreactImage from '../assets/images/todoreact.png';
import gerbindia1 from '../assets/images/gerbindia1.png';
import inventoryManagement1 from '../assets/images/inventoryManagement1.png';

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
  {
    title: 'Inventory Management System',
    description: 'Develop an inventory management system to efficiently track and manage inventory levels.',
    image: inventoryManagement1,
    details: `
      <strong>Problem Statement:</strong><br />
      Develop an inventory management system to efficiently track and manage inventory levels.<br /><br />

      <strong>Technical Skills:</strong><br />
      <ul>
        <li>Proficiency in React with TypeScript for frontend development.</li>
        <li>Understanding of Java for backend development.</li>
        <li>Experience in database management.</li>
        <li>Knowledge of RESTful API development for communication between frontend and backend.</li>
        <li>Familiarity with authentication and authorization mechanisms for secure access.</li>
        <li>Ability to implement CRUD (Create, Read, Update, Delete) operations for inventory items.</li>
        </ul><br />

      <strong>Challenges:</strong><br />
      <ul>
        <li>Integrating React with TypeScript for building a robust and type-safe frontend.</li>
        <li>Implementing backend functionality using Java to handle inventory data storage and retrieval.</li>
        <li>Setting up and managing databases for storing inventory information efficiently.</li>
        <li>Designing and implementing RESTful APIs to facilitate communication between frontend and backend.</li>
        <li>Implementing authentication and authorization mechanisms to ensure secure access to inventory data.</li>
      </ul><br />

      <strong>Learning:</strong><br />
      <ul>
        <liEnhanced proficiency in React with TypeScript, gaining experience in building scalable and maintainable frontend applications.</li>
        <li>Improved understanding of backend development with Java, including handling data storage and retrieval operations.</li>
        <li>Hands-on experience in database management and optimization for inventory-related data.</li>
        <li>Practical knowledge in designing and implementing secure APIs for seamless communication between frontend and backend components.</li>
        <li>Understanding best practices in authentication and authorization to ensure data security and integrity within the inventory management system.</li>
        </ul>
    `,
  },
  {
    title: 'Report Template Creation with Vue.js and Tailwind CSS',
    description: 'Develop a feature-rich report template creation module using Vue.js and Tailwind CSS, allowing users to create customizable and editable report templates.',
    image: inventoryManagement1,
    details: `
      <strong>Problem Statement:</strong><br />
      Develop a feature-rich report template creation module using Vue.js and Tailwind CSS, allowing users to create customizable and editable report templates.<br /><br />

      <strong>Technical Skills:</strong><br />
      <ul>
        <li>Proficiency in Vue.js for frontend development.</li>
        <li>Experience in utilizing Tailwind CSS for styling and UI design.</li>
        <li>Knowledge of state management within Vue.js applications.</li>
        <li>Understanding of dynamic content rendering and manipulation in Vue.js.</li>
        <li>Ability to implement features for template creation, customization, and editing.</li>
        <li>Familiarity with Vue.js libraries/plugins for enhanced functionality (e.g., Vue Router, Vuex).</li>
        </ul><br />

      <strong>Challenges:</strong><br />
      <ul>
        <li>Designing a user-friendly interface for creating and customizing report templates using Tailwind CSS.</li>
        <li>Implementing dynamic content rendering and manipulation to enable users to add, edit, and remove template sections.</li>
        <li>Integrating Vue.js state management techniques to handle template data and user interactions effectively.</li>
        <li>Ensuring responsiveness and compatibility across different devices and screen sizes.</li>
        <li>Adding features for template editing, including text formatting, image insertion, and layout adjustments.</li>
        <li>Providing options for template saving, exporting, and sharing functionalities.</li>
        </ul><br />

      <strong>Learning:</strong><br />
      <ul>
        <li>Enhanced proficiency in Vue.js for building interactive and dynamic web applications.</li>
        <li>Improved skills in UI design and styling using Tailwind CSS, focusing on creating visually appealing and responsive interfaces.</li>
        <li>Practical experience in state management within Vue.js applications, utilizing techniques such as component state, props, and Vuex for managing complex application states.</li>
        <li>Hands-on experience in implementing advanced features and functionalities within Vue.js applications, including dynamic content manipulation and template customization.</li>
        <li>Understanding best practices for frontend development, including code organization, component reusability, and performance optimization, in Vue.js projects.</li>
        <li>Exploring Vue.js ecosystem and leveraging libraries/plugins to enhance the functionality and productivity of the report template creation module.</li>
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
