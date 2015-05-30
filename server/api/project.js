'use strict';
const router = require('koa-router')();
const projectDb = require('../database/project');

router
	.get('/project', function *() {
		this.body = yield projectDb.getProjects();
	})
	.post('/project', function *() {
		const project = this.request.body;
		try {
			this.body = yield projectDb.createProject(project.title, project.description);
			this.status = 200;
		} catch (err) {
			this.body = err;
			this.status = 500;
			this.throw(500, err);
		}
	});

module.exports = router;
