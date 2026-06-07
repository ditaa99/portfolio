import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Education from "./components/Education";
import Experience from "./components/Experience";
import Contact from './components/Contact';
import Skills from './components/Skills';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 850, once: true });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer/>
      <ScrollToTopButton />
    </>
  );
}

export default App;
