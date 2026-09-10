'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { List, X } from '@phosphor-icons/react';

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/games', label: 'Games Lobby' },
    { href: '/events', label: 'Events' },
  ];

  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/" className="nav-brand">
          <img
            src="/logo/logowithtextwhite.svg"
            alt="Onelish Logo"
          />
        </Link>

        <button
          className="nav-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={28} weight="bold" /> : <List size={28} weight="bold" />}
        </button>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={pathname === link.href ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
