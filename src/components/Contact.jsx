import React from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => (
  <section className="container mb-5" id="contact">
    <div className="bg-light p-5 rounded shadow text-center about-section" data-aos="fade-up">
      <h3 className="fw-bold mb-4">Contact Me</h3>
      <p>Reach me via LinkedIn or email.</p>
      <a
        href="https://www.linkedin.com/in/dita-pelaj/"
        className="btn btn-gradient me-3"
        target="_blank"
        rel="noopener"
      >
        <FaLinkedin className="me-1" /> LinkedIn
      </a>
      <a href="mailto:dita.pelaj@uni-potsdam.de" className="btn btn-outline-secondary">
        <FaEnvelope className="me-1" /> Email
      </a>
    </div>
  </section>
);

export default Contact;
