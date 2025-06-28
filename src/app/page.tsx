import Image from "next/image";
import { CalendarCheck, Cpu, Share2, Users } from "lucide-react";
import PaymentPlans from '@/components/PaymentPlans';

export default function Home() {
  const features = [
    {
      title: "Bookings",
      description:
        "Easily manage bookings, vehicles, and customer lists on all devices.",
      icon: <CalendarCheck className="w-8 h-8 text-cyan-600" />,
    },
    {
      title: "Digitalization",
      description:
        "Upgrade tech with unlimited accounts and up to 5 vehicles. Perfect for teams.",
      icon: <Cpu className="w-8 h-8 text-cyan-600" />,
    },
    {
      title: "Network",
      description:
        "Connect with peers, gain visibility in our catalog, and grow your brand.",
      icon: <Users className="w-8 h-8 text-cyan-600" />,
    },
    {
      title: "Collaboration",
      description:
        "Exchange or resell services. Expand your business into new markets.",
      icon: <Share2 className="w-8 h-8 text-cyan-600" />,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <main className="min-h-screen flex items-center justify-center bg-white px-4 pt-10 pb-0">
        <div className="w-full max-w-[90rem] bg-gray-100 rounded-3xl shadow-md p-10 flex flex-col md:flex-row items-center justify-between gap-10 mt-[-150px]">
          {/* Left Section */}
          <div className="flex-1 text-center md:text-left space-y-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-cyan-600 leading-snug">
              YOUR LINK TO THE LIMO WORLD.<br />
              BE PART OF OUR COMMUNITY<br />
              TO DISCOVER MORE
            </h2>

            <p className="text-gray-700 max-w-xl mx-auto md:mx-0">
              MVMdriver is a management software that helps you to Manage your fleet,
              connect with verified partners, and grow your limo business — all in one platform
            </p>

            {/* Store Buttons */}
            <div className="flex justify-center md:justify-start items-center gap-4 flex-wrap">
              {/* App Store */}
              <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg transition transform hover:bg-gray-900 hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                  <path d="M16.8 1.4c0 1.1-.4 2.2-1.1 3-.8.9-2 1.6-3.1 1.5-.1-1.3.5-2.6 1.2-3.4.7-.8 1.9-1.5 3-1.1zM19.6 14.6c-.4 1-.6 1.3-1.3 2.1-.9 1.1-2.1 2.5-3.6 2.5s-1.8-.8-3.4-.8c-1.6 0-2.1.8-3.5.8s-2.4-1.2-3.3-2.4c-1.4-2-2.5-5.6-1-8.1.7-1.2 1.9-2 3.3-2.1 1.3-.1 2.6.9 3.5.9s2.5-1.1 4.2-.9c.7 0 2.6.3 3.8 2.3-3.3 1.8-2.8 6.6.3 7.7z"/>
                </svg>
                App Store
              </button>

              {/* Google Play */}
              <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg transition transform hover:bg-green-700 hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                  <path d="M3.6 2.5c-.3.3-.6.7-.6 1.2v16.6c0 .5.2.9.6 1.2l.3.2 9.3-9.3L3.9 2.3l-.3.2zm1.8 1.1l8 8-2 2-6-6v-4zm7.5 7.5l1.9 1.9 3.6-2.1-5.5-5.5v5.7zm0 2.8v5.6l5.4-5.4-3.5-2-1.9 1.8zm-7.5 2.2l6-6 2 2-8 8v-4z"/>
                </svg>
                Google Play
              </button>

              {/* Other */}
              <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg transition transform hover:bg-blue-700 hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v6c0 5.5 3.8 10.7 10 13 6.2-2.3 10-7.5 10-13V7l-10-5zM9 17.9V11l8-4v6.9l-8 4z"/>
                </svg>
                Other
              </button>
            </div>

            <p className="text-sm text-gray-600">
              Download the app now and register your fleet for free!
            </p>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center">
            <Image
              src="/home1.png"
              alt="MVMdriver Screenshot"
              width={500}
              height={500}
              className="rounded-xl shadow-lg bg-removal"
            />
          </div>
        </div>
      </main>

      {/* Features Section */}
<section className="w-full bg-white -mt-32 pb-20 px-6">
  <div className="max-w-7xl mx-auto text-center space-y-10">
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Register now, <br className="hidden md:block" />
        <span className="text-cyan-600">get our BASIC management software for free</span>
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((feature, index) => (
        <div
          key={index}
          className="rounded-2xl bg-white p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200"
        >
          <div className="mb-4 flex justify-center">{feature.icon}</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
          <p className="text-gray-600 text-sm">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

  {/* other sections */}
      <PaymentPlans />
    </>
  );
}
