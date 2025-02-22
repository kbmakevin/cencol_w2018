let express = require('express');
let path = require('path'); // built-in node module
//let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

// import "mongoose"
let mongoose = require('mongoose');

// URI
let DB = require('./db');

// point Mongoose to connect to the URI specified
// specifies default db uri var, otherwise use environment var to get  db connection uri
mongoose.connect(process.env.URI || DB.URI);

let mongoDB = mongoose.connection;

mongoDB.on('error', console.error.bind(console, 'connection error:'));
mongoDB.once('open', () => {
  console.log('Connected to MongoDB');
});


let index = require('../app/routes/index'); // define the main route
let games = require('../app/routes/games'); // define the game route

let app = express();

// view engine setup
app.set('views', path.join(__dirname, '../app/views'));
app.set('view engine', 'ejs'); // view engine type

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../node_modules')));

app.use('/', index); // main routing file
app.use('/games', games); // games routing file

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
