import { beforeEach, describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar", () => {
  let nav: HTMLElement;

  beforeEach(() => {
    render(<Navbar />);
    nav = screen.getByRole("navigation", { name: /main navigation/i });
  });

  it("renders as the main navigation landmark", () => {
    expect(nav).toBeInTheDocument();
  });

  it("renders the logo link pointing to #hero", () => {
    expect(
      within(nav).getByRole("link", { name: /go to top/i }),
    ).toHaveAttribute("href", "#hero");
  });

  it("renders all active navigation links with correct hrefs", () => {
    expect(within(nav).getByRole("link", { name: /home/i })).toHaveAttribute(
      "href",
      "#hero",
    );
    expect(within(nav).getByRole("link", { name: /about/i })).toHaveAttribute(
      "href",
      "#about",
    );
  });

  it("renders the resume download link", () => {
    const resumeLink = within(nav).getByRole("link", { name: /resume\.pdf/i });
    expect(resumeLink).toHaveAttribute("href", "/Rashell-Guerrero-Resume.pdf");
    expect(resumeLink).toHaveAttribute("download");
  });
});
