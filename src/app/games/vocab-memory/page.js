'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Cards } from '@phosphor-icons/react';

// 10 Pasang Kartu (20 Kartu total)
const initialCards = [
    { id: 1, text: "Courage", matchId: "A" }, { id: 2, text: "Keberanian", matchId: "A" },
    { id: 3, text: "Hilarious", matchId: "B" }, { id: 4, text: "Sangat Lucu", matchId: "B" },
    { id: 5, text: "Flawless", matchId: "C" }, { id: 6, text: "Sempurna", matchId: "C" },
    { id: 7, text: "Doubt", matchId: "D" }, { id: 8, text: "Keraguan", matchId: "D" },
    { id: 9, text: "Persuade", matchId: "E" }, { id: 10, text: "Membujuk", matchId: "E" },
    { id: 11, text: "Inevitable", matchId: "F" }, { id: 12, text: "Tak Terhindarkan", matchId: "F" },
    { id: 13, text: "Astonishing", matchId: "G" }, { id: 14, text: "Mengagumkan", matchId: "G" },
    { id: 15, text: "Stubborn", matchId: "H" }, { id: 16, text: "Keras Kepala", matchId: "H" },
    { id: 17, text: "Reluctant", matchId: "I" }, { id: 18, text: "Enggan", matchId: "I" },
    { id: 19, text: "Comprehend", matchId: "J" }, { id: 20, text: "Memahami", matchId: "J" },
];

export default function VocabMemory() {
    const [cards, setCards] = useState([]);
    const [flippedIndices, setFlippedIndices] = useState([]);
    const [matchedIds, setMatchedIds] = useState([]);
    const [moves, setMoves] = useState(0); // Menambah fitur hitung langkah

    useEffect(() => {
        // Mengacak kartu dengan algoritma Fisher-Yates (lebih acak dan stabil dari sekadar Math.random)
        let shuffled = [...initialCards];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        setCards(shuffled);
    }, []);

    const handleCardClick = (index) => {
        if (flippedIndices.length === 2 || flippedIndices.includes(index) || matchedIds.includes(cards[index].matchId)) return;

        const newFlipped = [...flippedIndices, index];
        setFlippedIndices(newFlipped);

        if (newFlipped.length === 2) {
            setMoves(moves + 1); // Hitung 1 langkah setiap membuka 2 kartu
            const [firstIndex, secondIndex] = newFlipped;

            if (cards[firstIndex].matchId === cards[secondIndex].matchId) {
                setMatchedIds([...matchedIds, cards[firstIndex].matchId]);
                setFlippedIndices([]);
            } else {
                setTimeout(() => setFlippedIndices([]), 1000);
            }
        }
    };

    return (
        <div style={{ padding: '2rem 0', minHeight: '80vh' }}>
            <div className="container" style={{ maxWidth: '900px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <Link href="/games" className="badge badge-teal">
                        <ArrowLeft weight="bold" /> Back to Lobby
                    </Link>
                    <span className="badge badge-yellow" style={{ fontSize: '1rem' }}>
                        Moves: {moves}
                    </span>
                </div>

                <div className="card" style={{ textAlign: 'center' }}>
                    <Cards size={48} color="var(--friendly-yellow)" />
                    <h2 style={{ color: 'var(--friendly-yellow)' }}>Vocab Memory Flip</h2>
                    <p>Match the English word with its correct meaning!</p>

                    {/* Grid diperkecil agar 20 kartu (4x5) muat dengan rapi di layar */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '0.75rem', marginTop: '2rem' }}>
                        {cards.map((card, index) => {
                            const isFlipped = flippedIndices.includes(index);
                            const isMatched = matchedIds.includes(card.matchId);

                            return (
                                <div
                                    key={index}
                                    onClick={() => handleCardClick(index)}
                                    style={{
                                        height: '90px',
                                        backgroundColor: isFlipped || isMatched ? 'var(--friendly-yellow)' : 'var(--confident-ink)',
                                        color: isFlipped || isMatched ? 'var(--confident-ink)' : 'transparent',
                                        border: '3px solid var(--confident-ink)',
                                        borderRadius: '12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '1rem',
                                        fontWeight: '800',
                                        textAlign: 'center',
                                        padding: '0.5rem',
                                        cursor: isMatched ? 'default' : 'pointer',
                                        boxShadow: isFlipped || isMatched ? 'none' : '3px 3px 0px var(--friendly-yellow)',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    {(isFlipped || isMatched) ? card.text : "?"}
                                </div>
                            );
                        })}
                    </div>

                    {matchedIds.length === initialCards.length / 2 && (
                        <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: 'var(--expressive-coral)', color: 'white', borderRadius: '16px' }}>
                            <h3>Congratulations!</h3>
                            <p>You matched them all in <strong>{moves}</strong> moves!</p>
                            <button className="btn btn-secondary" onClick={() => window.location.reload()} style={{ marginTop: '1rem' }}>Play Again</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}