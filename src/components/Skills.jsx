import { motion } from "framer-motion";
import SkillsOrbit from "./3d/SkillsOrbit";

const skills = [
  {
    name: "Java",
    category: "Programming",
    level: "Advanced",
    icon: "☕",
  },
  {
    name: "Python",
    category: "Programming",
    level: "Advanced",
    icon: "🐍",
  },
  {
    name: "JavaScript",
    category: "Programming",
    level: "Advanced",
    icon: "JS",
  },
  {
    name: "React.js",
    category: "Frontend",
    level: "Advanced",
    icon: "⚛",
  },
  {
    name: "Node.js",
    category: "Backend",
    level: "Intermediate",
    icon: "⬢",
  },
  {
    name: "HTML & CSS",
    category: "Frontend",
    level: "Advanced",
    icon: "◇",
  },
  {
    name: "SQL",
    category: "Database",
    level: "Intermediate",
    icon: "▣",
  },
  {
    name: "Machine Learning",
    category: "AI / ML",
    level: "Intermediate",
    icon: "AI",
  },
];

function Skills() {
  return (
    <motion.section
      id="skills"
      className="skills-section"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8 }}
    >
      <div className="section-heading">
        <span>02</span>
        <h2>Skills & Technologies</h2>
      </div>

      <p className="section-description">
        Technologies and tools I use to build modern applications and
        intelligent software solutions.
      </p>

      <div className="skills-layout">

        {/* 3D Skill Universe */}
        <motion.div
          className="skills-3d-container"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="skills-orbit-label">
            <span className="orbit-dot"></span>
            MY TECH STACK
          </div>

          <SkillsOrbit />
        </motion.div>

        {/* Skill Cards */}
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -10,
                rotateX: 4,
                rotateY: -4,
                scale: 1.025,
              }}
            >
              <div className="skill-card-glow"></div>

              <div className="skill-top">
                <div className="skill-icon">
                  {skill.icon}
                </div>

                <span className="skill-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="skill-info">
                <h3>{skill.name}</h3>

                <div className="skill-meta">
                  <span>{skill.category}</span>
                  <span>{skill.level}</span>
                </div>
              </div>

              <div className="skill-line">
                <span></span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}

export default Skills;