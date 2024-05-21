import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const UserInfo = () => {
  const seeMyWorksRef = useRef(null);
  const contactMeRef = useRef(null);

  useEffect(() => {
    const seeMyWorksButton = seeMyWorksRef.current;
    const contactMeButton = contactMeRef.current;

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

    seeMyWorksButton.addEventListener('mouseenter', () => gsap.to(seeMyWorksButton, { y: -10 }));
    seeMyWorksButton.addEventListener('mouseleave', () => gsap.to(seeMyWorksButton, { y: 0 }));

    contactMeButton.addEventListener('mouseenter', () => gsap.to(contactMeButton, { y: -10 }));
    contactMeButton.addEventListener('mouseleave', () => gsap.to(contactMeButton, { y: 0 }));

    return () => {
      seeMyWorksButton.removeEventListener('mouseenter', () => gsap.to(seeMyWorksButton, { y: -10 }));
      seeMyWorksButton.removeEventListener('mouseleave', () => gsap.to(seeMyWorksButton, { y: 0 }));

      contactMeButton.removeEventListener('mouseenter', () => gsap.to(contactMeButton, { y: -10 }));
      contactMeButton.removeEventListener('mouseleave', () => gsap.to(contactMeButton, { y: 0 }));
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-32">
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex-1 flex justify-center md:justify-start mb-6 md:mb-0">
          <div className="relative">
            <img
              src="https://placehold.co/500x500"
              alt="User Interface Designer"
              className="rounded-full shadow-lg"
            />
          </div>
        </div>
        <div className="flex-1 md:ml-16">
  <div className="space-y-6 text-center md:text-left"> {/* Center text on mobile, align left on larger screens */}
    <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-black-300">I'm User Interface Designer & Developer.</h1>
    <p className="text-lg md:text-2xl mt-4 text-gray-600 dark:text-gray-900">
      Hello! I’m Julia, a freelance user interface designer & developer based in London. I’m very passionate about the work that I do.
    </p>
    <div className="flex justify-center md:justify-start mt-6">
      <button
        ref={seeMyWorksRef}
        className="bg-pink-500 text-white font-semibold py-3 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 mr-4 md:mr-8"
      >
        See My Works
      </button>
      <button
        ref={contactMeRef}
        className="bg-white text-pink-500 font-semibold py-3 px-6 rounded-full border border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 hover:bg-pink-500 hover:text-white transition-colors duration-200"
      >
        Contact Me
      </button>
    </div>
  </div>
</div>

      </div>
    </div>
  );
}

export default UserInfo;
