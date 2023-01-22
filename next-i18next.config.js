module.exports = {
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    localeDetection: false,
    localePath:
      typeof window === 'undefined'
        ? require('path').resolve('./public/locales')
        : '/locales',
  },
}
