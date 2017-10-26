module.exports = function (app) {
  app.post('/api/user', createUser);
  // app.get('/api/user', findUserByUsername);
  app.get('/api/user', findUserByCredentials);
  app.get('/api/user/:userId', findUserById);
  app.put('/api/user/:userId', updateUser);
  // app.delete('/api/user/:userId', deleteUser);


  const USERS = require('./user.mock.server');

  function findUsers(req, res) {
    const username = req.query['username'];
    const password = req.query['password'];
    if(username && password) {
      const user = users.find(function (user) {
        return user.username === username && user.password === password;
      });
      if (user) {
        res.json(user);
      }else{
        res.json(null);
      }
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
    const user = USERS.find(function (user) {
      return user._id === userId;
    });
    res.json(user);
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
    const user = {_id: id_new, username: username, email: "", password: password, firstname: "", lastName: ""};
    USERS.push(user);
    res.json(user);
  }

  function findUserByCredentials(req, res) {
    const username = req.query['username'];
    const password = req.query['password'];
    console.log(username);

    if (username && password) {
      const user = USERS.find(function (user) {
        return user.username === username && user.password === password;
      });
      if (user){
        res.json(user);
      } else {
        res.json(null);
      }
    }else if(username){
      const user = USERS.find(function (user) {
        return user.username === username;
      });
      if (user){
        res.json(user);
      } else {
        res.json(null);
      }
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
};
