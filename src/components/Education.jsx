import React from "react";
import { education } from "../data/education";
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h2>Education</h2>
      <div className="timeline-container">
        {education.map((edu, index) => (
          <div className="timeline-card" key={index} data-aos="fade-up">
            <div className="timeline-header">
              <div>
                <h3><FaGraduationCap className="timeline-icon" /> {edu.degree}</h3>
                <h4 className="timeline-subheading">{edu.institution}</h4>
              </div>
              <div className="timeline-meta">
                <span><FaCalendarAlt /> {edu.period}</span>
                <span><FaMapMarkerAlt /> {edu.location}</span>
              </div>
            </div>
            {edu.highlights.length > 0 && (
              <ul className="timeline-highlights">
                {edu.highlights.map((highlight, hIndex) => (
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

export default Education;