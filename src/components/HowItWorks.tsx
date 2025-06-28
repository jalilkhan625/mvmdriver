'use client';

import { FC } from 'react';
import { Clock, Users, Car, CheckCircle } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';

const HowItWorks: FC = () => {
  const t = useTranslations('HowItWorks'); // Assumes translations are under this namespace
  const locale = useLocale();

  const steps = [
    {
      icon: <Clock className="w-10 h-10 text-cyan-700" />,
      title: t('steps.register.title'),
      description: t('steps.register.description'),
    },
    {
      icon: <Users className="w-10 h-10 text-cyan-700" />,
      title: t('steps.addTeam.title'),
      description: t('steps.addTeam.description'),
    },
    {
      icon: <Car className="w-10 h-10 text-cyan-700" />,
      title: t('steps.manage.title'),
      description: t('steps.manage.description'),
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-cyan-700" />,
      title: t('steps.grow.title'),
      description: t('steps.grow.description'),
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6" id="how-it-works">
      <div className="max-w-7xl mx-auto text-center space-y-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('title')}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('description')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="rounded-xl bg-white p-8 shadow-md hover:shadow-lg border border-gray-100 transition-all duration-200"
            >
              <div className="mb-6 flex justify-center">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 text-base">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
