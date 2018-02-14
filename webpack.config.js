'use strict';
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV || 'development';

const extractPlugin = new ExtractTextPlugin('[name].css');

module.exports = {
	context: __dirname + '/develop',
	entry: {
		application: './include.js',
	},
	output: {
		path: __dirname + '/public',
		filename: '[name].js',
	},
	watch: NODE_ENV === 'development',
	watchOptions: {
		aggregateTimeout: 500
	},
	devtool: NODE_ENV === 'development' ? 'source-map' : false,
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader',
		}, {
			test: /\.scss$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: ['css-loader', 'sass-loader']
			})
		}, {
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: {
					loader: 'css-loader',
				},
			})
		},
			{
				test: /\.(ttf)$/,
				loader: 'url-loader?limit=30000&name=./[name].[ext]',
			},
		],
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(NODE_ENV),
				BROWSER: JSON.stringify(true)
			}
		}),
		extractPlugin,
	],
};