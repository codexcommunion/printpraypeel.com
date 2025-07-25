/**
 * Simple Docusaurus plugin to configure webpack to ignore binary design files
 */
module.exports = function webpackIgnorePlugin(context, options) {
  return {
    name: 'webpack-ignore-plugin',
    configureWebpack(config, isServer, utils) {
      return {
        module: {
          rules: [
            {
              test: /\.(xcf|psd|ai|sketch|fig|gimp)$/,
              use: 'null-loader',
            },
          ],
        },
      };
    },
  };
};