import { useEffect, useState } from "react";
import { RiDownloadLine } from "react-icons/ri";
import { navigationLinks } from "../../data/navigation";
import "./Navbar.css";

function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = navigationLinks
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);

        if (visibleSection?.target.id) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-72px 0px -55% 0px",
        threshold: 0.1,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-navbar">
      <nav className="navbar-inner" aria-label="Main navigation">
        <a className="navbar-logo" href="#hero" aria-label="Go to top">
          {"< RG />"}
        </a>

        <div className="navbar-links">
          {navigationLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={
                activeSection === link.id ? "nav-link active" : "nav-link"
              }
            >
              <span>{String(index + 1).padStart(2, "0")}.</span>
              {link.label}
            </a>
          ))}
        </div>

        <div className="resume-section">
          <a href="/Rashell-Guerrero-Resume.pdf" download>
            Resume.pdf
            <RiDownloadLine />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
