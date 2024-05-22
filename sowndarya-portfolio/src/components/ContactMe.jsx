import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

function ContactMe() {
  const { darkMode } = useTheme();
  return (
    <section id="contact-me" className={`py-12 ${darkMode ? 'bg-black text-white' : 'bg-white text-gray-800'}`}>
      <div className="container mx-auto px-4">
        <div className={`max-w-4xl mx-auto shadow-md rounded-lg p-8 ${darkMode ? 'bg-gray-900' : 'bg-pink-100'}`}>
          <div className="flex items-center justify-center mb-6">
            {/* Your email SVG logo goes here */}
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.3343 5.49846L11.9999 14.0813L0.665527 5.49846C0.665527 4.48596 1.48584 3.66565 2.49834 3.66565H21.5015C22.514 3.66565 23.3343 4.48596 23.3343 5.49846Z" fill="#E3A6B6"/>
              <path d="M12 14.7469C11.8547 14.7469 11.7141 14.7 11.5969 14.6109L0.2625 6.02812C0.0984375 5.90156 0 5.70469 0 5.49844C0 4.12031 1.12031 3 2.49844 3H21.5016C22.8797 3 24 4.12031 24 5.49844C24 5.70469 23.9016 5.90156 23.7375 6.02812L12.4031 14.6109C12.2859 14.7 12.1453 14.7469 12 14.7469ZM1.37344 5.19375L12 13.2469L22.6266 5.19375C22.4906 4.68281 22.0266 4.33125 21.5016 4.33125H2.49844C1.96875 4.33594 1.50937 4.6875 1.37344 5.19375V5.19375ZM22.6641 21.5391C22.5188 21.5391 22.3781 21.4922 22.2609 21.4031L17.5922 17.8688C17.2969 17.6484 17.2406 17.2266 17.4656 16.9359C17.6859 16.6406 18.1078 16.5844 18.3984 16.8094L23.0672 20.3438C23.3625 20.5641 23.4187 20.9859 23.1984 21.2766C23.0719 21.4453 22.875 21.5438 22.6641 21.5391V21.5391ZM1.61719 21.3234C1.24687 21.3234 0.951562 21.0234 0.951562 20.6578C0.951562 20.4469 1.05 20.25 1.21406 20.1234L5.59688 16.8047C5.89219 16.5844 6.30938 16.6406 6.52969 16.9313C6.75 17.2266 6.69375 17.6438 6.40313 17.8641L2.02031 21.1875C1.90312 21.2766 1.7625 21.3234 1.61719 21.3234Z" fill="#36496D"/>
            </svg>
          </div>
          <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
          <form>
            <div className="mb-4 flex">
              <div className="w-1/2 mr-2">
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="Name *" 
                  required 
                  className={`mt-1 p-2 border rounded-md w-full focus:outline-none ${darkMode ? 'bg-gray-800 text-white border-gray-600' : 'border-gray-300'}`}
                />
              </div>
              <div className="w-1/2 ml-2">
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="Email *" 
                  required 
                  className={`mt-1 p-2 border rounded-md w-full focus:outline-none ${darkMode ? 'bg-gray-800 text-white border-gray-600' : 'border-gray-300'}`}
                />
              </div>
            </div>
            <div className="mb-4">
              <textarea 
                id="message" 
                name="message" 
                placeholder="Message *" 
                rows="4" 
                required 
                className={`mt-1 p-2 border rounded-md w-full focus:outline-none ${darkMode ? 'bg-gray-800 text-white border-gray-600' : 'border-gray-300'}`}
              ></textarea>
            </div>
            <button 
              className={`py-4 px-6 rounded-full font-semibold border focus:outline-none transition-colors duration-200 ${darkMode ? 'bg-gray-800 text-white border-white hover:bg-charm-500 hover:text-white' : 'bg-white text-charm-600 border-charm-600 hover:bg-charm-500 hover:text-white'}`}
            >
              Send Message
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
