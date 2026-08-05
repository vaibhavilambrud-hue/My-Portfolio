import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profile from "../assets/profile.png";
import "./../css/Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      <motion.div
        className="hero-left"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >

        <h3>Hello 👋</h3>

        <h1>
          I'm <span>Vaibhavee Lambrud</span>
        </h1>

        <h2 className="typing">
          <TypeAnimation
            sequence={[
              "MERN Stack Developer",
              2000,
              "React Developer",
              2000,
              "Frontend Developer",
              2000,
              "Node.js Developer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h2>

        <p>
          Enthusiastic MERN Stack Developer with a passion for creating
          responsive and user-friendly web applications.Continuously
          learning new technologies and committed to building efficient,
          scalable, and impactful digital solutions.
        </p>

      </motion.div>

      <motion.div
        className="hero-right"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={profile} alt="Profile" />
      </motion.div>

    </section>
  );
}

export default Hero;