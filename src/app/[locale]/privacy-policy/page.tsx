'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export default function PrivacyPolicy() {
  const t = useTranslations('PrivacyPolicy');
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <div className="w-full border-b border-gray-200 bg-gray-50 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <Link
            href={`/${locale}`}
            className="text-blue-600 hover:underline text-sm block mb-4"
          >
            &larr; {t('back', { defaultValue: 'Back' })}
          </Link>
          <h1 className="text-4xl font-bold mb-2">{t('title')}</h1>
          <p className="text-sm text-gray-500">{t('lastUpdated')}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-12 md:px-16 lg:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image - on top for small screens, right side for large */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="flex justify-center order-1 lg:order-2"
          >
            <Image
              src="/privacy-policy.jpg"
              alt="Privacy Illustration"
              width={600}
              height={600}
              className="rounded-lg object-contain"
              loading="lazy"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8 text-base leading-relaxed order-2 lg:order-1"
          >
            <p className="font-medium text-sm text-gray-600">
              {t('poweredBy')}
            </p>

            <p>
              <strong>MVMDriver.com</strong> {t('intro')}
            </p>

            {/* Personal Info */}
            <div>
              <h2 className="text-xl font-semibold mb-2">
                {t('sections.personalInfo.title')}
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                {t.raw('sections.personalInfo.points').map(
                  (point: string, i: number) => (
                    <li key={i}>{point}</li>
                  )
                )}
              </ul>
              <p className="mt-4">{t('sections.personalInfo.note')}</p>
            </div>

            {/* How We Use */}
            <div>
              <h2 className="text-xl font-semibold mb-2">
                {t('sections.usage.title')}
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                {t.raw('sections.usage.points').map(
                  (point: string, i: number) => (
                    <li key={i}>{point}</li>
                  )
                )}
              </ul>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-xl font-semibold mb-2">
                {t('sections.cookies.title')}
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                {t.raw('sections.cookies.points').map(
                  (point: string, i: number) => (
                    <li key={i}>{point}</li>
                  )
                )}
              </ul>
            </div>

            {/* Security */}
            <div>
              <h2 className="text-xl font-semibold mb-2">
                {t('sections.security.title')}
              </h2>
              <p>{t('sections.security.description')}</p>
            </div>

            {/* Updates */}
            <div>
              <h2 className="text-xl font-semibold mb-2">
                {t('sections.updates.title')}
              </h2>
              <p>{t('sections.updates.description')}</p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-xl font-semibold mb-2">
                {t('sections.contact.title')}
              </h2>
              <p>
                {t('sections.contact.description')}{' '}
                <a
                  href={`mailto:${t('sections.contact.email')}`}
                  className="text-blue-600 underline"
                >
                  {t('sections.contact.email')}
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
