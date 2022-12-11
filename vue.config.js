const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: "http://localhost:8080"
  },
  configureWebpack: {
    plugins: [
      new NodePolyfillPlugin(),
    ],
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
    resolve:{
      fallback: {
        "fs": false
      },
    }
  },


})
