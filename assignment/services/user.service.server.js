module.exports = function (app) {
  app.post('/api/user', createUser);
  // app.get('/api/user', findUserByUsername);
  app.get('/api/user', findUserByCredentials);
  app.get('/api/user/:userId', findUserById);
  app.put('/api/user/:userId', updateUser);
  app.delete('/api/user/:userId', deleteUser);

  var userModel = require('../model/user/user.model.server');

  const USERS = require('./user.mock.server');

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
      const user = users.find(function (user) {
        return user.username === username;
      });
      if (user) {
        res.json(user);
      }else{
        res.json(null);
      }
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
    // const user = USERS.find(function (user) {
    //   return user._id === userId;
    // });
    // res.json(user);
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
    const username = req.params['username'];
    const password = req.params['password'];

    const id_new = (new Date().getTime()).toString();
    const user = req.body;
    user._id = id_new;
    console.log(USERS.length);
    USERS.push(user);
    console.log(USERS.length);
    console.log(USERS);
    res.json(user);
  }

  function findUserByCredentials(req, res) {
    const username = req.query['username'];
    const password = req.query['password'];

    // console.log('username');
    // console.log('password');
    // console.log(USERS);

    if (username && password) {
      var promise = userModel.findUserByCredentials(username, password);
      promise.then(function (user) {
        res.json(user);
        console.log(user);
        //
      });

      return;
      // for (let i=0; i<USERS.length; i++){
      //   if (USERS[i].username === username && USERS[i].password === password){
      //     console.log('find user');
      //     console.log(USERS[i]);
      //     res.json(USERS[i]);
      //   }
      // }
      //   res.json(null);
    }else if(username){
      const user = USERS.find(function (user) {
        return user.username === username;
      });
      if (user){
        res.json(user);
      } else {
        res.json(null);
      }
    }else{
      res.json(null);
    }
  }

  function updateUser(req, res) {
    var userId = req.params['userId'];
    var newUser = req.body;

    for (let x = 0; x < USERS.length; x++) {
      if (USERS[x]._id === userId ) {
        USERS[x] = newUser;
        res.json(newUser);
        return;
      }
    }
  }

  function deleteUser(req, res) {
    var userId = req.params['userId'];

    for (let x = 0; x < USERS.length; x++) {
      if (USERS[x]._id === userId ) {
        USERS.splice(x, 1);
        console.log(USERS);
        res.json(null);
        return;
      }
    }
  }
};


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
