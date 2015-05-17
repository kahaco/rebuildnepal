var webpack = require('webpack');

module.exports = {
	output: {
		filename: 'bundle.min.js'
	},
	module: {
		loaders: [
			{
				test: /\.js?$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader?optional[]=runtime'
			}
		]
	},
	devtool: 'sourcemap',
	plugins: [
		new webpack.optimize.DedupePlugin(),
		new webpack.DefinePlugin({
			ENV: JSON.stringify(process.env.NODE_ENV)
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		})
	]
};
