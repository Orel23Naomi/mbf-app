const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
  entry: './src/components/GenericList.tsx',
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
       './GenericList': './src/components/GenericList.tsx',
      },
      shared: { 
        react: { 
          singleton: true, 
          eager: false,
          requiredVersion: '^18.0.0'
        }, 
        'react-dom': { 
          singleton: true, 
          eager: false,
          requiredVersion: '^18.0.0'
        },
        antd: { 
          singleton: true,
          eager: false,
          requiredVersion: '^5.0.0'
        }
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};