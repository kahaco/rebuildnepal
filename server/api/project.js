'use strict';
const router = require('koa-router')();
const projectDb = require('../database/project');

router
	.get('/project', function *() {
		this.body = yield projectDb.getProjects();
	});

module.exports = router;
