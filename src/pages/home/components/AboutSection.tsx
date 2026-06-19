import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { useTypewriter } from "../../../hooks/useTypewriter";
import "./AboutSection.css";

const aboutParagraphs = [
  "I'm a full-stack software engineer with a soft spot for colorful, detail-driven front-end work. I've worked across frontend and backend development in production environments, but what keeps me interested is the full experience: understanding the problem, shaping the flow, building the pieces, and refining the details until the product feels right.",
  "I like work that gives me room to think deeply, ask good questions, and take ownership from idea to implementation. Whether I'm collaborating with a team or working through a problem independently, I care about being someone people can trust to follow through and make the work better.",
  "Outside of code, you can usually find me at the beach, playing Minecraft, listening to music, or spending time with my friends and family.",
];

function AboutSection() {
  const typedText = useTypewriter(aboutParagraphs);

  return (
    <section id="about" className="page-section about-section">
      <div className="about-image" aria-hidden="true">
        <img src="/About-Image.jpeg" alt="" />
      </div>

      <div className="about-text">
        <p className="section-label">// About.me</p>

        <h2 className="about-heading">
          Think. Design. Build. <span>Refine.</span>
        </h2>

        <div className="about-image-mobile" aria-hidden="true">
          <img src="/About-Image.jpeg" alt="" />
        </div>

        <div className="about-description-desktop">
          {aboutParagraphs.map((text, i) => (
            <p className="about-description" key={i}>
              {text}
            </p>
          ))}
        </div>

        <p
          className="about-description about-description-mobile"
          aria-hidden="true"
        >
          {typedText}
          <span className="typing-cursor" />
        </p>

        <p className="about-description-sr-only sr-only">
          {aboutParagraphs.join(" ")}
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
          <a
            className="about-detail-card about-detail-link"
            href="https://www.linkedin.com/in/rashell-guerrero/"
          >
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
