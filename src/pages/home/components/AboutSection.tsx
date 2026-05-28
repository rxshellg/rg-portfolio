import { FiArrowRight, FiMapPin } from "react-icons/fi";
import "./AboutSection.css";

function AboutSection() {
  return (
    <section id="about" className="page-section about-section">
      <div className="about-image" aria-hidden="true">
        <img src="/About-Image.jpeg" alt="" />
      </div>

      <div className="about-text">
        <p className="section-label">// About.me</p>

        <h2 className="about-heading">
          Think. Design.

          Build. <span>Refine.</span>
        </h2>

        <p className="about-description">
          I&apos;m a full-stack software engineer with a soft spot for colorful,
          detail-driven front-end work. I&apos;ve worked across frontend and
          backend development in production environments, but what keeps me
          interested is the full experience: understanding the problem, shaping
          the flow, building the pieces, and refining the details until the
          product feels right.
        </p>

        <p className="about-description">
          I like work that gives me room to think deeply, ask good questions,
          and take ownership from idea to implementation. Whether I&apos;m
          collaborating with a team or working through a problem independently,
          I care about being someone people can trust to follow through and make
          the work better.
        </p>

        <p className="about-description">
          Outside of code, you can usually find me at the beach, playing
          Minecraft, listening to music, or spending time with my friends and
          family.
        </p>

        <div className="about-details">
          <div className="about-detail-card">
            <FiMapPin aria-hidden="true" />
            <div>
              <span>Based in</span>
              <strong>Lawrence, MA</strong>
            </div>
          </div>

          {/* <a className="about-detail-card about-detail-link" href="#contact">
              -Commented out until built-
          */}
          <a className="about-detail-card about-detail-link" href="https://www.linkedin.com/in/rashell-guerrero/">
            <div>
              <span>Available for</span>
              <strong>Full-time opportunities</strong>
            </div>
            <FiArrowRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
