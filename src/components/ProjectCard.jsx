import React from "react";
import { FaGithub, FaGitlab } from "react-icons/fa";

const ProjectCard = ({ title, description, tech, github }) => {
  const validLink =
    github && github !== "[]" && github.trim() !== "" ? github : null;

  // Detect platform
  const isGitHub = validLink?.includes("github");

  // Icon and label configuration
  const platformIcon = isGitHub ? (
    <FaGithub className="me-2" />
  ) : (
    <FaGitlab className="me-2" />
  );

  const platformName = isGitHub ? "GitHub" : "GitLab";

  return (
    <div className="project-card" data-aos="zoom-in">
      <h3>{title}</h3>
      <p>{description}</p>
      
      <div className="tech-container">
        <div className="tech-list">
          {tech && tech.map((item) => (
            <span className="tech-badge" key={item}>
              {item}
            </span>
          ))}
        </div>

        {validLink ? (
          <a
            href={validLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link d-inline-flex align-items-center"
          >
            {platformIcon} View on {platformName}
          </a>
        ) : (
          <button className="project-link disabled-btn" disabled style={{ background: '#6c757d', cursor: 'not-allowed' }}>
            No Repository Available
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;