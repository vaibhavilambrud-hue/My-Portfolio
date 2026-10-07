import "./../css/Experience.css";
import { motion } from "framer-motion";
import AnviTechCertificate from "../assets/AnviTechSys_Completion_Certificate.jpg";
import RedHatCertificate from "../assets/RedHat_Linux_AWS_Certificate.png";

function Experience() {
  return (
    <section className="experience" id="experience">

      {/* Heading */}
      <motion.div
        className="experience-heading"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2>
          My <span>Experience</span>
        </h2>
      </motion.div>

      <div className="experience-timeline">

        {/* ================= ANVITECHSYS ================= */}

        <motion.div
          className="experience-item left"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="experience-dot">1</div>

          <div className="experience-card">

            <p className="experience-date">
              Jan 2025 – July 2025
            </p>

            <h3>Software Development Intern</h3>

            <h4>AnviTechSys</h4>

            <p className="experience-project">
              <strong>Project:</strong> RentMax
            </p>

            <p className="experience-description">
              Successfully completed a six-month internship project on
              RentMax. Worked through the software development life cycle,
              including requirement analysis, design, development, testing
              and deployment to cloud.
            </p>

            <div className="experience-skills">
              <span>Requirement Analysis</span>
              <span>Design</span>
              <span>Development</span>
              <span>Testing</span>
              <span>Cloud Deployment</span>
            </div>

            <a
              href={AnviTechCertificate}
              download="AnviTechSys_Completion_Certificate.jpg"
              className="certificate-btn"
            >
              Download Certificate ↓
            </a>

          </div>
        </motion.div>


        {/* ================= RED HAT ================= */}

        <motion.div
          className="experience-item right"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="experience-dot">2</div>

          <div className="experience-card">

            <p className="experience-date">
              October 2021 · 6 Weeks
            </p>

            <h3>Industrial Training Program</h3>

            <h4>Red Hat Linux &amp; AWS</h4>

            <p className="experience-description">
              Successfully completed a six-week Industrial Training Program
              focused on Red Hat Linux &amp; AWS.
            </p>

            <div className="experience-result">
              <span>Marks</span>
              <strong>88%</strong>
            </div>

            <div className="experience-skills">
              <span>Red Hat Linux</span>
              <span>AWS</span>
            </div>

            <a
              href={RedHatCertificate}
              download="RedHat_Linux_AWS_Certificate.png"
              className="certificate-btn"
            >
              Download Certificate ↓
            </a>

          </div>
        </motion.div>

      </div>

    </section>
  );
}

export default Experience;