import { FiArrowRight } from "react-icons/fi";
import ProjectCard from "../../../components/ui/ProjectCard";
import { projects } from "../../../data/projects";
import "./ProjectsSection.css";

const featuredProjects = projects.filter((project) => project.featured);

function ProjectsSection() {
  return (
    <section id="projects" className="page-section projects-section">
      <div className="projects-header">
        <p className="section-label projects-label">// FEATURED.PROJECTS</p>

        <a className="projects-view-all" href="https://github.com/rxshellg/">
          VIEW ALL PROJECTS <FiArrowRight aria-hidden="true" />
        </a>
      </div>

      <div className="projects-grid">
        {featuredProjects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
