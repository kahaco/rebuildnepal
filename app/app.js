var React = require('react');
var { RouteHandler, Link } = require('react-router');
var { PropTypes } = React;
var Navigation = require('./components/navigation');

/**
 * App component which houses all the child routes.
 * @class AppComponent
 */
var App = React.createClass({
	propTypes: {
		params: PropTypes.object.isRequired,
		query: PropTypes.object.isRequired
	},

	render() {
		return (
			<div>
				<h1>Rebuild Nepal</h1>
					<Navigation />
					<RouteHandler {...this.props} />
			</div>
		);
	}
});

module.exports = App;
