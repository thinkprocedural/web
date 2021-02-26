const withPWA = require('next-pwa');

const nextConfig = {};

module.exports = withPWA({
  pwa: {
    dest: 'public',
    inlineWorkboxRuntime: true,
    mode: 'production',
    sourcemap: false,
  },
});
