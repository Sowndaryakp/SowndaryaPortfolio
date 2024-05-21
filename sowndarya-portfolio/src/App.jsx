// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import UserInfo from './components/UserInfo';
import SkillsInfo from './components/SkillsInfo';
import WhatIDo from './components/WhatIDo';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div >
      <Navbar />
      {/* Your other components go here */}
      <UserInfo />
      <div className=" h-screen bg-gray-100 flex items-center justify-center">
      <SkillsInfo />
      </div>
      <WhatIDo />
      <Projects />
      <ContactMe />
      <Footer />

    </div>
  );
}

export default App;