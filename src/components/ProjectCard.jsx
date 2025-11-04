import React from "react";
import { FaGithub, FaGitlab} from "react-icons/fa";

const ProjectCard = ({ title, description, tech, github }) => {

  const validLink =
    github && github !== "[]" && github.trim() !== "" ? github : null;

  // Detect platform
  const isGitHub = validLink?.includes("github");

  //icon and label
  const platformIcon = isGitHub ? (
    <FaGithub className="me-2" />
  ) :(
    <FaGitlab className="me-2" />
  ) ;

  const platformName = isGitHub ? "GitHub" : "GitLab";

  return (
    <div className="col-lg-4 col-md-6 mb-4" data-aos="zoom-in">
      <div className="card shadow-lg h-100 project-card">
        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-bold">{title}</h5>
          <p className="card-text">{description}</p>
          <p>
            <span className="fw-semibold">Tech:</span> {tech}
          </p>

          {validLink ? (
            <a
              href={validLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gradient mt-auto align-self-start d-inline-flex align-items-center"
            >
              {platformIcon} View on {platformName}
            </a>
          ) : (
            <button className="btn btn-secondary mt-auto" disabled>
              No Repository Available
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
