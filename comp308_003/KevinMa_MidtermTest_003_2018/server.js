/**
 * 
 * @file        server.js
 * @description application manifest
 * @author      Kevin Ma
 * @date        2018.03.13
 * 
 */

// often, the NODE_ENV environment variable is not properly set
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// NOTE: must load Mongoose config before any other configurations, this is to let the other moduels be able to use the Mongoose models without loading them themselves; remember that JavaScript loads all vars into one global namespace, that was the reason node.js had to solve it via CommonJS modules
let db = require('./config/mongoose');
let app = require('./config/express');

app.listen(3000);
module.exports = app;

console.log('Server running at http://localhost:3000/');