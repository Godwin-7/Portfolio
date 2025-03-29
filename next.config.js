/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback = {
          ...config.resolve.fallback,
          process: require.resolve('process/browser')
        };
        
        config.plugins.push(
          new webpack.ProvidePlugin({
            process: 'process/browser',
          }),
        );
      }
      return config;
    },
  };
  
  module.exports = nextConfig;