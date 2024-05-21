// WhatIDo.jsx
import React from 'react';
import { FaHtml5, FaCss3, FaJava, FaVuejs, FaReact, FaDatabase, FaJsSquare } from 'react-icons/fa';
import { SiSpring, SiHibernate, SiPostgresql, SiJavascript, SiGithub } from 'react-icons/si';

const WhatIDo = () => {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 className="text-orange-500" size={50} /> },
    { name: 'CSS', icon: <FaCss3 className="text-blue-500" size={50} /> },
    { name: 'Java', icon: <FaJava className="text-red-600" size={50} /> },
    { name: 'Spring MVC', icon: <SiSpring className="text-green-500" size={50} /> },
    { name: 'Spring Boot', icon: <SiSpring className="text-green-500" size={50} /> },
    { name: 'Hibernate', icon: <SiHibernate className="text-green-500" size={50} /> },
    { name: 'SQL', icon: <FaDatabase className="text-blue-500" size={50} /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-600" size={50} /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500" size={50} /> },
    { name: 'Vue.js', icon: <FaVuejs className="text-green-500" size={50} /> },
    { name: 'React Js', icon: <FaReact className="text-cyan-500" size={50} /> },
    { name: 'Axios', icon: <FaJsSquare className="text-yellow-500" size={50} /> },
    { name: 'GitHub', icon: <SiGithub className="text-gray-800" size={50} /> },
  ];

  return (
    <div className=" mx-auto px-60 py-12 bg-charm-50">
      <h2 className="text-3xl font-bold mb-4">What I Do?</h2>
      <p className="text-gray-700 mb-8">
        Duis mollis est commodo luctus nisi erat porttitor ligula, eget lacinia odio sem nec elit.
        Nullam quis risus eget urna mollis ornare vel. Nulla vitae elit libero, a pharetra augue.
        Praesent commodo cursus magna, vel scelerisque nisl.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map(skill => (
          <div key={skill.name} className="text-center">
            <div className="flex justify-center mb-4">
              {skill.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
            <p className="text-gray-600">
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
