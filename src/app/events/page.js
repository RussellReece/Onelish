import { CalendarDots, Trophy, Storefront, ArrowRight } from '@phosphor-icons/react/dist/ssr';

export const metadata = {
  title: "Events | Onelish",
  description:
    "Check out the upcoming and past events of Onelish English Club.",
};

const events = [
  {
    badge: 'Bi-Monthly',
    badgeClass: 'badge-blue',
    icon: CalendarDots,
    title: 'Skill Up Seminars',
    description:
      'Seminars held every two months covering essential topics like "English for Interview" and "Public Speaking 101".',
  },
  {
    badge: 'Internal',
    badgeClass: 'badge-coral',
    icon: Trophy,
    title: 'Onelish Internal Competition',
    description:
      'Friendly competitions among members to test your skills in spelling bees, debates, and boardgame tournaments.',
  },
  {
    badge: 'Weekly',
    badgeClass: 'badge-teal',
    icon: Storefront,
    title: 'Fun-Raising Stand',
    description:
      'Visit our Boardgame Station at the campus to play, socialize, and help support the club financially.',
  },
];

export default function Events() {
  return (
    <div>
      {/* === Page Header === */}
      <section className="page-header">
        <div className="container">
          <h1>Program &amp; Events</h1>
          <p>
            Join our signature events designed to build confidence and
            capability.
          </p>
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

      {/* === Events Grid === */}
      <section className="section">
        <div className="container">
          <div className="grid">
            {events.map((event, i) => {
              const Icon = event.icon;
              return (
                <div
                  className={`card animate-in delay-${(i % 3) + 1}`}
                  key={event.title}
                >
                  <div style={{ marginBottom: '1rem' }}>
                    <span className={`badge ${event.badgeClass}`}>
                      <Icon size={14} weight="bold" />
                      {event.badge}
                    </span>
                  </div>
                  <h3>{event.title}</h3>
                  <p style={{ marginBottom: '1.5rem' }}>{event.description}</p>
                  <button className="btn btn-primary">
                    Learn More
                    <ArrowRight size={18} weight="bold" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
