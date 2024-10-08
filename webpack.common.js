const path = require('path');

module.exports = {
  entry: './src/client/index.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
};