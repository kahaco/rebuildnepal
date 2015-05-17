var React = require('react');
var { Route, DefaultRoute } = require('react-router');
var App = require('./app');
var PledgePage = require('./pages/pledgePage');
var ProjectPage = require('./pages/projectPage');

/**
 * Top level routes for the application. Add routes for additional
 * pages here. Not sure about nested routes but we can figure that
 * out as we go along as it is supported. Also look in (./components/navigation.js)
 * For more info: http://rackt.github.io/react-router/
 */
var routes = (
	<Route name='home' path='/' handler={ App }>
		<DefaultRoute name='pledgePage' handler={ PledgePage } />
		<Route name='project' path='project' handler={ ProjectPage } />
	</Route>
);

module.exports = routes;
