import React, { useContext } from "react";
import { ThemeContext } from "../theme";
// import { SunFill, MoonFill } from 'react-icons/bs';
import "bootstrap/dist/css/bootstrap.min.css";
// import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const Navbar = () => {
  const { dark, setDark } = useContext(ThemeContext);

  return (
    <nav className="navbar navbar-expand-lg shadow-sm px-3 sticky-top gradient-bg">
      <a className="navbar-brand fw-bold" href="#hero">
        Dita
      </a>
      <div className="ms-auto d-flex align-items-center">
        <a href="#about" className="btn btn-outline-primary mx-1 mx-md-2">
          About
        </a>
        <a href="#education" className="btn btn-outline-primary mx-1 mx-md-2">
          Education
        </a>
        <a href="#experience" className="btn btn-outline-primary mx-1 mx-md-2">
          Experience
        </a>
        <a href="#projects" className="btn btn-outline-primary mx-1 mx-md-2">
          Projects
        </a>
        <a href="#skills" className="btn btn-outline-primary mx-1 mx-md-2">
          Skills
        </a>
        <a href="#contact" className="btn btn-outline-primary mx-1 mx-md-2">
          Contact Me
        </a>

        <button
          onClick={() => setDark(!dark)}
          className="btn text-white p-2 d-inline-flex align-items-center justify-content-center"
          style={{ border: "none", fontSize: "1.1rem" }}
          aria-label="Toggle Theme"
        >
          {dark ? (
            <BsFillSunFill style={{ color: "#fbd38d" }} />
          ) : (
            <BsFillMoonFill style={{ color: "#e9d8fd" }} />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
