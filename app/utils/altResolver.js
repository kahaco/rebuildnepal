import React from 'react';
import Iso from 'iso';
import ErrorPage from 'pages/error';

class AltResolver {
	constructor() {
		this._toResolve = [];
	}

	resolve(promise, later = false) {
		if (process.env.BROWSER && !later) {
			return new Promise(promise);
		} else {
			this._toResolve.push(promise);
		}
	}

	mapPromises() {
		return this._toResolve.map((promise) => new Promise(promise));
	}

	async render(Handler, flux, force = false) {
		if (process.env.Browser && !force) {
			return null;

		} else {

			let content;

			try {

				React.renderToString(React.createElement(Handler, { flux }));
				const promises = this.mapPromises();
				await Promise.all(promises);
				const app = React.renderToString(React.createElement(Handler, { flux }));
				content = { body: Iso.render(app, flux.flush()) };
			} catch (err) {
				console.log(err);
				const app = React.renderToString(React.createElement(ErrorPage));
				content = { body: Iso.render(app, flux.flush()) }
			}
			return content;
		}
	}
}

export default AltResolver;
