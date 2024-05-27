// Projects.js
import React from 'react';

const projects = [
  {
    title: 'Project One',
    description: 'This is a description for project one.',
    link: '#',
  },
  {
    title: 'Project Two',
    description: 'This is a description for project two.',
    link: '#',
  },
  {
    title: 'Project Three',
    description: 'This is a description for project three.',
    link: '#',
  },
];

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <p className="text-lg mb-8">Here are some of the projects I have worked on:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <a href={project.link} className="text-blue-500 hover:underline">Learn more</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
