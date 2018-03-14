/**
 * 
 * @file        mongoose.js
 * @description this file configures mongoose and registers our different models
 * @author      Kevin Ma
 * @date        2018.03.07
 * 
 */

let config = require("./config");
let mongoose = require("mongoose");

// 2018.03.07 - 18:12:22
mongoose.connect(config.db);

// 2018.03.07 - 18:12:28
let mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console, 'connection error:'));
mongoDB.once('open', () => {
    console.log('Connected to MongoDB...');
});

module.exports = mongoDB;