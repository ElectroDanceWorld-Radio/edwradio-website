'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { getAssetPath } from './getAssetPath';

interface NavbarProps {
  dict: {
    header: {
      nav: {
        home: string;
        products: string;
        news: string;
        music: string;
        about: string;
      };
    };
  };
  lang: string;
}

const languages = [
  { code: 'es', label: '🇪🇸 ES' },
  { code: 'en', label: '🇬🇧 EN' },
];

export default function Navbar({ dict, lang }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const pathname = usePathname();
  const prefix = `/${lang}`;

  // Get the path without the language prefix for switching languages
  const pathWithoutLang = pathname.replace(new RegExp(`^/${lang}`), '');

  const navItems = [
    { href: `${prefix}/`, label: dict.header.nav.home },
    { href: `${prefix}/products`, label: dict.header.nav.products },
    { href: `${prefix}/news`, label: dict.header.nav.news },
    { href: `${prefix}/music`, label: dict.header.nav.music },
    { href: `${prefix}/about`, label: dict.header.nav.about },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0a] border-b border-white/5">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href={`/${lang}`} className="flex items-center">
          <img src={getAssetPath('/logo-nav.webp')} alt="EDW Radio" className="h-8 md:h-12 object-contain" />
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-base font-medium text-gray-300 hover:text-white transition-colors nav-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Language switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              aria-label="Select language"
            >
              {languages.find(l => l.code === lang)?.label}
              <svg xmlns="http://www.w3.org/2000/svg" className={`w-4 h-4 transition-transform ${langOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-1 py-1 w-28 bg-[#1a1a1a] border border-white/10 rounded-lg shadow-xl overflow-hidden z-50">
                {languages.map((l) => (
                  <Link
                    key={l.code}
                    href={`/${l.code}${pathWithoutLang}`}
                    className={`block px-4 py-2 text-sm transition-colors ${
                      l.code === lang
                        ? 'bg-purple-500/20 text-purple-300 font-medium'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                    onClick={() => setLangOpen(false)}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

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
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[32rem] border-t border-white/5' : 'max-h-0'}`}>
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
          <li className="pt-2 border-t border-white/5">
            <span className="block px-2 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider">Language</span>
            <div className="flex gap-2 mt-2 px-2">
              {languages.map((l) => (
                <Link
                  key={l.code}
                  href={`/${l.code}${pathWithoutLang}`}
                  className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                    l.code === lang
                      ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
}
