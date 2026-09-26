import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.section
      id="contact"
      className="contact-section"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="section-heading">
        <span>04</span>
        <h2>Let's Connect</h2>
      </div>

      <div className="contact-intro">
        <div>
          <span className="contact-label">HAVE AN IDEA?</span>

          <h3>
            Let's build something
            <span> meaningful.</span>
          </h3>
        </div>

        <p>
          Have a project, opportunity or idea? I'd love to hear from you.
          Whether you're looking to collaborate or simply want to say hello,
          feel free to reach out.
        </p>
      </div>

      <div className="contact-links">

        {/* Email */}
        <motion.a
          href="mailto:patilvarad290@gmail.com"
          className="contact-card"
          whileHover={{ y: -8 }}
          transition={{ duration: 0.25 }}
        >
          <div className="contact-icon">✉</div>

          <div className="contact-card-content">
            <small>EMAIL</small>
            <strong>patilvarad290@gmail.com</strong>
          </div>

          <span className="contact-arrow">↗</span>
        </motion.a>


        {/* GitHub */}
        <motion.a
          href="https://github.com/VaradP07"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
          whileHover={{ y: -8 }}
          transition={{ duration: 0.25 }}
        >
          <div className="contact-icon">⌘</div>

          <div className="contact-card-content">
            <small>GITHUB</small>
            <strong>VaradP07</strong>
          </div>

          <span className="contact-arrow">↗</span>
        </motion.a>


        {/* LinkedIn */}
        <motion.a
          href="https://www.linkedin.com/in/varad-patil07/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
          whileHover={{ y: -8 }}
          transition={{ duration: 0.25 }}
        >
          <div className="contact-icon">in</div>

          <div className="contact-card-content">
            <small>LINKEDIN</small>
            <strong>Varad Patil</strong>
          </div>

          <span className="contact-arrow">↗</span>
        </motion.a>

      </div>

      <div className="contact-bottom">
        <span className="contact-status-dot"></span>
        <span>OPEN TO OPPORTUNITIES</span>
      </div>
    </motion.section>
  );
}

export default Contact;