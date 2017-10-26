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

  user: User;
  constructor(private userService: UserService,
              private router: Router) { }

  registered(username, password, verifypassword) {
    if (username.length === 0 || password.length === 0 || verifypassword.length === 0) {
      alert('missed information!');
    } else if (!(password === verifypassword)) {
      alert('password not equal!');
    } else {
      if (this.userService.findUserByCredentials(username, password)) {
        alert('user exists!');
      } else {
        alert('successfully registered!');
        // randomly assign userid
        const user_id_new = Math.random();
        const newUser: User = new User(user_id_new, username, password);
        this.userService.createUser(newUser)
          .subscribe((user) => {
            this.router.navigate(['/login']);
          });
      }
    }
  }

  ngOnInit() {

  }

}
