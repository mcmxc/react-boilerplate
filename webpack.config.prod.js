const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = merge(baseConfig, {
  mode: 'production',
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: 'bundle_sizes.html',
    }),
  ],
  /* Example of how to exclude react/react-dom (or any other library) from bundle
     if you want to use them via CDN Links
     (which should be added to index.html)
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  */
});
