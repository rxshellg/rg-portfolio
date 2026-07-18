import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the complete portfolio page", () => {
    render(<App />);

    expect(
      screen.getByRole("navigation", { name: /main navigation/i }),
    ).toBeInTheDocument();

    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /rashell\s*guerrero/i,
      }),
    ).toBeInTheDocument();

    const sectionIds = ["hero", "about", "projects", "skills", "contact"];

    sectionIds.forEach((sectionId) => {
      const section = document.getElementById(sectionId);

      expect(section).toBeInTheDocument();
      expect(main).toContainElement(section);
    });

    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });
});
