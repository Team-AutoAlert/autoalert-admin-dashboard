module.exports = function override(config) {
    config.resolve.fallback = {
        ...config.resolve.fallback,
        "url": require.resolve("url/"),
        "buffer": require.resolve("buffer/"),
        "process": require.resolve("process/browser"),
    };
    return config;
}; 