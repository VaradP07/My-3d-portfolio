function Footer() {
  return (
    <footer className="footer">

      <div className="footer-logo">
        <span>&lt;</span>
        Portfolio
        <span>/&gt;</span>
      </div>

      <p>
        © {new Date().getFullYear()} Varad Patil.
        Built with React & Three.js.
      </p>

      <a href="#home">
        Back to top ↑
      </a>

    </footer>
  );
}

export default Footer;