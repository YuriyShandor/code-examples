module.exports = {
  publicPath: '',
  outputDir: './dist',
  filenameHashing: false,
  runtimeCompiler: true,

  css: {
    extract: true
  },

  configureWebpack: {
    output: {
      jsonpFunction: 'webpackJsonp' + Date.now()
    }
  }
}
