/**
 * 
 * @file        feedback.server.routes.js
 * @description defines the routes for the feedback component
 * @author      Kevin Ma
 * @date        2018.03.07
 * 
 */

// 2018.03.07 - 18:22:59
let router = require('express').Router();

let feedback = require('../controllers/feedback.server.controller');
let actionresult = require('../controllers/actionresult.server.controller');

// 2018.03.07 - 18:23:23
router.route('/')
    .get(
        feedback.render
    )
    .post(
        feedback.create,
        actionresult.render
    );

// 2018.03.07 - 18:23:10
module.exports = router;