'use client';

import { FC } from 'react';
import { Clock, Users, Car, CheckCircle } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const HowItWorks: FC = () => {
  const t = useTranslations('HowItWorks');
  const locale = useLocale();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const steps = [
    {
      icon: <Clock className="w-10 h-10 text-[#354a69]" />,
      title: t('steps.register.title'),
      description: t('steps.register.description'),
    },
    {
      icon: <Users className="w-10 h-10 text-[#354a69]" />,
      title: t('steps.addTeam.title'),
      description: t('steps.addTeam.description'),
    },
    {
      icon: <Car className="w-10 h-10 text-[#354a69]" />,
      title: t('steps.manage.title'),
      description: t('steps.manage.description'),
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-[#354a69]" />,
      title: t('steps.grow.title'),
      description: t('steps.grow.description'),
    },
  ];

  // Animation variants for fading in from bottom
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1, // Staggered animation for each card
      },
    }),
  };

  return (
    <section className="bg-gray-50 py-20 px-6" id="how-it-works" ref={ref}>
      <div className="max-w-7xl mx-auto text-center space-y-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b3e] mb-4">{t('title')}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('description')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="rounded-xl bg-white p-8 shadow-md hover:shadow-lg border border-gray-100 transition-all duration-200"
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={index}
            >
              <div className="mb-6 flex justify-center">{step.icon}</div>
              <h3 className="text-xl font-semibold text-[#1a2b3e] mb-3">{step.title}</h3>
              <p className="text-gray-600 text-base">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;