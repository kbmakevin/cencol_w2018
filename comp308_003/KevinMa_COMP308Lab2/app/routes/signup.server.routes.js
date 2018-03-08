/**
 * 
 * @file        signup.server.routes.js
 * @description defines the routes for the signup component
 * @author      Kevin Ma
 * @date        2018.03.07
 * 
 */

// 2018.03.07 - 18:20:37
let router = require('express').Router();

let signup = require('../controllers/signup.server.controller');
let customers = require('../controllers/customers.server.controller');
let actionresult = require('../controllers/actionresult.server.controller');

// 2018.03.07 - 18:21:22
router.route('/')
    .get(signup.render)
    .post(
        customers.create,
        actionresult.render
    );

// 2018.03.07 - 18:20:40
module.exports = router;