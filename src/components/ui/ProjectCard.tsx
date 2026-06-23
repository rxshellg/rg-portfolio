import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import type { Project } from "../../data/projects";
import "./ProjectCard.css";

interface ProjectCardProps {
  project: Project;
  isExpanded: boolean;
  onToggle: () => void;
  isMobileOnly?: boolean;
}

function ProjectCard({
  project,
  isExpanded,
  onToggle,
  isMobileOnly = false,
}: ProjectCardProps) {
  const { title, description, images, techStack, liveDemoUrl, githubUrl } =
    project;

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  function cycleImage(direction: 1 | -1) {
    setActiveImageIndex((i) => (i + direction + images.length) % images.length);
  }

  const cardClassName = `project-card${isExpanded ? " project-card--expanded" : ""}${isMobileOnly ? " project-card--mobile-only" : ""}`;

  return (
    <article className={cardClassName}>
      <button
        className="project-card-mobile-summary"
        type="button"
        onClick={onToggle}
        aria-expanded={isExpanded}
        aria-label={title}
      >
        <span
          className="project-card-window project-card-mobile-window"
          aria-hidden="true"
        >
          <span>_</span>
          <span>□</span>
          <span>✕</span>
        </span>

        <span className="project-card-mobile-main">
          <span className="project-card-mobile-image" aria-hidden="true">
            <img src={images[0]} alt="" />
          </span>

          <span className="project-card-mobile-content">
            <span className="project-card-mobile-title">{title}</span>

            <span className="project-card-mobile-stack" aria-hidden="true">
              {techStack.map((tech) => (
                <span className="project-card-pill" key={tech}>
                  {tech}
                </span>
              ))}
            </span>
          </span>
        </span>
      </button>

      <div className="project-card-window">
        <span aria-hidden="true">_</span>
        <span aria-hidden="true">□</span>

        {isExpanded ? (
          <button
            className="project-card-window-close"
            type="button"
            onClick={onToggle}
            aria-label={`Collapse ${title}`}
          >
            ✕
          </button>
        ) : (
          <span aria-hidden="true">✕</span>
        )}
      </div>

      <div className="project-card-image">
        <img
          src={images[activeImageIndex]}
          alt={
            images.length > 1
              ? `${title} preview ${activeImageIndex + 1} of ${images.length}`
              : `${title} preview`
          }
        />

        {images.length > 1 && (
          <>
            <button
              className="project-card-carousel-button project-card-carousel-button--previous"
              type="button"
              onClick={() => cycleImage(-1)}
              aria-label={`Show previous ${title} image`}
            >
              ‹
            </button>

            <button
              className="project-card-carousel-button project-card-carousel-button--next"
              type="button"
              onClick={() => cycleImage(1)}
              aria-label={`Show next ${title} image`}
            >
              ›
            </button>

            <div className="project-card-carousel-dots" aria-hidden="true">
              {images.map((image, index) => (
                <span
                  className={`project-card-carousel-dot${index === activeImageIndex ? " project-card-carousel-dot--active" : ""}`}
                  key={image}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="project-card-body">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{description}</p>

        <ul className="project-card-stack">
          {techStack.map((tech) => (
            <li className="project-card-pill" key={tech}>
              {tech}
            </li>
          ))}
        </ul>

        <div className="project-card-actions">
          {liveDemoUrl ? (
            <a
              className="project-card-demo"
              href={liveDemoUrl}
              target="_blank"
              rel="noreferrer"
            >
              LIVE DEMO <FiArrowRight aria-hidden="true" />
            </a>
          ) : (
            <span
              className="project-card-demo project-card-demo--disabled"
              aria-disabled="true"
            >
              LIVE DEMO <FiArrowRight aria-hidden="true" />
            </span>
          )}

          {githubUrl && (
            <a
              className="project-card-github"
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${title} on GitHub`}
            >
              <FaGithub aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
