function Footer() {
  return (
    <footer className="footer">

      <div className="footer-main">

        {/* Logo */}
        <a href="#home" className="footer-logo">
          <span>&lt;</span>
          Portfolio
          <span>/&gt;</span>
        </a>

        {/* Short description */}
        <p className="footer-description">
          MCA Student & Developer building modern web applications
          and intelligent software experiences.
        </p>

        {/* Social links */}
        <div className="footer-links">
          <a
            href="https://github.com/VaradP07"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/varad-patil07/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>

          <a href="mailto:patilvarad290@gmail.com">
            Email ↗
          </a>
        </div>

      </div>

      {/* Bottom row */}
      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Varad Patil
        </p>

        <p>
          Built with <span>React</span> & <span>Three.js</span>
        </p>

        <a href="#home" className="footer-top">
          Back to top ↑
        </a>

      </div>

    </footer>
  );
}

export default Footer;