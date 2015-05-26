import React from 'react';
import { Link } from 'react-router';
import { Navbar, Nav } from 'react-bootstrap';

/**
 * Navigation component for the app
 * Info: If you declare a <Link> component, for which no route has been defined,
 * react-router will throw an error.
 * @class NavigationComponent
 */
const Navigation = React.createClass({
	render() {
		return (
			<Navbar brand='Rebuild Nepal'>
				<Nav>
					<li>
						<Link to='app' path='/'>
							Home
						</Link>
					</li>
					<li>
						<Link to='project' path='/project'>
							Project
						</Link>
					</li>
			</Nav>
		</Navbar>
		);
	}
});

export default Navigation;
