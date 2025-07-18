const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
  entry: './src/Profesional.tsx',
  mode: 'development',
  devServer: {
    port: 3013,
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
      name: 'profesional',
      filename: 'remoteEntry.js',
      exposes: {
        './Profesional': './src/Profesional.tsx',
        './PersonalInfo': './src/PersonalInfo.tsx',
        './AddressInfo': './src/AddressInfo.tsx',
        './PrivacyPolicy': './src/PrivacyPolicy.tsx',
        './ProjectDetails': './src/ProjectDetails.tsx',
        './AreaSlider': './src/AreaSlider.tsx',
        './SpaceSelect': './src/SpaceSelect.tsx',
        './RequestQuoteForm': './src/RequestQuoteForm.tsx',
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