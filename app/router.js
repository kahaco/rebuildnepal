var ReactRouter = require('react-router');
var routes = require('./routes');
var location = history.pushState ? ReactRouter.HistoryLocation :
	ReactRouter.HashLocation;

/**
 * Router Initialise the router
 * @class Router
 */
var router = ReactRouter.create({
	location: location,
	routes: routes
});

module.exports = router;
