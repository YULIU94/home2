import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {User} from '../models/user.model.client';
@Injectable()

export class UserService   {
  users: User[];

  constructor() {
    this.users = [
      new User('123', 'alice', 'alice'),
      new User('234', 'bob', 'bob'),
      new User('345', 'charlie', 'charlie'),
      new User('456', 'jannunzi', 'jannunzi')
    ];
  }


  api = {
    'createUser' : this.createUser,
    'findUserById' : this.findUserById
  };

  createUser(user: any) {
    user._id = Math.random();
    this.users.push(user);
    return user;
  }

  findUserById(userId: string) {
    for (let x = 0; x < this.users.length; x++){
      if (this.users[x]._id === userId) {
        return this.users[x];
      }
    }
  }

  findUserByCredentials(username, password) {
    console.log('service' + username);
    console.log(password);
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x].username === username && this.users[x].password === password) {
        return this.users[x];
      }
    }
  }

  findUserByUsername(username: string) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x].username === username) {
        return this.users[x];
      }
    }
  }

  updateUser(userId, user) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {
        this.users[x] = user;
      }
    }
  }
  deleteUser(userId) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {
        this.users.splice(x, 1);
      }
    }
  }
}
