import { useEffect, useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  // Detect which section is currently visible
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          window.scrollY + 180 >= sectionTop &&
          window.scrollY + 180 < sectionTop + sectionHeight
        ) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      {/* Logo */}
      <a
        href="#home"
        className="logo"
        onClick={closeMenu}
      >
        <span>&lt;</span>
        Portfolio
        <span>/&gt;</span>
      </a>

      {/* Desktop Navigation */}
      <div className="nav-links">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={activeSection === item.id ? "active" : ""}
            onClick={handleNavClick}
          >
            <span className="nav-dot"></span>
            {item.name}
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile Navigation */}
      <div
        className={`mobile-menu ${
          menuOpen ? "mobile-menu-open" : ""
        }`}
      >
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={activeSection === item.id ? "active" : ""}
            onClick={handleNavClick}
          >
            <span className="mobile-nav-dot"></span>
            {item.name}
          </a>
        ))}
      </div>

    </nav>
  );
}

export default Navbar;