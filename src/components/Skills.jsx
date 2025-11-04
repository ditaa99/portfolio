import React from "react";
import { Container, Row, Col, Card, ProgressBar, Badge } from "react-bootstrap";
import { Code, Database, Wrench, Globe, Users } from "lucide-react";

const Skills = () => {
  const skillData = [
    {
      title: "Languages & Frameworks",
      icon: <Code size={28} />,
      skills: [
        { name: "Python", level: 80 },
        { name: "Flask", level: 50 },
        { name: "HTML & CSS", level: 75 },
        { name: "Bootstrap", level: 70 },
        { name: "JavaScript", level: 75 },
        { name: "React", level: 75 },
        { name: "PHP", level: 30 },
        { name: "SQL", level: 50 },
        { name: "Java", level: 60 },
        { name: "SpringBoot", level: 45 },
        { name: "C++", level: 55 },
      ],
    },
    {
      title: "Databases",
      icon: <Database size={28} />,
      skills: [
        { name: "DB Modeling", level: 40 },
        { name: "MySQL", level: 50 },
        { name: "MSSQL Server", level: 40 },
        { name: "PostgreSQL", level: 45 },
      ],
    },
    {
      title: "Tools",
      icon: <Wrench size={28} />,
      skills: [
        { name: "Git & GitHub", level: 70 },
        { name: "WordPress", level: 40 },
        { name: "Firebase", level: 45 },
        { name: "Fly.io", level: 40 },
        { name: "Snakemake", level: 55 },
      ],
    },
    {
      title: "Languages",
      icon: <Globe size={28} />,
      skills: [
        { name: "Albanian", level: 100, label: "Native" },
        { name: "English", level: 90, label: "Fluent" },
        { name: "German", level: 60, label: "Intermediate" },
        { name: "Hungarian", level: 30, label: "Basic" },
        { name: "Norwegian", level: 30, label: "Basic" },
        { name: "Serbian", level: 30, label: "Basic" },
      ],
    },
    {
      title: "Soft Skills",
      icon: <Users size={28} />,
      skills: [
        { name: "Problem Solving" },
        { name: "Adaptability" },
        { name: "Teamwork & Collaboration" },
        { name: "Communication" },
        { name: "Time Management" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-5">
      <Container>
        <h2 className="text-center mb-5">Skills</h2>
        <Row>
          {skillData.map((section, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <Card className="shadow-sm border-0 h-100 skill-card">
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    {section.icon}
                    <Card.Title className="ms-2 mb-0">{section.title}</Card.Title>
                  </div>
                  {section.skills.map((skill, idx) => (
                    <div key={idx} className="mb-3">
                      <div className="d-flex justify-content-between align-items-center">
                        <span>{skill.name}</span>
                        {skill.label && (
                          <Badge bg="secondary" pill>
                            {skill.label}
                          </Badge>
                        )}
                      </div>
                      {skill.level && (
                        <ProgressBar
                          now={skill.level}
                          variant="primary"
                          className="mt-1"
                          style={{ height: "6px" }}
                        />
                      )}
                    </div>
                  ))}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
