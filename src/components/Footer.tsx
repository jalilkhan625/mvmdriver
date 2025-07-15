'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGlobe,
  faBoxOpen,
  faBuilding,
  faLifeRing,
  faEnvelope,
  faHouse,
  faInfoCircle,
  faShieldAlt,
  faUser,
  faPhone,
  faMapMarkerAlt,
  faTags,
} from '@fortawesome/free-solid-svg-icons';
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  const locale = useLocale();

  return (
    <footer className="relative bg-white mt-12 overflow-hidden">
      {/* ✨ Shadowy top border */}
      <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-gray-300/30 via-gray-200/20 to-transparent z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 text-sm">
        {/* Logo and Description */}
        <div className="col-span-1 sm:col-span-2 space-y-4">
          <div className="flex items-center gap-2 shrink-0">
            <img
              src="/mvm_logo.JPG"
              alt="MVMdriver Logo"
              className="h-14 sm:h-16 w-auto object-contain"
            />
            <img
              src="/mvm.JPG"
              alt="MVM Text"
              className="h-8 sm:h-10 w-auto object-contain"
            />
          </div>

          <p className="text-gray-600">
            Platform designed to empower limo drivers and fleets worldwide.
          </p>

          {/* App Icons */}
          <div className="flex items-center gap-6 text-black text-2xl mt-4">
            <a
              href="https://apps.apple.com/md/app/mvmdriver/id1624652462"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="App Store"
            >
              <FontAwesomeIcon icon={faApple} />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.mvmdriver"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Play"
            >
              <FontAwesomeIcon icon={faGooglePlay} />
            </a>
            <a
              href="https://app.mvmdriver.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Web Version"
            >
              <FontAwesomeIcon icon={faGlobe} />
            </a>
          </div>

          <div className="mt-2">
            <span className="inline-block px-3 py-1 text-green-700 bg-green-100 rounded-full text-xs font-medium">
              ● All systems operational
            </span>
          </div>
        </div>

        {/* Product */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <FontAwesomeIcon icon={faBoxOpen} />
            Product
          </h4>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center gap-2">
              <FontAwesomeIcon icon={faUser} />
              <Link href="https://app.mvmdriver.com/">Driver Portal</Link>
            </li>
            <li className="flex items-center gap-2">
              <FontAwesomeIcon icon={faTags} />
              <Link href="#">Pricing</Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <FontAwesomeIcon icon={faBuilding} />
            Company
          </h4>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center gap-2">
              <FontAwesomeIcon icon={faHouse} />
              <Link href={`/${locale}`}>Home</Link>
            </li>
            <li className="flex items-center gap-2">
              <FontAwesomeIcon icon={faInfoCircle} />
              <Link href={`/${locale}/about`}>About Us</Link>
            </li>
            <li className="flex items-center gap-2">
              <FontAwesomeIcon icon={faShieldAlt} />
              <Link href={`/${locale}/privacy-policy`}>Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <FontAwesomeIcon icon={faLifeRing} />
            Support
          </h4>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center gap-2">
              <FontAwesomeIcon icon={faEnvelope} />
              <a href="mailto:foltea@movemo.com">foltea@movemo.com</a>
            </li>
            <li className="flex items-start gap-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mt-1" />
              <span>
                Corso del Popolo 89,<br />
                30172 Mestre, Venezia (VE)
              </span>
            </li>
            <li className="flex items-center gap-2">
              <FontAwesomeIcon icon={faPhone} />
              <Link href={`/${locale}/contact`}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom - Centered Notice */}
      <div className="relative z-10 text-gray-500 py-6 px-4 text-center text-xs sm:text-sm">
        © 2025 MVMdriver — All rights reserved.
      </div>
    </footer>
  );
}
