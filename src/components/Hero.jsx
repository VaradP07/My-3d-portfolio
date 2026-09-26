import { motion } from "framer-motion";
import Scene from "./3d/Scene";

function Hero() {
  return (
    <section id="home" className="hero-section">

      <div className="hero-content">

        {/* Status */}
        <motion.div
          className="hero-status"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="status-dot"></span>
          AVAILABLE FOR OPPORTUNITIES
        </motion.div>

        {/* Small introduction */}
        <motion.p
          className="hero-intro"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Hello, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Varad
          <span> Patil</span>
        </motion.h1>

        {/* Role */}
        <motion.h2
          className="hero-role"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          MCA Student & Developer
        </motion.h2>

        {/* Description */}
        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          I build modern web applications and intelligent software
          experiences using JavaScript, React, Python, Java and
          Machine Learning.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
        >
          <a href="#projects" className="primary-button">
            Explore Projects
            <span>↗</span>
          </a>

          <a href="#contact" className="secondary-button">
            Let's Connect
          </a>
        </motion.div>

        {/* Technology tags */}
        <motion.div
          className="hero-tech-stack"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <span>JavaScript</span>
          <i>•</i>
          <span>React</span>
          <i>•</i>
          <span>Python</span>
          <i>•</i>
          <span>Java</span>
          <i>•</i>
          <span>AI / ML</span>
        </motion.div>

      </div>

      {/* 3D Scene */}
      <motion.div
        className="hero-3d"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.2,
          delay: 0.3,
          ease: "easeOut",
        }}
      >
        <Scene />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span>SCROLL TO EXPLORE</span>
        <div className="scroll-arrow">↓</div>
      </motion.div>

    </section>
  );
}

export default Hero;