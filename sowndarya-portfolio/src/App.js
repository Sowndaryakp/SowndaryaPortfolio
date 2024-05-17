// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import UserInfo from './components/UserInfo';
import SkillsInfo from './components/SkillsInfo';
import './index.css';

function App() {
  return (
    <div >
      <Navbar />
      {/* Your other components go here */}
      <UserInfo />
      <SkillsInfo />
    </div>
  );
}

export default App;
