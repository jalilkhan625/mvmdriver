'use client';

import { useState } from 'react';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid';
import { useTranslations } from 'next-intl';

export default function ContactPage() {
  const t = useTranslations('Contact');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = t('nameRequired');
    if (!formData.phone.trim()) {
      newErrors.phone = t('phoneRequired');
    } else if (!/^\d{7,15}$/.test(formData.phone.trim())) {
      newErrors.phone = t('phoneInvalid');
    }

    if (!formData.email.trim()) {
      newErrors.email = t('emailRequired');
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email.trim())) {
      newErrors.email = t('emailInvalid');
    }

    if (!formData.message.trim()) {
      newErrors.message = t('messageRequired');
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t('messageTooShort');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted successfully!');
      // send data logic goes here
      setFormData({ name: '', phone: '', email: '', message: '' });
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2">{t('title')}</h1>
      <p className="text-gray-600 mb-10 max-w-2xl">{t('description')}</p>

      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        {/* Contact Form */}
        <div className="bg-gray-100 p-6 rounded">
          <h2 className="text-lg font-semibold mb-4">{t('getInTouch')}</h2>
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder={t('namePlaceholder')}
                  value={formData.name}
                  onChange={handleChange}
                  className={`p-2 border rounded w-full bg-white focus:outline-none focus:border-cyan-600 ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="text"
                  name="phone"
                  placeholder={t('phonePlaceholder')}
                  value={formData.phone}
                  onChange={handleChange}
                  className={`p-2 border rounded w-full bg-white focus:outline-none focus:border-cyan-600 ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.phone && <p className="text-sm text-red-600 mt-1">{errors.phone}</p>}
              </div>
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder={t('emailPlaceholder')}
                value={formData.email}
                onChange={handleChange}
                className={`p-2 border rounded w-full bg-white focus:outline-none focus:border-cyan-600 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
            </div>

            <div>
              <textarea
                name="message"
                placeholder={t('messagePlaceholder')}
                value={formData.message}
                onChange={handleChange}
                className={`p-2 border rounded w-full h-32 bg-white focus:outline-none focus:border-cyan-600 ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="bg-cyan-600 text-white py-2 px-4 rounded hover:bg-cyan-700 transition"
            >
              {t('sendMessage')}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-between space-y-6">
          <div className="bg-gray-100 p-6 rounded">
            <h3 className="font-semibold mb-4">{t('contactInfo')}</h3>
            <div className="flex items-start gap-2 mb-2 text-gray-700">
              <PhoneIcon className="h-5 w-5 text-cyan-600" />
              <span>773-365-1240</span>
            </div>
            <div className="flex items-start gap-2 mb-2 text-gray-700">
              <EnvelopeIcon className="h-5 w-5 text-cyan-600" />
              <span>foltea@movemo.com</span>
            </div>
            <div className="flex items-start gap-2 text-gray-700">
              <MapPinIcon className="h-5 w-5 text-cyan-600" />
              <span>Corso del Popolo 89, 30172 Mestre, Venezia (VE)</span>
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded">
            <h3 className="font-semibold mb-4">{t('businessHours')}</h3>
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
