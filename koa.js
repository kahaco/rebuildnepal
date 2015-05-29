'use strict';

const path = require('path');
const koa = require('koa');
const views = require('koa-views');
const logger = require('koa-logger');
const helmet = require('koa-helmet');
const send = require('koa-send');
const mount = require('koa-mount');
const favicon = require('koa-favicon');

const app = koa();

app.use(views(__dirname + '/views', {
	map: {
		html: 'lodash'
	}
}));

app.use(logger());

app.use(helmet.defaults());

app.use(require('koa-compressor')());

app.use(favicon(__dirname + '/app/assets/favicon.ico'));

app.use(mount('/assets', function *() {
	yield send(this, this.path, { root:__dirname + '/app/assets' });
}));

app.use(mount('/build', function *() {
	yield send(this, this.path, { root:__dirname + '/app/build' });
}));

app.use(require('./router'));

module.exports = app;
