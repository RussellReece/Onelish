'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
    Keyboard,
    MusicNotes,
    Cards,
    DiceThree,
    Info,
    X,
    Users,
    Timer,
    MagnifyingGlassPlus,
    GameController
} from '@phosphor-icons/react';

// Data untuk Game Digital (Bisa dimainkan di Web PC/Laptop)
const digitalGames = [
    {
        id: 'D1',
        name: 'Sentence Scramble',
        type: 'Interactive',
        description: 'Drag and drop scattered words to build the perfect sentence before the timer runs out!',
        icon: Keyboard,
        btnClass: 'btn-primary',
        btnText: 'Play Now',
        link: '/games/sentence-scramble',
    },
    {
        id: 'D2',
        name: 'Lyric Master',
        type: 'Interactive',
        description: 'Listen to the song snippet and type the missing English lyrics as fast as you can.',
        icon: MusicNotes,
        btnClass: 'btn-primary',
        btnText: 'Play Now',
        link: '/games/lyric-master',
    },
    {
        id: 'D3',
        name: 'Vocab Memory Flip',
        type: 'Interactive',
        description: 'Click and flip cards to match English words with their correct meanings or pictures.',
        icon: Cards,
        btnClass: 'btn-primary',
        btnText: 'Play Now',
        link: '/games/vocab-memory',
    },
];

export default function GamesClient({ physicalGames }) {
    // State untuk mengontrol Pop-up (Modal) Detail Game dan Fitur Zoom Gambar
    const [selectedGame, setSelectedGame] = useState(null);
    const [zoomedImage, setZoomedImage] = useState(null);

    const closeModal = () => setSelectedGame(null);

    return (
        <div>
            {/* === SECTION 1: Interactive Web Games === */}
            <section className="section">
                <div className="container">
                    <div className="section-header" style={{ textAlign: 'left', marginBottom: '2rem' }}>
                        <h2>Interactive Web Games</h2>
                        <p style={{ margin: '0' }}>Optimized for your PC/Laptop. Test your English skills right here!</p>
                    </div>

                    <div className="grid">
                        {digitalGames.map((game, i) => {
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
                                            className={`badge ${game.type === 'Interactive' ? 'badge-coral' : 'badge-teal'
                                                }`}
                                        >
                                            {game.type}
                                        </span>
                                    </div>
                                    <h3>{game.name}</h3>
                                    <p style={{ marginBottom: '1.25rem' }}>{game.description}</p>
                                    <Link
                                        href={game.link}
                                        className={`btn ${game.btnClass}`}
                                        style={{ width: '100%', display: 'inline-flex', justifyContent: 'center' }}
                                    >
                                        <GameController size={18} weight="bold" />
                                        {game.btnText}
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* === SECTION 2: Physical Boardgames (Data dari Spreadsheet) === */}
            <section className="section" style={{ paddingTop: '0' }}>
                <div className="container">
                    <div className="section-header" style={{ textAlign: 'left', marginBottom: '2rem', marginTop: '2rem' }}>
                        <h2>Offline Boardgame Station</h2>
                        <p style={{ margin: '0' }}>Discover the games you can play with us during our weekly campus gatherings!</p>
                    </div>

                    <div className="grid">
                        {physicalGames.map((game, i) => {
                            return (
                                <div className={`card animate-in delay-${(i % 3) + 1}`} key={game.Game_ID}>
                                    <div className="game-thumbnail">
                                        <DiceThree size={48} weight="duotone" />
                                    </div>
                                    <div className="game-type">
                                        <span className="badge badge-teal">Boardgame</span>
                                    </div>
                                    <h3>{game.Nama}</h3>
                                    <p style={{ marginBottom: '1.25rem' }}>
                                        {/* Menampilkan deskripsi singkat (potong jika terlalu panjang) */}
                                        {game.Deskripsi?.length > 80 ? game.Deskripsi.substring(0, 80) + '...' : game.Deskripsi}
                                    </p>
                                    <button
                                        className="btn btn-secondary"
                                        style={{ width: '100%' }}
                                        onClick={() => setSelectedGame(game)}
                                    >
                                        <Info size={18} weight="bold" />
                                        View Details
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* === MODAL / POP-UP: Detail Boardgame === */}
            {selectedGame && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>
                            <X size={24} weight="bold" />
                        </button>

                        <h2 style={{ marginBottom: '1rem' }}>{selectedGame.Nama}</h2>

                        {/* BAGIAN GAMBAR DENGAN FITUR HOVER & ZOOM */}
                        {selectedGame.Thumbnail_URL && (
                            <div
                                className="image-zoom-container"
                                onClick={() => setZoomedImage(selectedGame.Thumbnail_URL)}
                            >
                                <img
                                    src={selectedGame.Thumbnail_URL}
                                    alt={`Thumbnail untuk ${selectedGame.Nama}`}
                                />
                                <div className="image-zoom-overlay">
                                    <MagnifyingGlassPlus size={56} weight="duotone" />
                                </div>
                            </div>
                        )}

                        <div className="modal-badges" style={{ marginTop: '0' }}>
                            <span className="badge badge-yellow">
                                <Users size={16} weight="bold" />
                                {selectedGame.Players}
                            </span>
                            <span className="badge badge-blue">
                                <Timer size={16} weight="bold" />
                                {selectedGame.Duration}
                            </span>
                        </div>

                        <p style={{ lineHeight: '1.8' }}>{selectedGame.Deskripsi}</p>
                    </div>
                </div>
            )}

            {/* === MODAL KHUSUS ZOOM GAMBAR (Layar Penuh) === */}
            {zoomedImage && (
                <div className="zoom-modal-overlay" onClick={() => setZoomedImage(null)}>
                    <div className="zoom-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="zoom-close" onClick={() => setZoomedImage(null)}>
                            <X size={36} weight="bold" />
                        </button>
                        <img src={zoomedImage} alt="Expanded Boardgame" />
                    </div>
                </div>
            )}
        </div>
    );
}