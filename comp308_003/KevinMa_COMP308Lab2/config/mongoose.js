/**
 * 
 * @file        mongoose.js
 * @description this file configures mongoose and registers our different models
 * @author      Kevin Ma
 * @date        2018.03.06
 * 
 */

const config = require("./config");
const mongoose = require("mongoose");

module.exports = () => {
    let db = mongoose.connect(config.db);

    // register the Customer model
    require('../app/models/customer.server.model');

    return db;
}