/**
 * 
 * @file        config.js
 * @description this file simply loads the correct configuration file according to the process.env.NODE_ENV environment variable.
 * @author      Kevin Ma
 * @date        2018.03.06
 * 
 */

module.exports = require('./env/' + process.env.NODE_ENV + '.js');