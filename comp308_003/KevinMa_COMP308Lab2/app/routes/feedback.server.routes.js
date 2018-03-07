/**
 * 
 * @file        feedback.server.routes.js
 * @description defines the routes for the feedback component
 * @author      Kevin Ma
 * @date        2018.03.06
 * 
 */

module.exports = (app) => {
    const feedback = require('../controllers/feedback.server.controller');
    const actionresult = require('../controllers/actionresult.server.controller');

    app.route('/feedback')
        .get(
            feedback.render
        )
        .post(
            feedback.create,
            actionresult.render
        );

};