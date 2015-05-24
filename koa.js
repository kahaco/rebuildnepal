'use strict';

const path = require('path');
const koa = require('koa');
const jade = require('koa-jade');
const logger = require('koa-logger');
const helmet = require('koa-helmet');
const send = require('koa-send');
const mount = require('koa-mount');
const router = require('./router');

const app = koa();

app.use(logger());

app.use(helmet.defaults());
app.use(require('koa-compressor')());

app.use(jade.middleware({
	defaultLayout: 'index',
	layoutsPaths: path.join(__dirname, '/views/layouts'),
	viewPath: path.join(__dirname, '/views')
}));

app.use(mount('/assets', function *() {
	yield send(this, this.path, { root:__dirname + '/app/assets' });
}));

app.use(mount('/build', function *() {
	yield send(this, this.path, { root:__dirname + '/app/build' });
}));

app.use(router);

module.exports = app;
