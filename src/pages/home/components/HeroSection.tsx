import { FiArrowRight, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function HeroSection() {
  return (
    <section id="hero" className="page-section hero-section">
      <div className="hero-text">
        <p className="hero-eyebrow">Hi, I&apos;m</p>

        <h1 className="hero-heading">
          <span className="hero-heading-first">Rashell</span>
          <span className="hero-heading-last">Guerrero</span>
        </h1>

        <p className="hero-description">
          <span aria-hidden="true">&gt;</span>I build reliable, user-focused
          software that connects clean interfaces with thoughtful backend
          systems.
        </p>

        <div className="hero-actions">
          <a className="hero-button hero-button-primary" href="#projects">
            View my work
            <FiArrowRight aria-hidden="true" />
          </a>

          <a className="hero-button hero-button-secondary" href="#contact">
            Get in touch
            <FiMail aria-hidden="true" />
          </a>
        </div>

        <div className="hero-socials" aria-label="Social links">
          <span>Find me on</span>
          <a
            href="https://github.com/rxshellg"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/rashell-guerrero/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn aria-hidden="true" />
          </a>
          <a href="mailto:rashellguerrero123@gmail.com">
            <FiMail aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="hero-image" aria-hidden="true">
        <img src="/Home-Image.jpeg" alt="" />
      </div>
    </section>
  );
}

export default HeroSection;
