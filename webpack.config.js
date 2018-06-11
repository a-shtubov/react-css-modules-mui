const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

const SRC = path.resolve(__dirname, 'src');

module.exports = {
  entry: path.resolve(SRC, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader',
      },
    ],
  },
  plugins: [new HtmlPlugin({ template: path.resolve(SRC, 'index.html') })],
  devtool: '$eval-source-map',
};
