import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
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
      <Projects />
      <Contact />
    </>
  );
}

export default App;
