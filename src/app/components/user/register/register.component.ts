import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/user.model.client';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: String;
  password: String;
  constructor(private userService: UserService,
              private router: Router) { }

  registered(username, password, verifypassword) {
    this.username = username;
    this.password = password;
    if (username.length === 0 || password.length === 0 || verifypassword.length === 0) {
      alert('missed information!');
    } else if (!(password === verifypassword)) {
      alert('password not equal!');
    } else {
      this.userService.findUserByUsername(username)
        .subscribe((user) => {
          console.log('user:');
          console.log(user);
          if (user) {
            alert('user exists!!!');
          } else if (user === null ) {
            alert('successfully registered!');
            // randomly assign userid
            const newUser = {
              username:  this.username,
              password:  this.password
            };
            this.userService.createUser(newUser)
              .subscribe((userFromServer) => {
                console.log(userFromServer);
              });
            console.log('newuser:' + newUser);
            this.router.navigate(['/login']);
          }
        });
    }
  }

  ngOnInit() {

  }

}
