var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');
// const ProvidePlugin = require('webpack/lib/ProvidePlugin');

module.exports = {
	entry: {
		'polyfills': './src/polyfills.ts',
		'vendor': './src/vendor.ts',
		'main': './src/main.ts'
	},

	resolve: {
		extensions: ['', '.js', '.ts']
	},

	module: {
		loaders: [
			{
				test: /\.ts$/,
				loader: 'ts'
			},
			{
				test: /\.html$/,
				loader: 'html'
			},
			{
				test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
				loader: 'file?name=assets/[name].[hash].[ext]'
			},
			{
				test: /\.css$/,
				exclude: helpers.root('src', 'app'),
				loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
			},
			{
				test: /\.css$/,
				include: helpers.root('src', 'app'),
				loader: 'raw'
			},
			{
				test: /\.scss$/,
				loaders: ['style', 'css', 'postcss', 'sass']
			}
		]
	},

	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: ['main', 'vendor', 'polyfills']
		}),
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		})
		// new ProvidePlugin({
		// 	jQuery: 'jquery',
		// 	$: 'jquery',
		// 	jquery: 'jquery',
		// 	"Tether": 'tether',
		// 	"window.Tether": "tether"
		// })
	]
};
