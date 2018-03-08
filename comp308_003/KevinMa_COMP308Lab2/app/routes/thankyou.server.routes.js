/**
 * 
 * @file        thankyou.server.routes.js
 * @description defines the routes for the thankyou component
 * @author      Kevin Ma
 * @date        2018.03.07
 * 
 */

// 2018.03.07 - 18:25:27
let router = require('express').Router();

let thankyou = require('../controllers/thankyou.server.controller');

router.get('/', thankyou.render);

// 2018.03.07 - 18:25:42
module.exports = router;