import React from "react";
import profile from "../assets/dita.jpg";
import cv from "../assets/Dita_CV_short.pdf";

const FaDownload = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 512 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    style={{ marginRight: "0.25rem" }}
  >
    <path d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
  </svg>
);

const Hero = () => (
  <section className="container mt-5 pt-4" id="hero">
    <div className="row align-items-center">
      <div className="col-md-7" data-aos="fade-right">
        <h1 className="display-5 fw-bold mb-2">Hi, I'm Dita 👋</h1>
        <h2 className="mb-3 headline">
          Data Science MSc student & Software Developer
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
          <a
            href={cv}
            download="Dita_Pelaj_CV.pdf"
            className="btn btn-outline-secondary shadow mb-2 mb-md-0"
            style={{ marginLeft: "1rem" }}
          >
            <FaDownload /> Download CV
          </a>
        </div>
      </div>
      <div className="col-md-5 text-center" data-aos="fade-left">
        <img
          src={profile}
          alt="pic"
          className="profile-pic rounded-circle shadow-lg"
        />
      </div>
    </div>
  </section>
);

export default Hero;
