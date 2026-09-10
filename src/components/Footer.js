import { InstagramLogo, EnvelopeSimple, Globe } from '@phosphor-icons/react/dist/ssr';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img
              src="/../logo/logowithtextwhite.svg"
              alt="Onelish Logo"
            />
          </div>

          <p className="footer-tagline">It&apos;s learning, but make it fun!</p>

          <div className="footer-links">
            <a
              href="https://instagram.com/onelishclub"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <InstagramLogo size={22} weight="bold" />
            </a>
            <a
              href="mailto:satu.englishclub@gmail.com"
              aria-label="Email"
            >
              <EnvelopeSimple size={22} weight="bold" />
            </a>
            <a
              href="https://www.linkedin.com/company/onelishclub"
              aria-label="LinkedIn"
            >
              <Globe size={22} weight="bold" />
            </a>
          </div>

          <p className="footer-copy">
            &copy; 2026 Onelish &mdash; English Club Satu University Bandung. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
