import React from 'react';

const ProjectCard = ({ title, description, tech, github }) => (
  <div className="col-lg-4 col-md-6 mb-4" data-aos="zoom-in">
    <div className="card shadow-lg h-100 project-card">
      <div className="card-body">
        <h5 className="card-title fw-bold">{title}</h5>
        <p className="card-text">{description}</p>
        <p>
          <span className="fw-semibold">Tech:</span> {tech}
        </p>
        <a href={github} target="_blank" rel="noopener" className="btn btn-gradient">
          View on GitHub
        </a>
      </div>
    </div>
  </div>
);

export default ProjectCard;
