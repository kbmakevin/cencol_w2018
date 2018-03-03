// load the module dependencies
let express = require('express');
let config = require('./config');
let session = require('express-session');
let bodyParser = require('body-parser');

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

    // set the application view engine and 'views' folder
    app.set('views', './app/views');
    app.set('view engine', 'ejs');

    // load the 'index' routing file, passing in the express application as an argument
    require('../app/routes/index.server.routes.js')(app);

    // serving static files
    app.use(express.static('./public'));

    // return the express application instance
    return app;
};