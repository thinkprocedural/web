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
        cacheName: 'offline',
        networkTimeoutSeconds: 15,
        expiration: {
          maxEntries: 200,
          maxAgeSeconds: 30 * 24 * 60 * 60,
        },
        cacheableResponse: {
          statuses: [0, 200],
        },
      },
    },
  ],
};

module.exports = withOffline(nextConfig);
