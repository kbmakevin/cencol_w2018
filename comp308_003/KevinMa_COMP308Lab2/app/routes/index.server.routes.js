/**
 * 
 * @file        index.server.routes.js
 * @description defines the routes for the login/home component
 * @author      Kevin Ma
 * @date        2018.03.06
 * 
 */

/**
 * This uses CommonJS module pattern to export a single module function
 * This function takes an express obj as arg
 * Then it requires the index controller and uses its render() method as a middleware to different VERB requests made to specified paths
 * @param {Express} app 
 */
module.exports = (app) => {
    const customers = require('../controllers/customers.server.controller');
    const index = require('../controllers/index.server.controller');
    const actionresult = require('../controllers/actionresult.server.controller');

    /**
     * app.route(path).VERB([callback...], callback)
     * allows us to specify multiple HTTP verbs for one path
     */
    // NOTE: we do app.post here because we are submitting the form via POST request to /, not a get of feedback!
    app.route('/')
        .get(index.render)
        .post(
            customers.findCustomerByEmail,
            customers.authenticateCustomer,
            actionresult.render,
    );

    // POOR DESIGN - remember not  to do this next time :)
    // ---
    // app.route('/:email')
    //     .get(
    //         // customers.read,
    //         // (req, res, next) => {
    //         //     // console.log('inindex route')
    //         //     // console.log('found customer email: ' + req.email);
    //         //     // console.log('found customer password: ' + req.password);

    //         //     // console.log('user entered password: ' + req.session.inputPassword);
    //         //     // next()
    //         // },
    //         customers.authenticateCustomer,
    //         actionresult.render,

    //         // (req, res, next) => {
    //         //     console.log('in this method')
    //         //     console.log('req.actionResult is: ' + req.actionResult)
    //         //     actionresult.render

    //         //     // if (req.actionResult == 'Success') {
    //         //     //     console.log('going to render feedback now')
    //         //     //     next()
    //         //     // }
    //         //     // else {
    //         //     //     console.log('going to render actionresult now')
    //         //     //     actionresult.render
    //         //     // }
    //         // },
    //         feedback.render
    //     )
    //     .post(
    //         feedback.create,
    //         // (req, res, next) => {
    //         //     if (req.actionResult == 'Success') {
    //         //         next()
    //         //     }
    //         //     actionresult.render
    //         // },
    //         thankyou.render
    //     );

    // // define a middleware to be executed before any other middleware that uses the parameter
    // app.param('email', customers.customerByEmail);
}