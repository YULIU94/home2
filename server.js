/**
 * Created by sesha on 6/2/17.
 */

// Get the dependencies

const express = require('express');
const path = require('path');
const http = require('http');
const cookieParser = require('cookie-parser');
const session      = require('express-session');
const passport = require('passport');

//install, load, and configure body parser module.
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// passport support
app.use(cookieParser());
// app.use(session({ secret: process.env.SESSION_SECRET }));
// app.use(session({ secret: '123123' }));
app.use(session({
  secret: 'this is the secret',
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());


// Point static path to dist -- For building -- REMOVE
app.use(express.static(path.join(__dirname, 'dist')));

// CORS
app.use(function(req, res, next) {
  // res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  // res.header("Access-Control-Allow-Origin", "https://www.facebook.com");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

const port = process.env.PORT || '3100';
app.set('port', port);
console.log(port);
// const port = '3100' ;
// app.set('port', port);

// Create HTTP server
const server = http.createServer(app);
var mongoose = require('mongoose');

//var serverSide = require("./server/test-mongodb/app");
var serverSide = require("./server/app");
serverSide(app);


// For Build: Catch all other routes and return the index file -- BUILDING
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// app.get('/api/hello', function (req, res) {
//   res.send("Hello!");
// });

server.listen( port , () => console.log('Running'));

// function isOriginAllowed(origin, allowedOrigin) {
//   if (_.isArray(allowedOrigin)) {
//     for(let i = 0; i < allowedOrigin.length; i++) {
//       if(isOriginAllowed(origin, allowedOrigin[i])) {
//         return true;
//       }
//     }
//     return false;
//   } else if (_.isString(allowedOrigin)) {
//     return origin === allowedOrigin;
//   } else if (allowedOrigin instanceof RegExp) {
//     return allowedOrigin.test(origin);
//   } else {
//     return !!allowedOrigin;
//   }
// }
//
// const ALLOW_ORIGIN = [  // 域名白名单
//   'http://localhost:4200',
//   'https://www.facebook.com'
// ];


