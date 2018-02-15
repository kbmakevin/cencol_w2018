// Create a new 'render' controller method
exports.display = function(req, res) {
	// Use the 'response' object to render the 'index' view with a 'title' property
	res.render('comp308', {
		message: 'Interactive Exercise 3 in COMP308'
	});
};
