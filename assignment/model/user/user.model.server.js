var mongoose = require('mongoose');
var UserSchema = require('./user.schema.server');
// enable switching database swiftly.
var UserModel = mongoose.model("UserModel", UserSchema);

UserModel.createUser = createUser;
UserModel.findAllUsers = findAllUsers;
UserModel.findUserById = findUserById;
UserModel.findUserByCredentials = findUserByCredentials;
UserModel.updateUser = updateUser;
UserModel.deleteUser = deleteUser;


module.exports = UserModel;

function findUserByCredentials(username, password){
  return UserModel.findOne({username : username, password : password});
}

function createUser(user){
  UserModel.create(user, function (err, doc) {
    console.log(err);
    console.log(doc);
  });
}

function findAllUsers(){
  UserModel.find(user, function (err, docs) {
    console.log(docs);
  });
}

function findUserById(userId){
  return UserModel.findById(userId);
}

function updateUser(userId) {

}

function deleteUser(userId) {

}


