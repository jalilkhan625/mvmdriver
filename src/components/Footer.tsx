'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGlobe,
  faBoxOpen,
  faBuilding,
  faLifeRing,
  faShieldAlt,
  faFileContract,
  faBookOpen,
} from '@fortawesome/free-solid-svg-icons';
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="relative bg-white mt-12 overflow-hidden">
      {/* ✨ Shadowy top border */}
      <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-gray-300/30 via-gray-200/20 to-transparent z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 text-sm">
        {/* Logo and Description */}
        <div className="col-span-1 sm:col-span-2 space-y-4">
          {/* Logo Image */}
                  <div className="flex items-center gap-2 shrink-0">
  {/* Logo icon first (left) */}
<img
  src="/mvm_logo.jpg"
  alt="MVMdriver Logo"
  className="h-14 sm:h-16 w-auto object-contain"
/>


  {/* Text image second (right) */}
  <img
    src="/mvm.jpg"
    alt="MVM Text"
    className="h-8 sm:h-10 w-auto object-contain"
  />
</div>

          <p className="text-gray-600">
            Platform designed to empower limo drivers and fleets worldwide.
          </p>

          {/* Icons: App Store, Google Play, Web */}
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
            <li><Link href="#">Driver Portal</Link></li>
            <li><Link href="#">Pricing</Link></li>
            <li><Link href="#">Mobile App</Link></li>
            <li><Link href="#">Booking API</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <FontAwesomeIcon icon={faBuilding} />
            Company
          </h4>
          <ul className="space-y-2 text-gray-600">
            <li><Link href="#">About</Link></li>
            <li><Link href="#">Careers</Link></li>
            <li><Link href="#">Press</Link></li>
            <li><Link href="#">Changelog</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <FontAwesomeIcon icon={faLifeRing} />
            Support
          </h4>
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
            <Link href="/privacy" className="flex items-center gap-1">
              <FontAwesomeIcon icon={faShieldAlt} />
              Privacy Policy
            </Link>
            <Link href="/terms" className="flex items-center gap-1">
              <FontAwesomeIcon icon={faFileContract} />
              Terms
            </Link>
            <Link href="/conduct" className="flex items-center gap-1">
              <FontAwesomeIcon icon={faBookOpen} />
              Code of Conduct
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
