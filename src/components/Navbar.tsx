'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { useState } from 'react';

export default function Navbar() {
  const t = useTranslations('Navbar');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { key: 'home', href: '/' },
    { key: 'about', href: '/about' },
    { key: 'plans', href: '#plans' },
    { key: 'account', href: 'https://app.mvmdriver.com/' },
    { key: 'contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    const current = pathname.replace(/\/+$/, '');
    const target = `/${locale}${href}`.replace(/\/+$/, '');
    return current === target;
  };

  const handlePlansClick = () => {
    if (pathname.endsWith('/')) {
      const el = document.getElementById('plans');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push(`/${locale}/#plans`);
    }
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md px-4 sm:px-6 py-4 w-full">
      <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap items-center justify-between gap-4">
        <Link href={`/${locale}`} className="flex items-center gap-2 shrink-0">
          <img src="/mvm_logo.JPG" alt="MVMdriver Logo" className="h-16 w-auto sm:h-16" />
        </Link>

        {/* Desktop & Tablet Navigation */}
        <div className="hidden md:flex flex-1 justify-between items-center">
          <ul className="ml-4 flex flex-nowrap overflow-auto justify-start items-center gap-2 bg-gray-100 px-3 py-2 rounded-full text-sm sm:text-base whitespace-nowrap">
            {navItems.map((item) =>
              item.key === 'plans' ? (
                <li key="plans" className="shrink-0">
                  <button
                    onClick={handlePlansClick}
                    className="px-3 py-1 md:px-4 md:py-2 rounded-full font-medium text-black hover:bg-blue-100 transition"
                  >
                    {t(item.key)}
                  </button>
                </li>
              ) : (
                <li key={item.href} className="shrink-0">
                  <Link
                    href={item.href.startsWith('http') ? item.href : `/${locale}${item.href}`}
                    className={`px-3 py-1 md:px-4 md:py-2 rounded-full font-medium transition whitespace-nowrap ${
                      isActive(item.href)
                        ? 'bg-[#0093b8] text-white shadow-md'
                        : 'text-black hover:bg-blue-100'
                    }`}
                  >
                    {t(item.key)}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* Language Selector (Desktop & Tablet) */}
          <div className="relative ml-4">
            <select
              value={locale}
              onChange={handleLanguageChange}
              className="appearance-none bg-white border border-gray-300 text-sm rounded-full px-3 py-1 focus:outline-none hover:bg-blue-100 transition"
            >
              <option value="en">🇬🇧 English</option>
              <option value="it">🇮🇹 Italiano</option>
              <option value="fr">🇫🇷 Français</option>
              <option value="es">🇪🇸 Español</option>
              <option value="ru">🇷🇺 Русский</option>
              <option value="zh">🇨🇳 中文</option>
            </select>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-2 ml-auto">
          {/* Language Selector (Mobile) */}
          <select
            value={locale}
            onChange={handleLanguageChange}
            className="px-3 py-1 rounded-full font-medium text-black bg-white border border-gray-300 hover:bg-blue-100 transition"
          >
            <option value="en">🇬🇧 English</option>
            <option value="it">🇮🇹 Italiano</option>
            <option value="fr">🇫🇷 Français</option>
            <option value="es">🇪🇸 Español</option>
            <option value="ru">🇷🇺 Русский</option>
            <option value="zh">🇨🇳 中文</option>
          </select>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black focus:outline-none"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
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
              item.key === 'plans' ? (
                <li key="plans">
                  <button
                    onClick={() => {
                      handlePlansClick();
                      setMenuOpen(false);
                    }}
                    className="block w-full px-4 py-2 rounded-full font-medium text-center text-black hover:bg-blue-100 transition"
                  >
                    {t(item.key)}
                  </button>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href.startsWith('http') ? item.href : `/${locale}${item.href}`}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-4 py-2 rounded-full font-medium text-center transition ${
                      isActive(item.href)
                        ? 'bg-[#0093b8] text-white shadow-md'
                        : 'text-black hover:bg-blue-100'
                    }`}
                  >
                    {t(item.key)}
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