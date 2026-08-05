import "./../css/Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Logo */}

        <h2 className="footer-logo">
          Vaibhavee Lambrud<span>.</span>
        </h2>

        {/* Description */}

        <p className="footer-text">
          Passionate MERN Stack Developer dedicated to building
          modern, responsive and user-friendly web applications.
        </p>

        {/* Social Icons */}

        <div className="footer-social">

          {/* GitHub */}

          <a
            href="https://github.com/vaibhavilambrud-hue"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          {/* LinkedIn */}

          <a
            href="https://www.linkedin.com/in/vaibhavee-lambrud-30847b2b2"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          {/* Email */}

          <a
            href="mailto:vaibhavilambrud@gmail.com?subject=Portfolio%20Contact&body=Hello%20Vaibhavee,"
          >
            <FaEnvelope />
          </a>

        </div>

        {/* Copyright */}

        <p className="copyright">
          © 2026 Vaibhavee Lambrud | All Rights Reserved.
        </p>

      </div>

      {/* Scroll Top */}

      <button className="top-btn" onClick={scrollTop}>
        <FaArrowUp />
      </button>

    </footer>
  );
}

export default Footer;