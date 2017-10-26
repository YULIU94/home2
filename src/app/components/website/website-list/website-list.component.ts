import { Component, OnInit } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Website} from '../../../models/website.model.client';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {

  userId: String;
  websites = [];
  websiteId: String;
  websiteName: String;

  constructor(private _websiteService: WebsiteService, private activatedRoute: ActivatedRoute,
              private router: Router) {}

  findPage(website) {
    if (website) {
      this.router.navigate(['profile', this.userId, 'website', website['_id'], 'page']);
    }
  }

  findEditWebsite(website) {
    if (website) {
      this.router.navigate(['profile', this.userId, 'website', website['_id'] ]);
    }
  }

  selectWebsite(websiteId: String) {
    this._websiteService.findWebsiteById(this.userId, websiteId)
      .subscribe((website) => {
        this.websiteName = website.name;
      });
  }

  deleteWebsite(websiteId: String) {
    this._websiteService.deleteWebsite(this.userId, websiteId)
      .subscribe((websites) => {
        this.websites = websites;
      });
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['userId'];
          console.log(params);
        }
      );

    this._websiteService.findWebsitesForUser(this.userId)
      .subscribe((websites) => {
        this.websites = websites;
        console.log(this.websites);
      });
  }

}
