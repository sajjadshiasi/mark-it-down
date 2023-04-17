const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  i18n,
  transpilePackages: ['react-select-datepicker'],
  images: {
    domains: [
      'kitblock-service.landrocker.io',
      'srvs20.landrocker.io',
      'landrocker.io',
    ],
  },
};

module.exports = nextConfig;
