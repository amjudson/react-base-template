const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
// import port from './constants';

const GLOBALS = {
	'process.env.API_HOST': JSON.stringify('http://localhost/PeopleTracker')
};

module.exports = {
  mode: 'development',
  entry: [
    'eventsource-polyfill',
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, 'src', 'index.js') // primary JS entry point
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
    historyApiFallback: true,
    hot: true,
    port: 3050
  },
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, 'src/assets/'),
      localcss: path.resolve(__dirname, 'src/css/')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/, // transform all .js files
        exclude: /(node_modules)/, // except for node_modules
        loader: 'babel-loader', // apply the bable-loader to compile the files
        query: {
          presets: ['@babel/react', '@babel/env'] // load the react, es2015 babel settings
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(scss)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.less$/,
        exclude: /(node_modules)/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'less-loader' }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      {
        test: /\.(csv|tsv)$/,
        use: ['csv-loader']
      },
      {
        test: /\.xml$/,
        use: ['xml-loader']
      }
    ]
  }
};
