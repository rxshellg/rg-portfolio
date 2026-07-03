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
    <section id="contact" className="page-section contact-section">
      <div className="contact-left">
        <p className="section-label">// Contact</p>

        <h2 className="section-heading">
          Say hello. <span>I don't bite.</span>
        </h2>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-field-row">
            <div className="contact-field">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Your name"
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="contact-field">
            <label htmlFor="contact-subject">Subject</label>
            <input
              id="contact-subject"
              name="subject"
              type="text"
              placeholder="How can I help?"
            />
          </div>

          <div className="contact-field">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              placeholder="Write your message here..."
            />
          </div>

          {status in STATUS_MESSAGES && (
            <p className={`contact-status contact-status--${status}`}>
              {STATUS_MESSAGES[status as keyof typeof STATUS_MESSAGES]}
            </p>
          )}

          <button className="contact-submit" disabled={isSending}>
            {isSending ? "SENDING..." : "SEND MESSAGE"}
            {!isSending && <FiSend aria-hidden="true" />}
          </button>
        </form>
      </div>

      <div className="contact-right">
        <img src="/Contact-Image.png" alt="" aria-hidden="true" />
      </div>
    </section>
  );
}

export default ContactSection;
