const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const plugins = [new HtmlWebpackPlugin({
  template: './index.html',
})];

const optimazers = new UglifyJsPlugin();

const isProd = (process.env.NODE_ENV === 'production');

console.log(`NODE_ENV '${process.env.NODE_ENV}'`);

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './index.js',

  devtool: isProd ? 'none' : 'source-map',

  devServer: {
    historyApiFallback: true,
  },

  output: {
    filename: 'bundle.js',
    // path: isProd ? path.join(__dirname, 'prod') : path.join(__dirname, 'dev'),
    path: path.join(__dirname, 'dist'),
  },

  optimization: isProd ? { minimizer: [optimazers] } : {},

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.js'],
  },

  plugins,

  watch: false,
};
