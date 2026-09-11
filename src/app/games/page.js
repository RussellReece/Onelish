import { fetchOnelishData } from '@/lib/api';
import GamesClient from './GamesClient';

export const metadata = {
  title: "Games Lobby | Onelish",
  description: "Play interactive PC minigames or explore our offline boardgame collection.",
};

export default async function Games() {
  // Mengambil data dari Google Sheets melalui API yang ada di folder lib
  const data = await fetchOnelishData();

  // Mengambil sheet "Games"
  // Jika API gagal, sedang loading, atau kosong, sediakan array kosong sebagai fallback
  const physicalGames = data?.Games || [];

  return (
    <div>
      {/* === Page Header === */}
      <section className="page-header">
        <div className="container">
          <h1>Games Lobby</h1>
          <p>
            The Playground — Play our interactive web minigames or browse our offline boardgame collection!
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

      {/* Memanggil Client Component (GamesClient.js) dan mengirimkan data dari Spreadsheet */}
      <GamesClient physicalGames={physicalGames} />
    </div>
  );
}