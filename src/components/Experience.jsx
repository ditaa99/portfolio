import React from "react";
import { experience } from "../data/experience";
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>
      <div className="timeline-container">
        {experience.map((exp, index) => (
          <div className="timeline-card" key={index} data-aos="fade-up">
            <div className="timeline-header">
              <div>
                <h3><FaBriefcase className="timeline-icon" /> {exp.role}</h3>
                <h4 className="timeline-subheading">{exp.company}</h4>
              </div>
              <div className="timeline-meta">
                <span><FaCalendarAlt /> {exp.period}</span>
                <span><FaMapMarkerAlt /> {exp.location}</span>
              </div>
            </div>
            {exp.highlights.length > 0 && (
              <ul className="timeline-highlights">
                {exp.highlights.map((highlight, hIndex) => (
                  <li key={hIndex}>{highlight}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;