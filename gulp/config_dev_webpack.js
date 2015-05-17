var webpack = require('webpack');

module.exports = {
	output: {
		filename: 'bundle.js'
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
	watch: true,
	devtool: 'sourcemap',
	plugins: [
		new webpack.optimize.DedupePlugin(),
		new webpack.DefinePlugin({
			ENV: JSON.stringify(process.env.NODE_ENV)
		})
	]
};
