/**
 * 
 * @file        viewcustomerfeedback.server.routes.js
 * @description defines the routes for the viewcustomerfeedback component
 * @author      Kevin Ma
 * @date        2018.03.06
 * 
 */

module.exports = (app) => {
    const customers = require('../controllers/customers.server.controller');
    const viewcustomerfeedback = require('../controllers/viewcustomerfeedback.server.controller');

    app.route('/viewcustomerfeedback')
        .get(
            // customers.list,
            viewcustomerfeedback.render
        )
        .post(
            customers.list,
            viewcustomerfeedback.render
        )

    // POOR DESIGN - remember not  to do this next time :)
    // ---
    // // in express, adding a colon before a substring in a route definition means that this substring will be handled as a request parameter
    // app.route('/viewcustomerfeedback/:email')
    //     .get(customers.read)
    //     .put(customers.update)
    //     .delete(customers.delete);

    // // define a middleware to be executed before any other middleware that uses the parameter
    // app.param('email', customers.customerByEmail);
};