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
    <footer className="bg-white border-t mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
        {/* Logo + description */}
        <div className="space-y-4 col-span-1 sm:col-span-2">
          <Image
            src="/mvmdriver_logo_white.png"
            alt="MVMdriver Logo"
            width={140}
            height={40}
          />
          <p className="text-gray-600 text-sm">
            Platform designed to empower limo drivers and fleets worldwide.
          </p>
          <div className="flex gap-4 text-gray-600 text-xl">
            <Link href="https://twitter.com" target="_blank">
              <FontAwesomeIcon icon={faXTwitter} />
            </Link>
            <Link href="https://discord.com" target="_blank">
              <FontAwesomeIcon icon={faDiscord} />
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link href="https://youtube.com" target="_blank">
              <FontAwesomeIcon icon={faYoutube} />
            </Link>
          </div>
          <div className="mt-2">
            <span className="inline-block px-3 py-1 text-sm text-green-700 bg-green-100 rounded-full">
              ● All systems operational
            </span>
          </div>
        </div>

        {/* Product */}
        <div>
          <h4 className="font-semibold mb-3">Product</h4>
          <ul className="text-gray-600 space-y-2 text-sm">
            <li><Link href="#">Driver Portal</Link></li>
            <li><Link href="#">Pricing</Link></li>
            <li><Link href="#">Mobile App</Link></li>
            <li><Link href="#">Booking API</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="text-gray-600 space-y-2 text-sm">
            <li><Link href="#">About</Link></li>
            <li><Link href="#">Careers</Link></li>
            <li><Link href="#">Press</Link></li>
            <li><Link href="#">Changelog</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold mb-3">Support</h4>
          <ul className="text-gray-600 space-y-2 text-sm">
            <li><Link href="#">Help Center</Link></li>
            <li><Link href="#">Contact Us</Link></li>
            <li><Link href="#">Join Community</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t text-sm text-gray-500 py-6 px-4 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
        <span>© 2024 MVMdriver — All rights reserved.</span>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/conduct">Code of Conduct</Link>
        </div>
      </div>
    </footer>
  );
}
