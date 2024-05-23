import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useTheme } from '../contexts/ThemeContext'; 
import userImage from '../assets/images/sowndaryakp.jpg'; // Import the image

const UserInfo = () => {
  const { darkMode } = useTheme(); 
  const seeMyWorksRef = useRef(null);
  const contactMeRef = useRef(null);
  const resumeDownloadRef = useRef(null);

  useEffect(() => {
    const seeMyWorksButton = seeMyWorksRef.current;
    const contactMeButton = contactMeRef.current;
    const resumeDownloadButton = resumeDownloadRef.current;

    gsap.fromTo(
      seeMyWorksButton,
      { y: 0 },
      {
        y: -10,
        duration: 0.3,
        paused: true,
        ease: "power1.out",
        onStart: () => {
          seeMyWorksButton.style.transition = "transform 0.3s ease-out";
        },
        onReverseComplete: () => {
          seeMyWorksButton.style.transition = "";
        }
      }
    );

    gsap.fromTo(
      contactMeButton,
      { y: 0 },
      {
        y: -10,
        duration: 0.3,
        paused: true,
        ease: "power1.out",
        onStart: () => {
          contactMeButton.style.transition = "transform 0.3s ease-out";
        },
        onReverseComplete: () => {
          contactMeButton.style.transition = "";
        }
      }
    );

    gsap.fromTo(
      resumeDownloadButton,
      { y: 0 },
      {
        y: -10,
        duration: 0.3,
        paused: true,
        ease: "power1.out",
        onStart: () => {
          resumeDownloadButton.style.transition = "transform 0.3s ease-out";
        },
        onReverseComplete: () => {
          resumeDownloadButton.style.transition = "";
        }
      }
    );

    seeMyWorksButton.addEventListener('mouseenter', () => gsap.to(seeMyWorksButton, { y: -10 }));
    seeMyWorksButton.addEventListener('mouseleave', () => gsap.to(seeMyWorksButton, { y: 0 }));

    contactMeButton.addEventListener('mouseenter', () => gsap.to(contactMeButton, { y: -10 }));
    contactMeButton.addEventListener('mouseleave', () => gsap.to(contactMeButton, { y: 0 }));

    resumeDownloadButton.addEventListener('mouseenter', () => gsap.to(resumeDownloadButton, { y: -10 }));
    resumeDownloadButton.addEventListener('mouseleave', () => gsap.to(resumeDownloadButton, { y: 0 }));

    return () => {
      seeMyWorksButton.removeEventListener('mouseenter', () => gsap.to(seeMyWorksButton, { y: -10 }));
      seeMyWorksButton.removeEventListener('mouseleave', () => gsap.to(seeMyWorksButton, { y: 0 }));

      contactMeButton.removeEventListener('mouseenter', () => gsap.to(contactMeButton, { y: -10 }));
      contactMeButton.removeEventListener('mouseleave', () => gsap.to(contactMeButton, { y: 0 }));

      resumeDownloadButton.removeEventListener('mouseenter', () => gsap.to(resumeDownloadButton, { y: -10 }));
      resumeDownloadButton.removeEventListener('mouseleave', () => gsap.to(resumeDownloadButton, { y: 0 }));
    };
  }, []);

  const handleResumeDownload = () => {
    const path = '/resumes/pdffile.pdf'; // Update the path if necessary
    const link = document.createElement('a');
    link.href = path;
    link.download = 'resume.pdf'; // Set the desired filename for the downloaded file
    link.click();
  };

  return (
    <div id="user-info" className={`p-12 w-full h-full ${darkMode ? 'bg-black' : 'bg-white'}`}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-32`}>
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1 flex justify-center md:justify-start mb-6 md:mb-0">
            <div className="relative">
              <img
                src={userImage} // Use the imported image
                alt="User Interface Designer"
                className="rounded-full shadow-lg"
              />
            </div>
          </div>
          <div className="flex-1 md:ml-16">
            <div className="space-y-6 text-center md:text-left">
              <h1 className={`text-4xl md:text-6xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>I'm Fullstack Web Developer.</h1>
              <p className={`text-lg md:text-2xl mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Hi there! I'm Sowndarya K P, showcasing my proficiency in Fullstack Web Development through a carefully curated display of advanced projects, technical skills, and career accomplishments. With years of hands-on experience, my aim is to build credibility, forge valuable industry relationships, and explore avenues for collaboration and career growth in the realm of software engineering.
              </p>
              <div className="flex flex-row justify-center md:justify-start mt-6 space-x-4">
                <button
                  ref={seeMyWorksRef}
                  className={`bg-pink-500 text-white font-semibold py-3 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 ${darkMode ? 'hover:bg-pink-700' : 'hover:bg-pink-600'}`}
                >
                  See My Works
                </button>
                <button
                  ref={contactMeRef} to="experiences"
                  className={`bg-white text-pink-500 font-semibold py-3 px-6 rounded-full border border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 hover:bg-pink-500 hover:text-white transition-colors duration-200 ${darkMode ? 'hover:bg-pink-400' : 'hover:bg-pink-600'}`}
                >
                  Contact Me
                </button>
                <button
                  ref={resumeDownloadRef}
                  onClick={handleResumeDownload}
                  className={`bg-pink-500 text-white font-semibold py-3 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 hover:bg-pink-700 hover:text-white transition-colors duration-200`}
                >
                  Resume Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-16"/>
    </div>
  );
}

export default UserInfo;
