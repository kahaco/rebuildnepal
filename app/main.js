var React = require('react');
var router = require('./router');

/**
 * Boot it up
 */
router.run((Handler, state) => {
	React.render(<Handler {...state}/>, document.body);
});
