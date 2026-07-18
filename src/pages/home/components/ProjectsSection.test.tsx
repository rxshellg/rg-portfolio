import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { projects } from "../../../data/projects";
import ProjectsSection from "./ProjectsSection";

const featuredProjects = projects
  .filter(({ featured }) => featured)
  .slice(0, 4);

describe("ProjectsSection", () => {
  it("renders three desktop projects and one mobile-only project", () => {
    render(<ProjectsSection />);

    const cards = screen.getAllByRole("article");

    expect(cards).toHaveLength(4);

    cards.slice(0, 3).forEach((card) => {
      expect(card).not.toHaveClass("project-card--mobile-only");
    });

    expect(cards[3]).toHaveClass("project-card--mobile-only");

    featuredProjects.forEach(({ title }) => {
      expect(screen.getByRole("heading", { name: title })).toBeInTheDocument();
    });
  });

  it("allows only one project to be expanded at a time", async () => {
    const user = userEvent.setup();

    render(<ProjectsSection />);

    const first = screen.getByRole("button", {
      name: featuredProjects[0].title,
    });

    const second = screen.getByRole("button", {
      name: featuredProjects[1].title,
    });

    await user.click(first);

    expect(first).toHaveAttribute("aria-expanded", "true");
    expect(second).toHaveAttribute("aria-expanded", "false");

    await user.click(second);

    expect(first).toHaveAttribute("aria-expanded", "false");
    expect(second).toHaveAttribute("aria-expanded", "true");

    await user.click(second);

    expect(second).toHaveAttribute("aria-expanded", "false");
  });
});
