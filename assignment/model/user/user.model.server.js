var mongoose = require('mongoose');
var UserSchema = require('./user.schema.server');
// enable switching database swiftly.
var UserModel = mongoose.model("UserModel", UserSchema);
var api = {
  findUserByFacebookId: findUserByFacebookId,
};

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
  return UserModel.find({});
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
  return UserModel.remove({_id: userId}, function (err) {
    if (err) return handleError(err);
  });
}

function findUserByFacebookId(facebookId) {
  return UserModel.findOne({'facebook.id': facebookId});
}


