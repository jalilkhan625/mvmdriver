import '../globals.css';
import { Analytics } from '@vercel/analytics/react'; //  Use "react" not "next"
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body className="min-h-screen flex flex-col">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <ScrollToTop />
        </NextIntlClientProvider>
        <Analytics /> {/* ✅ Add here to track all locales */}
      </body>
    </html>
  );
}
