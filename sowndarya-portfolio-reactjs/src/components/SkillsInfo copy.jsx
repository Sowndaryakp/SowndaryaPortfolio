import React, { useEffect, useRef } from 'react';
import { FaHtml5, FaCss3, FaJava, FaDatabase, FaReact, FaNodeJs, FaJsSquare, FaVuejs, FaPython } from 'react-icons/fa';
import { SiSpring, SiHibernate, SiPostgresql, SiJavascript, SiGithub, SiRest } from 'react-icons/si'; // Changed from SiRestApi to SiRest
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SkillsCard = () => {
  const skillsRef = useRef([]);

  useEffect(() => {
    skillsRef.current.forEach((skill, index) => {
      gsap.fromTo(
        skill,
        { opacity: 0, y: 50, scale: 0.8, rotation: -15 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotation: 0,
          duration: 1.5,
          delay: index * 0.1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: skill,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

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
    // { name: 'Restful Web Services', icon: <SiRest className="text-blue-500" size={50} /> },
    { name: 'GitHub', icon: <SiGithub className="text-gray-800" size={50} /> },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center overflow-y-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            ref={(el) => (skillsRef.current[index] = el)}
            className="w-40 p-4 bg-white shadow-lg rounded-lg text-center"
          >
            <div className="mb-3">{skill.icon}</div>
            <h3 className="text-xl font-semibold">{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
