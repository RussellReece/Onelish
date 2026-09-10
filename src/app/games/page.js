import { GameController, PuzzlePiece, Brain } from '@phosphor-icons/react/dist/ssr';

export const metadata = {
  title: "Games Lobby | Onelish",
  description:
    "Explore the boardgames and interactive minigames available at Onelish.",
};

const placeholderGames = [
  {
    id: 'G1',
    name: 'Spelling Bee Dash',
    type: 'Interactive',
    description: 'A fast-paced spelling game to improve your vocabulary.',
    icon: Brain,
    iconColor: 'feature-icon-coral',
    btnClass: 'btn-primary',
    btnText: 'Play Game',
  },
  {
    id: 'G2',
    name: 'Scrabble',
    type: 'Boardgame',
    description: 'Classic word building game. Available at our stand.',
    icon: PuzzlePiece,
    iconColor: 'feature-icon-yellow',
    btnClass: 'btn-secondary',
    btnText: 'View Details',
  },
  {
    id: 'G3',
    name: 'Grammar Jeopardy',
    type: 'Interactive',
    description: 'Test your grammar skills in a fun quiz format.',
    icon: GameController,
    iconColor: 'feature-icon-teal',
    btnClass: 'btn-primary',
    btnText: 'Play Game',
  },
];

export default function Games() {
  return (
    <div>
      {/* === Page Header with Mascot (DESIGN.md §3D) === */}
      <section className="page-header">
        <div className="container">
          <h1>Games Lobby</h1>
          <p>
            The Playground — Discover our collection of boardgames and
            interactive minigames!
          </p>
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

      {/* === Games Grid === */}
      <section className="section">
        <div className="container">
          <div className="grid">
            {placeholderGames.map((game, i) => {
              const Icon = game.icon;
              return (
                <div
                  className={`card animate-in delay-${(i % 3) + 1}`}
                  key={game.id}
                >
                  <div className="game-thumbnail">
                    <Icon size={48} weight="duotone" />
                  </div>
                  <div className="game-type">
                    <span
                      className={`badge ${
                        game.type === 'Interactive'
                          ? 'badge-coral'
                          : 'badge-teal'
                      }`}
                    >
                      {game.type}
                    </span>
                  </div>
                  <h3>{game.name}</h3>
                  <p style={{ marginBottom: '1.25rem' }}>{game.description}</p>
                  <button className={`btn ${game.btnClass}`} style={{ width: '100%' }}>
                    <GameController size={18} weight="bold" />
                    {game.btnText}
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
