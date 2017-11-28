/**
 * Created by sesha on 7/27/17.
 */

/* the function is a Java script constructor which will be instantiated from top level server.js */
/* req = parses the req from http, parses and makes it a nice clean object */
// params is part of the request. any variables in the path will be available as a a map in params

module.exports = function (app) {
  var models = require("../assignment/model/models.server");
  require("../assignment/services/website.service.server")(app);
  require("../assignment/services/page.service.server")(app);
  require("../assignment/services/user.service.server")(app);
  require("../assignment/services/widget.service.server")(app);


  // var connectionString = 'mongodb://127.0.0.1:27017/test'; // for local
  var connectionString = "mongodb://localhost/cs5610"; // for local

  console.log(process.env.MLAB_USERNAME_WEBDEV);
  if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely
    var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
    var password = process.env.MLAB_PASSWORD_WEBDEV;
    connectionString = 'mongodb://' + username + ':' + password;
    connectionString += '@ds161551.mlab.com:61551/heroku_gcsl46hk'; // use yours
    console.log('remote');
  }
  console.log('local');

  var mongoose = require("mongoose");
  //mongoose.connect(connectionString);
  mongoose.connect(connectionString, {
    useMongoClient: true
  });




};

