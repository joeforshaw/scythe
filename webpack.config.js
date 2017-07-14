const path = require('path');

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
}
