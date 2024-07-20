// const CracoEsbuildPlugin = require('craco-esbuild');
const CracoAlias = require('craco-alias');
const cracoModuleFederation = require('craco-module-federation');

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
    // { plugin: CracoEsbuildPlugin },
    { plugin: cracoModuleFederation },
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: './src',
        tsConfigPath: './tsconfig.paths.json',
      },
    },
  ],
};
