/* eslint-disable @typescript-eslint/no-var-requires,import/no-extraneous-dependencies,global-require,no-param-reassign */
const { defineConfig } = require('@vue/cli-service');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = defineConfig({
  publicPath: '',
  outputDir: './dist',
  filenameHashing: false,
  runtimeCompiler: true,
  transpileDependencies: true,

  css: {
    extract: true,
    loaderOptions: {
      sass: {
        additionalData: '@import "@/assets/scss/style.scss";',
      },
    },
  },

  configureWebpack: {
    plugins: [
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
      }),
      require('unplugin-element-plus/webpack')({}),
    ],
    devServer: {
      historyApiFallback: false,
    },
  },

  chainWebpack: (config) => {
    config.plugin('fork-ts-checker').tap((options) => {
      options[0].async = false;
      return options;
    });
  },
});
