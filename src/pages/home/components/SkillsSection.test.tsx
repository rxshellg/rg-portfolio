import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { skills } from "../../../data/skills";
import SkillsSection from "./SkillsSection";

describe("SkillsSection", () => {
  it("switches between hard and soft skills", async () => {
    const user = userEvent.setup();

    render(<SkillsSection />);

    const hardTab = screen.getByRole("tab", {
      name: /hard skills/i,
    });
    const softTab = screen.getByRole("tab", {
      name: /soft skills/i,
    });

    expect(hardTab).toHaveAttribute("aria-selected", "true");
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.queryByText("Problem Solving")).not.toBeInTheDocument();

    await user.click(softTab);

    expect(softTab).toHaveAttribute("aria-selected", "true");
    expect(hardTab).toHaveAttribute("aria-selected", "false");
    expect(screen.getByText("Problem Solving")).toBeInTheDocument();
    expect(screen.queryByText("TypeScript")).not.toBeInTheDocument();
  });

  it("gives every soft skill an accessible meter value", async () => {
    const user = userEvent.setup();

    render(<SkillsSection />);

    await user.click(
      screen.getByRole("tab", {
        name: /soft skills/i,
      }),
    );

    skills.soft.forEach(({ name, level }) => {
      const meter = screen.getByRole("meter", {
        name: `${name}: ${level}%`,
      });

      expect(meter).toHaveAttribute("aria-valuenow", String(level));
      expect(meter).toHaveAttribute("aria-valuemin", "0");
      expect(meter).toHaveAttribute("aria-valuemax", "100");
    });
  });
});
