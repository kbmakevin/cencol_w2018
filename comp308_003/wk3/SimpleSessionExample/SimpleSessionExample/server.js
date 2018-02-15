//load modules and initialize corrresponding objects
var express = require('express');
var session = require('express-session');
var path = require('path');
var app = express();
var port = 3000;
//
//initialize the session 
app.use(session({
    //a session is uninitialized when it is new but not modified
    //force a session that is "uninitialized" to be saved to the store
    saveUninitialized: true,
    //forces the session to be saved back to the session store
    //even if the session was never modified during the request
    resave: true,
    secret: 'comp308'
}));
//
app.set('port', port);
app.set('views', 'app/views');
app.set('view engine', 'ejs');
//
// render the index page when a request is made to path /
app.get('/', function (req, res) {
    //store page name in session object
    req.session.pageVisited = "Home Page";
    //res.send('This is home page');
    //res.end();
    res.render('index', { //pas values to ejs view
        pageName: req.session.pageVisited
    });

});
//
app.get('/course', function (req, res) {

    if (req.session.pageVisited) {
        //retrieve the name of page visited from session object
        var previousPageVisited = req.session.pageVisited;
        //store page name in session object
        req.session.pageVisited = "Course Page";
        res.render('course', { //pas values to ejs view
            pageName: previousPageVisited
        });
    }
    
});

app.get('/about', function (req, res) {
    if (req.session.pageVisited) {
        //retrieve the name of page visited from session object
        var previousPageVisited = req.session.pageVisited;
        //store page name in session object
        req.session.pageVisited = "About Page";
        res.render('about', { //pas values to ejs view
            pageName: previousPageVisited
        });
    }
});

var server = app.listen(port, function () {
    console.log('Listening on port ' + server.address().port)
});
