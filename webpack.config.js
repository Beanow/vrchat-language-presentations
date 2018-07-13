'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

module.exports = {
	entry: {
		style: './src/style.css',
		main: './src/main.js'
	},
	output: {
		filename: '.build/[name].bundle.js',
		chunkFilename: '.build/[name].bundle.js',
		path: __dirname+'/docs'
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all'
				}
			}
		}
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
		        use: {
		        	loader: 'babel-loader',
		        	options: {
						presets: ['env'],
						plugins: [
							'transform-es2015-block-scoping',
							'transform-es2015-template-literals',
							'syntax-object-rest-spread',
							'transform-object-rest-spread',
							["transform-react-jsx", { "pragma":"h" }]
						]
					}
				}
			},
			{
				test: /\.css$/,
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader" }
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new ScriptExtHtmlWebpackPlugin({
            inline: 'bundle',
            preload: /\.(js|jsx|css)$/ // embed all javascript and css inline
        })
	]
};
