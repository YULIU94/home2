import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import { WebsiteService } from '../../../services/website.service.client';
import {User} from '../../../models/user.model.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  userId: string;
  user: User;
  username: String;


  constructor(private userService: UserService, private activatedRoute: ActivatedRoute,
              private websiteService: WebsiteService, private router: Router) { }

  updateUser(email: String, firstName: String, lastName: String) {
    const newUser = this.user;

    newUser.firstname = firstName;
    newUser.lastname = lastName;
    newUser.email = email;

    this.userService.updateUser(newUser)
      .subscribe((status) => {
        console.log(status);
      });
  }

  deleteUser() {
    this.userService.deleteUser(this.userId)
      .subscribe((user) => {
        this.router.navigate(['login']);
      });
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['userId'];
        }
      );
    // this.user = this.userService.findUserById(this.userId);
    this.userService.findUserById(this.userId)
      .subscribe((user: User) => {
        console.log(user);
        this.user = user;
        this.username = user.username;
      });
  }

}
