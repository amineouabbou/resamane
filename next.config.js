const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'api.residencesamane.ma'],
  },
  i18n,
}

module.exports = nextConfig
