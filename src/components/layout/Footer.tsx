import { FiHeart } from "react-icons/fi";
import { socials } from "../../data/socials";
import FooterCat from "./FooterCat";
import "./Footer.css";

const stats = [
  { value: "15", label: "Months of \nexperience" },
  { value: "9+", label: "Years \ncoding" },
  {
    value: (
      <>
        5<span className="footer-stat-star">★</span>
      </>
    ),
    label: "Work \nethic",
  },
  {
    value: <span className="footer-stat-infinity">∞</span>,
    label: "Lines of \ncode",
  },
];

function Footer() {
  return (
    <footer className="site-footer footer-root">
      <div className="footer-grid-bg" aria-hidden="true" />

      <div className="footer-inner">
        <div className="footer-stats-col">
          <p className="footer-section-label">// STATS</p>

          <div className="footer-stats">
            {stats.map((stat, i) => (
              <div className="footer-stat" key={i}>
                <span className="footer-stat-value">{stat.value}</span>
                <span className="footer-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

          <FooterCat />
        </div>

        <div className="footer-contact-col">
          <p className="footer-section-label">
            // LET&apos;S CONNECT{" "}
            <a
              href={socials.find((s) => s.label === "LinkedIn")!.href}
              className="footer-contact-arrow"
              target="_blank"
              rel="noreferrer"
              aria-label="Connect on LinkedIn"
            >
              →
            </a>
          </p>

          <div className="footer-terminal" aria-label="Contact terminal">
            <div className="footer-terminal-titlebar">
              <span className="footer-terminal-title">CONTACT.EXE</span>
              <div className="footer-terminal-controls" aria-hidden="true">
                <span>_</span>
                <span>□</span>
                <span>✕</span>
              </div>
            </div>

            <div className="footer-terminal-body">
              <p>
                I&apos;m currently open to new opportunities. Have a project in
                mind or just want to say hi?{" "}
                <a
                  href={socials.find((s) => s.label === "LinkedIn")!.href}
                  className="footer-terminal-cta"
                >
                  Let&apos;s connect!
                </a>
              </p>

              <div className="footer-terminal-prompt">
                <span>you@awesome:~$</span>
                <span className="footer-terminal-cursor" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          <FiHeart className="footer-heart" aria-hidden="true" />
          Built with passion, curiosity &amp; a lot of coffee.
        </p>
        <p>© 2026 Rashell Guerrero</p>
      </div>
    </footer>
  );
}

export default Footer;
