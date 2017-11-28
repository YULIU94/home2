const userModel = require('../model/user/user.model.server');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var bcrypt = require("bcrypt-nodejs");

module.exports = function (app) {
  // safety
  var facebookConfig = {
    clientID     : 'process.env.FB_CLIENT_ID_WAM',
    clientSecret : 'process.env.FB_CLIENT_SECRET_WAM',
    callbackURL  : 'process.env.FB_CALL_BACK_URL_WAM'
  };
  // const passport = require('passport');
  // const LocalStrategy = require('passport-local').Strategy;

  passport.use(new LocalStrategy(localStrategy)); // tell passport to use local strategy.
  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);
  passport.use(new LocalStrategy(localStrategy));
  passport.use(new FacebookStrategy(facebookConfig, facebookStrategy));

  app.post('/api/user', createUser);
  // app.get('/api/user', findUserByUsername);
  app.get('/api/user', findUserByCredentials);
  app.get('/api/user/:userId', findUserById);
  app.put('/api/user/:userId', updateUser);
  app.delete('/api/user/:userId', deleteUser);

  // safety
  app.post('/api/register', register);
  app.post('/api/login', passport.authenticate('local'), login);
  app.post('/api/loggedIn', loggedIn);
  app.post('/api/logout', logout);

  // auth with Facebook
  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
      successRedirect: '/assignment/#/profile',
      failureRedirect: '/assignment/#/login'
    }));
  app.get('/facebook/login', passport.authenticate('facebook', {scope : 'email'}));





  function findUsers(req, res) {
    const username = req.query['username'];
    const password = req.query['password'];
    if(username && password) {

      var promise = userModel
        .findUserByCredentials(username, password);
      promise.then(function (user) {
        res.json(user);
        console.log(user);
      });
      return;
    } else if(username) {
      userModel.findUserByUsername(username)
        .then(function (user) {
          res.json(user);

        });
      return;
      // const user = users.find(function (user) {
      //   return user.username === username;
      // });
      // if (user) {
      //   res.json(user);
      // }else{
      //   res.json(null);
      // }
    } else {
      res.json(users);
    }
  }

  function findUserById(req, res) {
    const userId = req.params["userId"];
    userModel.findUserById(userId)
      .then(function (user) {
        res.json(user);
      });
  }

  function findUser(req, res) {
    var username = req.query['username'];
    var password = req.query['password'];
    if(username && password) {

    } else if(username) {
      var user = findUserByUsername(username);
      res.json(user);
    } else {
      res.json(null);
    }
  }

  function findUserByUsername(username) {
    for (let x = 0; x < this.USERS.length; x++) {
      if (USERS[x].username === username) {
        res.json(USERS[x]);
      }
    }
  }

  function createUser(req, res) {

    const id_new = (new Date().getTime()).toString();
    const user = req.body;
    userModel
      .createUser(user)
      .then(function (user) {
        res.json(user);
      });
  }

  function findUserByCredentials(req, res) {
    const username = req.query['username'];
    const password = req.query['password'];

    if (username && password) {
      var promise = userModel.findUserByCredentials(username, password);
      promise.then(function (user) {
        res.json(user);
        console.log(user);
      });

      return;
    }else if(username){
      var promise = userModel.findUserByUsername(username);
      promise.then(function (user) {
        res.json(user);
        console.log(user);
      });
    }else{
      res.json(null);
    }
  }

  function updateUser(req, res) {
    var userId = req.params['userId'];
    var newUser = req.body;
    console.log(newUser);

    userModel
      .updateUser(userId, newUser)
      .then(function (status) {
        res.send(status);
      });
  }

  function deleteUser(req, res) {
    var userId = req.params['userId'];

    userModel
      .deleteUser(userId)
      .then(function () {
        res.json(null);
      });
    }
  };

  // safety
  function serializeUser(user, done) {
    done(null, user);
  }

  function deserializeUser(user, done) {
    userModel
      .findUserById(user._id)
      .then(
        function(user){
          done(null, user);
        },
        function(err){
          done(err, null);
        }
      );
  }

  function register(req, res) {
    var user = req.body;
    user.password = bcrypt.hashSync(user.password);
    userModel
      .createUser(user)
      .then(function(user){
        req.login(user, function(err) {
          res.json(user);
        });
      });
  }

  function login(req, res) {
    res.json(req.user);
  }

  function loggedIn(req, res) {
    res.send(req.isAuthenticated() ? req.user : '0');
  }

  function localStrategy(username, password, done) {
    userModel
      .findUserByUsername(username)
      .then(
        function(user) {
          // ？？？
          if(user.username === username && bcrypt.compareSync(password, user.password)) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        }
      );
  }

function facebookStrategy(token, refreshToken, profile, done) {
  model.userModel
    .findUserByFacebookId(profile.id)
    .then(
      function(user) {
        if(user) {
          return done(null, user);
        } else {
          var names = profile.displayName.split(" ");
          var newFacebookUser = {
            lastName:  names[1],
            firstName: names[0],
            email:     profile.emails ? profile.emails[0].value:"",
            facebook: {
              id:    profile.id,
              token: token
            }
          };
          return model.userModel.createUser(newFacebookUser);
        }
      },
      function(err) {
        if (err) { return done(err); }
      }
    )
    .then(
      function(user){
        return done(null, user);
      },
      function(err){
        if (err) { return done(err); }
      }
    );
}

  function logout(req, res) {
    req.logout();
    res.send(200); //success
  }







// function findUserByCredentials(req, res) {
//   const username = req.query['username'];
//   const password = req.query['password'];
//
//   if (username && password) {
//     for (let i=0; i<USERS.length; i++){
//       if (USERS[i].username === username && USERS[i].password === password){
//         const user = USERS[i];
//         console.log('find user');
//         console.log(user);
//         if (user){
//           res.json(user);
//         } else {
//           res.json(null);
//         }
//       }
//     }
//   }else if(username){
//     if (USERS[i].username === username){
//       const user = USERS[i];
//       console.log('find user');
//       console.log(user);
//       if (user){
//         res.json(user);
//       } else {
//         res.json(null);
//       }
//     }
//   }else{
//     res.json(null);
//   }
// }
