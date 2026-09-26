import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      id="about"
      className="about-section"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="section-heading">
        <span>01</span>
        <h2>About Me</h2>
      </div>

      <div className="about-content">

        {/* Left side */}
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="about-intro">
            <span className="about-label">WHO I AM</span>

            <h3>
              Turning ideas into
              <span> digital experiences.</span>
            </h3>
          </div>

          <p>
            I'm <strong>Varad Patil</strong>, an MCA student and developer
            interested in building modern web applications and intelligent
            software solutions.
          </p>

          <p>
            I enjoy working with technologies such as JavaScript, React,
            Python, Java and Machine Learning. I like turning ideas into
            practical applications with clean interfaces and useful
            functionality.
          </p>

          <p>
            My current interests include full-stack development, artificial
            intelligence, machine learning and problem solving. I'm
            continuously learning new technologies and improving my
            development skills through projects.
          </p>

          <div className="about-status">
            <span className="status-dot"></span>
            <span>Currently learning & building</span>
          </div>
        </motion.div>


        {/* Right developer card */}
        <motion.div
          className="about-card"
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          whileHover={{
            y: -10,
            rotateX: 3,
            rotateY: -3,
          }}
        >

          <div className="about-card-top">
            <span className="about-card-number">01</span>

            <div className="about-card-status">
              <span></span>
              AVAILABLE
            </div>
          </div>

          <div className="about-card-icon">
            {"</>"}
          </div>

          <h3>Developer</h3>

          <p>
            Building modern applications with code, creativity and
            problem-solving.
          </p>

          <div className="about-card-divider"></div>

          <div className="about-card-tags">
            <span>React</span>
            <span>JavaScript</span>
            <span>Python</span>
            <span>Java</span>
            <span>AI / ML</span>
          </div>

          <div className="about-card-code">
            <span>const</span> developer ={" "}
            <span>"Varad Patil"</span>;
          </div>

        </motion.div>

      </div>
    </motion.section>
  );
}

export default About;