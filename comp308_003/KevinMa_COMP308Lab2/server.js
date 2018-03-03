// often, the NODE_ENV environment variable is not properly set
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const configureExpress = require('./config/express');
const configureMongoose = require('./config/mongoose');

// NOTE: must load Mongoose config before any other configurations, this is to let the other moduels be able to use the Mongoose models without loading them themselves; remember that JavaScript loads all vars into one global namespace, that was the reason node.js had to solve it via CommonJS modules
let db = configureMongoose();
let app = configureExpress();
app.listen(3000);
module.exports = app;

console.log('Server running at http://localhost:3000/');