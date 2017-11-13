var mongoose = require('mongoose');
var connectionString = "";
// var connectionString = 'mongodb://127.0.0.1:27017/test'; // for local

if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely
  var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
  var password = process.env.MLAB_PASSWORD_WEBDEV;
  connectionString = 'mongodb://' + username + ':' + password;
  connectionString += '@ds161551.mlab.com:61551/heroku_gcsl46hk'; // use yours
}

// var db = mongoose.connect('mongodb://localhost/cs5610');
var db = mongoose.connect(connectionString, {userMongoClient: true });
module.exports = db;
