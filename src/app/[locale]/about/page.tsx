'use client';

import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('About');

  const coreValues = [
    { label: t('coreValues.environment'), icon: '🌿', color: 'bg-lime-100' },
    { label: t('coreValues.security'), icon: '🛡️', color: 'bg-purple-100' },
    { label: t('coreValues.balance'), icon: '⚖️', color: 'bg-orange-100' },
    { label: t('coreValues.impact'), icon: '🎯', color: 'bg-sky-100' },
  ];

  const testimonials = [
    {
      quote: t('testimonials.0.quote'),
      author: t('testimonials.0.author'),
    },
    {
      quote: t('testimonials.1.quote'),
      author: t('testimonials.1.author'),
    },
  ];

  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero/About Section */}
      <section className="px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-16 sm:pb-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1a2b3e] leading-tight mb-6">
              {t('hero.title')} <span className="text-[#354a69]">MVMdriver</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6">
              {t('hero.paragraph1')}
            </p>
            <p className="text-base text-gray-500">
              {t('hero.paragraph2')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-700 text-base sm:text-lg space-y-6 leading-relaxed"
          >
            <p>{t('details.paragraph1')}</p>
            <p>{t('details.paragraph2')}</p>
            <p>{t('details.paragraph3')}</p>
            <p className="text-[#354a69] font-semibold text-lg">
              {t('details.paragraph4')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="text-center py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2b3e] mb-12">
          {t('coreValues.title')}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center transition-transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className={`w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center rounded-full ${value.color} text-4xl shadow-md`}>
                {value.icon}
              </div>
              <p className="mt-4 text-sm sm:text-base text-[#354a69] font-medium whitespace-nowrap">
                {value.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2b3e] text-center mb-12">
          {t('testimonials.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              <p className="text-[#354a69] font-semibold">{testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section - leave this as is */}
      <section className="bg-gradient-to-br from-blue-900 to-cyan-800 text-white py-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t('cta.title')} <span className="text-cyan-300">{t('cta.highlight')}</span>?
          </motion.h2>
          <p className="mb-8 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            {t('cta.description')}
          </p>
          <motion.a
            href="https://app.mvmdriver.com/"
            className="inline-flex items-center bg-white text-blue-900 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('cta.button')} <FaArrowRight className="ml-2" />
          </motion.a>
        </div>
      </section>
    </div>
  );
}
