import React from 'react';

const experiences = [
  {
    title: 'Experience One',
    description: 'This is a description for Experience one.',
    link: '#',
  },
  {
    title: 'Experience Two',
    description: 'This is a description for Experience two.',
    link: '#',
  },
  {
    title: 'Experience Three',
    description: 'This is a description for Experience three.',
    link: '#',
  },
];

const Experiences = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Experiences</h2>
      <p className="text-lg mb-8">Here are some of the Experiences I have worked on:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {experiences.map((experience, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
            <p className="text-gray-700 mb-4">{experience.description}</p>
            <a href={experience.link} className="text-blue-500 hover:underline">Learn more</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
