import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {User} from '../models/user.model.client';
@Injectable()

export class UserService   {
  users: User[];

  constructor(private http: Http) {
    // this.users = [
    //   new User('123', 'alice', 'alice'),
    //   new User('234', 'bob', 'bob'),
    //   new User('345', 'charlie', 'charlie'),
    //   new User('456', 'jannunzi', 'jannunzi')
    // ];
  }


  api = {
    'createUser' : this.createUser,
    'findUserById' : this.findUserById
  };

  createUser(user: User) {
    const url = 'http://localhost:3100/api/user';
    return this.http.post(url, user)
      .map((response: Response) => {
        return response.json();
      });
  }

  findUserById(userId: String) {
    const url = 'http://localhost:3100/api/user/' + userId;
    return this.http.get(url)
      .map((response: Response ) => {
        return response.json();
      });
    // for (let x = 0; x < this.users.length; x++){
    //   if (this.users[x]._id === userId) {
    //     return this.users[x];
    //   }
    // }
  }

  findUserByCredentials(username, password) {
    const url = 'http://localhost:3100/api/user?username=' + username + '&password=' + password;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  findUserByUsername(username: string) {
    // this.http.get("/api/user?username="+username).subscribe();


    // for (let x = 0; x < this.users.length; x++) {
    //   if (this.users[x].username === username) {
    //     return this.users[x];
    //   }
    // }
  }

  updateUser(userId, user) {
    // for (let x = 0; x < this.users.length; x++) {
    //   if (this.users[x]._id === userId) {
    //     this.users[x] = user;
    //   }
    // }
    const url = 'http://localhost:3100/api/user/' + userId;
    return this.http.put(url, user)
      .map((response: Response) => {
        return response.json();
      });
  }

  deleteUser(userId) {
    // for (let x = 0; x < this.users.length; x++) {
    //   if (this.users[x]._id === userId) {
    //     this.users.splice(x, 1);
    //   }
    // }
    const url = 'http://localhost:3100/api/user/' + userId;
    return this.http.delete(url)
      .map((response: Response) => {
        return response.json();
      });
  }
}
