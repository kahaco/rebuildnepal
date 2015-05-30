'use strict';

const knex = require('./knexfile');

knex.schema.hasTable('project').then(function(exists) {
	if (!exists) {
		return knex.schema.createTable('project', function(t) {
			t.increments('id').primary();
			t.string('title', 100);
			t.text('description');
		});
	}
}).then(function() { //TODO: Remove once we have some real data and db running
	return knex.select().from('project');
}).then(function(rows) {
	if (!rows.length) {
		return knex.insert([
			{ title: 'Sponsor Education', description: 'Education' },
			{ title: 'Sponsor Hospital', description: 'Hospital' }
		]).into('project');
	}
});

/**
 * createProject  Inserts a new project into the database
 * @param {String} title       Project Title
 * @param {String} description Project Description
 * @returns {Object} Promise
 */
function createProject(title, description) {
	return knex.insert({ title: title, description: description }).into('project');
}

/**
 * getProjects  Get's all project
 * @returns {Object} Promise
 */
function getProjects() {
	return knex.select().from('project');
}

module.exports = {
	createProject: createProject,
	getProjects: getProjects
}
