'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXTwitter,
  faDiscord,
  faLinkedin,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="relative bg-white mt-12 overflow-hidden">
      {/* ✨ Shadowy top border */}
      <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-gray-300/30 via-gray-200/20 to-transparent z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 text-sm">
        {/* Logo and Description */}
        <div className="col-span-1 sm:col-span-2 space-y-4">
          <Image
            src="/mvmdriver_logo_white.png"
            alt="MVMdriver Logo"
            width={140}
            height={40}
          />
          <p className="text-gray-600">
            Platform designed to empower limo drivers and fleets worldwide.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 text-gray-500 text-xl mt-2">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition">
              <FontAwesomeIcon icon={faDiscord} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition">
              <FontAwesomeIcon icon={faYoutube} />
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
          <h4 className="font-semibold text-gray-900 mb-3">Product</h4>
          <ul className="space-y-2 text-gray-600">
            <li><Link href="#">Driver Portal</Link></li>
            <li><Link href="#">Pricing</Link></li>
            <li><Link href="#">Mobile App</Link></li>
            <li><Link href="#">Booking API</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Company</h4>
          <ul className="space-y-2 text-gray-600">
            <li><Link href="#">About</Link></li>
            <li><Link href="#">Careers</Link></li>
            <li><Link href="#">Press</Link></li>
            <li><Link href="#">Changelog</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Support</h4>
          <ul className="space-y-2 text-gray-600">
            <li><Link href="#">Help Center</Link></li>
            <li><Link href="#">Contact Us</Link></li>
            <li><Link href="#">Join Community</Link></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="relative z-10 text-gray-500 py-6 px-4 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span>© 2024 MVMdriver — All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/conduct">Code of Conduct</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
