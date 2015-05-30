'use strict';
const koa = require('koa');
const app = koa();

app.use(require('./project').routes());

module.exports = app;
