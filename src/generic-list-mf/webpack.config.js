const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
  entry: './src/GenericList.tsx',
  mode: 'development',
  devServer: {
    port: 3010,
    open: true,
  },
  output: {
    publicPath: 'auto',
    clean: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'genericList',
      filename: 'remoteEntry.js',
      exposes: {
       './GenericList': './src/GenericList.tsx',
      },
      shared: { 
        react: { singleton: true, requiredVersion: false }, 
        'react-dom': { singleton: true, requiredVersion: false },
        antd: { singleton: true }
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};