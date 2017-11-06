var mongoose = require('mongoose');
var UserSchema = require('./user.schema.server');
// enable switching database swiftly.
var UserModel = mongoose.model("UserModel", UserSchema);

UserModel.createUser = createUser;
UserModel.findAllUsers = findAllUsers;
UserModel.findUserById = findUserById;
UserModel.findUserByUsername = findUserByUsername;
UserModel.findUserByCredentials = findUserByCredentials;
UserModel.updateUser = updateUser;
UserModel.deleteUser = deleteUser;


module.exports = UserModel;

function findUserByCredentials(username, password){
  return UserModel.findOne({username : username, password : password});
}

function createUser(user){
  return UserModel.create(user);
}

function findAllUsers(){
  UserModel.find(user, function (err, docs) {
    console.log(docs);
  });
}

function findUserById(userId){
  return UserModel.findById(userId);
}

function findUserByUsername(username) {
  return UserModel.findOne({username : username});
}

function updateUser(userId, user) {
  return UserModel.update({_id: userId}, {$set: {email: user.email, firstName: user.firstname, lastName: user.lastname}});
}

function deleteUser(userId) {

}


