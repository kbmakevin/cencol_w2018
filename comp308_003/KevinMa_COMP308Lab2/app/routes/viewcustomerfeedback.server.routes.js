module.exports = (app) => {
    const customers = require('../controllers/customers.server.controller');

    app.route('/customers')
        .get(customers.list)

    // in express, adding a colon before a substring in a route definition means that this substring will be handled as a request parameter
    app.route('/customers/:email')
        .get(customers.read)

    // define a middleware to be executed before any other middleware that uses the parameter
    app.param('email', customers.customerByEmail);
};