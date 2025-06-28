'use client';

import { useEffect } from "react";
import Image from "next/image";
import { CalendarCheck, Cpu, Share2, Users } from "lucide-react";
import { useTranslations } from 'next-intl';
import PaymentPlans from "@/components/PaymentPlans";
import HowItWorks from "@/components/HowItWorks";

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faGooglePlay, faChrome } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  const t = useTranslations('Home');

  const features = [
    {
      title: t('bookingsTitle'),
      description: t('bookingsDesc'),
      icon: <CalendarCheck className="w-10 h-10 text-cyan-600" />,
    },
    {
      title: t('digitalizationTitle'),
      description: t('digitalizationDesc'),
      icon: <Cpu className="w-10 h-10 text-cyan-600" />,
    },
    {
      title: t('networkTitle'),
      description: t('networkDesc'),
      icon: <Users className="w-10 h-10 text-cyan-600" />,
    },
    {
      title: t('collaborationTitle'),
      description: t('collaborationDesc'),
      icon: <Share2 className="w-10 h-10 text-cyan-600" />,
    },
  ];

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash === "#plans") {
      const el = document.getElementById("plans");
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  return (
    <>
      {/* Hero Section */}
      <main className="min-h-screen flex items-center justify-center bg-white px-6 pt-8 pb-16">
        <div className="w-full max-w-7xl bg-gray-100 rounded-3xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-10">
          
          {/* Left: Text */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-cyan-600 leading-snug">
              {t('title')}<br />
              {t('subtitle')}
            </h1>
            <p className="text-gray-700 max-w-xl mx-auto md:mx-0">{t('description')}</p>

            {/* Buttons for md+ screens */}
            <div className="hidden md:flex flex-wrap justify-start gap-4">
              <AppDownloadButtons t={t} />
            </div>
            <p className="text-sm text-gray-500 hidden md:block">{t('downloadApp')}</p>
          </div>

          {/* Right: Image */}
          <div className="flex-1 flex flex-col items-center">
            <div className="flex justify-end items-end w-full h-full -mr-0 md:-mr-12 lg:-mr-9">
              <Image
                src="/home1.png"
                alt="MVMdriver Screenshot"
                width={600}
                height={900}
                className="rounded-xl shadow-xl object-contain"
              />
            </div>

            {/* Buttons for small screens */}
            <div className="mt-6 md:hidden flex flex-col items-center gap-4">
              <AppDownloadButtons t={t} />
              <p className="text-sm text-gray-500">{t('downloadApp')}</p>
            </div>
          </div>
        </div>
      </main>

      {/* How It Works Section */}
      <section className="py-16 px-6 bg-white">
        <HowItWorks />
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center space-y-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {t('registerNow')}<br className="hidden md:block" />
            <span className="text-cyan-600">{t('freeBasic')}</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow hover:shadow-lg border border-gray-200 transition-all">
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section id="plans" className="scroll-mt-24 py-16 px-6 bg-white">
        <PaymentPlans />
      </section>
    </>
  );
}

// ✅ Reusable Download Buttons with external links
const AppDownloadButtons = ({ t }: { t: any }) => (
  <>
    <a
      href="https://apps.apple.com/md/app/mvmdriver/id1624652462"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg transition transform hover:scale-105 hover:bg-gray-900"
    >
      <FontAwesomeIcon icon={faApple} className="text-white group-hover:animate-bounce" />
      {t('appStore')}
    </a>
    <a
      href="https://play.google.com/store/apps/details?id=com.mvmdriver"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg transition transform hover:scale-105 hover:bg-green-700"
    >
      <FontAwesomeIcon icon={faGooglePlay} className="text-white group-hover:animate-bounce" />
      {t('googlePlay')}
    </a>
    <a
      href="https://app.mvmdriver.com/login"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg transition transform hover:scale-105 hover:bg-blue-700"
    >
      <FontAwesomeIcon icon={faChrome} className="text-white group-hover:animate-bounce" />
      {t('other')}
    </a>
  </>
);
