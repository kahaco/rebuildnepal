'use strict';
const koa = require('koa');
const app = koa();
const bodyParser = require('koa-bodyparser');

app.use(bodyParser());

app.use(require('./project').routes());

module.exports = app;
