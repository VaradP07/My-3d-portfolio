import { motion } from "framer-motion";
import Scene from "./3d/Scene";

function Hero() {
  return (
    <section id="home" className="hero">

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >

        <p className="hero-small">
          Hello, I'm
        </p>

        <h1>
          Varad Patil
        </h1>

        <h2>
          MCA Student & Developer
        </h2>

        <p className="hero-description">
          I build modern web applications and intelligent
          software experiences using JavaScript, React,
          Python, AI and Machine Learning.
        </p>

        <div className="hero-buttons">

          <a
            href="#projects"
            className="primary-button"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="secondary-button"
          >
            Contact Me
          </a>

          <a
            href="/resume.pdf"
            className="secondary-button"
            target="_blank"
            rel="noreferrer"
          >
            Resume ↗
          </a>

        </div>

      </motion.div>


      <motion.div
        className="hero-3d"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 0.2
        }}
      >

        <Scene />

      </motion.div>

    </section>
  );
}

export default Hero;