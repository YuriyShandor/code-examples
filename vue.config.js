module.exports = {
  publicPath: '',
  outputDir: './dist',
  filenameHashing: false,
  runtimeCompiler: true,

  css: {
    extract: true,
    loaderOptions: {
      sass: {
        prependData: `
          @import "./src/assets/scss/variables.scss";
          @import "./src/assets/scss/common.scss";
        `
      }
    }
  },

  configureWebpack: {
    output: {
      jsonpFunction: 'webpackJsonp' + Date.now()
    }
  },

  devServer: {
    host: 'localhost'
  }
}
