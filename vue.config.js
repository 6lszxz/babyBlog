const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy:{
      '/server':{
        target: 'http://43.142.78.228:3636',
        changeOrigin: true,
        pathRewrite:{
          '^/server': '',
        },
        port: 4444,
      }
    }
  },
  publicPath:'./',
})
