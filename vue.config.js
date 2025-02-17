// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

const CopyWebpackPlugin = require('copy-webpack-plugin'); // Import CopyWebpackPlugin

module.exports = {
  publicPath: '/tommella90-website/',
  configureWebpack: {
      plugins: [
          new CopyWebpackPlugin({
              patterns: [
                  { from: 'public/index.html', to: '404.html' },
              ],
          }),
      ],
  },
  devServer: {
      historyApiFallback: {
          index: '/index.html', // Specify the correct base path for the index.html
      },
  },
};


