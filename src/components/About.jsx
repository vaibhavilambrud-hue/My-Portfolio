import "./../css/About.css";
import graduation from "../assets/graduation.png";
import profile from "../assets/profile.png";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="about" id="about">

      <motion.div
        className="about-image"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img src={graduation} alt="Profile" />
      </motion.div>

      <motion.div
        className="about-content"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >

        <h4>About Me</h4>

        <h2>
          I'm <span>Vaibhavee Lambrud</span>
        </h2>

        <p>
          I am a passionate MERN Stack Developer who enjoys building modern,
          responsive, and user-friendly web applications.

          I love learning new technologies and creating beautiful UI designs
          with React.
        </p>

        <div className="about-cards">

    <div className="about-card">
        <h3>🎓 Degree</h3>
        <p>B.Tech</p>
        <span>Computer Engineering</span>
    </div>

    <div className="about-card">
        <h3>🏫 College</h3>
        <p>Vishwakarma University</p>
        <span>Maharashtra</span>
    </div>

    <div className="about-card">
        <h3>📚 University</h3>
        <p>Vishwakarma University</p>
        <span>(VU)</span>
    </div>

    <div className="about-card">
        <h3>📅 Graduation</h3>
        <p>2022 - 2025</p>
        <span>B.Tech Completed</span>
    </div>

</div>

      </motion.div>
      

    </section>
  );
}

export default About;