import "./../css/Projects.css";

import finance from "../assets/image01.png";
import rentmaze from "../assets/image02.png";
import ecommerce from "../assets/image03.png";
import bubbleGame from "../assets/BubbleG.png"
import portfolio from "../assets/image5.png";

import { motion } from "framer-motion";

function Projects() {
  return (
    <section className="projects" id="projects">

      {/* Heading */}
      <motion.div
        className="project-heading"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h4>MY PROJECTS</h4>

        <h2>
          My <span>Recent Work</span>
        </h2>
      </motion.div>


      {/* Timeline */}
      <div className="timeline">


        {/* ================= Project 1 ================= */}

        <motion.div
          className="timeline-item left"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <div className="project-image">
            <img src={finance} alt="Finance Tracker" />
          </div>

          <div className="timeline-dot">1</div>

          <div className="project-content">

            <h3>Finance Tracker</h3>

            <p>
              A MERN Stack finance management application that helps users
              track income, expenses, categories and monthly reports with
              beautiful charts.
            </p>

            <div className="tech-stack">
              <span>React</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>MongoDB</span>
            </div>

            <div className="project-buttons">

              <a
                href="https://github.com/vaibhavilambrud-hue/Finance-Tracker"
                target="_blank"
                rel="noopener noreferrer"
                className="github-btn"
              >
                GitHub ↗
              </a>

              <a
                href="https://finance-tracker-lyart-ten-94.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="live-btn"
              >
                Live Demo ↗
              </a>

            </div>

          </div>

        </motion.div>


        {/* ================= Project 2 ================= */}

        <motion.div
          className="timeline-item right"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <div className="project-content">

            <h3>RentMax Manager</h3>

            <p>
              A property rental platform where users can search, list and
              manage rental properties with secure authentication and booking.
            </p>

            <div className="tech-stack">
              <span>ASP.Net MVC</span>
              <span>Entity Framework</span>
              <span>LINQ</span>
              <span>Web API</span>
            </div>

            <a
            href="https://devatsrentmax.azurewebsites.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-url"
            >
              Visit RentMax Website ↗
            </a>

          </div>

          <div className="timeline-dot">2</div>

          <div className="project-image">
            <img src={rentmaze} alt="RentMax Manager" />
          </div>

        </motion.div>


        {/* ================= Project 3 ================= */}

        <motion.div
          className="timeline-item left"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <div className="project-image">
            <img src={ecommerce} alt="E-Commerce Website" />
          </div>

          <div className="timeline-dot">3</div>

          <div className="project-content">

            <h3>E-Commerce Website</h3>

            <p>
              A complete MERN Stack online shopping platform with
              authentication, shopping cart, orders, payment and admin
              dashboard.
            </p>

            <div className="tech-stack">
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>Redux</span>
              <span>Express</span>
            </div>

            {/* <div className="project-buttons">

              <a
                href="YOUR_ECOMMERCE_GITHUB_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="github-btn"
              >
                GitHub ↗
              </a>

              <a
                href="YOUR_ECOMMERCE_LIVE_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="live-btn"
              >
                Live Demo ↗
              </a>

            </div> */}

          </div>

        </motion.div>


        {/* ================= Project 4 ================= */}
  
        <motion.div
          className="timeline-item right"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="project-content">
            <h3>Bubble Game</h3>

            <p>
              An interactive Bubble Game built with React and Vite,
              featuring a fun gameplay experience with a modern,
              responsive user interface.
            </p>

            <div className="tech-stack">
              <span>React</span>
              <span>JavaScript</span>
              <span>CSS</span>
              <span>Vite</span>
            </div>

            <div className="project-buttons">
              <a
                href="https://bubble-game-iota-blond.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="live-btn"
              >
                Play Game ↗
              </a>
            </div>
          </div>

          <div className="timeline-dot">4</div>
           <div className="project-image">
        <img
          src={bubbleGame}
          alt="Bubble Game Preview"
          style={{
            width: "100%",
            height: "250px",
            objectFit: "cover",
            borderRadius: "12px",
            display: "block",
          }}
        />
      </div>
        </motion.div>


        {/* ================= Project 5 - My Portfolio ================= */}

        <motion.div
          className="timeline-item left"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <div className="project-image">
            <img src={portfolio} alt="My Portfolio" />
          </div>

          <div className="timeline-dot">5</div>

          <div className="project-content">

            <h3>My Portfolio</h3>

            <p>
              A modern responsive personal portfolio website built with
              React, showcasing my skills, projects, resume and professional
              profile.
            </p>

            <div className="tech-stack">
              <span>React</span>
              <span>JavaScript</span>
              <span>CSS</span>
              <span>Framer Motion</span>
            </div>

            <div className="project-buttons">

              <a
                href="https://github.com/vaibhavilambrud-hue/My-Portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="github-btn"
              >
                GitHub ↗
              </a>

              <a
                href="https://my-portfolio-pearl-three-61.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="live-btn"
              >
                Live Demo ↗
              </a>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Projects;