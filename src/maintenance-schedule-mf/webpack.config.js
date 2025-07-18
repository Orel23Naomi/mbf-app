const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
  entry: './src/MaintenanceSchedule.tsx',
  mode: 'development',
  devServer: {
    port: 3012,
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
      name: 'maintenanceSchedule',
      filename: 'remoteEntry.js',
         exposes: {
        './MaintenanceSchedule': './src/MaintenanceSchedule.tsx',
      },
      remotes: {
        genericList: 'genericList@http://localhost:3010/remoteEntry.js'
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