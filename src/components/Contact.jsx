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

      <p className="contact-description">
        Have a project, opportunity or idea? I'd love to hear from you.
      </p>

      <div className="contact-links">

        {/* Email */}
        <motion.a
          href="mailto:patilvarad290@gmail.com"
          className="contact-card"
          whileHover={{ y: -7 }}
        >
          <span>✉</span>

          <div>
            <small>Email</small>
            <strong>patilvarad290@gmail.com</strong>
          </div>
        </motion.a>

        {/* GitHub */}
        <motion.a
          href="https://github.com/VaradP07"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
          whileHover={{ y: -7 }}
        >
          <span>⌘</span>

          <div>
            <small>GitHub</small>
            <strong>VaradP07</strong>
          </div>
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          href="https://www.linkedin.com/in/varad-patil07/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
          whileHover={{ y: -7 }}
        >
          <span>in</span>

          <div>
            <small>LinkedIn</small>
            <strong>Varad Patil</strong>
          </div>
        </motion.a>

      </div>
    </motion.section>
  );
}

export default Contact;