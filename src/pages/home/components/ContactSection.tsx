import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { FiSend } from "react-icons/fi";
import "./ContactSection.css";

type Status = "idle" | "sending" | "success" | "error";

const {
  VITE_EMAILJS_SERVICE_ID: SERVICE_ID,
  VITE_EMAILJS_TEMPLATE_ID: TEMPLATE_ID,
  VITE_EMAILJS_PUBLIC_KEY: PUBLIC_KEY,
} = import.meta.env;

const STATUS_MESSAGES = {
  success: "Message sent! I'll get back to you soon.",
  error: "Something went wrong. Try again or email me directly.",
};

const fields = [
  ["Name", "name", "text", "Your name"],
  ["Email", "email", "email", "you@example.com"],
  ["Subject", "subject", "text", "How can I help?"],
] as const;

function ContactField({ field }: { field: (typeof fields)[number] }) {
  const [label, name, type, placeholder] = field;
  const id = `contact-${name}`;

  return (
    <div className="contact-field">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={name} type={type} placeholder={placeholder} />
    </div>
  );
}

function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const isSending = status === "sending";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isSending) return;

    const form = e.currentTarget;
    setStatus("sending");

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, {
        publicKey: PUBLIC_KEY,
      });
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="page-section section-pad split contact-section"
    >
      <div className="contact-left center-column">
        <p className="section-label">// Contact</p>

        <h2 className="section-heading">
          Say hello. <span>I don't bite.</span>
        </h2>

        <form
          className="contact-form"
          aria-label="Contact form"
          onSubmit={handleSubmit}
        >
          <div className="contact-field-row">
            {fields.slice(0, 2).map((field) => (
              <ContactField key={field[1]} field={field} />
            ))}
          </div>

          <ContactField field={fields[2]} />

          <div className="contact-field">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              placeholder="Write your message here..."
            />
          </div>

          {(status === "success" || status === "error") && (
            <p
              className={`contact-status contact-status--${status}`}
              role={status === "error" ? "alert" : "status"}
            >
              {STATUS_MESSAGES[status]}
            </p>
          )}

          <button
            className="contact-submit ui-button"
            type="submit"
            disabled={isSending}
          >
            {isSending ? "SENDING..." : "SEND MESSAGE"}
            {!isSending && <FiSend aria-hidden="true" />}
          </button>
        </form>
      </div>

      <div className="contact-right center-column">
        <img src="/Contact-Image.png" alt="" aria-hidden="true" />
      </div>
    </section>
  );
}

export default ContactSection;
