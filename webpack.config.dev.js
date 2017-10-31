const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const config = {
  devtool: 'eval',
  entry: {
    site: './site/index',
  },
  output: {
    path: path.join(__dirname, './build'),
    filename: '[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: true,
      template: './index.html',
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader?modules&importLoaders=1'],
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    contentBase: 'build',
    port: 3001,
    // quiet: true,
  },
};

// if (process.env.NODE_ENV === 'development') {
//   const Dashboard = require('webpack-dashboard');
//   const DashboardPlugin = require('webpack-dashboard/plugin');
//   const dashboard = new Dashboard();

//   config.plugins.push(new DashboardPlugin(dashboard.setData));
// }

module.exports = config;
