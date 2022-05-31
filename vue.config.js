const { defineConfig } = require('@vue/cli-service');

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
});
