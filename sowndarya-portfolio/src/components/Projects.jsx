import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const projects = [
  {
    title: 'Adocs',
    description: 'Static docs template built with VitePress',
    image: 'https://placehold.co/40x40',
    details: 'Detailed information about Adocs project.',
  },
  {
    title: 'Victoreke v1',
    description: 'First iteration of my personal site',
    image: 'https://placehold.co/40x40',
    details: 'Detailed information about Victoreke v1 project.',
  },
  {
    title: 'Sanity Portfolio',
    description: 'A Sanity-powered portfolio site built with Next.js/TypeScript and Tailwind CSS.',
    image: 'https://placehold.co/40x40',
    details: `A Sanity-powered portfolio site built with Next.js/TypeScript and Tailwind CSS. I built this project to explain how to build a Portfolio Site with Sanity and Next.js, and also explain how you can set-up GROQ-powered webhooks to deploy your site on Vercel.
    
Technical Details:
- Next.js: Fullstack React Framework
- Sanity: Headless CMS for Content
- Tailwind CSS: Styling
- Vercel: Hosting and Deployment`,
  },
  {
    title: 'Spekni',
    description: 'Recognition platform built for developer endorsements',
    image: 'https://placehold.co/40x40',
    details: 'Detailed information about Spekni project.',
  },
  {
    title: 'Rocketmeme',
    description: 'Simple and intuitive meme generator',
    image: 'https://placehold.co/40x40',
    details: 'Detailed information about Rocketmeme project.',
  },
  {
    title: 'Currencee',
    description: "The world's most trusted, fast and secure currency converter",
    image: 'https://placehold.co/40x40',
    details: 'Detailed information about Currencee project.',
  },
];

const projectCardClasses = 'bg-white white:bg-gray-800 p-6 rounded-lg shadow-md flex items-center hover:bg-white-200 white:hover:bg-white-700 cursor-pointer transition-colors';
const titleClasses = 'text-xl font-semibold';
const descriptionClasses = 'text-white-800 white:text-gray-200';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="bg-white-100 white:bg-white-900 text-gray-800 dark:text-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold mb-4">Projects</h2>
        <p className="mb-8">
          I've worked on tons of little projects over the years but these are the ones that I'm most
          proud of. Many of them are open-source, so if you see something that piques your interest,
          check out the code and contribute if you have ideas on how it can be improved.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className={projectCardClasses} onClick={() => openModal(project)}>
              <img src={project.image} alt={project.title} className="w-10 h-10 mr-4" />
              <div>
                <h3 className={titleClasses}>{project.title}</h3>
                <p className={descriptionClasses}>{project.description}</p>
                {/* Wrap the entire content of the card in a clickable element */}
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
          <div className="bg-white white:bg-gray-800 p-8 rounded-lg shadow-lg max-w-lg w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-800 dark:text-gray-200"
            >
              <FaTimes size={20} />
            </button>
            <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
            <img src={selectedProject.image} alt={selectedProject.title} className="w-20 h-20 mb-4" />
            <p className="mb-4">{selectedProject.details}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;