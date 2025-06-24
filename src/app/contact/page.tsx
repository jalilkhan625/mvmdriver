'use client';

import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid';

export default function ContactPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2">CONTACT US</h1>
      <p className="text-gray-600 mb-10 max-w-2xl">
        If you have any questions, please feel free to get in touch with us via phone, text, email, the form below, or even on social media!
      </p>

      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        {/* Contact Form */}
        <div className="bg-gray-100 p-6 rounded flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-semibold mb-4">GET IN TOUCH</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Enter your name*"
                  className="p-2 border border-gray-300 rounded w-full bg-white focus:outline-none focus:border-sky-500"
                />
                <input
                  type="text"
                  placeholder="Enter your phone number*"
                  className="p-2 border border-gray-300 rounded w-full bg-white focus:outline-none focus:border-sky-500"
                />
              </div>
              <input
                type="email"
                placeholder="Enter your email*"
                className="p-2 border border-gray-300 rounded w-full bg-white focus:outline-none focus:border-sky-500"
              />
              <textarea
                placeholder="Your message"
                className="p-2 border border-gray-300 rounded w-full h-32 bg-white focus:outline-none focus:border-sky-500"
              />
              <button
                type="submit"
                className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>

        {/* Info Section */}
        <div className="flex flex-col justify-between space-y-6">
          <div className="bg-gray-100 p-6 rounded flex-1">
            <h3 className="font-semibold mb-4">CONTACT INFORMATION</h3>
            <div className="flex items-start gap-2 mb-2 text-gray-700">
              <PhoneIcon className="h-5 w-5 text-red-600" />
              <span>773-365-1240</span>
            </div>
            <div className="flex items-start gap-2 mb-2 text-gray-700">
              <EnvelopeIcon className="h-5 w-5 text-red-600" />
              <span>foltea@movemo.com</span>
            </div>
            <div className="flex items-start gap-2 text-gray-700">
              <MapPinIcon className="h-5 w-5 text-red-600" />
              <span>Corso del Popolo 89,30172 Mestre, Venezia (VE)</span>
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded flex-1">
            <h3 className="font-semibold mb-4">BUSINESS HOURS</h3>
            <p><strong>Monday - Friday:</strong> 9:00 am – 8:00 pm</p>
            <p><strong>Saturday:</strong> 9:00 am – 6:00 pm</p>
            <p><strong>Sunday:</strong> 9:00 am – 5:00 pm</p>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="mt-12">
  <iframe
  title="Location Map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.866556392273!2d12.246841!3d45.488798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477eb1fd4fd0fb61%3A0xd52c442fa0fa6f93!2sCorso%20del%20Popolo%2C%2089%2C%2030172%20Venezia%20VE%2C%20Italy!5e0!3m2!1sen!2sit!4v1719314012645"
  width="100%"
  height="350"
  allowFullScreen
  loading="lazy"
  className="rounded border"
/>

      </div>
    </main>
  );
}
