import React from "react";
import { skillGroups } from "../data/skills"; // Adjust this path to match your folder structure
import { FaCode, FaDatabase, FaDiagramProject, FaGlobe, FaChartBar } from "react-icons/fa6"; // Using fa6 for maximum compatibility

const Skills = () => {
  // Helper function to pair the correct icon with the corresponding title string
  const getIcon = (title) => {
    switch (title) {
      case "Programming & Web Development":
        return <FaCode className="skill-header-icon" />;
      case "Data Science & Analysis":
        return <FaChartBar className="skill-header-icon" />;
      case "Databases":
        return <FaDatabase className="skill-header-icon" />;
      case "Tools & Workflow":
        return <FaDiagramProject className="skill-header-icon" />;
      case "Languages":
        return <FaGlobe className="skill-header-icon" />;
      default:
        return <FaCode className="skill-header-icon" />;
    }
  };

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      
      <div className="skills-container">
        {skillGroups.map((group, groupIndex) => (
          <div className="skill-card" key={groupIndex}>
            <h3>
              {getIcon(group.title)} {group.title}
            </h3>
            
            <div className="skill-badges">
              {group.skills.map((skill, skillIndex) => {
                if (group.title === "Languages" && skill.includes(":")) {
                  const [langName, level] = skill.split(":");
                  return (
                    <span className="skill-badge d-flex justify-content-between align-items-center w-100 mb-2" key={skillIndex}>
                      <span className="fw-bold">{langName.trim()}</span>
                      <span className="badge bg-secondary text-white px-2 py-1" style={{ fontSize: "0.75rem", borderRadius: "4px" }}>
                        {level.trim()}
                      </span>
                    </span>
                  );
                }
                
                return (
                  <span className="skill-badge" key={skillIndex}>
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;