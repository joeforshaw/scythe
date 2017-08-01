const path = require('path');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
  entry: './src/scythe.js',
  devtool: 'source-map',
  output: {
    filename: './public/assets/js/scythe.js'
  },
  resolve: {
    extensions: ['.js'],
    modules: ['src', 'node_modules'],
  },
  plugins: [
    new WriteFilePlugin()
  ]
}
