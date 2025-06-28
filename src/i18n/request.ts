// src/i18n/request.ts
import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
  const safeLocale = locale ?? 'en'; // fallback to 'en' if undefined
  return {
    messages: (await import(`../messages/${safeLocale}.json`)).default,
    locale: safeLocale
  };
});
