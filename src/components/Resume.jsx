import "../css/Resume.css";
import resume from "../assets/resume.pdf";

import { FaDownload, FaFileAlt, FaLock } from "react-icons/fa";

const Resume = () => {
  return (
    <section className="resume" id="resume">

      <h4>MY RESUME</h4>
      <h2>
        Download <span>Resume</span>
      </h2>

      <div className="envelope">

        {/* Resume Paper */}
        <div className="resume-paper floating-paper">

          <div className="paper-header">
            <FaFileAlt />
            <h3>Vaibhavee Lambrud</h3>
            <p>MERN Stack Developer</p>
          </div>

          <div className="paper-content">

            <div>
              <h5>Skills</h5>
              <ul>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
              </ul>
            </div>

            <div>
              
              <h5>Education</h5>
              <p>B.Tech Computer Engineering</p>
              <p>2022-2025</p>

              {/* <h5>Experience</h5> */}
              {/* <p>Web Developer Intern</p> */}
            </div>

          </div>

        </div>

        {/* Envelope Flap */}
        <div className="flap flap-left"></div>
        <div className="flap flap-right"></div>

        {/* Lock */}
        <div className="lock">
          <FaLock />
        </div>

        {/* Download Button */}
        <a href={resume} download className="download-btn">
          <FaDownload />
          Download Resume
        </a>

      </div>

    </section>
  );
};

export default Resume;