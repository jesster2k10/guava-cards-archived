/* eslint-disable */
const {
  override,
  addDecoratorsLegacy,
  disableEsLint,
  babelInclude,
  addBabelPlugin,
  addBabelPreset,
  addBundleVisualizer,
} = require('customize-cra');
const {addReactRefresh} = require('customize-cra-react-refresh');
const ESLintPlugin = require('eslint-webpack-plugin');
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
  addBabelPlugin('@babel/plugin-proposal-logical-assignment-operators'),
  addBundleVisualizer({}, true),
  // addReactRefresh(),
  config => {
    // config.plugins.find(
    //   plugin => plugin instanceof ESLintPlugin,
    // ).options.emitWarning = false;
    // config.plugins.find(
    //   plugin => plugin instanceof ESLintPlugin,
    // ).options.cache = true;

    config.plugins[
      config.plugins.findIndex(plugin => plugin instanceof ESLintPlugin)
    ] = undefined;
    config.plugins = config.plugins.filter(item => !!item);
    return config;
  },
  // setWebpackTarget('electron-renderer'),
);
