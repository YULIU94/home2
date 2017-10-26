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

    newUser.firstName = firstName;
    newUser.lastName = lastName;
    newUser.email = email;

    this.userService.updateUser(this.userId, newUser)
      .subscribe((user) => {
        this.user = user;
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
        this.user = user;
        this.userId = user._id.toString();
        this.username = user.username;
      });
  }

}
