import React from 'react';
import { Link } from 'react-router';

/**
 * Navigation component for the app
 * Info: If you declare a <Link> component, for which no route has been defined,
 * react-router will throw an error.
 * @class NavigationComponent
 */
const Navigation = React.createClass({
	render() {
		return (
			<ul>
				<Link to='app'>
					<li>Home</li>
				</Link>
				<Link to='project'>
					<li>Project</li>
				</Link>
			</ul>
		);
	}
});

export default Navigation;
