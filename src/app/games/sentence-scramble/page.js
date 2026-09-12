'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, ArrowCounterClockwise } from '@phosphor-icons/react';

// Kalimat yang jauh lebih sulit (tanpa tanda baca agar fokus pada tata bahasa)
const sentences = [
    {
        original: "Mastering a new language requires consistent practice and dedication",
        scrambled: ["practice", "a", "requires", "dedication", "language", "Mastering", "consistent", "new", "and"]
    },
    {
        original: "Effective communication is essential for building strong professional relationships",
        scrambled: ["essential", "communication", "relationships", "Effective", "building", "strong", "for", "is", "professional"]
    },
    {
        original: "The rapid advancement of technology has transformed our daily lives",
        scrambled: ["daily", "of", "has", "advancement", "The", "technology", "transformed", "lives", "rapid", "our"]
    },
    {
        original: "Overcoming the fear of public speaking builds immense self confidence",
        scrambled: ["fear", "speaking", "the", "builds", "confidence", "public", "immense", "Overcoming", "of", "self"]
    },
    {
        original: "Collaborative teamwork often leads to more innovative and sustainable solutions",
        scrambled: ["leads", "sustainable", "often", "innovative", "more", "teamwork", "to", "Collaborative", "solutions", "and"]
    }
];

export default function SentenceScramble() {
    const [level, setLevel] = useState(0);
    const [bank, setBank] = useState([]);
    const [answer, setAnswer] = useState([]);
    const [isCorrect, setIsCorrect] = useState(false);

    useEffect(() => {
        loadLevel();
    }, [level]);

    const loadLevel = () => {
        // Mengacak ulang array scrambled agar posisinya selalu berbeda tiap di-refresh
        const shuffledBank = [...sentences[level].scrambled].sort(() => Math.random() - 0.5);
        setBank(shuffledBank);
        setAnswer([]);
        setIsCorrect(false);
    };

    const moveToAnswer = (word, index) => {
        if (isCorrect) return;
        setBank(bank.filter((_, i) => i !== index));
        setAnswer([...answer, word]);
    };

    const moveToBank = (word, index) => {
        if (isCorrect) return;
        setAnswer(answer.filter((_, i) => i !== index));
        setBank([...bank, word]);
    };

    const checkAnswer = () => {
        const currentAnswer = answer.join(" ");
        if (currentAnswer === sentences[level].original) {
            setIsCorrect(true);
        } else {
            alert("Oops! The grammar is not quite right. Try arranging it differently.");
        }
    };

    return (
        <div style={{ padding: '2rem 0', minHeight: '80vh' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <Link href="/games" className="badge badge-teal" style={{ marginBottom: '2rem' }}>
                    <ArrowLeft weight="bold" /> Back to Lobby
                </Link>

                <div className="card" style={{ textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--expressive-coral)' }}>Sentence Scramble</h2>
                    <p>Level {level + 1} of {sentences.length} — <strong>Hard Mode</strong></p>
                    <hr style={{ margin: '1.5rem 0', borderColor: 'var(--friendly-yellow)' }} />

                    {/* Area Jawaban */}
                    <div style={{ minHeight: '80px', padding: '1rem', border: '3px dashed var(--confident-ink)', borderRadius: '16px', marginBottom: '2rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {answer.length === 0 && <span style={{ opacity: 0.5 }}>Click words below to build the sentence...</span>}
                        {answer.map((word, i) => (
                            <button key={i} onClick={() => moveToBank(word, i)} className="btn btn-secondary" style={{ padding: '0.5rem 1rem' }}>
                                {word}
                            </button>
                        ))}
                    </div>

                    {/* Area Kata Acak */}
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2rem' }}>
                        {bank.map((word, i) => (
                            <button key={i} onClick={() => moveToAnswer(word, i)} className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>
                                {word}
                            </button>
                        ))}
                    </div>

                    {!isCorrect ? (
                        <button className="btn btn-primary" onClick={checkAnswer} disabled={bank.length > 0} style={{ width: '100%' }}>
                            Check Answer
                        </button>
                    ) : (
                        <div style={{ backgroundColor: 'var(--grounded-teal)', color: 'white', padding: '1rem', borderRadius: '16px' }}>
                            <h3 style={{ color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                                <CheckCircle size={28} /> Brilliant!
                            </h3>
                            {level < sentences.length - 1 ? (
                                <button className="btn btn-secondary" onClick={() => setLevel(level + 1)} style={{ marginTop: '1rem' }}>Next Level</button>
                            ) : (
                                <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>You have completed all levels!</p>
                            )}
                        </div>
                    )}

                    <button onClick={loadLevel} className="btn" style={{ marginTop: '1rem', border: 'none', background: 'transparent', color: 'var(--confident-ink)' }}>
                        <ArrowCounterClockwise /> Reset
                    </button>
                </div>
            </div>
        </div>
    );
}