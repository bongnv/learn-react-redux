const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './js/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      hash: true,
      inject: true,
    })
  ],
  devtool: 'source-map',
  module: {
    rules: [
      // Javascript
      { 
        test: /\.jsx?$/,
        use: [
          {
            loader: 'eslint-loader'
          }
        ],
        enforce: 'pre',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [[
                'es2015',
                'react'
              ]]
            }
          }
        ]
      }      
    ],
  }
};
