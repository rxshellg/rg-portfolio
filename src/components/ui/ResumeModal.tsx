import { useEffect, useRef } from "react";
import { FiArrowRight, FiMail, FiX } from "react-icons/fi";
import "./ResumeModal.css";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onGetInTouch: () => void;
};

export default function ResumeModal({ isOpen, onClose, onGetInTouch }: Props) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = ({ key }: KeyboardEvent) =>
      key === "Escape" && onClose();
    const { style } = document.body;
    const overflow = style.overflow;

    document.addEventListener("keydown", closeOnEscape);
    style.overflow = "hidden";
    modalRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      style.overflow = overflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="resume-modal center-box"
      onMouseDown={({ target, currentTarget }) =>
        target === currentTarget && onClose()
      }
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-modal-title"
        tabIndex={-1}
      >
        <div className="titlebar center-row">
          <span>RESUME.EXE</span>

          <div className="center-row">
            <span aria-hidden="true">_</span>
            <span aria-hidden="true">□</span>

            <button
              type="button"
              className="ui-button"
              onClick={onClose}
              aria-label="Close dialog"
            >
              <FiX aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="body">
          <h2 id="resume-modal-title">
            Hey there! <span aria-hidden="true">👋</span>
          </h2>

          <p>
            Thanks for your interest in my work. I'd love to connect and share
            my resume with you personally.
          </p>
        </div>

        <div className="actions center-row">
          <button
            type="button"
            className="primary ui-button"
            onClick={onGetInTouch}
          >
            Get in touch
            <FiArrowRight aria-hidden="true" />
            <FiMail aria-hidden="true" />
          </button>

          <button type="button" className="ui-button" onClick={onClose}>
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}
