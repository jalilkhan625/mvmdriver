// next.config.ts
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin({
  // Optional: specify your path to request config if not default
  // This path should point to ./src/i18n/request.ts or similar
  // e.g., './src/i18n/request.ts'
});

const nextConfig = {
  reactStrictMode: true
};

export default withNextIntl(nextConfig);
