<template>
  <div id="app">
    <Navbar />
    <UserInfo />
    <Education />
    <div class="h-screen bg-gray-100 flex items-center justify-center">
      <SkillsInfo />
    </div>
    <!-- <WhatIDo /> -->
    <Projects />
    <Certificates />
    <Experience />
    <ContactMe />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import UserInfo from './components/UserInfo.vue';
import Education from './components/Education.vue';
import SkillsInfo from './components/SkillsInfo.vue';
import Certificates from './components/Certificates.vue';
import WhatIDo from './components/WhatIDo.vue';
import Projects from './components/Projects.vue';
import Experience from './components/Experience.vue';
import ContactMe from './components/ContactMe.vue';
import Footer from './components/Footer.vue';
</script>

<style scoped>
/* Your Tailwind CSS styles go here */
</style>
