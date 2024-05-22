import React from 'react';
import { FaHtml5, FaCss3, FaJava, FaVuejs, FaReact, FaDatabase, FaJsSquare } from 'react-icons/fa';
import { SiSpring, SiHibernate, SiPostgresql, SiJavascript, SiGithub } from 'react-icons/si';
import { useTheme } from '../contexts/ThemeContext';

const WhatIDo = () => {
  const { darkMode } = useTheme();

  const skills = [
    { name: 'HTML', icon: <FaHtml5 className={darkMode ? 'text-orange-300' : 'text-orange-500'} size={50} /> },
    { name: 'CSS', icon: <FaCss3 className={darkMode ? 'text-blue-300' : 'text-blue-500'} size={50} /> },
    { name: 'Java', icon: <FaJava className={darkMode ? 'text-red-600' : 'text-red-700'} size={50} /> },
    { name: 'Spring MVC', icon: <SiSpring className={darkMode ? 'text-green-300' : 'text-green-500'} size={50} /> },
    { name: 'Spring Boot', icon: <SiSpring className={darkMode ? 'text-green-300' : 'text-green-500'} size={50} /> },
    { name: 'Hibernate', icon: <SiHibernate className={darkMode ? 'text-green-300' : 'text-green-500'} size={50} /> },
    { name: 'SQL', icon: <FaDatabase className={darkMode ? 'text-blue-300' : 'text-blue-500'} size={50} /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className={darkMode ? 'text-blue-400' : 'text-blue-600'} size={50} /> },
    { name: 'JavaScript', icon: <SiJavascript className={darkMode ? 'text-yellow-300' : 'text-yellow-500'} size={50} /> },
    { name: 'Vue.js', icon: <FaVuejs className={darkMode ? 'text-green-300' : 'text-green-500'} size={50} /> },
    { name: 'React Js', icon: <FaReact className={darkMode ? 'text-cyan-300' : 'text-cyan-500'} size={50} /> },
    { name: 'Axios', icon: <FaJsSquare className={darkMode ? 'text-yellow-300' : 'text-yellow-500'} size={50} /> },
    { name: 'GitHub', icon: <SiGithub className={darkMode ? 'text-gray-500' : 'text-gray-800'} size={50} /> },
  ];

  return (
    <div id="what-i-do" className={`mx-auto px-4 md:px-20 py-12 ${darkMode ? 'bg-black' : 'bg-charm-50'}`}>
      <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>What I Do?</h2>
      <p className={`mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        Duis mollis est commodo luctus nisi erat porttitor ligula, eget lacinia odio sem nec elit.
        Nullam quis risus eget urna mollis ornare vel. Nulla vitae elit libero, a pharetra augue.
        Praesent commodo cursus magna, vel scelerisque nisl.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map(skill => (
          <div key={skill.name} className="text-center">
            <div className="flex justify-center mb-4">
              {skill.icon}
            </div>
            <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{skill.name}</h3>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.
              Cras justo cum sociis natoque magnis.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatIDo;
