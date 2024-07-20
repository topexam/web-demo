// const { dependencies } = require('./package.json');

function getModuleEntrypoint(uri) {
    return uri + '/remoteEntry.js';
}

module.exports = {
    name: 'explore',
    filename: 'remoteEntry.js',
    remotes: {
        '@container': getModuleEntrypoint(process.env.REACT_APP_APP_CONTAINER_URI),
    },
    exposes: {
        './app': './src/navigation',
    },
    // shared: dependencies,
};