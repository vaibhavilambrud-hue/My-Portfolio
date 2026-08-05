import "./../css/Navbar.css";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* Logo */}

      <div className="logo">
        My<span>-Profile</span>
      </div>

      {/* Hamburger Icon */}

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation */}

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
        </li>

        <li>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
        </li>

        <li>
          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>
        </li>

        <li>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
        </li>

        <li>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </li>

        <li className="mobile-btn">
          <a
            href="/resume.pdf"
            download
            className="cv-btn"
            onClick={() => setMenuOpen(false)}
          >
            Download CV
          </a>
        </li>

      </ul>

      {/* Desktop Download Button */}

      <a href="/resume.pdf" download className="cv-btn desktop-btn">
        Download CV
      </a>

    </nav>
  );
}

export default Navbar;