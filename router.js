'use strict';

var Router = require('react-router');
var routes = require('routes');
var promisify = require('es6-promisify');
var Flux = require('utils/flux');

module.exports = function *() {
	const router = Router.create({
		routes: routes,
		location: this.request.url
	});

	const flux = new Flux();
	const execRouter = promisify(router.run, function(handler) {
		this.resolve(handler);
	});

	const handler = yield execRouter();
	const html = yield flux.render(handler);

	this.render('index', {
		content: html.body,
		PROD: process.env.NODE_ENV
	});
};
