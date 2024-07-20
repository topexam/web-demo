const CracoEsbuildPlugin = require('craco-esbuild');
const { CracoAliasPlugin } = require('react-app-alias');
const { ProvidePlugin, container: { ModuleFederationPlugin } } = require('webpack');
require('react-scripts/config/env');



module.exports = {
  webpack: {
    plugins: [
      new ProvidePlugin({
        React: 'react',
      }),
      new ModuleFederationPlugin({
        name: 'container',
        filename: 'remoteEntry.js',
        remotes: {
          '@explore': process.env.REACT_APP_MODULE_EXPLORE_URI + '/remoteEntry.js',
          '@submission': process.env.REACT_APP_MODULE_SUBMISSION_MGMT_URI + '/remoteEntry.js',
          '@testMgmt': process.env.REACT_APP_MODULE_TEST_MGMT_URI + '/remoteEntry.js',
        },
        exposes: {
          './ContainerWrapper': './src/shared/container-wrapper',
        },
        // shared: dependencies,
      }),
    ],
  },
  plugins: [
    { plugin: CracoEsbuildPlugin },
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
