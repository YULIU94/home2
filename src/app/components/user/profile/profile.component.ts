import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import { WebsiteService } from '../../../services/website.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  userId: string;
  user = {};
  username: string;


  constructor(private userService: UserService, private activatedRoute: ActivatedRoute,
              private websiteService: WebsiteService, private router: Router) { }

  findWebsite () {
    const websites = this.websiteService.findWebsitesByUser(this.userId);
    if (websites) {
      for (const website of websites){
        console.log(website.name);
        this.router.navigate(['profile', this.userId, 'website']);
      }
    }
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['userId'];
        }
      );
    this.user = this.userService.findUserById(this.userId);
    this.username = this.user['username'];
  }

}
