// load the module dependencies
const express = require('express');
const config = require('./config');
const session = require('express-session');
const bodyParser = require('body-parser');

module.exports = () => {
    // create a new express app
    let app = express();

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

    // use the body-parser middleware functions; it allows us to access request body under the req.body property
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    /**
     * app.set(name, value)
     * sets env var that express will use in its configuration
     */
    // set the application view engine and 'views' folder
    app.set('views', './app/views');
    app.set('view engine', 'ejs');

    // load the routing files, passing in the express application as an argument
    require('../app/routes/index.server.routes.js')(app);
    require('../app/routes/signup.server.routes.js')(app);
    require('../app/routes/thankyou.server.routes.js')(app);
    require('../app/routes/viewcustomerfeedback.server.routes.js')(app);

    // serving static files
    // NOTE: order matters here, if static files above routes, HTTP req would look in static files folder first before routes; this would make responses a lot slower as it would have to wait for a filesystem I/O operation
    app.use(express.static('./public'));

    // return the express application instance
    return app;
};