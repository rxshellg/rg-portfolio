import emailjs from "@emailjs/browser";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import ContactSection from "./ContactSection";

vi.mock("@emailjs/browser", () => ({
  default: {
    sendForm: vi.fn(),
  },
}));

const sendFormMock = vi.mocked(emailjs.sendForm);

const FORM_VALUES = {
  name: "Rashell Guerrero",
  email: "rashell@example.com",
  subject: "Portfolio inquiry",
  message: "I would like to discuss a software engineering opportunity.",
};

function createDeferred<T>() {
  let resolve!: (value: T) => void;
  const promise = new Promise<T>((resolvePromise) => {
    resolve = resolvePromise;
  });

  return { promise, resolve };
}

async function renderFilledForm() {
  const user = userEvent.setup();

  render(<ContactSection />);

  for (const [field, value] of Object.entries(FORM_VALUES)) {
    await user.type(
      screen.getByLabelText(new RegExp(`^${field}$`, "i")),
      value,
    );
  }

  return {
    user,
    form: screen.getByRole<HTMLFormElement>("form", {
      name: /contact form/i,
    }),
    submitButton: screen.getByRole<HTMLButtonElement>("button", {
      name: /send message/i,
    }),
  };
}

describe("ContactSection", () => {
  beforeEach(() => {
    sendFormMock.mockReset();
  });

  it("submits once, shows progress, succeeds, and resets the form", async () => {
    const response = { status: 200, text: "OK" };
    const request = createDeferred<typeof response>();

    sendFormMock.mockReturnValueOnce(request.promise);

    const { user, form, submitButton } = await renderFilledForm();

    await user.click(submitButton);

    expect(submitButton).toBeDisabled();
    expect(submitButton).toHaveTextContent(/sending/i);
    expect(sendFormMock).toHaveBeenCalledTimes(1);
    expect(sendFormMock.mock.calls[0][2]).toBe(form);

    act(() => {
      form.requestSubmit();
    });

    expect(sendFormMock).toHaveBeenCalledTimes(1);

    request.resolve(response);

    expect(await screen.findByRole("status")).toHaveTextContent(
      "Message sent! I'll get back to you soon.",
    );

    expect(form).toHaveFormValues({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    expect(submitButton).toBeEnabled();
  });

  it("shows an error and preserves the form when sending fails", async () => {
    sendFormMock.mockRejectedValueOnce(new Error("EmailJS request failed"));

    const { user, form, submitButton } = await renderFilledForm();

    await user.click(submitButton);

    expect(await screen.findByRole("alert")).toHaveTextContent(
      "Something went wrong. Try again or email me directly.",
    );

    expect(form).toHaveFormValues(FORM_VALUES);
    expect(submitButton).toBeEnabled();
  });
});
