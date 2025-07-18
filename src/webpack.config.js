const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
  entry: './src/App.tsx',
  mode: 'development',
  devServer: {
    port: 3000, 
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
      name: 'host',
      remotes: {
        aboutUs: 'aboutUs@http://localhost:3006/remoteEntry.js',
        ourServices: 'ourServices@http://localhost:3011/remoteEntry.js',
        maintenanceSchedule: 'maintenanceSchedule@http://localhost:3012/remoteEntry.js',
        profesional: 'profesional@http://localhost:3013/remoteEntry.js',
        genericList: 'genericList@http://localhost:3010/remoteEntry.js',
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