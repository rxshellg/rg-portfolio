import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import type { Project } from "../../data/projects";
import ProjectCard from "./ProjectCard";

const project: Project = {
  id: "test-project",
  title: "Test Project",
  description: "A project created for testing.",
  images: ["/image-1.png", "/image-2.png", "/image-3.png"],
  techStack: ["React", "TypeScript"],
  liveDemoUrl: "https://example.com",
  githubUrl: "https://github.com/example/project",
  featured: true,
};

describe("ProjectCard", () => {
  it("cycles through images and wraps in both directions", async () => {
    const user = userEvent.setup();

    render(
      <ProjectCard project={project} isExpanded={false} onToggle={vi.fn()} />,
    );

    expect(
      screen.getByRole("img", {
        name: /test project preview 1 of 3/i,
      }),
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", {
        name: /show previous test project image/i,
      }),
    );

    expect(
      screen.getByRole("img", {
        name: /test project preview 3 of 3/i,
      }),
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", {
        name: /show next test project image/i,
      }),
    );

    expect(
      screen.getByRole("img", {
        name: /test project preview 1 of 3/i,
      }),
    ).toBeInTheDocument();
  });

  it("renders only the available project links", () => {
    const { rerender } = render(
      <ProjectCard project={project} isExpanded={false} onToggle={vi.fn()} />,
    );

    expect(screen.getByRole("link", { name: /live demo/i })).toHaveAttribute(
      "href",
      project.liveDemoUrl,
    );

    expect(
      screen.getByRole("link", {
        name: /test project on github/i,
      }),
    ).toHaveAttribute("href", project.githubUrl);

    rerender(
      <ProjectCard
        project={{ ...project, liveDemoUrl: "", githubUrl: "" }}
        isExpanded={false}
        onToggle={vi.fn()}
      />,
    );

    expect(
      screen.queryByRole("link", { name: /live demo/i }),
    ).not.toBeInTheDocument();

    expect(screen.getByText(/live demo/i)).toHaveAttribute(
      "aria-disabled",
      "true",
    );

    expect(
      screen.queryByRole("link", { name: /github/i }),
    ).not.toBeInTheDocument();
  });

  it("calls onToggle when expanding and collapsing", async () => {
    const user = userEvent.setup();
    const onToggle = vi.fn();

    const { rerender } = render(
      <ProjectCard project={project} isExpanded={false} onToggle={onToggle} />,
    );

    const summaryButton = screen.getByRole("button", {
      name: project.title,
    });

    expect(summaryButton).toHaveAttribute("aria-expanded", "false");

    await user.click(summaryButton);

    expect(onToggle).toHaveBeenCalledTimes(1);

    rerender(<ProjectCard project={project} isExpanded onToggle={onToggle} />);

    expect(screen.getByRole("button", { name: project.title })).toHaveAttribute(
      "aria-expanded",
      "true",
    );

    await user.click(
      screen.getByRole("button", {
        name: /collapse test project/i,
      }),
    );

    expect(onToggle).toHaveBeenCalledTimes(2);
  });
});
