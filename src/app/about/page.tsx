'use client';

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* About Heading + Text */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <h1 className="text-5xl font-extrabold text-blue-950">About Us</h1>
          <div className="text-gray-600 text-sm md:text-base leading-relaxed space-y-4">
            <p>
              Welcome to <span className="font-semibold text-blue-800">MVMdriver</span>, a pioneering platform forged by experienced limo drivers to transform the limousine industry.
            </p>
            <p>
              Our mission is to provide a <span className="font-semibold">centralised solution</span> for efficient service organisation, professional networking, and enhanced global visibility.
            </p>
            <p>
              At <span className="font-semibold text-blue-800">MVMdriver</span>, we merge innovation with a user-centric design, ensuring our technology is both intuitive and cutting-edge.
            </p>
            <p>
              <span className="italic">Your feedback is our roadmap.</span> We actively integrate your insights into our platform.
            </p>
            <p className="text-blue-900 font-semibold text-lg">
              Join us on this journey, and let’s elevate your limousine business to new heights. <br />
              Welcome to <span className="underline">MVMdriver</span> – where collaboration drives success.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="text-center py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-blue-950 mb-12">Values</h2>
        <div className="flex flex-wrap justify-center gap-10 max-w-4xl mx-auto">
          {[
            { label: 'Environmental empowerment', icon: '🌿', color: 'bg-lime-200' },
            { label: 'Security', icon: '🛡️', color: 'bg-purple-200' },
            { label: 'Balance', icon: '⚖️', color: 'bg-orange-200' },
            { label: 'Impact', icon: '🎯', color: 'bg-sky-200' }
          ].map((value, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className={`w-20 h-20 flex items-center justify-center rounded-full ${value.color} text-3xl`}>
                {value.icon}
              </div>
              <p className="mt-4 text-sm text-gray-700 font-medium max-w-[120px] text-center">{value.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Drive Success?</h2>
        <p className="mb-6 text-lg">
          Join thousands of professionals who trust MVMdriver to grow their business.
        </p>
        <a
          href="/register"
          className="inline-block bg-white text-blue-900 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition"
        >
          Get Started
        </a>
      </section>
    </div>
  );
}
