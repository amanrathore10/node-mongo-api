var createError = require('http-errors');
var express = require('express');
var path = require('path');
const config = require('./config/config')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser=require('body-parser');
var app = express();
const api = require('./api');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//connect to db
const {MongoManager} = require('./mongo');
mongoManager = new MongoManager(config);
mongoManager.connect();

//creating api route for different models

app.use('/api/v1',api(config));


// catch 404 and forward to error handler

app.use(function(req, res, next) {
  next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  //don't render the error page
  // send status res as json
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
  });

module.exports = app;
