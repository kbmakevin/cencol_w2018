// express.js file is where we configure our Express application
// Load the module dependencies
let config = require('./config');
let express = require('express');
let morgan = require('morgan');
let compress = require('compression');
let bodyParser = require('body-parser');
let methodOverride = require('method-override');
let session = require('express-session');

// create a new express application isntance
module.exports = function () {
    // create the express application object
    let app = express();
    // the process.env property allows you to access predefined environment variables such as NODE_ENV
    // use the 'NODE_ENV' variable to activate the 'morgan' logger or 'compress' middleware
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    } else if (process.env.NODE_ENV === 'production') {
        app.use(compress());
    }
    // Use the 'body-parser' and 'method-override' middleware functions
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(bodyParser.json()); // use middleware that only parses json
    app.use(methodOverride("_method")); // use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.
    //saveUninitialized - forces a session that is "uninitialized" to be saved to the store
    //resave - forces the session to be saved back to the session store
    // Configure the 'session' middleware
    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }));
    //Configure Express to use EJS module as the default template engine
    // Set the application view engine and 'views' folder
    app.set('views', './app/views');
    app.set('view engine', 'ejs');
    app.engine('html', require('ejs').renderFile);
    //bootstrap the app using the controller and routing modules

    // load the routing files
    require('../app/routes/tasks.server.routes.js')(app);

    //The express.static() middleware takes one argument 
    //to determine the location of the static folder
    //Configure static file serving
    app.use(express.static('./public'));
    return app;

};