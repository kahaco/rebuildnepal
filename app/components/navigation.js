var React = require('react');
var { Link } = require('react-router');

/**
 * Navigation component for the app
 * @class NavigationComponent
 */
var Navigation = React.createClass({
	render() {
		return (
			<ul>
				<Link to='home'>
					<li>Home</li>
				</Link>
				<Link to='project'>
					<li>Project</li>
				</Link>
			</ul>
		);
	}
});

module.exports = Navigation;
