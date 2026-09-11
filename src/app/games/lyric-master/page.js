'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, MusicNotes, CheckCircle } from '@phosphor-icons/react';

const lyricData = [
    { artist: "Queen", song: "Bohemian Rhapsody", text1: "Is this the real life? Is this just ", answer: "fantasy", text2: "?" },
    { artist: "The Beatles", song: "Hey Jude", text1: "Take a sad song and make it ", answer: "better", text2: "." },
];

export default function LyricMaster() {
    const [level, setLevel] = useState(0);
    const [userInput, setUserInput] = useState("");
    const [isCorrect, setIsCorrect] = useState(false);

    const checkLyric = () => {
        if (userInput.toLowerCase().trim() === lyricData[level].answer) {
            setIsCorrect(true);
        } else {
            alert("Incorrect! Keep trying or listen to the song again.");
        }
    };

    const nextSong = () => {
        setLevel((prev) => prev + 1);
        setUserInput("");
        setIsCorrect(false);
    };

    return (
        <div style={{ padding: '2rem 0', minHeight: '80vh' }}>
            <div className="container" style={{ maxWidth: '700px' }}>
                <Link href="/games" className="badge badge-teal" style={{ marginBottom: '2rem' }}>
                    <ArrowLeft weight="bold" /> Back to Lobby
                </Link>

                <div className="card" style={{ textAlign: 'center' }}>
                    <MusicNotes size={48} color="var(--intelligent-blue)" />
                    <h2 style={{ color: 'var(--intelligent-blue)' }}>Lyric Master</h2>
                    <p className="badge badge-yellow">{lyricData[level].artist} - {lyricData[level].song}</p>

                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '3rem 0', lineHeight: '2' }}>
                        {lyricData[level].text1}
                        {isCorrect ? (
                            <span style={{ color: 'var(--grounded-teal)', borderBottom: '3px solid var(--grounded-teal)', padding: '0 0.5rem' }}>
                                {lyricData[level].answer}
                            </span>
                        ) : (
                            <input
                                type="text"
                                value={userInput}
                                onChange={(e) => setUserInput(e.target.value)}
                                placeholder="type here..."
                                style={{
                                    fontSize: '1.25rem', padding: '0.5rem', borderRadius: '8px', border: '3px solid var(--confident-ink)', width: '150px', textAlign: 'center', outline: 'none'
                                }}
                            />
                        )}
                        {lyricData[level].text2}
                    </div>

                    {!isCorrect ? (
                        <button className="btn btn-primary" onClick={checkLyric} style={{ width: '100%' }}>Submit Answer</button>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                            <span className="badge badge-teal"><CheckCircle size={20} /> You got it!</span>
                            {level < lyricData.length - 1 && (
                                <button className="btn btn-secondary" onClick={nextSong}>Next Song</button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}