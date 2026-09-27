import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    status: "SOURCE AVAILABLE",
    category: "AI / MACHINE LEARNING",
    title: "Anime Recommendation System",
    description:
      "A web-based anime recommendation platform that uses content-based recommendation techniques to suggest similar anime based on their features.",
    technologies: [
      "React",
      "Node.js",
      "Firebase",
      "TF-IDF",
      "Cosine Similarity",
    ],
    github: "https://github.com/VaradP07/anime-AI-recommendation-system",
    demo: "#",
  },
  {
    number: "02",
    status: "IN DEVELOPMENT",
    category: "AI / DATA SCIENCE",
    title: "Stock Market Prediction",
    description:
      "An AI-powered application designed to analyze financial data and provide prediction-oriented insights using machine learning techniques.",
    technologies: [
      "React",
      "Python",
      "FastAPI",
      "Scikit-learn",
      "Machine Learning",
    ],
    github: "#",
    demo: "#",
  },
  {
    number: "03",
    status: "IN DEVELOPMENT",
    category: "FULL STACK",
    title: "Smart Billing System",
    description:
      "A billing management application for handling products, customers and billing operations through a structured software system.",
    technologies: [
      "Java",
      "Spring Boot",
      "Database",
      "REST API",
    ],
    github: "#",
    demo: "#",
  },
];

function Projects() {
  return (
    <motion.section
      id="projects"
      className="projects-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7 }}
    >
      <div className="section-heading">
        <span>03</span>
        <h2>Featured Projects</h2>
      </div>

      <p className="section-description">
        A selection of projects where I applied programming,
        web development and AI concepts to build practical
        applications.
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.article
            className="project-card"
            key={project.number}
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            whileHover={{
              y: -12,
              rotateX: 2,
              rotateY: -2,
            }}
          >
            {/* Card top */}
            <div className="project-top">
              <span className="project-number">{project.number}</span>

              <div className="project-top-right">
                <span className="project-status">
                  <span className="project-status-dot"></span>
                  {project.status}
                </span>

                <span className="project-category">{project.category}</span>
              </div>
            </div>

            {/* Project visual */}
            <div className="project-visual">
              <div className="project-visual-grid"></div>

              <div className="project-orbit orbit-one"></div>
              <div className="project-orbit orbit-two"></div>

              <div className="project-core">
                {project.number}
              </div>
            </div>

            {/* Project information */}
            <div className="project-content">
              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="project-actions">
              <a
                href={project.github !== "#" ? project.github : undefined}
                className={`project-link ${project.github === "#" ? "project-link-disabled" : ""
                  }`}
                target={project.github !== "#" ? "_blank" : undefined}
                rel={project.github !== "#" ? "noreferrer" : undefined}
                onClick={(e) => {
                  if (project.github === "#") {
                    e.preventDefault();
                  }
                }}
              >
                {project.github !== "#" ? "GitHub ↗" : "GitHub — Soon"}
              </a>

              <a
                href={project.demo !== "#" ? project.demo : undefined}
                className={`project-link project-demo ${project.demo === "#" ? "project-link-disabled" : ""
                  }`}
                target={project.demo !== "#" ? "_blank" : undefined}
                rel={project.demo !== "#" ? "noreferrer" : undefined}
                onClick={(e) => {
                  if (project.demo === "#") {
                    e.preventDefault();
                  }
                }}
              >
                {project.demo !== "#" ? "Live Demo ↗" : "Live Demo — Soon"}
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;