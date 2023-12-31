'use client';
import React, { useRef } from 'react';
import Contact from './components/Contact';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Footer from './components/Footer';
import './globals.css';
import { SnackbarProvider } from 'notistack';

export default function Home() {
  return (
    <main>
      <SnackbarProvider>
        <Navbar />
        <Main />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </SnackbarProvider>
    </main>
  );
}
