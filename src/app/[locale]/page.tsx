"use client";

import { useEffect } from "react";
import Image from "next/image";
import { CalendarCheck, Cpu, Share2, Users } from "lucide-react";
import { useTranslations } from "next-intl";
import PaymentPlans from "@/components/PaymentPlans";
import HowItWorks from "@/components/HowItWorks";
import { motion, Variants } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faGooglePlay, faChrome } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  const t = useTranslations("Home");

  const features = [
    {
      title: t("bookingsTitle"),
      description: t("bookingsDesc"),
      icon: <CalendarCheck className="w-10 h-10 text-cyan-600" />,
    },
    {
      title: t("digitalizationTitle"),
      description: t("digitalizationDesc"),
      icon: <Cpu className="w-10 h-10 text-cyan-600" />,
    },
    {
      title: t("networkTitle"),
      description: t("networkDesc"),
      icon: <Users className="w-10 h-10 text-cyan-600" />,
    },
    {
      title: t("collaborationTitle"),
      description: t("collaborationDesc"),
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

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.8, 0.25, 1],
      },
    },
  };

  const featureVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.2,
        ease: [0.25, 0.8, 0.25, 1],
      },
    }),
  };

  return (
    <>
      <motion.main
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-cyan-50 px-6 pt-12 pb-20"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
      >
        <motion.div
          className="w-full max-w-7xl bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-10 flex flex-col md:flex-row items-center gap-10"
          variants={sectionVariants}
        >
          <div className="flex-1 text-center md:text-left space-y-6">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-cyan-700 leading-tight"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t("title")}<br />{t("subtitle")}
            </motion.h1>
            <motion.p
              className="text-gray-700 max-w-xl mx-auto md:mx-0 text-lg"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {t("description")}
            </motion.p>
            <motion.div
              className="hidden md:flex flex-wrap justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <AppDownloadButtons t={t} />
            </motion.div>
            <motion.p
              className="text-sm text-gray-500 hidden md:block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {t("downloadApp")}
            </motion.p>
          </div>

          <div className="flex-1 flex flex-col items-center">
            <motion.div
              className="flex justify-end items-end w-full h-full -mr-0 md:-mr-12 lg:-mr-9"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Image
                src="/home1.png"
                alt="MVMdriver Screenshot"
                width={600}
                height={900}
                className="rounded-xl shadow-2xl object-contain"
              />
            </motion.div>
            <motion.div
              className="mt-6 md:hidden flex flex-col items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <AppDownloadButtons t={t} />
              <p className="text-sm text-gray-500">{t("downloadApp")}</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.main>

      <motion.section
        className="py-20 px-6 bg-white"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
      >
        <HowItWorks />
      </motion.section>

      <motion.section
        className="py-20 px-6 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
      >
        <motion.div
          className="max-w-7xl mx-auto text-center space-y-10"
          variants={sectionVariants}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t("registerNow")}<br className="hidden md:block" />
            <span className="text-cyan-600">{t("freeBasic")}</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-gray-200 transition-all"
                custom={index}
                initial="hidden"
                whileInView="visible"
                variants={featureVariants}
                viewport={{ once: true }}
              >
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        id="plans"
        className="scroll-mt-24 py-20 px-6 bg-white"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
      >
        <PaymentPlans />
      </motion.section>
    </>
  );
}

const AppDownloadButtons = ({ t }: { t: (key: string) => string }) => (
  <>
    <a
      href="https://apps.apple.com/md/app/mvmdriver/id1624652462"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg transition transform hover:scale-105 hover:bg-gray-900"
    >
      <FontAwesomeIcon icon={faApple} className="text-white w-5 h-5" />
      <span className="text-sm font-medium">{t("appStore")}</span>
    </a>

    <a
      href="https://play.google.com/store/apps/details?id=com.mvmdriver"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg transition transform hover:scale-105 hover:bg-gray-900"
    >
      <FontAwesomeIcon icon={faGooglePlay} className="text-white w-5 h-5" />
      <span className="text-sm font-medium">{t("googlePlay")}</span>
    </a>

    <a
      href="https://app.mvmdriver.com/login"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg transition transform hover:scale-105 hover:bg-gray-900"
    >
      <FontAwesomeIcon icon={faChrome} className="text-white w-5 h-5" />
      <span className="text-sm font-medium">Web</span>
    </a>
  </>
);


