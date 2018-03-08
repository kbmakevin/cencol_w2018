/**
 * 
 * @file        viewcustomerfeedback.server.routes.js
 * @description defines the routes for the viewcustomerfeedback component
 * @author      Kevin Ma
 * @date        2018.03.07
 * 
 */

// 2018.03.07 - 18:26:30
let router = require('express').Router();


let customers = require('../controllers/customers.server.controller');
let viewcustomerfeedback = require('../controllers/viewcustomerfeedback.server.controller');

router.route('/')
    .get(
        // customers.list,
        viewcustomerfeedback.render
    )
    .post(
        customers.list,
        viewcustomerfeedback.render
    )

// 2018.03.07 - 18:26:35
module.exports = router;