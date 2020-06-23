// Vendors
import path from 'path'

// Webpack Plugins
import webpack from 'webpack'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

// Assembly environment variables
const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd

// Assembly environment functions
const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[chunkhash].${ext}`)

const jsLoaders = () => {
	const loaders = ['babel-loader']

	if (isDev) {
		loaders.push('eslint-loader')
	}

	return loaders
}

const cssLoaders = (extra) => {
	const loaders = [
		{
			loader: MiniCssExtractPlugin.loader,
			options: {
				hmr: isDev,
				reloadAll: true,
			},
		},
		'css-loader',
	]
	if (extra) {
		loaders.push(extra)
	}
	return loaders
}

// Webpack configuration
export default {
	context: path.resolve(__dirname, 'src'),
	mode: 'development',
	entry: {
		main: ['@babel/polyfill', './index.js'],
	},
	output: {
		filename: filename('js'),
		path: path.resolve(__dirname, 'build'),
	},
	resolve: {
		extensions: ['.js', '.scss'],
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@core': path.resolve(__dirname, 'src/core'),
		},
	},
	devtool: isDev ? 'source-map' : false,
	devServer: {
		port: 3000,
		hot: isDev,
		contentBase: './src',
		watchContentBase: true,
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './templates/index.html',
			minify: {
				removeComments: isProd,
				collapseWhitespace: isProd,
			},
		}),
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'src/assets/images/icons/favicon.svg'),
					to: path.resolve(__dirname, 'build'),
				},
			],
		}),
		new MiniCssExtractPlugin({
			filename: filename('css'),
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
		}),
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: cssLoaders(),
			},
			{
				test: /\.s[ac]ss$/i,
				use: cssLoaders('sass-loader'),
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: jsLoaders(),
			},
			{
				test: /\.(ttf|woff|woff2|eot)$/,
				use: ['file-loader'],
			},
		],
	},
}
