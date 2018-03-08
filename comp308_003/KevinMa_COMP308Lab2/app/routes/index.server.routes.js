/**
 * 
 * @file        index.server.routes.js
 * @description defines the routes for the login/home component
 * @author      Kevin Ma
 * @date        2018.03.07
 * 
 */


// 2018.03.07 - 18:17:10
let router = require('express').Router();

let customers = require('../controllers/customers.server.controller');
let index = require('../controllers/index.server.controller');
let actionresult = require('../controllers/actionresult.server.controller');

// 2018.03.07 - 18:19:47
router.route('/')
    .get(index.render)
    .post(
        customers.findCustomerByEmail,
        customers.authenticateCustomer,
        actionresult.render,
);

// 2018.03.07 - 18:19:53
module.exports = router;