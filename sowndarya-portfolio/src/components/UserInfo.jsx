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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-32">
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex-1 flex justify-center md:justify-start">
          <div className="relative ml-6">
            <img
              src="https://placehold.co/500x500"
              alt="User Interface Designer"
              className="rounded-full shadow-lg"
            />
            {/* <div className="absolute -bottom-3 -right-3 bg-white p-2 shadow-lg rounded-lg">
              <p className="text-center text-zinc-800">250+<br />Projects Done</p>
            </div> */}
          </div>
        </div>
        <div className="flex-1 mt-6 md:mt-0 md:ml-48">
  <div className="space-y-6"> {/* Add space between rows */}
    <h1 className="text-6xl font-bold text-zinc-800 dark:text-black-300">I'm User Interface Designer & Developer.</h1>
    <p className="text-2xl mt-4 text-zinc-600 dark:text-zinc-900 ">
      Hello! I’m Julia, a freelance user interface designer & developer based in London. I’m very passionate about the work that I do.
    </p>
    <div className="mr-40 flex space-x-4 justify-center p-4 mr-50 ">
      <button
        ref={seeMyWorksRef}
        className="bg-charm-500 text-white font-semibold py-4 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
      >
        See My Works
      </button>
      <button
        ref={contactMeRef}
        className="bg-white text-charm-600 font-semibold py-4 px-6 rounded-full border border-charm-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 hover:bg-charm-500 hover:text-white transition-colors duration-200"
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
