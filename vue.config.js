module.exports = {
  publicPath: '',
  outputDir: './dist',
  filenameHashing: false,
  runtimeCompiler: true,

  css: {
    extract: true,
    loaderOptions: {
      sass: {
        prependData: `@import './src/assets/scss/style.scss';`
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
  },

  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.whitespace = 'preserve'
        return options
      })
  }
}
