'use client';
import React, { useRef } from 'react';
import Contact from './components/Contact';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
