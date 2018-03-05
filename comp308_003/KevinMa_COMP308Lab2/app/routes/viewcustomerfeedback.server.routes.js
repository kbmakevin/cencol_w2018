module.exports = (app) => {
    const customers = require('../controllers/customers.server.controller');
    const viewcustomerfeedback = require('../controllers/viewcustomerfeedback.server.controller');

    app.route('/viewcustomerfeedback')
        .get(
            customers.list,
            viewcustomerfeedback.render
        );

    // in express, adding a colon before a substring in a route definition means that this substring will be handled as a request parameter
    app.route('/viewcustomerfeedback/:email')
        .get(customers.read)
        .put(customers.update)
        .delete(customers.delete);

    // define a middleware to be executed before any other middleware that uses the parameter
    app.param('email', customers.customerByEmail);
};