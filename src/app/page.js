'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  CalendarCheck,
  GameController,
  Briefcase,
  X,
  Megaphone,
  Link as LinkIcon
} from '@phosphor-icons/react';

export default function Home() {
  // State untuk mengontrol Pop-up Registrasi dan Event
  const [isRegModalOpen, setIsRegModalOpen] = useState(false);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);

  return (
    <div>
      {/* === Floating Event Notification === */}
      <button
        onClick={() => setIsEventModalOpen(true)}
        className="animate-in"
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          zIndex: 999,
          backgroundColor: 'var(--friendly-yellow)',
          color: 'var(--confident-ink)',
          border: '3px solid var(--confident-ink)',
          borderRadius: '50px',
          padding: '0.75rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          boxShadow: '4px 4px 0px var(--confident-ink)',
          transition: 'transform 0.2s ease',
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = 'translate(-4px, -4px)')}
        onMouseOut={(e) => (e.currentTarget.style.transform = 'translate(0, 0)')}
      >
        <Megaphone size={24} weight="duotone" />
        English Club Visit!
      </button>

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
                {/* Tombol Join Onelish sekarang membuka Pop-up */}
                <button
                  onClick={() => setIsRegModalOpen(true)}
                  className="btn btn-primary"
                >
                  Join Onelish
                </button>
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

      {/* === MODAL / POP-UP REGISTRASI === */}
      {isRegModalOpen && (
        <div className="modal-overlay" onClick={() => setIsRegModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ textAlign: 'center' }}>
            <button className="modal-close" onClick={() => setIsRegModalOpen(false)}>
              <X size={24} weight="bold" />
            </button>
            <h2 style={{ marginBottom: '1rem', color: 'var(--expressive-coral)' }}>Scan to Join!</h2>
            <p style={{ marginBottom: '1.5rem' }}>Scan the QR code below using your smartphone to access the registration form.</p>

            {/* Gambar QR Code */}
            <img
              src="/registration.png"
              alt="Registration QR Code"
              style={{
                width: '200px',
                height: '200px',
                margin: '0 auto 1.5rem',
                border: '3px solid var(--confident-ink)',
                borderRadius: '16px'
              }}
            />

            <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Or click the link below:</p>
            <a
              href="https://forms.gle/Uqj5MMnpoZRrSvzb7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
            >
              <LinkIcon size={20} weight="bold" /> Go to Google Form
            </a>
          </div>
        </div>
      )}

      {/* === MODAL / POP-UP POSTER EVENT === */}
      {isEventModalOpen && (
        <div className="modal-overlay" onClick={() => setIsEventModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ padding: '1rem', maxWidth: '450px' }}>
            <button
              className="modal-close"
              onClick={() => setIsEventModalOpen(false)}
              style={{
                top: '15px', right: '15px',
                background: 'var(--white)',
                borderRadius: '50%',
                border: '2px solid var(--confident-ink)',
                zIndex: 10
              }}
            >
              <X size={20} weight="bold" />
            </button>

            {/* Gambar Poster */}
            <img
              src="/englishClubVisit.jpeg"
              alt="English Club Visit Poster"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '12px',
                border: '3px solid var(--confident-ink)',
                display: 'block'
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}