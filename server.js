var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var uriUtil = require('mongodb-uri');

var options = {
    server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
};
//database connection
var mongodbUri = 'mongodb://heroku_app35758595:lv56hiaj41042a2hh58vq9mq6o@ds061621.mongolab.com:61621/heroku_app35758595';
var mongooseUri = uriUtil.formatMongoose(mongodbUri);

mongoose.connect(mongooseUri, options);
var conn = mongoose.connection;

conn.on('error', console.error.bind(console, 'connection error:'));

conn.once('open', function () {
    console.log("Database connected");
});

app.use(express.static(__dirname + '/Public'));
//creating a port for this application
   var port = process.env.PORT || 1234;

   app.listen(port);

   //proving more information of application URL
   console.log('Application running on http://localhost:' + port);
