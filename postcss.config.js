module.exports = {
  plugins: [
    'postcss-import-url',
    [
      'postcss-preset-env',
      {
        autoprefixer: {},
        cssnano: {
          discardComments: { removeAll: true },
        },
      },
    ],
  ],
};
