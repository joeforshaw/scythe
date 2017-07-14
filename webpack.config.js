var path = require('path');

module.exports = {
  entry: './src/scythe.js',
  output: {
    filename: './public/assets/js/scythe.js'
  },
  resolve: {
    extensions: ['.js'],
    modules: ['src', 'node_modules'],
  },
}