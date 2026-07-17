import { useEffect, useState } from "react";
import { RiDownloadLine } from "react-icons/ri";
import { navigationLinks } from "../../data/navigation";
import ResumeModal from "../ui/ResumeModal";
import "./Navbar.css";

function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  function handleGetInTouch() {
    setIsResumeModalOpen(false);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    const sections = navigationLinks
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find(({ isIntersecting }) => isIntersecting);
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-72px 0px -55% 0px", threshold: 0.1 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navLinks = (mobile = false) =>
    navigationLinks.map(({ href, id, label }, index) => {
      const base = mobile ? "mobile-nav-link" : "nav-link";
      return (
        <a
          key={href}
          href={href}
          onClick={mobile ? () => setIsMobileMenuOpen(false) : undefined}
          className={`${base}${activeSection === id ? " active" : ""}`}
        >
          <span>{String(index + 1).padStart(2, "0")}.</span>
          {label}
        </a>
      );
    });

  return (
    <header className="site-navbar">
      <nav className="navbar-inner" aria-label="Main navigation">
        <a className="navbar-logo" href="#hero" aria-label="Go to top">
          {"< RG />"}
        </a>

        <div className="navbar-links">{navLinks()}</div>

        <div className="resume-and-menu">
          <button
            type="button"
            className="resume-section"
            onClick={() => setIsResumeModalOpen(true)}
          >
            Resume.pdf
            <RiDownloadLine aria-hidden="true" />
          </button>

          <button
            className="mobile-menu-button"
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="mobile-navbar-menu">{navLinks(true)}</div>
      )}

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        onGetInTouch={handleGetInTouch}
      />
    </header>
  );
}

export default Navbar;
