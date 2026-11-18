'use client';

import Link from 'next/link';
import { useState } from 'react';
import { getAssetPath } from './getAssetPath';

interface NavbarProps {
  dict: {
    header: {
      nav: {
        home: string;
        events: string;
        podcast: string;
        playlists: string;
        about: string;
        contact: string;
      };
    };
  };
  lang: string;
}

export default function Navbar({ dict, lang }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const prefix = `/${lang}`;

  const navItems = [
    { href: `${prefix}/`, label: dict.header.nav.home },
    { href: `${prefix}/events`, label: dict.header.nav.events },
    { href: `${prefix}/podcast`, label: dict.header.nav.podcast },
    { href: `${prefix}/playlists`, label: dict.header.nav.playlists },
    { href: `${prefix}/about`, label: dict.header.nav.about },
    { href: `${prefix}/contact`, label: dict.header.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 glass border-b border-white/5">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href={`/${lang}`} className="flex items-center">
          <img src={getAssetPath('/logo-nav.png')} alt="EDW Radio" className="h-8 md:h-12 object-contain" />
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-base font-medium text-gray-300 hover:text-white transition-colors nav-link">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 border-t border-white/5' : 'max-h-0'}`}>
        <ul className="flex flex-col px-4 py-3 gap-3">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block py-2 text-base font-medium text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
