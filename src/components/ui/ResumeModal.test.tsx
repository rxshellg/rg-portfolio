import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import ResumeModal from "./ResumeModal";

function renderModal() {
  const onClose = vi.fn();
  const onGetInTouch = vi.fn();

  const view = render(
    <ResumeModal isOpen onClose={onClose} onGetInTouch={onGetInTouch} />,
  );

  return { ...view, onClose, onGetInTouch };
}

describe("ResumeModal", () => {
  afterEach(() => {
    document.body.style.overflow = "";
  });

  it("focuses the dialog, locks scrolling, and restores it when closed", () => {
    document.body.style.overflow = "auto";

    const { rerender, onClose, onGetInTouch } = renderModal();
    const dialog = screen.getByRole("dialog");

    expect(dialog).toHaveFocus();
    expect(document.body.style.overflow).toBe("hidden");

    rerender(
      <ResumeModal
        isOpen={false}
        onClose={onClose}
        onGetInTouch={onGetInTouch}
      />,
    );

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(document.body.style.overflow).toBe("auto");
  });

  it("closes through Escape, the backdrop, and both close buttons", async () => {
    const user = userEvent.setup();
    const { onClose } = renderModal();

    await user.keyboard("{Escape}");
    expect(onClose).toHaveBeenCalledTimes(1);

    await user.click(screen.getByRole("button", { name: /close dialog/i }));
    expect(onClose).toHaveBeenCalledTimes(2);

    await user.click(screen.getByRole("button", { name: /maybe later/i }));
    expect(onClose).toHaveBeenCalledTimes(3);

    const backdrop = screen.getByRole("dialog").parentElement!;
    await user.click(backdrop);

    expect(onClose).toHaveBeenCalledTimes(4);
  });

  it("calls onGetInTouch from the primary button", async () => {
    const user = userEvent.setup();
    const { onGetInTouch, onClose } = renderModal();

    await user.click(screen.getByRole("button", { name: /get in touch/i }));

    expect(onGetInTouch).toHaveBeenCalledOnce();
    expect(onClose).not.toHaveBeenCalled();
  });
});
