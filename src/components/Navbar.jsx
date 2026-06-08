import React, { useContext, useState } from "react";
import { ThemeContext } from "../theme";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsFillMoonFill, BsFillSunFill, BsList, BsX } from "react-icons/bs";

const Navbar = () => {
  const { dark, setDark } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="navbar navbar-expand-lg fixed-top shadow-sm">
      <div className="container">
        <a
          className="navbar-brand text-white fw-bold"
          href="#home"
          onClick={closeMenu}
        >
          Dita
        </a>

        <button
          className="navbar-toggler custom-toggler"
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <BsX /> : <BsList />}
        </button>

        <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>
          <div className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            {[
              "About",
              "Education",
              "Experience",
              "Projects",
              "Skills",
              "Contact Me",
            ].map((item) => (
              <a
                key={item}
                className="nav-link btn btn-outline-primary text-white"
                href={`#${item.toLowerCase().replace(" me", "").replace(" ", "-")}`}
                onClick={closeMenu}
              >
                {item}
              </a>
            ))}

            <button
              onClick={() => setDark(!dark)}
              className="theme-toggle-btn"
              aria-label="Toggle Theme"
            >
              {dark ? <BsFillSunFill /> : <BsFillMoonFill />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
