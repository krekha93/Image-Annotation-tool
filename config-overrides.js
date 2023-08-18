module.exports = function override(config) {
  // Add resolve fallback for 'stream' and 'path'
  config.resolve.fallback = {
    ...config.resolve.fallback,
    stream: require.resolve("stream-browserify"),
    path: require.resolve("path-browserify"),
    zlib: require.resolve("browserify-zlib"),
    constants: require.resolve("constants-browserify"),
  };

  return config;
};
