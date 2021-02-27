const withOffline = require('next-offline');

const nextConfig = {
  workboxOpts: {
    inlineWorkboxRuntime: true,
    mode: 'production',
    sourcemap: false,
    swDest: 'static/service-worker.js',
  },
  runtimeCaching: [
    {
      urlPattern: /^https?.*/,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'offlineCache',
        expiration: {
          maxEntries: 200,
        },
      },
    },
  ],
};

module.exports = withOffline(nextConfig);
