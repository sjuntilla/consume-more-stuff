const BundleAnalyzerPlugin = require("webpack-bundle-anaylzer")
  .BundleAnalyzerPlugin;

module.exports = {
  plugins: [new BundleAnalyzerPlugin()]
};
