import React from 'react';
import profile from '../assets/dita.jpg';

const Hero = () => (
  <section className="container mt-5 pt-4" id="hero">
    <div className="row align-items-center">
      <div className="col-md-7" data-aos="fade-right">
        <h1 className="display-5 fw-bold mb-2">Hi, I'm Dita 👋</h1>
        <h2 className="mb-3 headline">
          Data Science Master's student & Software Developer
        </h2>
        <p className="lead">
          Passionate about Machine Learning and Web Development.
        </p>
        <div className="mt-4">
          <a href="#projects" className="btn btn-gradient me-3 shadow-lg">
            View Projects
          </a>
          <a href="#contact" className="btn btn-outline-secondary shadow">
            Contact Me
          </a>
        </div>
      </div>
      <div className="col-md-5 text-center" data-aos="fade-left">
        <img
          src={profile}
          alt="pic"
          className="rounded-circle shadow-lg"
          style={{ width: "170px", height: "170px", objectFit: "cover" }}
        />
      </div>
    </div>
  </section>
);

export default Hero;
