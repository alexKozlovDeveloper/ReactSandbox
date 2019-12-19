const express = require('express');

const app = express();

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
const webpackConfig = require('../webpack.config');

const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));
app.use(webpackHotServerMiddleware(compiler));


module.exports = app;