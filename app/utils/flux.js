'use strict';

import Alt from 'alt';
import AltResolver from './altResolver.js';

class Flux extends Alt {
	constructor(config = {}) {
		super(config);
		this._resolver = new AltResolver();

		//actions
		this.addActions('requests', require('actions/requests'));
		this.addActions('projects', require('actions/projects'));

		//Stores
		this.addStore('requests', require('stores/requests'));
		this.addStore('projects', require('stores/projects'));
	}

	resolve(result) {
		this._resolver.resolve(result);
	}

	render(handler) {
		return this._resolver.render(handler ,this);
	}
}

export default Flux;
