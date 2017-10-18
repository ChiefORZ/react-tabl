const webpack = require('webpack');
const packageJSON = require('./package.json');
const path = require('path');

const banner =
`${'/**\n' +
' * ReactTabl v'}${  packageJSON.version  } \n` +
` */\n`;

const plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    },
  }),
];

if (process.env.COMPRESS) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
      output: { comments: false },
    })
  );
}

plugins.push(new webpack.BannerPlugin({ banner, raw: true }));

const config = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },

  entry: {
    'react-tabl': './src/index.js',
  },

  output: {
    path: path.join(__dirname, './dist'),
    filename: process.env.COMPRESS ? '[name].min.js' : '[name].js',
    library: 'ReactTabl',
    libraryTarget: 'umd',
  },

  externals: {
    react: {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
    },
  },

  node: {
    Buffer: false,
  },

  plugins,
};

if (process.env.COMPRESS) {
  config.devtool = 'source-map';
}

module.exports = config;
