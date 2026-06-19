import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("renders the portfolio hero", () => {
    expect(
      screen.getByRole("heading", { name: /rashell\s*guerrero/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/i build reliable, user-focused software/i),
    ).toBeInTheDocument();
  });

  it("renders the about section", () => {
    expect(
      screen.getByRole("heading", {
        name: /think\. design\. build\.\s*refine\./i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getAllByText(/full-stack software engineer/i).length,
    ).toBeGreaterThan(0);
    expect(screen.getByText(/available for/i)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /full-time opportunities/i }),
    ).toHaveAttribute("href", "https://www.linkedin.com/in/rashell-guerrero/");
  });

  it("renders the expected page sections", () => {
    expect(document.querySelector("#hero")).toBeInTheDocument();
    expect(document.querySelector("#about")).toBeInTheDocument();
  });

  it("renders the main navigation", () => {
    expect(
      screen.getByRole("navigation", { name: /main navigation/i }),
    ).toBeInTheDocument();
  });

  it("has working primary links", () => {
    expect(screen.getByRole("link", { name: /view my work/i })).toHaveAttribute(
      "href",
      "https://github.com/rxshellg",
    );
    expect(screen.getByRole("link", { name: /get in touch/i })).toHaveAttribute(
      "href",
      "mailto:rashellguerrero123@gmail.com",
    );
    expect(screen.getByRole("link", { name: /resume\.pdf/i })).toHaveAttribute(
      "href",
      "/Rashell-Guerrero-Resume.pdf",
    );
  });

  it("has accessible social links", () => {
    expect(
      screen.getByRole("link", { name: /github profile/i }),
    ).toHaveAttribute("href", "https://github.com/rxshellg");
    expect(
      screen.getByRole("link", { name: /linkedin profile/i }),
    ).toHaveAttribute("href", "https://www.linkedin.com/in/rashell-guerrero/");
    expect(
      screen.getByRole("link", { name: /email rashell/i }),
    ).toHaveAttribute("href", "mailto:rashellguerrero123@gmail.com");
  });
});
