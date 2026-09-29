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
          <div className="contact-icon email-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 5H20C21.1 5 22 5.9 22 7V17C22 18.1 21.1 19 20 19H4C2.9 19 2 18.1 2 17V7C2 5.9 2.9 5 4 5Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 7L12 13L2 7"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

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
          <div className="contact-icon social-icon">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C6.48 2 2 6.58 2 12.24C2 16.76 4.87 20.58 8.84 21.94C9.34 22.04 9.52 21.72 9.52 21.44C9.52 21.19 9.51 20.52 9.5 19.63C6.73 20.26 6.14 18.25 6.14 18.25C5.68 17.03 5.02 16.71 5.02 16.71C4.12 16.08 5.09 16.09 5.09 16.09C6.08 16.16 6.6 17.14 6.6 17.14C7.48 18.68 8.91 18.25 9.54 17.98C9.63 17.32 9.89 16.86 10.18 16.6C7.97 16.34 5.65 15.46 5.65 11.43C5.65 10.28 6.04 9.34 6.67 8.6C6.57 8.34 6.22 7.27 6.77 5.82C6.77 5.82 7.6 5.55 9.5 6.88C10.29 6.65 11.14 6.54 12 6.54C12.86 6.54 13.71 6.65 14.5 6.88C16.4 5.55 17.23 5.82 17.23 5.82C17.78 7.27 17.43 8.34 17.33 8.6C17.96 9.34 18.35 10.28 18.35 11.43C18.35 15.47 16.02 16.33 13.81 16.59C14.17 16.91 14.49 17.54 14.49 18.51C14.49 19.91 14.48 21.03 14.48 21.44C14.48 21.72 14.66 22.05 15.17 21.94C19.13 20.58 22 16.76 22 12.24C22 6.58 17.52 2 12 2Z" />
            </svg>
          </div>

          <div className="contact-card-content">
            <small>GITHUB</small>
            <strong>@VaradP07</strong>
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
          <div className="contact-icon social-icon linkedin-icon">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.94 8.5H3.56V20H6.94V8.5ZM5.25 3C4.17 3 3.3 3.87 3.3 4.95C3.3 6.03 4.17 6.9 5.25 6.9C6.33 6.9 7.2 6.03 7.2 4.95C7.2 3.87 6.33 3 5.25 3ZM13.1 8.5H9.86V20H13.1V14.31C13.1 12.81 13.38 11.36 15.28 11.36C17.15 11.36 17.18 13.08 17.18 14.41V20H20.44V13.74C20.44 10.66 19.78 8.29 16.18 8.29C14.45 8.29 13.3 9.24 12.83 10.14H12.79V8.5H13.1Z" />
            </svg>
          </div>

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