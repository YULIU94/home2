export class User {
  _id: String;
  username: String;
  private _password: String;
  firstName: String;
  lastName: String;
  email: String;
  // address; string;
  // constructor(_id, username, password) {
  //   this._id = _id;
  //   this.username = username;
  //   this.password = password;
  // }

  constructor(_id, username, password) {
    this._id = _id;
    this.username = username;
    this._password = password;
  }


}
