const CracoEsbuildPlugin = require('craco-esbuild');
const cracoModuleFederation = require('craco-module-federation');
const { CracoAliasPlugin } = require('react-app-alias')

const { ProvidePlugin } = require('webpack');


module.exports = {
  webpack: {
    plugins: [
      new ProvidePlugin({
        React: 'react',
      }),
    ],
  },
  plugins: [
    { plugin: CracoEsbuildPlugin },
    { plugin: cracoModuleFederation },
    {
      plugin: CracoAliasPlugin,
      options: {
        source: 'tsconfig',
        baseUrl: './src',
        tsConfigPath: './tsconfig.paths.json',
      },
    },
  ],
};
