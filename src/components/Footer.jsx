import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer className="py-3 text-center shadow-sm mt-5" style={{ background: "var(--bg-color)" }}>
      <Container>
        <p className="mb-0">
          <span onClick={() => scrollToSection("about")} className="footer-link">About</span> ·{" "}
          <span onClick={() => scrollToSection("projects")} className="footer-link">Projects</span> ·{" "}
          <span onClick={() => scrollToSection("skills")} className="footer-link">Skills</span>
          <br />
          © {new Date().getFullYear()} Dita · All rights reserved
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
