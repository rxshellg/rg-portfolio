import { FiArrowRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import type { Project } from "../../data/projects";
import "./ProjectCard.css";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, images, techStack, liveDemoUrl, githubUrl } =
    project;

  return (
    <article className="project-card">
      <div className="project-card-window" aria-hidden="true">
        <span>_</span>
        <span>□</span>
        <span>✕</span>
      </div>

      <div className="project-card-image">
        <img src={images[0]} alt={`${title} preview`} />
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
