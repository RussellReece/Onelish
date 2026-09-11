import Link from 'next/link';
import { CalendarCheck, GameController, Briefcase } from '@phosphor-icons/react/dist/ssr';

export default function Home() {
  return (
    <div>
      {/* === Hero Section with Mascot Oniel === */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Speak Boldly, Think Sharply, and Never Stop Learning!</h1>
              <p>
                Welcome to Onelish, the English Club of Satu University Bandung.
                It&apos;s learning, but make it fun!
              </p>
              <div className="cta-group">
                <a
                  href="https://forms.gle/Uqj5MMnpoZRrSvzb7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Join Onelish
                </a>
                <Link href="/games" className="btn btn-secondary">
                  <GameController size={20} weight="bold" />
                  Play Now
                </Link>
              </div>
            </div>

            <div className="hero-mascot">
              <img
                src="/logo/logoQuote.svg"
                alt="Oniel - Mascot Onelish"
              />
            </div>
          </div>
        </div>
      </section>

      {/* === Wave Divider === */}
      <div className="wave-divider">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path
            d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,60 L1440,0 L0,0 Z"
            fill="#0c2c48"
          />
        </svg>
      </div>

      {/* === Why Join Section === */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Why Join Onelish 2026?</h2>
            <p>Three reasons why hundreds of students choose us every year.</p>
          </div>

          <div className="features-grid">
            <div className="card animate-in delay-1">
              <div className="feature-icon feature-icon-coral">
                <CalendarCheck size={28} weight="bold" />
              </div>
              <h3>Weekly Shift System</h3>
              <p>
                Our flexible schedule means club activities will never clash with
                your classes. Choose the shift that works best for you!
              </p>
            </div>

            <div className="card animate-in delay-2">
              <div className="feature-icon feature-icon-yellow">
                <GameController size={28} weight="bold" />
              </div>
              <h3>Gamified Learning</h3>
              <p>
                Erase the stigma of being afraid to speak English. We use board
                games and interactive methods to make learning enjoyable.
              </p>
            </div>

            <div className="card animate-in delay-3">
              <div className="feature-icon feature-icon-teal">
                <Briefcase size={28} weight="bold" />
              </div>
              <h3>Career-Ready</h3>
              <p>
                Develop professional skills such as public speaking and interview
                techniques to prepare for your future.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
