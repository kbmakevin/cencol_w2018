﻿// Load the 'connect' module
const connect = require('connect');

// Create a new 'connect' application instance
const app = connect();

// Define a new 'logger' middleware function
const logger = function(req, res, next) {
	// Log request information to the console
	console.log(req.method, req.url);

	// Call the next middleware
	next();
};

// Define a new 'helloWorld' middleware function
const helloWorld = function(req, res, next) {
	// Use the 'response' object to write the 'content-type' response header
	res.setHeader('Content-Type', 'text/plain');

	// Use the 'response' object to write a response body and end the request
	res.end('Hello World');
};

// Define a new 'goodbyeWorld' middleware function
const goodbyeWorld = function(req, res, next) {
	// Use the 'response' object to write the 'content-type' response header
	res.setHeader('Content-Type', 'text/plain');

	// Use the 'response' object to write a response body and end the request
	res.end('Goodbye World');
};

// Configure the 'connect' application instance to use the 'logger' middleware
app.use(logger);

// Mount the 'connect' application instance to use the 'helloWorld' middleware
app.use('/hello', helloWorld);

// Mount the 'connect' application instance to use the 'goodbyeWorld' middleware
app.use('/goodbye', goodbyeWorld);

// Use the 'connect' application instance to listen to the '3000' port
app.listen(3000);

// Log the server status to the console
console.log('Server running at http://localhost:3000/');