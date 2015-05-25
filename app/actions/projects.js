'use strict';

//Remove once the api's are done
import data from 'data/projects.json';

class ProjectActions {
	constructor() {
		this.generateActions('fetchSuccess');
	}

	fetch() {
		const promise = (resolve) => {
			this.alt.getActions('requests').start();
			setTimeout(() => {
				this.actions.fetchSuccess(data.projects);
				this.alt.getActions('requests').success();
				return resolve();
			}, 300);
		}
		this.alt.resolve(promise);
	}
}

export default ProjectActions;
