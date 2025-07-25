'use client';

import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { useTranslations } from 'next-intl';

type PlanType = 'monthly' | 'yearly';

export default function PaymentPlans() {
  const [activeTab, setActiveTab] = useState<PlanType>('monthly');
  const [cars, setCars] = useState<number>(1);

  const t = useTranslations('Plans');

  const basePrices = {
    monthly: 19.99,
    yearly: 14.99,
  };

  const extraCarPrice = 5;

  const calculateProPrice = (type: PlanType, carCount: number) => {
    const extraCars = Math.max(0, carCount - 1);
    return (basePrices[type] + extraCars * extraCarPrice).toFixed(2);
  };

  const incrementCars = () => setCars((c) => c + 1);
  const decrementCars = () => setCars((c) => (c > 1 ? c - 1 : 1));

  const proPrice = calculateProPrice(activeTab, cars);

  const plans = {
    basic: {
      name: t('basic'),
      price: '€0',
      description: t('basicDesc'),
      features: [
        'APP IOS/ANDROID',
        t('feature.unlimitedUsers'),
        t('feature.upTo5Vehicles'),
        t('feature.ordersManagement'),
        t('feature.driversVehicles'),
        t('feature.privateGroup'),
        t('feature.catalogue'),
      ],
    },
    pro: {
      name: t('pro'),
      description: t('proDesc'),
      features: [
        t('feature.everythingBasic'),
        t('feature.financialSummary'),
        t('feature.expenseManagement'),
        t('feature.scheduler'),
        t('feature.travelSheet'),
        t('feature.support'),
        t('feature.tracking'),
      ],
    },
  };

  return (
    <section className="bg-white py-24 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-[#1a2b3e]">{t('title')}</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">{t('subtitle')}</p>

        {/* Billing Cycle Tabs */}
        <div className="inline-flex bg-gray-100 rounded-full mb-14 overflow-hidden">
          {(['monthly', 'yearly'] as const).map((tab) => (
            <button
              key={tab}
              className={`px-6 py-2 text-sm font-semibold transition ${
                activeTab === tab
                  ? 'bg-[#354a69] text-white'
                  : 'text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'monthly' ? t('monthly') : t('yearly')}
            </button>
          ))}
        </div>

        {/* Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Basic Plan */}
          <div className="rounded-3xl p-8 border border-gray-200 shadow-md bg-white hover:shadow-lg transition">
            <h3 className="text-2xl font-bold text-[#1a2b3e] mb-1">{plans.basic.name}</h3>
            <p className="text-gray-500 mb-4 text-sm">{plans.basic.description}</p>
            <div className="text-4xl font-bold text-[#354a69] mb-6">{plans.basic.price}</div>

            <ul className="text-left text-sm text-gray-700 space-y-2 mb-8">
              {plans.basic.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#354a69] font-bold mt-1">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://app.mvmdriver.com/login"
              className="w-full block text-center bg-[#354a69] text-white py-2.5 rounded-lg font-semibold hover:bg-[#2b3f59] transition"
            >
              {t('getStarted')}
            </a>
          </div>

          {/* Pro Plan */}
          <div className="rounded-3xl p-8 border-2 border-[#354a69] bg-[#f7f9fc] shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-bold text-[#1a2b3e] mb-1">{plans.pro.name}</h3>
            <p className="text-gray-600 mb-3 text-sm">{plans.pro.description}</p>

            <div className="text-4xl font-bold text-[#354a69] mb-1">
              €{proPrice}
              <span className="text-base font-normal text-gray-500"> /month</span>
            </div>
            <p className="text-sm text-gray-500 mb-1">+ VAT</p>
            <p className="text-xs text-gray-500 mb-6">
              {t('billed')} {t(activeTab)} • {t('cancelAnytime')}
            </p>

            {/* Vehicle Counter */}
            <div className="flex flex-col items-center mb-8">
              <label className="text-sm font-medium text-gray-600 mb-2">
                {t('vehicleCountLabel')}
              </label>
              <div className="flex items-center gap-4 bg-white px-4 py-2 rounded-full border border-gray-300 shadow-sm">
                <button
                  onClick={decrementCars}
                  className="p-1 text-[#354a69] hover:text-[#1a2b3e] focus:outline-none"
                  aria-label="Remove vehicle"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <span className="text-sm text-gray-800 font-semibold min-w-[70px] text-center">
                  {t('vehicle', { count: cars })}
                </span>
                <button
                  onClick={incrementCars}
                  className="p-1 text-[#354a69] hover:text-[#1a2b3e] focus:outline-none"
                  aria-label="Add vehicle"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>

            <ul className="text-left text-sm text-gray-700 space-y-2 mb-8">
              {plans.pro.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#354a69] font-bold mt-1">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full bg-[#354a69] text-white py-2.5 rounded-lg font-semibold hover:bg-[#2b3f59] transition">
              {t('selectPlan')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
