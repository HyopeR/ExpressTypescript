export const i18nextConfig = {
  debug: false,
  lng: 'en',
  fallbackLng: 'en',
  preload: ['en', 'tr'],
  ns: 'index',
  defaultNS: 'index',
  backend: {
    loadPath: `${__dirname}/languages/{{lng}}/{{ns}}.json`,
  },
};
