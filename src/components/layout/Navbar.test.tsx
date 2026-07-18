import { beforeEach, describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { navigationLinks } from "../../data/navigation";
import Navbar from "./Navbar";

function expectNavigationLinks(container: HTMLElement) {
  expect(navigationLinks).toHaveLength(5);

  navigationLinks.forEach(({ label, href }) => {
    expect(
      within(container).getByRole("link", {
        name: new RegExp(label, "i"),
      }),
    ).toHaveAttribute("href", href);
  });
}

describe("Navbar", () => {
  let mainNavigation: HTMLElement;

  beforeEach(() => {
    render(<Navbar />);

    mainNavigation = screen.getByRole("navigation", {
      name: /main navigation/i,
    });
  });

  it("renders as the main navigation landmark", () => {
    expect(mainNavigation).toBeInTheDocument();
  });

  it("renders the logo link pointing to the hero section", () => {
    expect(
      within(mainNavigation).getByRole("link", {
        name: /go to top/i,
      }),
    ).toHaveAttribute("href", "#hero");
  });

  it("renders all five navigation links with the correct destinations", () => {
    expectNavigationLinks(mainNavigation);
  });

  it("opens and closes the mobile navigation menu", async () => {
    const user = userEvent.setup();

    const menuButton = within(mainNavigation).getByRole("button", {
      name: /toggle navigation menu/i,
    });

    expect(menuButton).toHaveAttribute("aria-expanded", "false");
    expect(
      screen.queryByRole("navigation", {
        name: /mobile navigation/i,
      }),
    ).not.toBeInTheDocument();

    await user.click(menuButton);

    expect(menuButton).toHaveAttribute("aria-expanded", "true");

    const mobileNavigation = screen.getByRole("navigation", {
      name: /mobile navigation/i,
    });

    expect(mobileNavigation).toBeInTheDocument();
    expectNavigationLinks(mobileNavigation);

    await user.click(menuButton);

    expect(menuButton).toHaveAttribute("aria-expanded", "false");
    expect(
      screen.queryByRole("navigation", {
        name: /mobile navigation/i,
      }),
    ).not.toBeInTheDocument();
  });

  it("closes the mobile menu after selecting a navigation link", async () => {
    const user = userEvent.setup();

    const menuButton = within(mainNavigation).getByRole("button", {
      name: /toggle navigation menu/i,
    });

    await user.click(menuButton);

    const mobileNavigation = screen.getByRole("navigation", {
      name: /mobile navigation/i,
    });

    await user.click(
      within(mobileNavigation).getByRole("link", {
        name: /projects/i,
      }),
    );

    expect(menuButton).toHaveAttribute("aria-expanded", "false");
    expect(
      screen.queryByRole("navigation", {
        name: /mobile navigation/i,
      }),
    ).not.toBeInTheDocument();
  });

  it("opens the resume modal", async () => {
    const user = userEvent.setup();

    await user.click(
      within(mainNavigation).getByRole("button", {
        name: /resume\.pdf/i,
      }),
    );

    expect(
      screen.getByRole("dialog", {
        name: /hey there/i,
      }),
    ).toBeInTheDocument();
  });
});
