import "./../css/Projects.css";

import finance from "../assets/image01.png";
import rentmaze from "../assets/image02.png";
import ecommerce from "../assets/image03.png";
import oral from "../assets/image04.png";

import { motion } from "framer-motion";

function Projects() {
  return (
    <section className="projects" id="projects">

      {/* Heading */}

      <motion.div
        className="project-heading"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
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
          transition={{ duration: .8 }}
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

              {/* <a href="#">GitHub</a> */}

              {/* <a href="#">Live Demo</a> */}

            </div>

          </div>

        </motion.div>

        {/* ================= Project 2 ================= */}

        <motion.div
          className="timeline-item right"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
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

            <div className="project-buttons">

              {/* <a href="#">GitHub</a> */}

              {/* <a href="#">Live Demo</a> */}

            </div>

          </div>

          <div className="timeline-dot">2</div>

          <div className="project-image">

            <img src={rentmaze} alt="RentMaze" />

          </div>

        </motion.div>

        {/* ================= Project 3 ================= */}

        <motion.div
          className="timeline-item left"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <div className="project-image">

            <img src={ecommerce} alt="E-Commerce" />

          </div>

          <div className="timeline-dot">3</div>

          <div className="project-content">

            <h3>E-Commerce Website</h3>

            <p>
              A complete MERN Stack online shopping platform with authentication,
              shopping cart, orders, payment and admin dashboard.
            </p>

            <div className="tech-stack">

              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>Redux</span>
              <span>Express</span>

            </div>

            <div className="project-buttons">

              {/* <a href="#">GitHub</a> */}

              {/* <a href="#">Live Demo</a> */}

            </div>

          </div>

        </motion.div>

        {/* ================= Project 4 ================= */}

        <motion.div
          className="timeline-item right"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <div className="project-content">

            <h3>Oral Disease Detection</h3>

            <p>
              AI based disease prediction system using image processing and
              machine learning for detecting oral diseases from images.
            </p>

            <div className="tech-stack">

              <span>Python</span>
              <span>OpenCV</span>
              <span>Machine Learning</span>

            </div>

            <div className="project-buttons">

              {/* <a href="#">GitHub</a> */}

              {/* <a href="#">Demo</a> */}

            </div>

          </div>

          <div className="timeline-dot">4</div>

          <div className="project-image">

            <img src={oral} alt="Oral Disease" />

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Projects;