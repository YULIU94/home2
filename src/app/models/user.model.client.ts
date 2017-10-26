export class User {
  _id: String;
  username: String;
  private password: String;
  firstname: String;
  lastname: String;
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
    this.password = password;
  }


}
