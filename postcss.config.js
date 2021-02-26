module.exports = {
  plugins: [
    'postcss-import-url',
    'postcss-flexbugs-fixes',
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
