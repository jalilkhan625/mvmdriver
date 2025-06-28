'use client';

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* About Section */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14 items-start">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-950 leading-tight mb-6">
              About <span className="text-cyan-600">MVMdriver</span>
            </h1>
            <p className="text-lg text-gray-600">
              A pioneering platform built by experienced limo drivers to transform the limousine industry.
            </p>
          </div>

          <div className="text-gray-700 text-base space-y-5 leading-relaxed">
            <p>
              We offer a <span className="font-semibold text-blue-800">centralised solution</span> for efficient service organisation, professional networking, and enhanced global visibility.
            </p>
            <p>
              <span className="font-semibold text-blue-800">MVMdriver</span> merges innovation with user-centric design, making our technology both intuitive and cutting-edge.
            </p>
            <p>
              <span className="italic">Your feedback is our roadmap.</span> We continuously integrate your insights into our features.
            </p>
            <p className="text-blue-900 font-semibold text-lg">
              Join us to elevate your limousine business. <br />
              Welcome to <span className="underline">MVMdriver</span> — where collaboration drives success.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="text-center py-20 px-6 bg-gray-50">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-950 mb-12">
          Our Core Values
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { label: 'Environmental empowerment', icon: '🌿', color: 'bg-lime-100' },
            { label: 'Security', icon: '🛡️', color: 'bg-purple-100' },
            { label: 'Balance', icon: '⚖️', color: 'bg-orange-100' },
            { label: 'Impact', icon: '🎯', color: 'bg-sky-100' }
          ].map((value, index) => (
            <div key={index} className="flex flex-col items-center transition-transform hover:scale-105">
              <div className={`w-20 h-20 flex items-center justify-center rounded-full ${value.color} text-4xl shadow-md`}>
                {value.icon}
              </div>
              <p className="mt-4 text-sm text-gray-800 font-medium max-w-[120px] text-center">
                {value.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-cyan-800 text-white py-20 px-6 text-center overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-4">
            Ready to <span className="text-cyan-300">Drive Success</span>?
          </h2>
          <p className="mb-8 text-lg text-white/90">
            Join thousands of professionals who trust MVMdriver to grow their business.
          </p>
          <a
            href="https://app.mvmdriver.com/"
            className="inline-block bg-white text-blue-900 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition shadow-lg"
          >
            Get Started
          </a>
        </div>

        {/* Decorative Blur Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-900/10 blur-3xl opacity-50"></div>
      </section>
    </div>
  );
}
