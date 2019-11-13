const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

let plugins = [new HtmlWebpackPlugin({
      template: "./index.html"
    })]

let optimazers = new UglifyJsPlugin();

const isProd = (process.env.NODE_ENV === 'production');

console.log("NODE_ENV '" + process.env.NODE_ENV + "'");

module.exports = {
	context: path.join(__dirname, 'src'),
	entry: './index.js',
		
	devtool: isProd ? 'none' : 'source-map',
	
	output: {
		filename: 'bundle.js',
		//path: isProd ? path.join(__dirname, 'prod') : path.join(__dirname, 'dev'),
		path: path.join(__dirname, 'dist'),
	},
	
	optimization: isProd ? { minimizer: [optimazers] } : { },
	
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
	
	plugins: plugins,
	
	watch: false
};