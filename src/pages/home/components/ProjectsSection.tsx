import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import ProjectCard from "../../../components/ui/ProjectCard";
import { projects } from "../../../data/projects";
import "./ProjectsSection.css";

const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);
const STARS = ["one", "two", "three", "four", "five", "six", "seven"];

function ProjectsSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="projects" className="page-section projects-section">
      <div className="projects-big-stars" aria-hidden="true">
        {STARS.map((star) => (
          <span
            key={star}
            className={`big-pixel-star big-pixel-star--${star}`}
          />
        ))}
      </div>

      <div className="projects-header">
        <p className="section-label projects-label">// FEATURED.PROJECTS</p>
        <a className="projects-view-all" href="https://github.com/rxshellg/">
          VIEW ALL PROJECTS <FiArrowRight aria-hidden="true" />
        </a>
      </div>

      <div className="projects-grid">
        {featuredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            isExpanded={expandedId === project.id}
            onToggle={() =>
              setExpandedId((prev) => (prev === project.id ? null : project.id))
            }
            isMobileOnly={index === 3}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
