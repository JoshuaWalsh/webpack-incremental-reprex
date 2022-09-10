const path = require("path");
const webpack = require('webpack');

module.exports = {
	output: {
		filename: 'bundle.js',
		libraryTarget: "commonjs2",
		path: path.resolve(__dirname, "dist")
	},
	entry: './src/index.ts',

	devtool: "inline-source-map",

	resolve: {
		extensions: [".ts", ".js"],
	},

	target: "node",

	mode: process.env.NODE_ENV || "production",

	module: {
		rules: [{
			test: /\.ts?$/,
			loader: "ts-loader",
			exclude: /node_modules/,
			options: {
				configFile: 'tsconfig.json'
			},
		}]
	},
};