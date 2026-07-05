import { useState } from "react";
import { skills } from "../../../data/skills";
import "./SkillsSection.css";

type Tab = "hard" | "soft";

function SkillsSection() {
  const [activeTab, setActiveTab] = useState<Tab>("hard");

  const panel =
    activeTab === "hard" ? (
      skills.hardCategories.map(({ label, skills: items }) => (
        <section key={label} className="skills-category">
          <h3 className="skills-category-label">{label}</h3>
          <ul className="skills-icon-grid clean-list">
            {items.map(({ name, Icon }) => (
              <li key={name} className="skills-icon-item">
                <div className="skills-icon">
                  <Icon aria-hidden="true" />
                </div>
                <span>{name}</span>
              </li>
            ))}
          </ul>
        </section>
      ))
    ) : (
      <ul className="skills-soft clean-list">
        {skills.soft.map(({ name, Icon, description, level }) => (
          <li key={name} className="skills-soft-item">
            <div className="skills-icon">
              <Icon aria-hidden="true" />
            </div>
            <div className="skills-soft-content">
              <h3>{name}</h3>
              <p>{description}</p>
            </div>
            <div className="skills-soft-bar-wrap">
              <div
                className="skills-soft-bar-track"
                role="meter"
                aria-valuenow={level}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${name}: ${level}%`}
              >
                <div
                  className="skills-soft-bar-fill"
                  style={{ width: `${level}%` }}
                />
              </div>
              <span>{level}%</span>
            </div>
          </li>
        ))}
      </ul>
    );

  return (
    <section
      id="skills"
      className="page-section section-pad split skills-section"
    >
      <div className="skills-left center-column">
        <p className="section-label">// Skills</p>
        <h2 className="section-heading">
          <span>Tools</span> I craft with
        </h2>
        <p className="skills-description">
          A mix of languages, frameworks, and habits picked up across projects,
          an apprenticeship, and a lot of late-night debugging.
        </p>
        <img className="skills-image" src="/Skills-Image.png" alt="" />
      </div>

      <div className="skills-right center-column">
        <div className="skills-window" role="region" aria-label="Skills window">
          <div className="skills-window-titlebar">
            <div className="skills-window-tabs" role="tablist">
              {(["hard", "soft"] as Tab[]).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab}
                  className="skills-tab"
                  data-active={activeTab === tab}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.toUpperCase()} SKILLS
                </button>
              ))}
            </div>
            <div className="skills-window-controls" aria-hidden="true">
              — □ ✕
            </div>
          </div>

          <div className="skills-window-body" role="tabpanel">
            {panel}
          </div>
        </div>

        <div className="skills-exploring">
          <span>currently exploring</span>
          <p>{skills.currentlyExploring}</p>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
