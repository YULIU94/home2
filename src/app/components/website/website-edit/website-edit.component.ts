import { Component, OnInit } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {

  userId: String;
  websites = [{}];

  constructor(private _websiteService: WebsiteService, private activatedRoute: ActivatedRoute,
              private router: Router) {}

  findPage(website) {
    console.log(this.websites);
    console.log(website['_id']);
    if (website) {
      this.router.navigate(['profile', this.userId, 'website', website['_id'], 'page']);
    }
  }

  findEditWebsite(website) {
    if (website) {
      this.router.navigate(['profile', this.userId, 'website', website['_id'] ]);
    }
  }

  toWebsiteList( ) {
    this.router.navigate(['profile', this.userId, 'website']);
  }

  toProfile() {
    this.router.navigate(['profile', this.userId]);
  }

  toNewWebsite() {
    this.router.navigate(['profile', this.userId, 'website', 'new']);
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['userId'];
        }
      );
    this.websites = this._websiteService.findWebsitesByUser(this.userId);
  }

}
