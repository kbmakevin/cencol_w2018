/**
 * 
 * @file        express.js
 * @description this file initializes and configures the express application
 * @author      Kevin Ma
 * @date        2018.03.13
 * 
 */

// load the module dependencies----------------------------------------------------------------------------------------------

// built-in node modules
let express = require('express');

// 2018.03.07 - 17:37:26
let path = require('path');

// installed node modules
// 2018.03.07 - 18:08:22
let favicon = require('serve-favicon');

let session = require('express-session');
let bodyParser = require('body-parser');

// custom modules
let config = require('./config');

// define the routes
// 2018.03.07 - 18:17:50
let indexRoutes = require('../app/routes/index.server.routes');
// 2018.03.13 - 18:46:48
let surveyRoutes = require('../app/routes/surveys.server.routes');

// create a new express app
let app = express();

// configure the session middleware ------------------------------------------------------------------------------------    
// view engine setup
// 2018.03.07 - 18:29:13
app.set('views', path.join(__dirname, '../app/views'));
app.set('view engine', 'ejs'); // view engine type

// 2018.03.07 - 18:30:17
app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')));

// use the body-parser middleware functions; it allows us to access request body under the req.body property
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// static file serving
// 2018.03.07 - 18:33:22
app.use(express.static(path.join(__dirname, '../public')));

// 2018.03.13 - 20:04:44 - need to mount this again for surveys views
app.use('/surveys', express.static(path.join(__dirname, '../public')));

app.use(express.static(path.join(__dirname, '../node_modules')));

// configure the session middleware
/**
 * the session middleware adds a session object to all req obj in ur app
 * 
 * using this sess obj, u can set or get any property that u wish to use in the current session :)!
 */
app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: config.sessionSecret
}));

// load the routing files
// 2018.03.07 - 18:20:04
app.use('/', indexRoutes);
// 2018.03.13 - 18:47:02
app.use('/surveys', surveyRoutes);

// export the express application instance
module.exports = app;