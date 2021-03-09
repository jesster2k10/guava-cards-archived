/* eslint-disable react-hooks/rules-of-hooks */
const {
  override,
  addDecoratorsLegacy,
  disableEsLint,
  babelInclude,
  addBabelPlugin,
  addBabelPreset,
  addBundleVisualizer,
} = require('customize-cra');
const path = require('path');

module.exports = override(
  babelInclude([
    path.resolve('src'),
    path.resolve(__dirname, '..', 'core'),
    path.resolve(__dirname, '..', 'database'),
    path.resolve(__dirname, '..', 'validation'),
    path.resolve(__dirname, '..', 'observable-hooks'),
  ]),
  disableEsLint(),
  addDecoratorsLegacy(),
  addBabelPreset('@emotion/babel-preset-css-prop'),
  addBabelPlugin('@emotion'),
  addBabelPlugin([
    'babel-plugin-root-import',
    {
      paths: [
        {
          rootPathSuffix: './src',
          rootPathPrefix: '@/',
        },
        {
          rootPathSuffix: './src/bundles',
          rootPathPrefix: '~/',
        },
      ],
    },
  ]),
  addBundleVisualizer({}, true),
  // setWebpackTarget('electron-renderer'),
);
