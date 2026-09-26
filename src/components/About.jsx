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
        <div className="about-text">
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
        </div>

        <motion.div
          className="about-card"
          whileHover={{
            y: -8,
            rotateX: 3,
            rotateY: -3,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="about-card-icon">{"</>"}</div>

          <h3>Developer</h3>

          <p>
            Building modern applications with code, creativity and
            problem-solving.
          </p>

          <div className="about-card-tags">
            <span>React</span>
            <span>JavaScript</span>
            <span>Python</span>
            <span>AI / ML</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default About;