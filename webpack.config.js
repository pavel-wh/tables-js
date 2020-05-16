const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    base: ['./index.js']
  },
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'build')
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      @: path.resolve(__dirname, 'src'),
      @core: path.resolve(__dirname, 'src/core')
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './templates/index.html'
    }),
    new CopyPlugin({
      patterns: [
        { 
          from: path.resolve(__dirname, 'src/assets/images/icons/favicon.svg'), 
          to: path.resolve(__dirname, 'build')
        }
      ],
    }),
    new MiniCssExtractPlugin({
      filename: 'bundle.[hash].css'
    })
  ]
}