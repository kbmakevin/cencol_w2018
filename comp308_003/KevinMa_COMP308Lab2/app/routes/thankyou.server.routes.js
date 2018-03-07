/**
 * 
 * @file        thankyou.server.routes.js
 * @description defines the routes for the thankyou component
 * @author      Kevin Ma
 * @date        2018.03.06
 * 
 */

module.exports = (app) => {
    const thankyou = require('../controllers/thankyou.server.controller');

    app.get('/thankyou', thankyou.render);
}