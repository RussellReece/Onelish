import {
  Crown,
  BookOpenText,
  Handshake,
  UsersThree,
  ClipboardText,
  Megaphone,
} from '@phosphor-icons/react/dist/ssr';

export const metadata = {
  title: "About Us | Onelish",
  description:
    "Learn about the vision and mission of Onelish English Club for the 2026 period.",
};

const divisions = [
  {
    icon: Crown,
    title: 'President',
    name: 'Russell Reece',
    color: 'feature-icon-coral',
  },
  {
    icon: BookOpenText,
    title: 'Academic',
    name: 'Curriculum & Learning',
    color: 'feature-icon-yellow',
  },
  {
    icon: Handshake,
    title: 'Business Development',
    name: 'Partnerships & Sponsorships',
    color: 'feature-icon-teal',
  },
  {
    icon: UsersThree,
    title: 'HRD',
    name: 'Member Relations',
    color: 'feature-icon-blue',
  },
  {
    icon: ClipboardText,
    title: 'Project Officer',
    name: 'Event Management',
    color: 'feature-icon-coral',
  },
  {
    icon: Megaphone,
    title: 'Public Relations & Docs',
    name: 'Social Media & Publications',
    color: 'feature-icon-yellow',
  },
];

export default function About() {
  return (
    <div>
      {/* === Page Header === */}
      <section className="page-header">
        <div className="container">
          <h1>About Onelish</h1>
          <p>Get to know the team behind your fun English learning journey.</p>
        </div>
        <img
          src="/logo/oniel.svg"
          alt=""
          className="page-header-mascot"
          aria-hidden="true"
        />
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

      {/* === Vision & Mission === */}
      <section className="section">
        <div className="container">
          <div className="card" style={{ marginBottom: '4rem' }}>
            <h2>Vision &amp; Mission 2026</h2>
            <p>
              Our commitment for 2026 is to build a{' '}
              <strong>Career-Ready</strong> and{' '}
              <strong>Sustainable Community</strong>. We aim to make English
              learning inclusive, flexible, and interactive through fun learning
              methods. We enhance professional skills such as public speaking
              and interview techniques to prepare members for real-world
              challenges.
            </p>
          </div>

          {/* === Organizational Structure === */}
          <div className="section-header">
            <h2>Organizational Structure</h2>
            <p>Period 2026 (February 2026 – January 2027)</p>
          </div>

          <div className="grid">
            {divisions.map((div, i) => {
              const Icon = div.icon;
              return (
                <div
                  className={`card org-card animate-in delay-${(i % 3) + 1}`}
                  key={div.title}
                >
                  <div className={`org-icon ${div.color}`}>
                    <Icon size={28} weight="bold" />
                  </div>
                  <h3>{div.title}</h3>
                  <p>
                    <strong>{div.name}</strong>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
