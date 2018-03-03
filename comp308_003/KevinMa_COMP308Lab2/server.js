// often, the NODE_ENV environment variable is not properly set
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

let configureExpress = require('./config/express');

let app = configureExpress();
app.listen(3000);
module.exports = app;

console.log('Server running at http://localhost:3000/');