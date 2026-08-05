import "./../css/Contact.css";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_xvvmnlc", // Service ID
        "template_i555js6", // Template ID
        form.current,
        "ElQuBn4jj8Ih9ZwzT" // Public Key
      )
      .then(
        () => {
          alert("✅ Message Sent Successfully!");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          console.log(error);
          alert("❌ Failed to Send Message.");
          setLoading(false);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <motion.div
        className="contact-title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h4>GET IN TOUCH</h4>
        <h2>
          Let's <span>Work Together</span>
        </h2>
      </motion.div>

      <div className="contact-container">

        {/* LEFT */}

        <motion.div
          className="contact-left"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>Let's Connect</h3>

          <p>
            I'm currently looking for opportunities as a MERN Stack Developer.
            Whether you have a project, internship, freelance work, or just want
            to say hello, I'd love to hear from you.
          </p>

          <div className="contact-info">

            <div className="info-card">
              <FaEnvelope />
              <div>
                <h5>Email</h5>
                <span>vaibhavilambrud@gmail.com</span>
              </div>
            </div>

            <div className="info-card">
              <FaPhoneAlt />
              <div>
                <h5>Phone</h5>
                <span>+91 8857808481</span>
              </div>
            </div>

            <div className="info-card">
              <FaMapMarkerAlt />
              <div>
                <h5>Location</h5>
                <span>Pune, Maharashtra</span>
              </div>
            </div>

            <div className="info-card">
              <FaLinkedin />
              <div>
                <h5>LinkedIn</h5>
                <span>
                  linkedin.com/in/vaibhavee-lambrud-30847b2b2
                </span>
              </div>
            </div>

            <div className="info-card">
              <FaGithub />
              <div>
                <h5>GitHub</h5>
                <span>
                  github.com/vaibhavilambrud-hue
                </span>
              </div>
            </div>

          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="contact-right"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <form ref={form} onSubmit={sendEmail}>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Write your message..."
              required
            ></textarea>

            <button type="submit" disabled={loading}>
              <FaPaperPlane />

              {loading ? "Sending..." : "Send Message"}

            </button>

          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;