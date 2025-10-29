import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="py-3 text-center shadow-sm mt-5" style={{ background: "var(--bg-color)" }}>
      <Container>
        <p className="mb-0">
          © {new Date().getFullYear()} Pelaj | 
          <a href="https://www.linkedin.com/in/your-linkedin/" target="_blank" rel="noopener noreferrer" className="ms-1">LinkedIn</a> |
          <a href="mailto:your.email@example.com" className="ms-1">Email</a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
