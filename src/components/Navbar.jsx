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
        <a href="#projects" className="btn btn-outline-primary mx-2">
          Projects
        </a>
        <a href="#contact" className="btn btn-outline-primary mx-2">
          Contact Me
        </a>
        <button onClick={() => setDark(!dark)}>
          {dark ? <BsFillSunFill /> : <BsFillMoonFill />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
