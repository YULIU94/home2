import { Component, OnInit } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  userId: String;
  websites = [{}];
  websiteId: String;

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

  // Navigation of user
  toProfile() {
    this.router.navigate(['profile', this.userId]);
  }

  // Navigation of website
  toWebsiteList( ) {
    this.router.navigate(['profile', this.userId, 'website']);
  }

  toNewWebsite() {
    this.router.navigate(['profile', this.userId, 'website', 'new']);
  }

  // Navigation of page
  toNewPage() {
    this.router.navigate(['profile', this.userId, 'website', this.websiteId, 'page', 'new']);
  }



  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['userId'];
          this.websiteId = params['wid'];
        }
      );
    this.websites = this._websiteService.findWebsitesByUser(this.userId);
  }
}
