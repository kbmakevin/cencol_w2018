// Load the 'express' module
const express = require('express');

// Create a new Express application instance
const app = express();

// Mount a new middleware function
app.get('/', function(req, res) {
	// Use the 'response' object to send a respone
    res.send('Hello World From Route in plain text');
    
});

// Mount a new middleware function
app.use('/hello', function (req, res) {
    // Use the 'response' object to send a respone
    res.send('<h2>Hello World in HTML</h2>');
    
});

// Mount a new middleware function
app.use('/goodbye', function (req, res) {
    // Use the 'response' object to send a respone
    res.send({ greeting: 'Goodbye World in json' });
});

// Mount a new middleware function
app.use('/hi', function (req, res) {
    // Use the 'response' object to send a respone
    res.send('Hi World');
});
//
//to load the files that are in the public directory
app.use(express.static('public'));
//specify views folder
app.set('views', 'app/views');
//specify the view engine
app.set('view engine', 'ejs')
// render the loginview when a request is made to path /login
app.use('/login', function (req, res) {
    // Use the 'response' object to render a view
    res.render('loginview', { //pas values to ejs view
        loginMessage: "Please login to use the app:",
    });
});

// Use the Express application instance to listen to the '3000' port
app.listen(3000);

// Log the server status to the console
console.log('Server running at http://localhost:3000/');

// Use the module.exports property to expose our Express application instance for external usage
module.exports = app;