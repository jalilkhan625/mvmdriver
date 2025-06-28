'use client';

import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero/About Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-950 leading-tight mb-6">
              About <span className="text-cyan-600">MVMdriver</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6">
              MVMdriver is a pioneering platform crafted by experienced limousine drivers to revolutionize the industry. Our mission is to empower professionals with tools that streamline operations, foster collaboration, and amplify global reach.
            </p>
            <p className="text-base text-gray-500">
              Founded in 2024, MVMdriver combines decades of industry expertise with cutting-edge technology to deliver a seamless, user-centric experience. Whether you're a solo operator or managing a fleet, our platform is designed to elevate your business.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-700 text-base sm:text-lg space-y-6 leading-relaxed"
          >
            <p>
              <span className="font-semibold text-blue-800">MVMdriver</span> offers a <span className="font-semibold text-blue-800">centralized solution</span> for efficient service organization, professional networking, and enhanced global visibility. Our platform connects drivers, operators, and clients seamlessly.
            </p>
            <p>
              With features like real-time booking management, integrated payment systems, and advanced analytics, MVMdriver merges innovation with intuitive design to meet the needs of modern limousine businesses.
            </p>
            <p>
              <span className="italic">Your feedback is our roadmap.</span> We actively listen to our community, integrating user insights to continually enhance our platform's functionality and user experience.
            </p>
            <p className="text-blue-900 font-semibold text-lg">
              Join us to transform your limousine business. <br />
              Welcome to <span className="underline">MVMdriver</span> — where collaboration drives success.
            </p>
          </motion.div>
        </div>
      </section>


      {/* Values Section */}
   <section className="text-center py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
  <h2 className="text-3xl sm:text-4xl font-bold text-blue-950 mb-12">
    Our Core Values
  </h2>
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8 max-w-5xl mx-auto">
    {[
      { label: 'Environmental Empowerment', icon: '🌿', color: 'bg-lime-100' },
      { label: 'Security & Trust', icon: '🛡️', color: 'bg-purple-100' },
      { label: 'Work-Life Balance', icon: '⚖️', color: 'bg-orange-100' },
      { label: 'Global Impact', icon: '🎯', color: 'bg-sky-100' }
    ].map((value, index) => (
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
        <p className="mt-4 text-sm sm:text-base text-gray-800 font-medium whitespace-nowrap">
          {value.label}
        </p>
      </motion.div>
    ))}
  </div>
</section>


      {/* Testimonials Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-950 text-center mb-12">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              quote: 'MVMdriver has transformed how I manage my bookings. It\'s intuitive and saves me hours every week!',
              author: 'Sarah Williams, Limo Operator',
            },
            {
              quote: 'The networking features helped me connect with new clients and grow my business significantly.',
              author: 'David Lee, Independent Driver',
            }
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              <p className="text-blue-900 font-semibold">{testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-cyan-800 text-white py-24 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Ready to <span className="text-cyan-300">Drive Success</span>?
          </motion.h2>
          <p className="mb-8 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            Join thousands of limousine professionals who trust MVMdriver to streamline operations, expand their network, and grow their business.
          </p>
          <motion.a
            href="https://app.mvmdriver.com/"
            className="inline-flex items-center bg-white text-blue-900 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started <FaArrowRight className="ml-2" />
          </motion.a>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-900/10 blur-3xl opacity-50" />
      </section>
    </div>
  );
}
