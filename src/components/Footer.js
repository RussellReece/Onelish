import { InstagramLogo, EnvelopeSimple, Globe } from '@phosphor-icons/react/dist/ssr';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img
              src="/logo/logowithtextwhite(#fff0e1).svg"
              alt="Onelish Logo"
            />
          </div>

          <p className="footer-tagline">It&apos;s learning, but make it fun!</p>

          <div className="footer-links">
            <a
              href="https://instagram.com/onelish.ec"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <InstagramLogo size={22} weight="bold" />
            </a>
            <a
              href="mailto:onelish@satu.ac.id"
              aria-label="Email"
            >
              <EnvelopeSimple size={22} weight="bold" />
            </a>
            <a
              href="/"
              aria-label="Website"
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
