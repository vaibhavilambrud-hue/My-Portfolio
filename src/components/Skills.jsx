import "./../css/Skills.css";
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaPython,
} from "react-icons/fa";

import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiPostman,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";

function Skills() {
  return (
    <section className="skills" id="skills">

      <motion.h4
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        MY SKILLS
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        My <span>Technical Skills</span>
      </motion.h2>

      <div className="skills-container">

        {/* Frontend */}

        <motion.div
  className="skill-card"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  whileHover={{ y: -10 }}
>
          <h3>💻 Frontend</h3>

          <div className="skill-list">

            <div className="skill-chip"><FaHtml5 /> HTML</div>

            <div className="skill-chip"><FaCss3Alt /> CSS</div>

            <div className="skill-chip"><SiJavascript /> JavaScript</div>

            <div className="skill-chip"><FaReact /> React</div>

            <div className="skill-chip"><FaBootstrap /> Bootstrap</div>

            <div className="skill-chip"><SiTailwindcss /> Tailwind</div>

          </div>

        </motion.div>

        {/* Backend */}

        <motion.div
  className="skill-card"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  whileHover={{ y: -10 }}
>
          <h3>⚙ Backend</h3>

          <div className="skill-list">

            <div className="skill-chip"><FaNodeJs /> Node.js</div>

            <div className="skill-chip"><SiExpress /> Express.js</div>

            <div className="skill-chip">REST API</div>

            <div className="skill-chip">JWT</div>

          </div>

        </motion.div>

        {/* Database */}

        <motion.div
  className="skill-card"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  whileHover={{ y: -10 }}
>
          <h3>🗄 Database</h3>

          <div className="skill-list">

            <div className="skill-chip"><SiMongodb /> MongoDB</div>

            <div className="skill-chip"><SiMysql /> MySQL</div>

          </div>

        </motion.div>

        {/* Tools */}

        <motion.div
  className="skill-card"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2 }}
  viewport={{ once: true }}
  whileHover={{ y: -10 }}
>
          <h3>🛠 Tools</h3>

          <div className="skill-list">

            <div className="skill-chip"><FaJava /> Java</div>

            <div className="skill-chip"><FaPython /> Python</div>

            <div className="skill-chip"><FaGitAlt /> Git</div>

            <div className="skill-chip"><FaGithub /> GitHub</div>

            <div className="skill-chip"><VscCode /> VS Code</div>

            <div className="skill-chip"><SiPostman /> Postman</div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Skills;