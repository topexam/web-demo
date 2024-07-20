// const { dependencies } = require('./package.json');

function getModuleEntrypoint(uri) {
    return uri + '/remoteEntry.js';
}

module.exports = {
    name: 'container',
    filename: 'remoteEntry.js',
    remotes: {
        '@explore': getModuleEntrypoint(process.env.REACT_APP_MODULE_EXPLORE_URI),
        '@submission': getModuleEntrypoint(process.env.REACT_APP_MODULE_SUBMISSION_MGMT_URI),
        '@testMgmt': getModuleEntrypoint(process.env.REACT_APP_MODULE_TEST_MGMT_URI),
    },
    exposes: {
        './ContainerWrapper': './src/shared/container-wrapper',
    },
    // shared: dependencies,
};