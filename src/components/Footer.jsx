import React from "react";

const Footer = () => {
  const links = [
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact Me", href: "#contact" },
  ];

  return (
    <footer className="footer py-4">
      <div className="container text-center">
        <div className="footer-links">
          {links.map((link, index) => (
            <React.Fragment key={link.label}>
              <a href={link.href} className="footer-link">
                {link.label}
              </a>

              {index < links.length - 1 && (
                <span className="footer-separator">·</span>
              )}
            </React.Fragment>
          ))}
        </div>

        <p className="mt-3 mb-0">© {new Date().getFullYear()} Dita Pelaj</p>
      </div>
    </footer>
  );
};

export default Footer;
