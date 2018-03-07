/**
 * 
 * @file        signup.server.routes.js
 * @description defines the routes for the signup component
 * @author      Kevin Ma
 * @date        2018.03.06
 * 
 */

module.exports = (app) => {
    const signup = require('../controllers/signup.server.controller');
    const customers = require('../controllers/customers.server.controller');
    const actionresult = require('../controllers/actionresult.server.controller');

    app.route('/signup')
        .get(signup.render)
        .post(
            customers.create,
            actionresult.render
        );
}