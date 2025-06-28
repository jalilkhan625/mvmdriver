'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Plans', href: '#plans' },
  { label: 'Account', href: '/account' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [language, setLanguage] = useState<'EN' | 'IT'>('EN');
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'EN' ? 'IT' : 'EN'));
  };

  const handlePlansClick = () => {
    if (typeof window !== 'undefined') {
      if (pathname === '/') {
        const el = document.getElementById('plans');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = '/#plans';
      }
    }
  };

  return (
    <nav className="bg-white shadow-md px-4 sm:px-6 py-4 relative z-40 w-full">
      <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <img
            src="/mvmdriver_logo_white.png"
            alt="MVMdriver Logo"
            className="h-10 w-auto sm:h-12"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-between items-center">
          <ul className="flex flex-wrap justify-center md:justify-start items-center gap-1 md:gap-2 lg:gap-3 bg-gray-100 px-4 py-2 rounded-full text-sm lg:text-base xl:text-lg">
            {navItems.map((item) =>
              item.label === 'Plans' ? (
                <li key="plans">
                  <button
                    onClick={handlePlansClick}
                    className="px-3 py-1 md:px-4 md:py-2 rounded-full font-medium text-blue-700 hover:bg-blue-100 transition whitespace-nowrap"
                  >
                    {item.label}
                  </button>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`px-3 py-1 md:px-4 md:py-2 rounded-full font-medium transition whitespace-nowrap ${
                      pathname === item.href
                        ? 'bg-blue-600 text-white shadow'
                        : 'text-blue-700 hover:bg-blue-100'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          <button
            onClick={toggleLanguage}
            className="ml-4 px-4 py-2 border border-blue-600 rounded-full text-blue-700 text-sm font-semibold bg-white hover:bg-blue-50 transition whitespace-nowrap"
          >
            {language}
          </button>
        </div>

        {/* Mobile Right Side */}
        <div className="md:hidden flex items-center gap-2 ml-auto">
          <button
            onClick={toggleLanguage}
            className="px-3 py-1 border border-blue-600 rounded-full text-blue-700 text-sm font-semibold bg-white hover:bg-blue-50 transition"
          >
            {language}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-blue-700 focus:outline-none"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-gray-100 px-4 py-4 rounded-xl">
          <ul className="flex flex-col gap-3 text-sm">
            {navItems.map((item) =>
              item.label === 'Plans' ? (
                <li key="plans">
                  <button
                    onClick={() => {
                      handlePlansClick();
                      setMenuOpen(false);
                    }}
                    className="block w-full px-4 py-2 rounded-full font-medium text-center text-blue-700 hover:bg-blue-100 transition"
                  >
                    {item.label}
                  </button>
                </li>
              ) : (
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
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}
