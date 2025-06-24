'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [language, setLanguage] = useState<'EN' | 'IT'>('EN');
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'EN' ? 'IT' : 'EN'));
  };

  return (
    <nav className="bg-white shadow-md px-4 sm:px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/mvmdriver_logo_white.png"
            alt="MVMdriver Logo"
            className="h-12 w-auto sm:h-14"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex flex-1 justify-between items-center">
          <div className="flex items-center gap-6 bg-gray-100 px-6 py-2 rounded-full">
            <ul className="flex gap-4">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`px-4 py-2 rounded-full font-medium transition ${
                        isActive
                          ? 'bg-blue-600 text-white shadow'
                          : 'text-blue-700 hover:bg-blue-100'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 text-sm font-semibold rounded-full bg-white border border-blue-600 text-blue-700 hover:bg-blue-50 transition"
            >
              {language}
            </button>
          </div>
        </div>

        {/* Hamburger for mobile */}
        <div className="md:hidden flex items-center gap-2">
          <button onClick={toggleLanguage} className="px-4 py-2 border border-blue-600 rounded-full text-blue-700 text-sm font-semibold">
            {language}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-blue-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-gray-100 px-4 py-4 rounded-xl">
          <ul className="flex flex-col gap-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-4 py-2 rounded-full font-medium text-center transition ${
                    pathname === item.href
                      ? 'bg-blue-600 text-white'
                      : 'text-blue-700 hover:bg-blue-100'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
