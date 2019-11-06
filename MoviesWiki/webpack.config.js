const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	context: path.join(__dirname, 'src'),
	entry: './index.js',
	
	devtool: 'source-map',
	
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'dist'),
	},
	
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				},
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			}
		]
	},
	
	resolve: {
		extensions: ['.js']
	},
	
	plugins: [new HtmlWebpackPlugin({
      template: "./index.html"
    })],
	
	watch: false
};