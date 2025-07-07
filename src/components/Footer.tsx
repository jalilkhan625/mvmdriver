'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer className="relative bg-white mt-12 overflow-hidden">
      {/* ✨ Shadowy top border */}
      <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-gray-300/30 via-gray-200/20 to-transparent z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 text-sm">
        {/* Logo and Description */}
        <div className="col-span-1 sm:col-span-2 space-y-4">
          <Image
            src="/mvmdriver_logo_white.PNG"
            alt="MVMdriver Logo"
            width={140}
            height={40}
          />
          <p className="text-gray-600">
            Platform designed to empower limo drivers and fleets worldwide.
          </p>

          {/* App Store, Google Play & Web Version */}
<div className="flex flex-wrap items-center gap-4 mt-4">
  <a
    href="https://apps.apple.com/md/app/mvmdriver/id1624652462"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center"
    style={{ width: '135px', height: '48px' }}
  >
    <Image
      src="/appstore-badge.svg"
      alt="Download on the App Store"
      width={135}
      height={40}
      style={{ objectFit: 'contain' }}
    />
  </a>
  <a
    href="https://play.google.com/store/apps/details?id=com.mvmdriver"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center"
    style={{ width: '135px', height: '40px' }}
  >
    <Image
      src="/googleplay-badge.svg"
      alt="Get it on Google Play"
      width={135}
      height={40}
      style={{ objectFit: 'contain' }}
    />
  </a>
  <a
    href="https://app.mvmdriver.com/"
    className="flex items-center justify-center gap-2 bg-black text-white text-sm rounded-lg hover:opacity-90 transition"
    style={{ width: '135px', height: '40px' }}
  >
    <FontAwesomeIcon icon={faGlobe} className="text-base" />
    Use Web Version
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
          <span>© 2025 MVMdriver — All rights reserved.</span>
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
