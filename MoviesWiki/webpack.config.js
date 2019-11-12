const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

let plugins = [new HtmlWebpackPlugin({
      template: "./index.html"
    })]

let optimazers = new UglifyJsPlugin();

if(process.env.NODE_ENV === 'production') {
	//plugins.push(new BabelMinifyWebpackPlugin());
	//optimazers.push(new UglifyJsPlugin());
}

module.exports = {
	context: path.join(__dirname, 'src'),
	entry: './index.js',
		
	devtool: process.env.NODE_ENV === 'production' ? 'none' : 'source-map',
	
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'dist'),
	},
	
	mode: process.env.NODE_ENV === 'production' ? "production": "development",
	
	optimization: process.env.NODE_ENV === 'production' ? { minimizer: [optimazers], } : { },
	
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