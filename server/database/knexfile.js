'use strict';

const fs = require('fs');

const knex = require('knex')({
	client: 'sqlite3',
	connection: {
		filename: './rebuild_nepal.db'
	}
});

module.exports = knex;
