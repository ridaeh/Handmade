const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const outputDirectory = 'dist';

module.exports = {
  entry: './src/client/index.js',
  output: {
    path: path.resolve(outputDirectory),
    publicPath :'/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /\.sass$/,
            use: ["style-loader", "css-loader","sass-loader"]
          },
          {
            test: /\.(png|woff|woff2|eot|ttf|svg|ico)$/,
            loader: "url-loader?limit=100000"
          }
    ]
  },
  devServer: {
    port: 8080,
    open: true,
    proxy: {
      '/api': 'http://localhost:3000'
    }
  },
  plugins: [
    new CleanWebpackPlugin([outputDirectory]),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon : "./public/images/favicon.ico",
    })
  ]
};
