'use client';
import { useState } from 'react';

type PlanType = 'monthly' | 'yearly';

export default function PaymentPlans() {
  const [activeTab, setActiveTab] = useState<PlanType>('monthly');
  const [cars, setCars] = useState<number>(1); // Start from 1 vehicle

  const basePrices = {
    monthly: 19.99,
    yearly: 14.99,
  };

  const extraCarPrice = 5;

  const calculateProPrice = (type: PlanType, carCount: number) => {
    const extraCars = Math.max(0, carCount - 1); // base includes 1 car
    return (basePrices[type] + extraCars * extraCarPrice).toFixed(2);
  };

  const incrementCars = () => setCars((c) => c + 1);
  const decrementCars = () => setCars((c) => (c > 1 ? c - 1 : 1));

  const proPrice = calculateProPrice(activeTab, cars);

  const plans = {
    basic: {
      name: 'Basic (Free)',
      price: '€0',
      description: 'Perfect to get started',
      features: [
        'APP IOS/ANDROID',
        'Unlimited users',
        'Up to 5 vehicles',
        'Orders management',
        'Drivers & Vehicles Management',
        'Private group of collaborators',
        'Limo companies catalogue',
      ],
    },
    pro: {
      name: 'Pro',
      description: 'Advanced tools and premium support',
      features: [
        'Everything from BASIC',
        'Financial summary',
        'Expense management',
        'Scheduler',
        'Travel sheet',
        '24/7 Support',
        'Tracking and order report',
      ],
    },
  };

  return (
    <section className="bg-white py-20 px-4 -mt-32">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose the Perfect Plan</h2>
        <p className="text-gray-600 mb-8">
          We offer flexible plans tailored to your business size and growth.
        </p>

        {/* Tabs */}
        <div className="inline-flex bg-gray-100 rounded-full mb-10">
          {(['monthly', 'yearly'] as const).map((tab) => (
            <button
              key={tab}
              className={`px-6 py-2 text-sm font-medium rounded-full transition ${
                activeTab === tab ? 'bg-cyan-600 text-white' : 'text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Basic Plan */}
          <div className="rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-1">{plans.basic.name}</h3>
            <p className="text-gray-500 mb-4">{plans.basic.description}</p>
            <div className="text-3xl font-bold mb-4">
              {plans.basic.price}
            </div>
            <ul className="text-left text-sm text-gray-700 space-y-1 mb-6">
              {plans.basic.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-cyan-600 font-bold">✓</span> {feature}
                </li>
              ))}
            </ul>
            <button className="w-full bg-cyan-600 text-white py-2 rounded-lg hover:bg-cyan-700 transition">
              Get Started Free
            </button>
          </div>

          {/* Pro Plan */}
          <div className="rounded-2xl p-6 border border-cyan-600 bg-cyan-50 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-1">{plans.pro.name}</h3>
            <p className="text-gray-500 mb-2">{plans.pro.description}</p>

            <div className="text-3xl font-bold mb-2">
              €{proPrice} <span className="text-base font-normal text-gray-500">/month</span>
            </div>
            <p className="text-xs text-gray-600 mb-1">+ VAT</p>
            <p className="text-sm text-gray-500 mb-4">Billed annually / Cancel anytime</p>

            {/* Vehicle Counter */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <button
                className="px-3 py-1 text-lg font-bold bg-white border rounded hover:bg-gray-100"
                onClick={decrementCars}
              >
                −
              </button>
              <span className="text-sm text-gray-800">
                {cars} vehicle{cars > 1 ? 's' : ''}
              </span>
              <button
                className="px-3 py-1 text-lg font-bold bg-white border rounded hover:bg-gray-100"
                onClick={incrementCars}
              >
                +
              </button>
            </div>

            <ul className="text-left text-sm text-gray-700 space-y-1 mb-6">
              {plans.pro.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-cyan-600 font-bold">✓</span> {feature}
                </li>
              ))}
            </ul>

            <button className="w-full bg-cyan-600 text-white py-2 rounded-lg hover:bg-cyan-700 transition">
              Select Plan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
